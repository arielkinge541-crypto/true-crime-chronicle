import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-investigation.jpg";
import { cases } from "@/lib/cases";
import { StatusBadge } from "@/components/StatusBadge";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Casefile — Source-Cited True Crime Investigations" },
      {
        name: "description",
        content:
          "Long-form, fully sourced reporting on the Zodiac, the Golden State Killer, Delphi, JonBenét Ramsey, D.B. Cooper and more.",
      },
      { property: "og:title", content: "The Casefile — True Crime, Properly Sourced" },
      { property: "og:description", content: "Long-form investigations. Every claim cited." },
    ],
  }),
  component: Index,
});

function Index() {
  const featured = cases[0];
  const rest = cases.slice(1);

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Detective desk lit by a single lamp with case files and a corkboard of pinned photos connected by red string"
            width={1920}
            height={1280}
            className="h-full w-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
          <div className="absolute inset-0" style={{ background: "var(--gradient-vignette)" }} />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-32 md:pt-36 md:pb-44">
          <div className="flex items-center gap-3 mb-8">
            <span className="case-number">File № 001 / Vol. MMXXVI</span>
            <span className="h-px w-12 bg-accent/50" />
            <span className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-accent animate-flicker">
              Now Reading
            </span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] text-balance max-w-5xl">
            Stories that refuse to be{" "}
            <em className="text-primary not-italic font-display">
              <span className="italic font-normal">forgotten.</span>
            </em>
          </h1>

          <p className="mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed">
            The Casefile is a long-form true crime publication. Every claim links back to a primary
            source — a court filing, a police bulletin, a piece of reporting on the record. No
            speculation dressed up as fact.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-4">
            <Link
              to="/cases"
              className="group inline-flex items-center gap-3 px-7 py-4 bg-primary text-primary-foreground font-mono text-xs uppercase tracking-[0.25em] hover:bg-primary/90 transition-all"
              style={{ boxShadow: "var(--shadow-noir)" }}
            >
              Open the archive
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <Link
              to="/method"
              className="inline-flex items-center gap-3 px-7 py-4 border border-border text-foreground font-mono text-xs uppercase tracking-[0.25em] hover:border-accent hover:text-accent transition-colors"
            >
              How we report
            </Link>
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl">
            {[
              { k: "06", v: "Cases on file" },
              { k: "47", v: "Primary sources" },
              { k: "58y", v: "Earliest case" },
              { k: "100%", v: "Cited claims" },
            ].map((s) => (
              <div key={s.v}>
                <div className="font-display text-3xl md:text-4xl text-accent">{s.k}</div>
                <div className="case-number mt-1 text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="relative mx-auto max-w-7xl px-6 -mt-16 mb-24">
        <Link
          to="/cases/$slug"
          params={{ slug: featured.slug }}
          className="block relative overflow-hidden border border-border/80 bg-card/90 backdrop-blur p-8 md:p-12 group hover:border-accent/60 transition-colors grain"
          style={{ boxShadow: "var(--shadow-noir)" }}
        >
          <div className="relative z-10 grid md:grid-cols-[1fr_auto] gap-8 items-end">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <span className="case-number">{featured.fileNumber}</span>
                <StatusBadge status={featured.status} />
                <span className="case-number text-muted-foreground">{featured.category}</span>
              </div>
              <h2 className="font-display text-4xl md:text-6xl text-balance group-hover:text-accent transition-colors">
                {featured.title}
              </h2>
              <p className="mt-4 max-w-2xl text-lg text-muted-foreground text-pretty">
                {featured.summary}
              </p>
              <div className="mt-6 flex flex-wrap gap-6 case-number text-muted-foreground">
                <span>📍 {featured.location}</span>
                <span>🗓 {featured.years}</span>
                <span>🔎 {featured.sources.length} sources</span>
              </div>
            </div>
            <div className="font-mono text-sm text-accent uppercase tracking-[0.25em] inline-flex items-center gap-2">
              Read file <span className="transition-transform group-hover:translate-x-1">→</span>
            </div>
          </div>
        </Link>
      </section>

      {/* CASE GRID */}
      <section className="mx-auto max-w-7xl px-6">
        <div className="divider-ornate mb-12">
          <span className="case-number">The Archive</span>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((c, i) => (
            <Link
              key={c.slug}
              to="/cases/$slug"
              params={{ slug: c.slug }}
              className="group relative border border-border/70 bg-card/60 p-7 hover:border-accent/60 hover:bg-card transition-all flex flex-col min-h-[320px]"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="case-number">№ {String(i + 2).padStart(3, "0")}</span>
                <StatusBadge status={c.status} />
              </div>
              <h3 className="font-display text-2xl leading-tight group-hover:text-accent transition-colors text-balance">
                {c.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground italic">{c.subtitle}</p>
              <p className="mt-4 text-sm text-foreground/80 leading-relaxed line-clamp-3">
                {c.summary}
              </p>
              <div className="mt-auto pt-6 flex items-center justify-between case-number text-muted-foreground">
                <span>{c.years}</span>
                <span className="text-accent group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* PROMISE */}
      <section className="mx-auto max-w-4xl px-6 mt-32 text-center">
        <div className="case-number text-accent mb-6">Editorial Promise</div>
        <h2 className="font-display text-4xl md:text-5xl text-balance">
          We treat every name on these pages — victim, suspect, witness — as a person, not a
          headline.
        </h2>
        <p className="mt-6 text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
          No tabloid speculation. No vigilante naming. Suspects are presumed innocent unless
          convicted. Where the record is contested, we say so.
        </p>
        <Link
          to="/method"
          className="mt-10 inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-accent hover:text-foreground transition-colors"
        >
          Read the editorial method →
        </Link>
      </section>
    </div>
  );
}
