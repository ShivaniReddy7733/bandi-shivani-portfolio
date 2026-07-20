import { Section, FadeIn } from "./Section";
import { portfolio } from "@/config/portfolio";
import { ArrowUpRight } from "lucide-react";

export function Certifications() {
  if (!portfolio.certifications.length) return null;
  return (
    <Section id="certifications" eyebrow="Certifications" title="Certifications">
      <div className="grid gap-4 sm:grid-cols-2">
        {portfolio.certifications.map((c, i) => (
          <FadeIn key={c.title} delay={i * 0.05}>
            <a
              href={c.url ?? "#"}
              target={c.url ? "_blank" : undefined}
              rel="noreferrer"
              className="group block rounded-lg border border-border bg-card p-6 hover:border-foreground/20 transition-colors"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-[15px] font-medium text-foreground">{c.title}</h3>
                  <div className="mt-1 text-[13px] text-muted-foreground">
                    {c.issuer}
                    {c.date ? ` · ${c.date}` : ""}
                  </div>
                </div>
                {c.url && (
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                )}
              </div>
            </a>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
