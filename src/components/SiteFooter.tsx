import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border/60 bg-background/60">
      <div className="mx-auto max-w-7xl px-6 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-display text-2xl">The Casefile</div>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground leading-relaxed">
            Long-form, source-cited investigations into the most consequential true crime cases of
            the modern era. Reported with respect for the victims and rigour for the record.
          </p>
        </div>
        <div>
          <div className="case-number mb-3">Sections</div>
          <ul className="space-y-2 text-sm">
            <li><Link to="/cases" className="hover:text-accent">All cases</Link></li>
            <li><Link to="/method" className="hover:text-accent">Editorial method</Link></li>
            <li><Link to="/about" className="hover:text-accent">About</Link></li>
          </ul>
        </div>
        <div>
          <div className="case-number mb-3">Disclaimer</div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Every case page links to primary sources. Suspects are presumed innocent unless
            convicted. Editorial work, not legal advice.
          </p>
        </div>
      </div>
      <div className="border-t border-border/40 py-5 text-center font-mono text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground">
        © 2026 The Casefile · All rights reserved
      </div>
    </footer>
  );
}
