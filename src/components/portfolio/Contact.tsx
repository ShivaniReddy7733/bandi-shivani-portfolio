import { useState } from "react";
import { Section, FadeIn } from "./Section";
import { portfolio } from "@/config/portfolio";
import { Github, Linkedin, Mail, Phone, Send } from "lucide-react";

export function Contact() {
  const { email, phone, github, linkedin } = portfolio.contact;
  const [state, setState] = useState<"idle" | "sent">("idle");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const subject = encodeURIComponent(`Portfolio contact from ${data.get("name") ?? ""}`);
    const body = encodeURIComponent(`${data.get("message") ?? ""}\n\n— ${data.get("name") ?? ""} (${data.get("email") ?? ""})`);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    setState("sent");
    form.reset();
  };

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Get in touch"
      description="Open to full-time Software Engineering opportunities, collaborations, and meaningful conversations."
    >
      <div className="grid md:grid-cols-12 gap-6">
        <FadeIn className="md:col-span-5">
          <div className="rounded-lg border border-border bg-card p-6 h-full">
            <ul className="space-y-4 text-[14px]">
              <ContactRow icon={<Mail className="w-4 h-4" />} label="Email" value={email} href={`mailto:${email}`} />
              {phone && (
                <ContactRow icon={<Phone className="w-4 h-4" />} label="Phone" value={phone} href={`tel:${phone}`} />
              )}
              <ContactRow icon={<Linkedin className="w-4 h-4" />} label="LinkedIn" value="Connect" href={linkedin} />
              <ContactRow icon={<Github className="w-4 h-4" />} label="GitHub" value="Follow" href={github} />
            </ul>
          </div>
        </FadeIn>

        <FadeIn delay={0.05} className="md:col-span-7">
          <form onSubmit={onSubmit} className="rounded-lg border border-border bg-card p-6 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <Field name="name" label="Name" placeholder="Your name" required />
              <Field name="email" label="Email" placeholder="you@example.com" type="email" required />
            </div>
            <div>
              <label className="text-[12px] uppercase tracking-[0.16em] text-muted-foreground">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="A short note about the role or idea…"
                className="mt-2 w-full resize-none rounded-md border border-border bg-background px-3 py-2 text-[14px] text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:border-foreground/30"
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[12px] text-muted-foreground">
                {state === "sent" ? "Opened your email client." : "I usually reply within a day."}
              </span>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-md bg-primary text-primary-foreground px-4 py-2 text-sm font-medium shadow-[0_6px_20px_-6px_rgba(96,165,250,0.5)] hover:bg-primary/90 transition-colors"
              >
                <Send className="w-4 h-4" />
                Send message
              </button>
            </div>
          </form>
        </FadeIn>
      </div>
    </Section>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <li>
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel="noreferrer"
        className="group flex items-center justify-between gap-4"
      >
        <span className="flex items-center gap-3 text-muted-foreground">
          <span className="text-muted-foreground">{icon}</span>
          <span className="text-[12px] uppercase tracking-[0.16em]">{label}</span>
        </span>
        <span className="text-[14px] text-foreground/90 group-hover:text-foreground transition-colors truncate">
          {value}
        </span>
      </a>
    </li>
  );
}

function Field({
  name,
  label,
  placeholder,
  type = "text",
  required,
}: {
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-[12px] uppercase tracking-[0.16em] text-muted-foreground">
        {label}
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2 text-[14px] text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:border-foreground/30"
      />
    </div>
  );
}
