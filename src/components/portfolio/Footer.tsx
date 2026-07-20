import { portfolio } from "@/config/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="text-[14px] text-foreground">{portfolio.name}</div>
          <div className="text-[13px] text-muted-foreground">{portfolio.role}</div>
        </div>
        <div className="text-[12px] text-muted-foreground text-left md:text-right">
          <div>© {portfolio.footer.year} All Rights Reserved.</div>
          <div className="mt-1">{portfolio.footer.tech}</div>
        </div>
      </div>
    </footer>
  );
}
