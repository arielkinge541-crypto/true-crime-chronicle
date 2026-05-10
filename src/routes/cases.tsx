import { createFileRoute, Link } from "@tanstack/react-router";
import { cases } from "@/lib/cases";
import { StatusBadge } from "@/components/StatusBadge";

export const Route = createFileRoute("/cases")({
  head: () => ({
    meta: [
      { title: "All Cases — The Casefile" },
      { name: "description", content: "Browse every case on file. Sourced true crime investigations." },
      { property: "og:title", content: "All Cases — The Casefile" },
      { property: "og:description", content: "Every case in our archive, with primary sources." },
    ],
  }),
  component: CasesIndex,
});

function CasesIndex() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20">
      <div className="case-number text-accent mb-4">The Archive</div>
      <h1 className="font-display text-5xl md:text-6xl text-balance max-w-3xl">
        Every case, every source, on the record.
      </h1>
      <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
        Six in-depth investigations. From a 1971 hijacking to a 2024 Indiana conviction.
      </p>

      <div className="mt-16 divide-y divide-border/60 border-y border-border/60">
        {cases.map((c, i) => (
          <Link
            key={c.slug}
            to="/cases/$slug"
            params={{ slug: c.slug }}
            className="group grid md:grid-cols-[80px_1fr_auto] gap-6 py-8 items-baseline hover:bg-card/50 px-2 -mx-2 transition-colors"
          >
            <div className="case-number text-accent">№ {String(i + 1).padStart(3, "0")}</div>
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <StatusBadge status={c.status} />
                <span className="case-number text-muted-foreground">{c.category}</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl group-hover:text-accent transition-colors text-balance">
                {c.title}
              </h2>
              <p className="mt-2 text-muted-foreground text-pretty">{c.summary}</p>
              <div className="mt-3 case-number text-muted-foreground">
                {c.location} · {c.years}
              </div>
            </div>
            <div className="font-mono text-xs uppercase tracking-[0.25em] text-accent self-center">
              Open →
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
