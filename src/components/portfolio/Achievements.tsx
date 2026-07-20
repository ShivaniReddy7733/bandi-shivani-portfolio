import { Section, FadeIn } from "./Section";
import { portfolio } from "@/config/portfolio";

export function Achievements() {
  if (!portfolio.achievements.length) return null;
  return (
    <Section id="achievements" eyebrow="Achievements" title="Achievements">
      <div className="grid gap-4 sm:grid-cols-2">
        {portfolio.achievements.map((a, i) => (
          <FadeIn key={a.title} delay={i * 0.05}>
            <div className="rounded-lg border border-border bg-card p-6 h-full">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-[15px] font-medium text-foreground">{a.title}</h3>
                {a.date && (
                  <span className="text-xs text-muted-foreground">{a.date}</span>
                )}
              </div>
              {a.description && (
                <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">
                  {a.description}
                </p>
              )}
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
