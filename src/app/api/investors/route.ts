import { NextResponse } from "next/server";
import { Resend } from "resend";
import { siteConfig } from "@/lib/siteConfig";

type InvestorRequest = {
  name?: string;
  email?: string;
  stage?: string;
  about?: string;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  let body: InvestorRequest;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const stage = body.stage?.trim() ?? "";
  const about = body.about?.trim() ?? "";

  if (!name || !email || !stage || !about) {
    return NextResponse.json(
      { error: "All fields are required." },
      { status: 400 }
    );
  }

  if (!EMAIL_REGEX.test(email)) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL;

  if (!apiKey || !fromEmail) {
    console.error(
      "Missing RESEND_API_KEY or RESEND_FROM_EMAIL environment variables."
    );
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 500 }
    );
  }

  // Where the notification lands. Defaults to the public investors inbox, but
  // can be overridden (e.g. point at your Resend signup email while testing
  // before a sending domain is verified).
  const toEmail =
    process.env.INVESTOR_NOTIFICATION_EMAIL || siteConfig.investorsEmail;

  const resend = new Resend(apiKey);

  const html = `
    <h2>New investor request</h2>
    <p><strong>Name and firm:</strong> ${escapeHtml(name)}</p>
    <p><strong>Work email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Investment stage:</strong> ${escapeHtml(stage)}</p>
    <p><strong>About:</strong></p>
    <p style="white-space: pre-wrap;">${escapeHtml(about)}</p>
  `;

  const text = [
    "New investor request",
    "",
    `Name and firm: ${name}`,
    `Work email: ${email}`,
    `Investment stage: ${stage}`,
    "",
    "About:",
    about,
  ].join("\n");

  try {
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `Investor request: ${name}`,
      html,
      text,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send request." },
        { status: 502 }
      );
    }
  } catch (err) {
    console.error("Unexpected error sending investor request:", err);
    return NextResponse.json(
      { error: "Failed to send request." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
