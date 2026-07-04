import {
  ArrowUpRight,
  Check,
} from "lucide-react";

import Container from "@/components/ui/Container";
import { CAPABILITIES } from "@/lib/constants";

export default function CapabilitiesSection() {
  return (
    <section
      id="features"
      className="relative overflow-hidden border-b border-border bg-surface-muted py-16 text-foreground transition-colors duration-300 sm:py-20 lg:py-24 xl:py-28"
    >
      {/* Background details */}
      <div className="pixel-grid pointer-events-none absolute inset-0 opacity-[0.12]" />

      <div className="pointer-events-none absolute -right-24 top-20 size-72 border border-primary/10" />

      <div className="pointer-events-none absolute -right-12 top-32 size-48 border border-primary/10" />

      <Container className="relative">
        {/* Section Header */}
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="size-2 bg-primary" />

              <span className="font-main text-xs uppercase tracking-[0.2em] text-primary sm:text-[13px]">
                Core System
              </span>

              <span className="h-px w-10 bg-primary/40" />
            </div>

            <h2 className="mt-4 font-heading text-4xl tracking-[-0.03em] text-foreground sm:text-5xl lg:text-6xl">
              Core Capabilities
            </h2>

            <p className="mt-5 max-w-2xl font-main text-sm leading-7 text-foreground-muted sm:text-[15px] sm:leading-8">
              A modular content automation system designed to move
              technical ideas from initial research to structured,
              platform-ready output with speed, control, and a
              developer-first workflow.
            </p>
          </div>

          {/* Header System Label */}
          <div className="hidden border border-border bg-surface px-4 py-3 lg:block">
            <div className="flex items-center gap-3">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping bg-secondary opacity-30" />
                <span className="relative inline-flex size-2 bg-secondary" />
              </span>

              <div>
                <p className="font-main text-[10px] uppercase tracking-[0.14em] text-foreground-muted">
                  Capability Layer
                </p>

                <p className="mt-1 font-main text-xs text-foreground">
                  06 Modules Available
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Capability Cards */}
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {CAPABILITIES.map((capability, index) => {
            const Icon = capability.icon;

            return (
              <article
                key={capability.title}
                className="
                  group
                  relative
                  flex
                  min-h-[340px]
                  flex-col
                  overflow-hidden
                  border
                  border-border
                  bg-surface
                  p-6
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-primary/50
                  hover:shadow-[0_16px_45px_rgba(0,0,0,0.06)]
                  sm:p-7
                  lg:p-8
                "
              >
                {/* Top Card Line */}
                <span className="absolute left-0 top-0 h-px w-0 bg-primary transition-all duration-500 group-hover:w-full" />

                {/* Card Number */}
                <span className="absolute right-5 top-5 font-main text-[11px] tracking-[0.14em] text-foreground-muted/50">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Badge */}
                {capability.badge && (
                  <span className="absolute right-5 top-10 border border-primary/20 bg-primary-soft px-2.5 py-1.5 font-main text-[9px] uppercase tracking-[0.12em] text-primary sm:text-[10px]">
                    {capability.badge}
                  </span>
                )}

                {/* Icon */}
                <div className="relative flex size-12 items-center justify-center border border-primary/20 bg-primary-soft transition-all duration-300 group-hover:border-primary/40 group-hover:bg-primary">
                  <Icon
                    size={22}
                    className="text-primary transition-colors duration-300 group-hover:text-white"
                    strokeWidth={1.6}
                  />

                  <span className="absolute -bottom-px -right-px size-1.5 bg-primary" />
                </div>

                {/* Content */}
                <div className="mt-6">
                  <h3 className="font-heading text-2xl tracking-[-0.01em] text-foreground sm:text-[26px]">
                    {capability.title}
                  </h3>

                  <p className="mt-4 font-main text-[13px] leading-7 text-foreground-muted sm:text-sm sm:leading-7">
                    {capability.description}
                  </p>
                </div>

                {/* Code Preview */}
                {capability.code && (
                  <pre
                    className="
                      mt-6
                      overflow-x-auto
                      border
                      border-border
                      bg-background
                      p-4
                      font-main
                      text-[11px]
                      leading-6
                      text-foreground-muted
                      transition-colors
                      duration-300
                      sm:text-xs
                    "
                  >
                    <code>{capability.code}</code>
                  </pre>
                )}

                {/* Bottom Metadata */}
                <div className="mt-auto pt-7">
                  <div className="flex items-center justify-between border-t border-border pt-4">
                    <div className="flex items-center gap-2">
                      <Check
                        size={13}
                        strokeWidth={1.7}
                        className="text-secondary"
                      />

                      <span className="font-main text-[10px] uppercase tracking-[0.1em] text-foreground-muted sm:text-[11px]">
                        {capability.meta}
                      </span>
                    </div>

                    <ArrowUpRight
                      size={15}
                      strokeWidth={1.5}
                      className="text-foreground-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                    />
                  </div>
                </div>

                {/* Pixel Corner Detail */}
                <span className="absolute bottom-0 right-0 size-2 bg-primary opacity-40 transition-all duration-300 group-hover:size-3 group-hover:opacity-100" />
              </article>
            );
          })}
        </div>

        {/* Bottom Information Strip */}
        <div className="mt-8 grid border border-border bg-surface sm:grid-cols-3">
          <div className="border-b border-border px-5 py-4 sm:border-b-0 sm:border-r">
            <p className="font-main text-[10px] uppercase tracking-[0.14em] text-foreground-muted">
              Architecture
            </p>

            <p className="mt-1.5 font-main text-xs text-foreground sm:text-[13px]">
              Modular & Extensible
            </p>
          </div>

          <div className="border-b border-border px-5 py-4 sm:border-b-0 sm:border-r">
            <p className="font-main text-[10px] uppercase tracking-[0.14em] text-foreground-muted">
              Generation
            </p>

            <p className="mt-1.5 font-main text-xs text-foreground sm:text-[13px]">
              Local-first AI
            </p>
          </div>

          <div className="px-5 py-4">
            <p className="font-main text-[10px] uppercase tracking-[0.14em] text-foreground-muted">
              Output
            </p>

            <p className="mt-1.5 font-main text-xs text-foreground sm:text-[13px]">
              Multi-platform Ready
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}