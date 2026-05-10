import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/method")({
  head: () => ({
    meta: [
      { title: "Editorial Method — The Casefile" },
      { name: "description", content: "How The Casefile sources, fact-checks and writes its investigations." },
      { property: "og:title", content: "Editorial Method — The Casefile" },
      { property: "og:description", content: "Our sourcing, naming and verification standards." },
    ],
  }),
  component: Method,
});

const principles = [
  {
    n: "01",
    t: "Primary sources, always",
    d: "Every factual claim links to a primary source: court documents, official statements from law enforcement, or contemporaneous reporting from established news organisations.",
  },
  {
    n: "02",
    t: "Presumption of innocence",
    d: "We do not name suspects who have not been charged. People who have been charged but not convicted are referred to as suspects or defendants, never perpetrators.",
  },
  {
    n: "03",
    t: "Victim-first language",
    d: "Victims are introduced as people first — their lives, their relationships, their voices — before the crime that happened to them.",
  },
  {
    n: "04",
    t: "Mark the unknown",
    d: "When the public record is contested, ambiguous or based on a single source, we say so in plain language. Speculation is labelled as such.",
  },
  {
    n: "05",
    t: "Update, don't bury",
    d: "When new facts emerge, we update the page and date the change. Earlier versions are not silently rewritten.",
  },
];

function Method() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-24">
      <div className="case-number text-accent mb-4">Editorial Method</div>
      <h1 className="font-display text-5xl md:text-6xl text-balance">
        Five rules we don't break.
      </h1>
      <p className="mt-6 text-lg text-muted-foreground text-pretty">
        These standards exist because true crime journalism, done badly, harms real people. Done
        well, it can free the wrongly convicted, surface forgotten victims, and put public pressure
        where it belongs.
      </p>

      <div className="mt-16 space-y-12">
        {principles.map((p) => (
          <div key={p.n} className="grid grid-cols-[60px_1fr] gap-6 border-t border-border/60 pt-8">
            <div className="case-number text-primary text-base">{p.n}</div>
            <div>
              <h2 className="font-display text-2xl">{p.t}</h2>
              <p className="mt-2 text-foreground/85 leading-relaxed text-pretty">{p.d}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
