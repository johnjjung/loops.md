import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import LoopCard from "@/components/loop-card";
import LoopKit from "@/components/loop-kit";
import {
  getCategories,
  getCategoryBySlug,
  getLoopBySlug,
  getLoopSlugs,
  getRelatedLoops,
} from "@/lib/content";

type LoopPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getLoopSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: LoopPageProps): Promise<Metadata> {
  const { slug } = await params;
  const loop = getLoopBySlug(slug);

  if (!loop) {
    return {
      title: "Loop not found",
    };
  }

  return {
    title: loop.title,
    description: loop.summary,
  };
}

export default async function LoopPage({ params }: LoopPageProps) {
  const { slug } = await params;
  const loop = getLoopBySlug(slug);

  if (!loop) {
    notFound();
  }

  const category = getCategoryBySlug(loop.category);
  const relatedLoops = getRelatedLoops(loop).slice(0, 3);
  const categories = getCategories();

  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-5 pb-16 pt-6 sm:px-8 lg:px-10">
      <section className="rounded-[34px] border border-line bg-panel-strong p-6 shadow-[0_18px_60px_rgba(38,30,19,0.07)] lg:p-10">
        <div className="flex flex-wrap items-center gap-3 text-sm text-muted">
          <Link href="/" className="transition hover:text-accent">
            Library
          </Link>
          <span>/</span>
          {category ? (
            <Link href={`/category/${category.slug}`} className="transition hover:text-accent">
              {category.name}
            </Link>
          ) : null}
        </div>
        <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              {category ? (
                <span className="rounded-full border border-line bg-white/75 px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-muted">
                  {category.name}
                </span>
              ) : null}
              <span className="rounded-full border border-line bg-white/75 px-4 py-2 font-mono text-xs uppercase tracking-[0.2em] text-muted">
                {loop.signalSpeed} signal
              </span>
            </div>
            <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.06em] text-ink sm:text-5xl lg:text-6xl">
              {loop.title}
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-muted sm:text-lg">
              {loop.summary}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {loop.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-line px-3 py-2 text-xs font-medium uppercase tracking-[0.16em] text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            <div className="rounded-[24px] border border-line bg-white/80 p-4">
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted">
                Audience
              </p>
              <p className="mt-3 text-sm font-medium leading-7 text-ink">{loop.audience}</p>
            </div>
            <div className="rounded-[24px] border border-line bg-white/80 p-4">
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted">
                Primary metric
              </p>
              <p className="mt-3 text-sm font-medium leading-7 text-ink">
                {loop.primaryMetric}
              </p>
            </div>
            <div className="rounded-[24px] border border-line bg-white/80 p-4">
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted">
                Variables to test
              </p>
              <p className="mt-3 text-3xl font-semibold text-ink">{loop.variables.length}</p>
            </div>
          </div>
        </div>
      </section>

      <LoopKit loop={loop} />

      <section className="grid gap-5 xl:grid-cols-[0.8fr_1.2fr]">
        <article className="rounded-[30px] border border-line bg-panel p-6">
          <p className="text-[11px] font-medium uppercase tracking-[0.26em] text-muted">
            Variables to iterate
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {loop.variables.map((variable) => (
              <span
                key={variable}
                className="rounded-full border border-line bg-white/80 px-3 py-2 text-sm text-ink"
              >
                {variable}
              </span>
            ))}
          </div>
        </article>
        <article className="rounded-[30px] border border-line bg-panel p-6">
          <p className="text-[11px] font-medium uppercase tracking-[0.26em] text-muted">
            Example outcomes
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {loop.examples.map((example) => (
              <div
                key={example.title}
                className="rounded-[24px] border border-line bg-white/80 p-5"
              >
                <h2 className="text-lg font-semibold text-ink">{example.title}</h2>
                <p className="mt-3 text-sm leading-7 text-muted">{example.insight}</p>
                <p className="mt-4 font-mono text-xs uppercase tracking-[0.18em] text-accent">
                  {example.payoff}
                </p>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="space-y-5">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.26em] text-muted">
              Related loops
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-ink">
              Keep the learning chain moving.
            </h2>
          </div>
          <p className="hidden max-w-md text-sm leading-7 text-muted lg:block">
            The strongest teams port winning language and objections across adjacent assets instead of treating each channel as a separate craft.
          </p>
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          {relatedLoops.map((relatedLoop) => {
            const relatedCategory = categories.find(
              (item) => item.slug === relatedLoop.category,
            );

            return (
              <LoopCard
                key={relatedLoop.slug}
                loop={relatedLoop}
                categoryName={relatedCategory?.name ?? relatedLoop.category}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
}
