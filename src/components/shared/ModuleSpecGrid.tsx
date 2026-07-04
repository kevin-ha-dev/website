import { FadeIn } from "@/components/shared/FadeIn";
import type { SystemModule } from "@/lib/systemModules";

type ModuleSpecGridProps = {
  modules: SystemModule[];
  eyebrow?: string;
  title?: string;
  background?: boolean;
};

export function ModuleSpecGrid({
  modules,
  eyebrow,
  title,
  background = true,
}: ModuleSpecGridProps) {
  return (
    <section
      className={`section-shell ${background ? "bg-surface-muted" : ""}`}
    >
      {eyebrow && (
        <FadeIn>
          <p className="type-eyebrow mb-3">{eyebrow}</p>
        </FadeIn>
      )}
      {title && (
        <FadeIn>
          <h2 className="type-heading-md mb-12 text-text-primary">{title}</h2>
        </FadeIn>
      )}
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {modules.map((module, i) => (
          <FadeIn key={module.id} delay={i * 0.05}>
            <div className="flex flex-col gap-4 border border-text-primary/10 bg-background p-6">
              <h3 className="text-sm font-semibold tracking-tight text-text-primary">
                {module.name}
              </h3>
              <ul className="flex flex-col gap-2">
                {module.specs?.map((spec) => (
                  <li
                    key={spec}
                    className="type-body-sm before:mr-2 before:text-text-primary/30 before:content-['·']"
                  >
                    {spec}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
