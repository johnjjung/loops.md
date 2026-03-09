import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DirectoryBrowser from "@/components/directory-browser";
import { getCategories, getCategoryBySlug, getLoopsByCategory } from "@/lib/content";

type CategoryPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getCategories().map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    return {
      title: "Category not found",
    };
  }

  return {
    title: category.name,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const categories = getCategories();
  const loops = getLoopsByCategory(category.slug);
  const metrics = new Set(loops.map((loop) => loop.primaryMetric));

  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-5 pb-16 pt-6 sm:px-8 lg:px-10">
      <section className="rounded-[32px] border border-line bg-panel-strong p-6 shadow-[0_18px_60px_rgba(38,30,19,0.07)] lg:p-9">
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.26em] text-muted">
              {category.icon} category
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-[-0.05em] text-ink sm:text-5xl">
              {category.name}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-8 text-muted">
              {category.description} Each template below exposes a baseline, a mutable asset, and a scoring program so teams can test one variable at a time.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            <div className="rounded-[24px] border border-line bg-white/75 p-4">
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted">
                Templates
              </p>
              <p className="mt-3 text-3xl font-semibold text-ink">{loops.length}</p>
            </div>
            <div className="rounded-[24px] border border-line bg-white/75 p-4">
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted">
                Metrics
              </p>
              <p className="mt-3 text-3xl font-semibold text-ink">{metrics.size}</p>
            </div>
            <div className="rounded-[24px] border border-line bg-white/75 p-4">
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted">
                Audience
              </p>
              <p className="mt-3 text-sm font-medium leading-7 text-ink">
                B2B growth and ops teams
              </p>
            </div>
          </div>
        </div>
      </section>

      <DirectoryBrowser
        categories={categories}
        loops={loops}
        title={`${category.name} library`}
        description={`Browse all ${loops.length} ${category.name.toLowerCase()} templates, filter by signal speed or metric, and adapt the loop kit to your exact workflow.`}
        lockedCategory={category.slug}
      />
    </main>
  );
}
