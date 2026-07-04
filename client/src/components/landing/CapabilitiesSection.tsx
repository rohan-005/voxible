import Container from "@/components/ui/Container";
import { CAPABILITIES } from "@/lib/constants";

export default function CapabilitiesSection() {
  return (
    <section
      id="features"
      className="border-b border-border bg-surface-muted py-16 text-foreground transition-colors duration-300 sm:py-20 lg:py-24"
    >
      <Container>
        {/* Section Header */}
        <div className="max-w-2xl">
          <span className="font-main text-[10px] uppercase tracking-[0.2em] text-primary">
            Core System
          </span>

          <h2 className="mt-3 font-heading text-3xl tracking-[-0.03em] text-foreground sm:text-4xl lg:text-5xl">
            Core Capabilities
          </h2>

          <p className="mt-4 font-main text-xs leading-6 text-foreground-muted sm:text-sm">
            Built around the same modular stages that power the
            complete Voxible content generation pipeline.
          </p>
        </div>

        {/* Capability Cards */}
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {CAPABILITIES.map((capability) => {
            const Icon = capability.icon;

            return (
              <article
                key={capability.title}
                className="
                  group relative
                  border border-border
                  bg-surface
                  p-6
                  transition-all duration-300
                  hover:border-primary/50
                  sm:p-7
                "
              >
                {/* Optional Badge */}
                {capability.badge && (
                  <span className="absolute right-4 top-4 bg-primary px-2 py-1 font-main text-[8px] uppercase tracking-wider text-white">
                    {capability.badge}
                  </span>
                )}

                {/* Icon */}
                <div className="flex size-10 items-center justify-center border border-primary/20 bg-primary-soft">
                  <Icon
                    size={19}
                    className="text-primary"
                    strokeWidth={1.7}
                  />
                </div>

                {/* Title */}
                <h3 className="mt-5 font-heading text-lg text-foreground">
                  {capability.title}
                </h3>

                {/* Description */}
                <p className="mt-3 max-w-xl font-main text-[11px] leading-6 text-foreground-muted sm:text-xs">
                  {capability.description}
                </p>

                {/* Code Preview */}
                {capability.code && (
                  <pre
                    className="
                      mt-5
                      overflow-x-auto
                      border border-border
                      bg-background
                      p-4
                      font-main
                      text-[10px]
                      leading-5
                      text-foreground-muted
                      transition-colors duration-300
                    "
                  >
                    <code>{capability.code}</code>
                  </pre>
                )}

                {/* Pixel Corner Detail */}
                <span className="absolute bottom-0 right-0 size-2 bg-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}