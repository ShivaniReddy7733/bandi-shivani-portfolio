import { Section, FadeIn } from "./Section";
import { portfolio } from "@/config/portfolio";

export function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Education">
      <div className="relative">
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" aria-hidden />
        <div className="space-y-8">
          {portfolio.education.map((e, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <div className="relative pl-8">
                <span className="absolute left-0 top-2 h-3.5 w-3.5 rounded-full border border-border bg-background">
                  <span className="absolute inset-1 rounded-full bg-primary" />
                </span>
                <div className="rounded-lg border border-border bg-card p-6 transition-colors hover:border-foreground/20">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-lg font-medium text-foreground">
                      {e.degree}
                    </h3>
                    <span className="text-xs text-muted-foreground">{e.period}</span>
                  </div>
                  <div className="mt-1 text-[14px] text-foreground/90">{e.field}</div>
                  <div className="mt-2 text-[13px] text-muted-foreground">{e.institution}</div>
                  {e.cgpa && (
                    <div className="mt-3 text-[13px] text-foreground">
                      <span className="text-muted-foreground">CGPA:</span> {e.cgpa}
                    </div>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </Section>
  );
}
