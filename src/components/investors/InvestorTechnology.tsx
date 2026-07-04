import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/shared/FadeIn";
import { PixelFrame } from "@/components/home/PixelFrame";
import {
  abbPartnershipCopy,
  abbPartnershipHighlights,
  abbPartnershipProof,
  abbPressLinks,
} from "@/lib/investorPartnership";

export function InvestorTechnology() {
  const { eyebrow, title, body, image } = abbPartnershipCopy;

  return (
    <section className="section-shell bg-surface-muted">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-12 items-start gap-x-6 gap-y-10 md:gap-x-8 md:items-stretch">
          <FadeIn className="col-span-12 flex flex-col gap-6 md:col-span-5">
            <div>
              <p className="type-eyebrow">{eyebrow}</p>
              <h2 className="type-heading-md mt-2 text-text-primary">{title}</h2>
            </div>
            <p className="type-body max-w-md leading-relaxed">{body}</p>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {abbPartnershipProof.map((item) => (
                <div
                  key={item.label}
                  className="border border-text-primary/10 bg-background px-4 py-2.5"
                >
                  <p className="font-sans text-lg font-bold tracking-tight text-text-primary">
                    {item.value}
                  </p>
                  <p className="type-body-sm mt-0.5">{item.label}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-px border border-text-primary/10 bg-text-primary/10 sm:grid-cols-3">
              {abbPartnershipHighlights.map((highlight) => (
                <div
                  key={highlight.title}
                  className="flex flex-col gap-1.5 bg-surface-muted px-4 py-4"
                >
                  <p className="text-sm font-semibold tracking-tight text-text-primary">
                    {highlight.title}
                  </p>
                  <p className="type-body-sm leading-snug">{highlight.detail}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.08} className="col-span-12 md:col-span-6 md:col-start-7 md:h-full">
            <PixelFrame className="h-full w-full">
              <div className="relative aspect-video w-full md:aspect-auto md:h-full md:min-h-112">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 520px"
                  className="object-cover object-center"
                />
              </div>
            </PixelFrame>
          </FadeIn>
        </div>

        <FadeIn className="mt-12 border-t border-text-primary/10 pt-10 md:mt-14">
          <p className="type-eyebrow mb-5">ABB & industry coverage</p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-5">
            {abbPressLinks.map((article) => (
              <Link
                key={article.href}
                href={article.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-6"
              >
                <PixelFrame label={article.source} labelPosition="overlay">
                  <div className="relative aspect-square w-full overflow-hidden">
                    <Image
                      src={article.image.src}
                      alt={article.image.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, 260px"
                      quality={92}
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                </PixelFrame>
                <p className="px-0.5 text-sm font-medium leading-snug text-text-primary transition-colors group-hover:text-text-primary/80">
                  <span className="underline decoration-transparent underline-offset-4 transition-[text-decoration-color] group-hover:decoration-text-primary/35">
                    {article.title}
                  </span>
                  <span
                    aria-hidden
                    className="ml-1 inline-block text-text-secondary transition-transform group-hover:translate-x-0.5 group-hover:text-text-primary"
                  >
                    →
                  </span>
                </p>
              </Link>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
