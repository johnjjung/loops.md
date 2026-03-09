import type { LoopTemplate } from "@/lib/types";

const blockMeta = [
  {
    key: "baseline",
    label: "baseline.md",
    heading: "Fixed context",
  },
  {
    key: "template",
    label: "template.json",
    heading: "Mutable asset",
  },
  {
    key: "program",
    label: "program.md",
    heading: "Scoring rule",
  },
] as const;

type LoopKitProps = {
  loop: LoopTemplate;
};

export default function LoopKit({ loop }: LoopKitProps) {
  return (
    <section className="space-y-5">
      <div>
        <p className="text-[11px] font-medium uppercase tracking-[0.26em] text-muted">
          Loop kit
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-ink sm:text-3xl">
          Visible assets for a repeatable test cycle.
        </h2>
      </div>
      <div className="grid gap-5 xl:grid-cols-3">
        {blockMeta.map((block) => {
          const value = loop[block.key];

          return (
            <article key={block.key} className="rounded-[30px] border border-line bg-panel p-5">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
                    {block.label}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-ink">{block.heading}</h3>
                </div>
                <span className="rounded-full border border-line px-3 py-1 font-mono text-xs text-muted">
                  {block.key}
                </span>
              </div>
              <p className="mt-4 text-sm leading-7 text-muted">{value.summary}</p>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-ink">
                {value.bullets.map((bullet) => (
                  <li key={bullet} className="rounded-2xl border border-line bg-white/75 px-4 py-3">
                    {bullet}
                  </li>
                ))}
              </ul>
              <pre className="mt-5 overflow-x-auto rounded-[24px] border border-line bg-[#1f1b17] p-4 font-mono text-xs leading-6 text-[#f7ebde]">
                {value.snippet}
              </pre>
            </article>
          );
        })}
      </div>
    </section>
  );
}
