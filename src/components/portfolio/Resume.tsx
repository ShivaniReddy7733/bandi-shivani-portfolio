import { Section, FadeIn } from "./Section";
import { portfolio } from "@/config/portfolio";
import { Download, FileText } from "lucide-react";

export function Resume() {
  return (
    <Section id="resume" eyebrow="Resume" title="Resume">
      <FadeIn>
        <div className="rounded-xl border border-border bg-card overflow-hidden">
          <div className="grid md:grid-cols-12">
            <div className="md:col-span-5 p-6 md:p-8 border-b md:border-b-0 md:border-r border-border">
              <div className="flex items-center gap-3">
                <div className="rounded-md border border-border bg-secondary/50 p-2">
                  <FileText className="w-4 h-4 text-foreground" />
                </div>
                <div>
                  <div className="text-[15px] text-foreground">{portfolio.name} — Resume</div>
                  <div className="text-[13px] text-muted-foreground">PDF · Updated regularly</div>
                </div>
              </div>
              <p className="mt-6 text-[14px] leading-relaxed text-muted-foreground">
                A comprehensive resume highlighting my education, technical skills, projects, problem-solving experience, achievements, and software engineering journey.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={portfolio.resumeUrl}
                  download
                  className="inline-flex items-center gap-2 rounded-md bg-primary text-primary-foreground px-4 py-2 text-sm font-medium shadow-[0_6px_20px_-6px_rgba(96,165,250,0.5)] hover:bg-primary/90 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
                <a
                  href={portfolio.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary/60 transition-colors"
                >
                  Open in new tab
                </a>
              </div>

            </div>
            <div className="md:col-span-7 bg-secondary/30 min-h-[280px] relative">
              <object
                data={portfolio.resumeUrl}
                type="application/pdf"
                className="w-full h-[420px]"
              >
                <div className="absolute inset-0 flex items-center justify-center text-[13px] text-muted-foreground">
                  Preview unavailable. Use the download link.
                </div>
              </object>
            </div>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
