import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getCase, cases } from "@/lib/cases";
import { StatusBadge } from "@/components/StatusBadge";

export const Route = createFileRoute("/cases/$slug")({
  loader: ({ params }) => {
    const c = getCase(params.slug);
    if (!c) throw notFound();
    return { case: c };
  },
  head: ({ loaderData }) => {
    const c = loaderData?.case;
    if (!c) return { meta: [{ title: "Case not found — The Casefile" }] };
    return {
      meta: [
        { title: `${c.title} — The Casefile` },
        { name: "description", content: c.summary },
        { property: "og:title", content: `${c.title} — The Casefile` },
        { property: "og:description", content: c.summary },
      ],
    };
  },
  component: CasePage,
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-6 py-32 text-center">
      <div className="case-number text-primary mb-3">File not found</div>
      <h1 className="font-display text-5xl">No case under that reference.</h1>
      <Link to="/cases" className="mt-8 inline-block font-mono text-xs uppercase tracking-[0.25em] text-accent">
        ← Back to the archive
      </Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="mx-auto max-w-2xl px-6 py-32 text-center">
      <h1 className="font-display text-3xl">Something went wrong.</h1>
      <p className="mt-3 text-muted-foreground">{error.message}</p>
    </div>
  ),
});

function CasePage() {
  const { case: c } = Route.useLoaderData();
  const idx = cases.findIndex((x) => x.slug === c.slug);
  const next = cases[(idx + 1) % cases.length];

  return (
    <article className="relative">
      {/* Header */}
      <header className="border-b border-border/60 bg-card/40">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <Link to="/cases" className="case-number text-accent hover:text-foreground transition-colors">
            ← The Archive
          </Link>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="case-number">{c.fileNumber}</span>
            <StatusBadge status={c.status} />
            <span className="case-number text-muted-foreground">{c.category}</span>
          </div>
          <h1 className="mt-6 font-display text-5xl md:text-7xl leading-[1] text-balance">
            {c.title}
          </h1>
          <p className="mt-5 font-display italic text-2xl text-muted-foreground text-balance">
            {c.subtitle}
          </p>
          <dl className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-6 border-t border-border/60 pt-8">
            <div>
              <dt className="case-number text-muted-foreground">Location</dt>
              <dd className="mt-1 text-foreground">{c.location}</dd>
            </div>
            <div>
              <dt className="case-number text-muted-foreground">Period</dt>
              <dd className="mt-1 text-foreground">{c.years}</dd>
            </div>
            <div>
              <dt className="case-number text-muted-foreground">Sources</dt>
              <dd className="mt-1 text-foreground">{c.sources.length} primary references</dd>
            </div>
          </dl>
        </div>
      </header>

      {/* Body */}
      <div className="mx-auto max-w-3xl px-6 py-20 space-y-16">
        <section>
          <div className="case-number text-accent mb-4">The Case</div>
          <div className="space-y-6 text-lg leading-[1.8] text-foreground/90 font-display">
            {c.body.map((p, i) => (
              <p key={i} className="text-pretty">
                {i === 0 ? (
                  <>
                    <span className="float-left font-display text-7xl leading-[0.85] mr-3 mt-1 text-primary">
                      {p[0]}
                    </span>
                    {p.slice(1)}
                  </>
                ) : (
                  p
                )}
              </p>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section>
          <div className="case-number text-accent mb-6">Timeline</div>
          <ol className="relative border-l border-accent/40 space-y-8 pl-8">
            {c.timeline.map((t, i) => (
              <li key={i} className="relative">
                <span className="absolute -left-[37px] top-1.5 h-3 w-3 bg-accent rounded-full ring-4 ring-background" />
                <div className="case-number text-accent">{t.date}</div>
                <div className="mt-1 text-foreground/90">{t.event}</div>
              </li>
            ))}
          </ol>
        </section>

        {/* Evidence */}
        <section className="grid md:grid-cols-2 gap-8">
          <div className="border border-border/60 bg-card/60 p-7">
            <div className="case-number text-accent mb-4">Key Evidence</div>
            <ul className="space-y-3 text-foreground/90">
              {c.evidence.map((e, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-primary font-mono text-xs mt-1.5">▣</span>
                  <span>{e}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-border/60 bg-card/60 p-7">
            <div className="case-number text-accent mb-4">Outcome</div>
            <p className="text-foreground/90 leading-relaxed">{c.outcome}</p>
          </div>
        </section>

        {/* Sources */}
        <section>
          <div className="case-number text-accent mb-6">Sources & Further Reading</div>
          <ul className="space-y-3">
            {c.sources.map((s) => (
              <li key={s.url}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-baseline justify-between gap-4 border-b border-border/50 py-4 hover:border-accent transition-colors"
                >
                  <div>
                    <div className="text-foreground group-hover:text-accent transition-colors text-pretty">
                      {s.label}
                    </div>
                    {s.publisher && (
                      <div className="case-number text-muted-foreground mt-1">{s.publisher}</div>
                    )}
                  </div>
                  <span className="font-mono text-xs text-accent shrink-0">↗ open</span>
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs text-muted-foreground italic">
            External links open in a new tab. The Casefile is not responsible for the content of
            third-party websites.
          </p>
        </section>
      </div>

      {/* Next case */}
      <div className="border-t border-border/60 bg-card/40">
        <Link
          to="/cases/$slug"
          params={{ slug: next.slug }}
          className="group block mx-auto max-w-4xl px-6 py-16"
        >
          <div className="case-number text-muted-foreground">Next file</div>
          <div className="mt-2 font-display text-3xl md:text-5xl group-hover:text-accent transition-colors text-balance">
            {next.title} →
          </div>
        </Link>
      </div>
    </article>
  );
}
