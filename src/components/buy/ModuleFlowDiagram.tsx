"use client";

type ModuleFlowDiagramProps = {
  modules: { id: string; name: string; tagline?: string }[];
  activeId: string;
  onSelect: (id: string) => void;
};

const BELT_Y = 156;
const BELT_START = 120;
const BELT_END = 880;
const STATION_X = [280, 520, 760] as const;

export function ModuleFlowDiagram({
  modules,
  activeId,
  onSelect,
}: ModuleFlowDiagramProps) {
  return (
    <div className="w-full overflow-x-auto">
      <svg
        viewBox="0 0 920 300"
        role="img"
        aria-label="B.O.B. production line: Fresh Cut, Sauced Up, and Fries Served modules in sequence"
        className="mx-auto block h-auto min-w-[640px] w-full max-w-[920px]"
      >
        <defs>
          <pattern
            id="module-grid"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 20 0 L 0 0 0 20"
              fill="none"
              stroke="var(--color-text-primary)"
              strokeOpacity="0.04"
              strokeWidth="1"
            />
          </pattern>
          <marker
            id="flow-arrow"
            markerWidth="8"
            markerHeight="8"
            refX="7"
            refY="4"
            orient="auto"
          >
            <path
              d="M0,0 L8,4 L0,8 Z"
              fill="var(--color-text-primary)"
              fillOpacity="0.5"
            />
          </marker>
          <linearGradient id="belt-fade-right" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--color-text-primary)" stopOpacity="0.08" />
            <stop offset="85%" stopColor="var(--color-text-primary)" stopOpacity="0.08" />
            <stop offset="100%" stopColor="var(--color-text-primary)" stopOpacity="0" />
          </linearGradient>
        </defs>

        <rect
          x="0"
          y="0"
          width="920"
          height="300"
          fill="url(#module-grid)"
        />

        {/* Left intake: order queue + tray icon */}
        <g transform="translate(24, 118)">
          <rect
            x="0"
            y="20"
            width="40"
            height="28"
            rx="1"
            fill="none"
            stroke="var(--color-text-primary)"
            strokeOpacity="0.4"
            strokeWidth="1.5"
          />
          <circle cx="8" cy="48" r="3.5" fill="var(--color-text-primary)" fillOpacity="0.2" />
          <circle cx="32" cy="48" r="3.5" fill="var(--color-text-primary)" fillOpacity="0.2" />
          <text
            x="20"
            y="12"
            fill="var(--color-text-secondary)"
            fontSize="9"
            fontWeight="500"
            letterSpacing="0.12em"
            textAnchor="middle"
          >
            ORDER
          </text>
          <text
            x="20"
            y="68"
            fill="var(--color-text-secondary)"
            fontSize="9"
            fontWeight="500"
            letterSpacing="0.12em"
            textAnchor="middle"
          >
            QUEUE
          </text>
        </g>

        {/* Inbound arrow into belt */}
        <line
          x1="72"
          y1={BELT_Y}
          x2={BELT_START - 4}
          y2={BELT_Y}
          stroke="var(--color-text-primary)"
          strokeOpacity="0.35"
          strokeWidth="2"
          strokeDasharray="5 3"
          markerEnd="url(#flow-arrow)"
        />

        {/* Main belt */}
        <rect
          x={BELT_START}
          y={BELT_Y - 8}
          width={BELT_END - BELT_START}
          height="16"
          rx="2"
          fill="url(#belt-fade-right)"
          stroke="var(--color-text-primary)"
          strokeOpacity="0.2"
          strokeWidth="1.5"
        />

        {/* Inter-station flow arrows on belt */}
        <line
          x1="390"
          y1={BELT_Y}
          x2="410"
          y2={BELT_Y}
          stroke="var(--color-text-primary)"
          strokeOpacity="0.25"
          strokeWidth="1.5"
          strokeDasharray="4 3"
          markerEnd="url(#flow-arrow)"
        />
        <line
          x1="630"
          y1={BELT_Y}
          x2="650"
          y2={BELT_Y}
          stroke="var(--color-text-primary)"
          strokeOpacity="0.25"
          strokeWidth="1.5"
          strokeDasharray="4 3"
          markerEnd="url(#flow-arrow)"
        />

        {modules.map((module, index) => {
          const cx = STATION_X[index];
          const isActive = module.id === activeId;
          const cardBottom = 256;

          return (
            <g key={module.id}>
              {/* Connector from card to belt */}
              <line
                x1={cx}
                y1={cardBottom}
                x2={cx}
                y2={BELT_Y - 8}
                stroke="var(--color-text-primary)"
                strokeOpacity="0.12"
                strokeWidth="1"
                strokeDasharray="3 3"
              />

              <foreignObject
                x={cx - 110}
                y="36"
                width="220"
                height="220"
              >
                <button
                  type="button"
                  onClick={() => onSelect(module.id)}
                  aria-pressed={isActive}
                  aria-label={`${module.name}: ${module.tagline ?? ""}`}
                  className={`flex h-full w-full flex-col items-center justify-between border px-4 py-5 text-left transition-colors ${
                    isActive
                      ? "border-brand bg-brand-soft"
                      : "border-text-primary/15 bg-surface hover:border-text-primary/30 hover:bg-background"
                  }`}
                >
                  <span className="type-eyebrow text-[0.625rem]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <StationIcon index={index} active={isActive} />
                  <span className="w-full text-center">
                    <span className="block font-sans text-sm font-semibold tracking-tight text-text-primary">
                      {module.name}
                    </span>
                    {module.tagline ? (
                      <span className="mt-1 block text-[0.6875rem] leading-snug text-text-secondary">
                        {module.tagline}
                      </span>
                    ) : null}
                  </span>
                </button>
              </foreignObject>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

function StationIcon({ index, active }: { index: number; active: boolean }) {
  const stroke = active
    ? "var(--color-brand-contrast)"
    : "var(--color-text-primary)";
  const strokeOpacity = active ? 0.85 : 0.45;

  if (index === 0) {
    return (
      <svg
        viewBox="0 0 80 56"
        aria-hidden
        className="h-14 w-20 shrink-0"
      >
        {[16, 32, 48, 64].map((x) => (
          <g key={x}>
            <rect
              x={x - 4}
              y="8"
              width="8"
              height="32"
              fill="none"
              stroke={stroke}
              strokeOpacity={strokeOpacity}
              strokeWidth="1.5"
            />
            <line
              x1={x}
              y1="40"
              x2={x}
              y2="48"
              stroke={stroke}
              strokeOpacity={strokeOpacity}
              strokeWidth="1.5"
            />
          </g>
        ))}
        <line
          x1="8"
          y1="48"
          x2="72"
          y2="48"
          stroke={stroke}
          strokeOpacity={strokeOpacity * 0.7}
          strokeWidth="1.5"
        />
      </svg>
    );
  }

  if (index === 1) {
    return (
      <svg
        viewBox="0 0 80 56"
        aria-hidden
        className="h-14 w-20 shrink-0"
      >
        {/* Belt */}
        <line
          x1="4"
          y1="50"
          x2="76"
          y2="50"
          stroke={stroke}
          strokeOpacity={strokeOpacity * 0.7}
          strokeWidth="2"
        />
        {/* Bun on belt */}
        <ellipse
          cx="40"
          cy="44"
          rx="14"
          ry="5"
          fill="none"
          stroke={stroke}
          strokeOpacity={strokeOpacity * 0.8}
          strokeWidth="1.5"
        />
        <path
          d="M 28 44 Q 40 34 52 44"
          fill="none"
          stroke={stroke}
          strokeOpacity={strokeOpacity * 0.8}
          strokeWidth="1.5"
        />
        {/* 4 sauce nozzles */}
        {[16, 28, 40, 52].map((x) => (
          <g key={x}>
            <line
              x1={x}
              y1="6"
              x2={x}
              y2="18"
              stroke={stroke}
              strokeOpacity={strokeOpacity}
              strokeWidth="1.5"
            />
            <rect
              x={x - 3}
              y="2"
              width="6"
              height="5"
              rx="1"
              fill="none"
              stroke={stroke}
              strokeOpacity={strokeOpacity}
              strokeWidth="1.5"
            />
            <path
              d={`M${x - 2} 18 L${x} 24 L${x + 2} 18`}
              fill="none"
              stroke={stroke}
              strokeOpacity={strokeOpacity}
              strokeWidth="1.5"
            />
            <line
              x1={x}
              y1="24"
              x2={x}
              y2="38"
              stroke={stroke}
              strokeOpacity={strokeOpacity * 0.5}
              strokeWidth="1"
              strokeDasharray="2 2"
            />
          </g>
        ))}
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 80 56" aria-hidden className="h-14 w-20 shrink-0">
      {/* Main belt / tray at bottom right */}
      <line
        x1="36"
        y1="50"
        x2="76"
        y2="50"
        stroke={stroke}
        strokeOpacity={strokeOpacity * 0.7}
        strokeWidth="2"
      />
      <rect
        x="52"
        y="42"
        width="18"
        height="8"
        rx="1"
        fill="none"
        stroke={stroke}
        strokeOpacity={strokeOpacity * 0.7}
        strokeWidth="1.5"
      />
      {/* 4 parallel fryer lanes */}
      {[8, 16, 24, 32].map((x) => (
        <rect
          key={x}
          x={x}
          y="18"
          width="6"
          height="28"
          fill="none"
          stroke={stroke}
          strokeOpacity={strokeOpacity * 0.6}
          strokeWidth="1.5"
        />
      ))}
      {/* Clamshell basket */}
      <path
        d="M 14 46 L 14 38 Q 22 32 30 38 L 30 46"
        fill="none"
        stroke={stroke}
        strokeOpacity={strokeOpacity}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M 14 38 Q 22 28 30 38"
        fill="none"
        stroke={stroke}
        strokeOpacity={strokeOpacity}
        strokeWidth="1.5"
      />
      {/* Fries hint in basket */}
      <line x1="18" y1="42" x2="26" y2="42" stroke={stroke} strokeOpacity={strokeOpacity * 0.5} strokeWidth="1" />
      <line x1="19" y1="40" x2="25" y2="40" stroke={stroke} strokeOpacity={strokeOpacity * 0.5} strokeWidth="1" />
      {/* Robot arm: fryer to tray */}
      <path
        d="M 22 32 L 22 14 L 48 14 L 58 42"
        fill="none"
        stroke={stroke}
        strokeOpacity={strokeOpacity}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle
        cx="22"
        cy="32"
        r="2.5"
        fill="none"
        stroke={stroke}
        strokeOpacity={strokeOpacity}
        strokeWidth="1.5"
      />
      <path
        d="M 54 42 L 58 42 L 60 38 L 58 46 Z"
        fill="none"
        stroke={stroke}
        strokeOpacity={strokeOpacity}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}
