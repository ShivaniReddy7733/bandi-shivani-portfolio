import { Section, FadeIn } from "./Section";
import { portfolio } from "@/config/portfolio";

export function About() {
  return (
    <Section id="about" eyebrow="About" title="About Me">
      <div className="grid md:grid-cols-12 gap-8">
        <FadeIn className="md:col-span-8">
          <div className="space-y-4 text-[15px] leading-relaxed text-muted-foreground max-w-2xl">
            {portfolio.about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </FadeIn>
        <FadeIn delay={0.1} className="md:col-span-4">
          <div className="rounded-lg border border-border bg-card p-5">
            <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Focus</div>
            <ul className="mt-3 space-y-2 text-[14px] text-foreground">
              <li>Full Stack Development</li>
              <li>Backend Systems</li>
              <li>AI-powered Applications</li>
              <li>Data Structures & Algorithms</li>
            </ul>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
