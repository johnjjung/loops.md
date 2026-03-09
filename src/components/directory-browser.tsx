"use client";

import { useMemo, useState } from "react";
import type { Category, LoopTemplate } from "@/lib/types";
import LoopCard from "@/components/loop-card";

type DirectoryBrowserProps = {
  categories: Category[];
  loops: LoopTemplate[];
  title: string;
  description: string;
  lockedCategory?: string;
};

export default function DirectoryBrowser({
  categories,
  loops,
  title,
  description,
  lockedCategory,
}: DirectoryBrowserProps) {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(lockedCategory ?? "all");
  const [signal, setSignal] = useState("all");
  const [metric, setMetric] = useState("all");
  const [activeTag, setActiveTag] = useState("all");

  const categoryLabels = useMemo(
    () => Object.fromEntries(categories.map((category) => [category.slug, category.name])),
    [categories],
  );

  const scopedLoops = useMemo(() => {
    return loops.filter((loop) => {
      if (lockedCategory) {
        return loop.category === lockedCategory;
      }

      return selectedCategory === "all" || loop.category === selectedCategory;
    });
  }, [lockedCategory, loops, selectedCategory]);

  const availableMetrics = useMemo(
    () => Array.from(new Set(scopedLoops.map((loop) => loop.primaryMetric))).sort(),
    [scopedLoops],
  );

  const availableTags = useMemo(
    () => Array.from(new Set(scopedLoops.flatMap((loop) => loop.tags))).sort(),
    [scopedLoops],
  );

  const filteredLoops = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return scopedLoops
      .filter((loop) => {
        const haystack = [
          loop.title,
          loop.summary,
          loop.primaryMetric,
          loop.category,
          loop.audience,
          ...loop.tags,
          ...loop.variables,
        ]
          .join(" ")
          .toLowerCase();

        const queryMatch = normalizedQuery === "" || haystack.includes(normalizedQuery);
        const signalMatch = signal === "all" || loop.signalSpeed === signal;
        const metricMatch = metric === "all" || loop.primaryMetric === metric;
        const tagMatch = activeTag === "all" || loop.tags.includes(activeTag);

        return queryMatch && signalMatch && metricMatch && tagMatch;
      })
      .sort((left, right) => {
        if (left.featured !== right.featured) {
          return Number(right.featured) - Number(left.featured);
        }

        return left.title.localeCompare(right.title);
      });
  }, [activeTag, metric, query, scopedLoops, signal]);

  return (
    <section id="library" className="space-y-5">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.26em] text-muted">
            Directory browser
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-ink sm:text-3xl">
            {title}
          </h2>
        </div>
        <p className="hidden max-w-xl text-sm leading-7 text-muted lg:block">
          {description}
        </p>
      </div>

      <div className="sticky top-24 z-20 rounded-[30px] border border-line bg-[rgba(255,250,242,0.9)] p-4 shadow-[0_18px_50px_rgba(38,30,19,0.05)] backdrop-blur">
        <div className="grid gap-3 lg:grid-cols-[minmax(0,1.4fr)_repeat(3,minmax(0,0.7fr))]">
          <label className="flex flex-col gap-2 text-sm text-muted">
            <span className="font-mono text-[11px] uppercase tracking-[0.18em]">Search</span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Find by title, tag, metric, or variable"
              className="rounded-2xl border border-line bg-white/75 px-4 py-3 text-sm text-ink outline-none transition focus:border-accent"
            />
          </label>
          {!lockedCategory ? (
            <label className="flex flex-col gap-2 text-sm text-muted">
              <span className="font-mono text-[11px] uppercase tracking-[0.18em]">Category</span>
              <select
                value={selectedCategory}
                onChange={(event) => setSelectedCategory(event.target.value)}
                className="rounded-2xl border border-line bg-white/75 px-4 py-3 text-sm text-ink outline-none transition focus:border-accent"
              >
                <option value="all">All categories</option>
                {categories.map((category) => (
                  <option key={category.slug} value={category.slug}>
                    {category.name}
                  </option>
                ))}
              </select>
            </label>
          ) : null}
          <label className="flex flex-col gap-2 text-sm text-muted">
            <span className="font-mono text-[11px] uppercase tracking-[0.18em]">Signal</span>
            <select
              value={signal}
              onChange={(event) => setSignal(event.target.value)}
              className="rounded-2xl border border-line bg-white/75 px-4 py-3 text-sm text-ink outline-none transition focus:border-accent"
            >
              <option value="all">All speeds</option>
              <option value="Fast">Fast</option>
              <option value="Medium">Medium</option>
              <option value="Slow">Slow</option>
            </select>
          </label>
          <label className="flex flex-col gap-2 text-sm text-muted">
            <span className="font-mono text-[11px] uppercase tracking-[0.18em]">Metric</span>
            <select
              value={metric}
              onChange={(event) => setMetric(event.target.value)}
              className="rounded-2xl border border-line bg-white/75 px-4 py-3 text-sm text-ink outline-none transition focus:border-accent"
            >
              <option value="all">All metrics</option>
              {availableMetrics.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setActiveTag("all")}
            className={`rounded-full border px-3 py-2 text-xs font-medium uppercase tracking-[0.14em] transition ${
              activeTag === "all"
                ? "border-accent bg-[rgba(212,91,55,0.12)] text-accent"
                : "border-line bg-white/70 text-muted hover:border-accent hover:text-accent"
            }`}
          >
            All tags
          </button>
          {availableTags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setActiveTag((current) => (current === tag ? "all" : tag))}
              className={`rounded-full border px-3 py-2 text-xs font-medium uppercase tracking-[0.14em] transition ${
                activeTag === tag
                  ? "border-accent bg-[rgba(212,91,55,0.12)] text-accent"
                  : "border-line bg-white/70 text-muted hover:border-accent hover:text-accent"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between gap-4 text-sm text-muted">
        <p>{filteredLoops.length} loops match the current filters.</p>
        {(query || signal !== "all" || metric !== "all" || activeTag !== "all") && (
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setSignal("all");
              setMetric("all");
              setActiveTag("all");
            }}
            className="font-medium text-accent transition hover:text-[color:var(--accent-strong)]"
          >
            Reset filters
          </button>
        )}
      </div>

      <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
        {filteredLoops.map((loop) => (
          <LoopCard
            key={loop.slug}
            loop={loop}
            categoryName={categoryLabels[loop.category] ?? loop.category}
          />
        ))}
      </div>

      {filteredLoops.length === 0 ? (
        <div className="rounded-[28px] border border-dashed border-line bg-panel p-8 text-center text-sm leading-7 text-muted">
          No loops match the current filters. Clear one filter or search for a broader term.
        </div>
      ) : null}
    </section>
  );
}
