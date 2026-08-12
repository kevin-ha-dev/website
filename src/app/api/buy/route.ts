import { NextResponse } from "next/server";
import { Resend } from "resend";
import { siteConfig } from "@/lib/siteConfig";

type BuyRequest = {
  name?: string;
  email?: string;
  operation?: string;
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
  let body: BuyRequest;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const operation = body.operation?.trim() ?? "";
  const about = body.about?.trim() ?? "";

  if (!name || !email || !operation || !about) {
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

  const toEmail =
    process.env.BUY_NOTIFICATION_EMAIL || siteConfig.salesEmail;

  const resend = new Resend(apiKey);

  const html = `
    <h2>New ownership inquiry</h2>
    <p><strong>Name and restaurant:</strong> ${escapeHtml(name)}</p>
    <p><strong>Work email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Operation type:</strong> ${escapeHtml(operation)}</p>
    <p><strong>About their kitchen:</strong></p>
    <p style="white-space: pre-wrap;">${escapeHtml(about)}</p>
  `;

  const text = [
    "New ownership inquiry",
    "",
    `Name and restaurant: ${name}`,
    `Work email: ${email}`,
    `Operation type: ${operation}`,
    "",
    "About their kitchen:",
    about,
  ].join("\n");

  try {
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `Ownership inquiry: ${name}`,
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
    console.error("Unexpected error sending ownership inquiry:", err);
    return NextResponse.json(
      { error: "Failed to send request." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
