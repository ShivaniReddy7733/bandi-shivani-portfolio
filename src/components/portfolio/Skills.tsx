import { Section, FadeIn } from "./Section";
import { portfolio } from "@/config/portfolio";

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Skills & Tools">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {portfolio.skills.map((g, i) => (
          <FadeIn key={g.label} delay={i * 0.04}>
            <div className="h-full rounded-lg border border-border bg-card p-5 transition-colors hover:border-foreground/20">
              <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {g.label}
              </div>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {g.items.map((s) => (
                  <span
                    key={s}
                    className="rounded-md border border-border bg-secondary/50 px-2 py-1 text-[12.5px] text-foreground/90"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
