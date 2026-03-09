import Link from "next/link";
import type { LoopTemplate } from "@/lib/types";

type LoopCardProps = {
  loop: LoopTemplate;
  categoryName: string;
};

const signalTone: Record<LoopTemplate["signalSpeed"], string> = {
  Fast: "border-[rgba(37,104,92,0.18)] bg-[rgba(37,104,92,0.08)] text-[color:var(--emerald)]",
  Medium: "border-[rgba(154,109,38,0.18)] bg-[rgba(154,109,38,0.08)] text-[color:var(--gold)]",
  Slow: "border-[rgba(44,106,143,0.18)] bg-[rgba(44,106,143,0.08)] text-[color:var(--sky)]",
};

export default function LoopCard({ loop, categoryName }: LoopCardProps) {
  return (
    <Link
      href={`/loops/${loop.slug}`}
      className="group flex h-full flex-col rounded-[28px] border border-line bg-panel p-5 transition hover:-translate-y-1 hover:border-accent hover:shadow-[0_16px_45px_rgba(38,30,19,0.08)]"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-muted">
            {categoryName}
          </p>
          <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-ink transition group-hover:text-accent">
            {loop.title}
          </h3>
        </div>
        <span className={`rounded-full border px-3 py-1 font-mono text-xs ${signalTone[loop.signalSpeed]}`}>
          {loop.signalSpeed}
        </span>
      </div>
      <p className="mt-4 text-sm leading-7 text-muted">{loop.summary}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {loop.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-line bg-white/75 px-3 py-2 text-xs font-medium uppercase tracking-[0.14em] text-muted"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-auto pt-6">
        <div className="flex items-center justify-between border-t border-line pt-4 text-sm text-muted">
          <span>{loop.primaryMetric}</span>
          <span>{loop.variables.length} variables</span>
        </div>
      </div>
    </Link>
  );
}
