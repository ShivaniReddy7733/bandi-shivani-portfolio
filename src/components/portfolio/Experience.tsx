import { Section, FadeIn } from "./Section";
import { portfolio } from "@/config/portfolio";

export function Experience() {
  const { status, lines } = portfolio.experience;
  return (
    <Section id="experience" eyebrow="Experience" title="Experience">
      <FadeIn>
        <div className="rounded-lg border border-border bg-card p-6 md:p-8 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-3 py-1 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {status}
          </div>
          <ul className="mt-6 space-y-3">
            {lines.map((l, i) => (
              <li key={i} className="flex gap-3 text-[15px] leading-relaxed text-muted-foreground">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-foreground/60" />
                <span>{l}</span>
              </li>
            ))}
          </ul>
        </div>
      </FadeIn>
    </Section>
  );
}
