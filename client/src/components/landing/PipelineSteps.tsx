import { PIPELINE_STEPS } from "@/lib/constants";

export default function PipelineSteps() {
  return (
    <div
      id="pipeline"
      className="w-full overflow-x-auto pb-2"
    >
      <div className="mx-auto flex min-w-[700px] items-start justify-center">
        {PIPELINE_STEPS.map((step, index) => {
          const Icon = step.icon;

          return (
            <div
              key={step.label}
              className="flex items-start"
            >
              <div className="flex w-[100px] flex-col items-center">
                <div
                  className={[
                    "grid size-11 place-items-center border transition-all",
                    step.active
                      ? "border-primary bg-primary text-white shadow-[4px_4px_0_rgba(201,104,47,0.15)]"
                      : "border-neutral/15 bg-surface text-neutral/35",
                  ].join(" ")}
                >
                  <Icon
                    size={18}
                    strokeWidth={1.8}
                  />
                </div>

                <span className="mt-3 font-geist-pixel text-[10px] text-neutral/40">
                  {step.number}
                </span>

                <span
                  className={[
                    "mt-1 font-pixel text-[10px] font-semibold uppercase tracking-wide",
                    step.active
                      ? "text-neutral"
                      : "text-neutral/35",
                  ].join(" ")}
                >
                  {step.label}
                </span>
              </div>

              {index < PIPELINE_STEPS.length - 1 && (
                <div
                  className={[
                    "mt-[22px] h-px w-8 sm:w-12 lg:w-16",
                    step.active
                      ? "bg-primary"
                      : "border-t border-dashed border-neutral/20",
                  ].join(" ")}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}