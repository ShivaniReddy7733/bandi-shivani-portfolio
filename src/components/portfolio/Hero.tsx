import { motion } from "motion/react";
import { ArrowRight, Download, Github } from "lucide-react";
import { portfolio } from "@/config/portfolio";

export function Hero() {
  return (
    <section id="top" className="relative pt-32 md:pt-40 pb-20 md:pb-26">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-12 gap-12 md:gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="md:col-span-7"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-3 py-1 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Available for full-time roles
          </div>

          <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05] text-foreground">
            {portfolio.name}
          </h1>
          <p className="mt-3 text-base md:text-lg text-muted-foreground">
            {portfolio.tagline}
          </p>

          <p className="mt-8 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
            {portfolio.intro}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-primary text-primary-foreground px-4 py-2 text-sm font-medium shadow-[0_6px_20px_-6px_rgba(96,165,250,0.5)] hover:bg-primary/90 transition-colors"
            >
              View Projects
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={portfolio.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-secondary/40 px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
            <a
              href={portfolio.contact.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary/60 transition-colors"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="md:col-span-5 md:mt-2"
        >
          <div className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-foreground/20">
            <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Currently
            </div>
            <div className="mt-4 space-y-4">
              <Row label="Degree" value={portfolio.heroCard.degree} />
              <Row label="Institute" value={portfolio.heroCard.institution} />
              <Row label="Graduation" value={portfolio.heroCard.graduation} />
              <div className="pt-4 border-t border-border">
                <div className="text-[13px] text-foreground leading-relaxed">
                  {portfolio.heroCard.status}
                </div>
              </div>
            </div>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{label}</div>
      <div className="mt-1 text-[14px] text-foreground leading-snug">{value}</div>
    </div>
  );
}
