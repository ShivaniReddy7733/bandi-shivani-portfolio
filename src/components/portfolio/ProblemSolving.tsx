import { Section, FadeIn } from "./Section";
import { portfolio } from "@/config/portfolio";
import { ArrowUpRight } from "lucide-react";

export function ProblemSolving() {
  const { profiles, stats, focus } = portfolio.problemSolving;
  const visibleStats = stats.filter((s) => s.value && s.value.trim().length > 0);

  return (
    <Section
      id="problem-solving"
      eyebrow="Problem Solving"
      title="Problem Solving"
      description="Consistent practice across data structures, algorithms and system design."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {visibleStats.map((s, i) => (
          <FadeIn key={s.label} delay={i * 0.05}>
            <div className="rounded-lg border border-border bg-card p-6">
              <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {s.label}
              </div>
              <div className="mt-3 text-3xl font-semibold tracking-tight text-foreground">
                {s.value}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <FadeIn>
          <div className="rounded-lg border border-border bg-card p-6 h-full">
            <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Profiles
            </div>
            <ul className="mt-4 divide-y divide-border">
              {profiles.map((p) => (
                <li key={p.label}>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between py-3 text-[14px] text-foreground/90 hover:text-foreground transition-colors"
                  >
                    <span className="flex items-baseline gap-3">
                      <span className="w-24 text-muted-foreground">{p.label}</span>
                      <span>{p.handle}</span>
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        <FadeIn delay={0.05}>
          <div className="rounded-lg border border-border bg-card p-6 h-full">
            <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Current Focus
            </div>
            <ul className="mt-4 space-y-2 text-[14px] text-foreground/90">
              {focus.map((f) => (
                <li key={f} className="flex gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-foreground/70" />
                  <span className="leading-relaxed">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
