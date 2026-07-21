import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Education } from "@/components/portfolio/Education";
import { Experience } from "@/components/portfolio/Experience";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { ProblemSolving } from "@/components/portfolio/ProblemSolving";
import { Achievements } from "@/components/portfolio/Achievements";
import { Certifications } from "@/components/portfolio/Certifications";
import { Resume } from "@/components/portfolio/Resume";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { portfolio } from "@/config/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${portfolio.name} — ${portfolio.role}` },
      {
        name: "description",
        content:
          "Computer Science & Engineering graduate from MNNIT Allahabad, passionate about building scalable full-stack applications, exploring AI-powered solutions, and solving real-world problems through software.",
      },
      { property: "og:title", content: `${portfolio.name} — ${portfolio.role}` },
      {
        property: "og:description",
        content:
          "Computer Science & Engineering graduate from MNNIT Allahabad, passionate about building scalable full-stack applications, exploring AI-powered solutions, and solving real-world problems through software.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-primary/30">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <ProblemSolving />
        <Achievements />
        <Certifications />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
