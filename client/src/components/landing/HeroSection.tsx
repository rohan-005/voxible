import {
  ArrowRight,
  BookOpen,
  Sparkles,
} from "lucide-react";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import PipelineSteps from "./PipelineSteps";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-background"
    >
      <div className="pixel-grid absolute inset-0 opacity-50" />

      <Container className="relative">
        <div className="flex min-h-[calc(100svh-4rem)] flex-col justify-center py-16 sm:py-20 lg:py-24">
          <div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center">
            <div className="mb-5 inline-flex items-center gap-2 border border-primary/20 bg-primary-soft px-3 py-1.5">
              <Sparkles
                size={12}
                className="text-primary"
              />

              <span className="font-main text-[10px] uppercase tracking-[0.16em] text-primary">
                Voxible v1.0 · Local AI Pipeline
              </span>
            </div>

            <h1 className="max-w-4xl font-heading text-[clamp(2.4rem,7vw,5.6rem)] leading-[1] tracking-[-0.04em] text-foreground">
              Turn one topic into
              <span className="relative mx-2 inline-block text-primary sm:mx-3">
                publish-ready content

                <span className="absolute -bottom-1 left-0 h-[2px] w-full bg-primary/60" />
              </span>
              in under 5 minutes.
            </h1>

            <p className="mt-7 max-w-2xl font-main text-xs leading-7 text-foreground-muted sm:text-sm">
              A local-first automation pipeline for
              technical creators. Research, structure,
              visualize, format, and package content
              for multiple platforms.
            </p>

            <div className="mt-8 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
              <Button
                showArrow
                className="w-full sm:w-auto"
              >
                Start Building Free
              </Button>

              <Button
                variant="outline"
                className="w-full sm:w-auto"
              >
                <BookOpen size={15} />
                View Documentation
              </Button>
            </div>

            <div className="mt-5 flex items-center gap-2 font-main text-[10px] text-foreground-muted">
              <span className="text-primary">$</span>
              <code>npm run dev</code>
              <ArrowRight size={10} />
              <code>localhost:3000</code>
            </div>
          </div>

          <div className="mt-14 sm:mt-16 lg:mt-20">
            <PipelineSteps />
          </div>
        </div>
      </Container>
    </section>
  );
}