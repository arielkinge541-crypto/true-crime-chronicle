import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — The Casefile" },
      { name: "description", content: "About The Casefile, a source-cited true crime publication." },
      { property: "og:title", content: "About — The Casefile" },
      { property: "og:description", content: "Why this publication exists." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-24">
      <div className="case-number text-accent mb-4">About</div>
      <h1 className="font-display text-5xl md:text-6xl text-balance">
        True crime, told like the record matters.
      </h1>
      <div className="mt-10 space-y-6 text-lg leading-[1.8] font-display text-foreground/90">
        <p>
          The Casefile started from a single frustration: there is more true crime content in the
          world than ever before, and it has never been harder to find a sentence you can trust.
        </p>
        <p>
          We write longer pieces, slower. Each case is built from primary sources — court filings,
          police bulletins, contemporaneous news reporting, official records. Where the public
          record is contested, we say so. Where a suspect has not been convicted, we treat them as
          innocent. That is not a stylistic choice; it is the law.
        </p>
        <p>
          Crime stories are, in the end, stories about people. Victims have families. Witnesses
          have lives that continued. We try to write as if those people might one day read what we
          have written — because sometimes they do.
        </p>
      </div>
    </div>
  );
}
