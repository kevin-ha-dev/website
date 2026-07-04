import { FadeIn } from "@/components/shared/FadeIn";
import type {
  FootprintSpec,
  HardwareSpec,
  HardwareSpecGroup,
} from "@/lib/hardwareSpecs";

type SpecTableProps = {
  eyebrow: string;
  title: string;
  intro: string;
  footprint: FootprintSpec;
  groups: HardwareSpecGroup[];
  background?: boolean;
  layout?: "stacked" | "split";
};

const footprintDimensions: {
  key: keyof Pick<FootprintSpec, "height" | "length" | "width">;
  label: string;
}[] = [
  { key: "height", label: "Height" },
  { key: "length", label: "Length" },
  { key: "width", label: "Width" },
];

function SpecValue({ value }: { value: string }) {
  return (
    <p className="font-mono text-lg font-semibold tracking-tight text-text-primary">
      {value}
    </p>
  );
}

function SpecCard({ spec, delay }: { spec: HardwareSpec; delay: number }) {
  return (
    <FadeIn delay={delay} className="min-w-0">
      <div className="flex min-w-0 flex-col gap-1.5">
        <SpecValue value={spec.value} />
        <p className="type-eyebrow wrap-break-word">{spec.label}</p>
      </div>
    </FadeIn>
  );
}

function SpecGroup({
  group,
  delayOffset,
  isFirst,
}: {
  group: HardwareSpecGroup;
  delayOffset: number;
  isFirst: boolean;
}) {
  return (
    <div
      className={`flex flex-col gap-5 ${isFirst ? "" : "border-t border-text-primary/10 pt-8"}`}
    >
      <p className="type-eyebrow font-semibold text-text-primary">{group.title}</p>
      <div className="grid grid-cols-2 gap-x-6 gap-y-6 sm:gap-x-8 lg:grid-cols-4">
        {group.specs.map((spec, i) => (
          <SpecCard key={spec.label} spec={spec} delay={delayOffset + i * 0.04} />
        ))}
      </div>
    </div>
  );
}

export function SpecTable({
  eyebrow,
  title,
  intro,
  footprint,
  groups,
  background = false,
  layout = "stacked",
}: SpecTableProps) {
  let specIndex = 0;
  const split = layout === "split";

  return (
    <section
      className={`section-shell ${background ? "bg-surface-muted" : ""} ${split ? "border-b border-text-primary/10" : background ? "pt-[calc(var(--spacing-section-md)+1.5rem)]!" : ""}`}
    >
      <div
        className={`mx-auto w-full ${split ? "grid max-w-[1200px] grid-cols-12 gap-x-6 gap-y-10 md:gap-x-8" : "flex max-w-[770px] flex-col gap-8 md:gap-10"}`}
      >
        <FadeIn className={split ? "col-span-12 md:col-span-4" : "w-full"}>
          <div className="flex w-full flex-col gap-2">
            <p className="type-eyebrow">{eyebrow}</p>
            <h2 className="type-heading-md font-semibold text-text-primary">
              {title}
            </h2>
            <p className="type-body">{intro}</p>
          </div>
        </FadeIn>

        <div
          className={
            split
              ? "col-span-12 flex flex-col gap-10 md:col-span-8 md:col-start-5"
              : "contents"
          }
        >
        <div className="border-y border-text-primary/10 py-6 md:py-8">
          <FadeIn delay={0.06}>
            <p className="type-eyebrow mb-5 font-semibold text-text-primary">
              Standard footprint
            </p>
          </FadeIn>
          <div className="grid grid-cols-3 gap-6 sm:gap-8">
            {footprintDimensions.map(({ key, label }, i) => (
              <FadeIn key={key} delay={0.08 + i * 0.05} className="min-w-0">
                <div className="flex min-w-0 flex-col gap-1.5">
                  <p className="font-mono text-2xl font-semibold tracking-tight text-text-primary sm:text-[1.75rem]">
                    {footprint[key]}
                  </p>
                  <p className="type-eyebrow">{label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.24}>
            <p className="type-body-sm mt-5">{footprint.note}</p>
          </FadeIn>
        </div>

        <div className="flex flex-col gap-10">
          {groups.map((group, i) => {
            const offset = specIndex * 0.04;
            specIndex += group.specs.length;
            return (
              <SpecGroup
                key={group.title}
                group={group}
                delayOffset={offset}
                isFirst={i === 0}
              />
            );
          })}
        </div>
        </div>
      </div>
    </section>
  );
}
