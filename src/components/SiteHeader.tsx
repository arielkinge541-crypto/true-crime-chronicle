import { Link } from "@tanstack/react-router";

export function SiteHeader() {
  const linkBase =
    "text-xs uppercase tracking-[0.22em] font-mono text-muted-foreground hover:text-accent transition-colors";
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="h-8 w-8 rounded-sm border border-accent/60 flex items-center justify-center font-display text-accent text-lg leading-none">
            ✚
          </div>
          <div className="leading-tight">
            <div className="font-display text-lg text-foreground">The Casefile</div>
            <div className="font-mono text-[0.6rem] uppercase tracking-[0.3em] text-muted-foreground">
              Investigations · Est. 2026
            </div>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className={linkBase} activeOptions={{ exact: true }} activeProps={{ className: "text-accent" }}>
            Home
          </Link>
          <Link to="/cases" className={linkBase} activeProps={{ className: "text-accent" }}>
            Cases
          </Link>
          <Link to="/method" className={linkBase} activeProps={{ className: "text-accent" }}>
            Method
          </Link>
          <Link to="/about" className={linkBase} activeProps={{ className: "text-accent" }}>
            About
          </Link>
        </nav>
        <Link
          to="/cases"
          className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-mono uppercase tracking-[0.2em] border border-accent/60 text-accent hover:bg-accent hover:text-accent-foreground transition-colors"
        >
          Open files
        </Link>
      </div>
    </header>
  );
}
