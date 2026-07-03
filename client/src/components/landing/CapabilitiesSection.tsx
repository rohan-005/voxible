import Container from "@/components/ui/Container";
import { CAPABILITIES } from "@/lib/constants";

export default function CapabilitiesSection() {
  return (
    <section
      id="features"
      className="border-b border-neutral/10 bg-neutral py-16 text-white sm:py-20 lg:py-24"
    >
      <Container>
        <div className="max-w-2xl">
          <span className="font-geist-pixel text-[10px] uppercase tracking-[0.2em] text-primary">
            Core System
          </span>

          <h2 className="mt-3 font-pixel text-3xl font-bold tracking-[-0.03em] sm:text-4xl lg:text-5xl">
            Core Capabilities
          </h2>

          <p className="mt-4 font-geist-pixel text-xs leading-6 text-white/45 sm:text-sm">
            Built around the same modular stages that power the
            complete Voxible content generation pipeline.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {CAPABILITIES.map((capability) => {
            const Icon = capability.icon;

            return (
              <article
                key={capability.title}
                className="group relative border border-white/10 bg-white/[0.035] p-6 transition-colors hover:border-primary/45 sm:p-7"
              >
                {capability.badge && (
                  <span className="absolute right-4 top-4 bg-primary px-2 py-1 font-geist-pixel text-[8px] uppercase tracking-wider text-white">
                    {capability.badge}
                  </span>
                )}

                <Icon
                  size={20}
                  className="text-primary"
                  strokeWidth={1.8}
                />

                <h3 className="mt-5 font-pixel text-lg font-semibold">
                  {capability.title}
                </h3>

                <p className="mt-3 max-w-xl font-geist-pixel text-[11px] leading-6 text-white/40 sm:text-xs">
                  {capability.description}
                </p>

                {capability.code && (
                  <pre className="mt-5 overflow-x-auto border border-white/10 bg-black/25 p-4 font-geist-pixel text-[10px] leading-5 text-white/45">
                    <code>{capability.code}</code>
                  </pre>
                )}
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}