import Container from "@/components/ui/Container";
import { STATS } from "@/lib/constants";

export default function StatsBar() {
  return (
    <section className="border-y border-primary/15 bg-primary-soft/40">
      <Container>
        <div className="grid grid-cols-2 py-6 lg:grid-cols-4">
          {STATS.map((stat, index) => (
            <div
              key={stat.label}
              className={[
                "px-4 py-4 text-center sm:px-6",
                index % 2 !== 0
                  ? "border-l border-primary/15"
                  : "",
                index >= 2
                  ? "border-t border-primary/15 lg:border-t-0"
                  : "",
                index === 2
                  ? "lg:border-l"
                  : "",
              ].join(" ")}
            >
              <p className="font-geist-pixel text-[10px] text-neutral/50 sm:text-xs">
                {stat.label}
              </p>

              <p className="mt-2 font-pixel text-sm text-neutral sm:text-base">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}