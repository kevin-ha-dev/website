"use client";

import { useState } from "react";
import { ModuleFlowDiagram } from "@/components/buy/ModuleFlowDiagram";
import { showcaseModules } from "@/lib/systemModules";

export function SystemShowcase() {
  const [activeId, setActiveId] = useState(showcaseModules[0]?.id ?? "");

  return (
    <div className="flex w-full max-w-[1200px] flex-col gap-8">
      <div className="pixel-frame-border bg-text-primary p-1">
        <div className="bg-surface-muted px-4 py-6 md:px-8 md:py-8">
          <p className="type-eyebrow mb-5 text-center md:mb-6">
            Production line schematic
          </p>
          <ModuleFlowDiagram
            modules={showcaseModules}
            activeId={activeId}
            onSelect={setActiveId}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-px border border-text-primary/10 bg-text-primary/10 md:grid-cols-3">
        {showcaseModules.map((module, index) => {
          const isActive = module.id === activeId;

          return (
            <button
              key={module.id}
              type="button"
              onClick={() => setActiveId(module.id)}
              aria-pressed={isActive}
              className={`flex flex-col gap-3 px-5 py-6 text-left transition-colors md:px-6 md:py-7 ${
                isActive
                  ? "bg-brand-soft"
                  : "bg-background hover:bg-surface-muted"
              }`}
            >
              <div className="flex items-baseline gap-3">
                <span className="type-eyebrow text-[0.625rem]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-sans text-lg font-semibold tracking-tight text-text-primary">
                  {module.name}
                </h3>
              </div>
              <p className="type-body-sm leading-relaxed">{module.description}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
