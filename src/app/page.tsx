import Link from "next/link";
import DirectoryBrowser from "@/components/directory-browser";
import LoopCard from "@/components/loop-card";
import { getCategories, getFeaturedLoops, getLoops } from "@/lib/content";

const experimentSteps = [
  {
    label: "Template",
    description: "Start from a structured asset with one variable that can move.",
  },
  {
    label: "Deploy",
    description: "Ship it into a real channel with a defined sample window.",
  },
  {
    label: "Measure",
    description: "Score the variant against one primary metric and a guardrail metric.",
  },
  {
    label: "Keep / discard",
    description: "Bank the winner, kill the loser, and feed the next iteration.",
  },
];

const sourceContext = [
  {
    eyebrow: "Original post",
    title: "Karpathy's autoresearch X post",
    description:
      "The original post that framed the overnight experiment loop and why autonomous iteration compounds so quickly.",
    href: "https://x.com/karpathy/status/2030371219518931079",
    action: "Read the original post",
  },
  {
    eyebrow: "Reference repo",
    title: "karpathy/autoresearch",
    description:
      "The minimal repo that turns prepare, train, and program files into a repeatable research loop.",
    href: "https://github.com/karpathy/autoresearch",
    action: "Open the GitHub repo",
  },
  {
    eyebrow: "Concrete runner",
    title: "Run one loop with Claude Code",
    description:
      "A step-by-step example showing the files, prompts, and scoring cycle for a cold outreach loop.",
    href: "/run-with-claude-code",
    action: "See the walkthrough",
  },
];

const concreteExamples = [
  {
    title: "Cold outreach / positive reply loop",
    metric: "72h positive reply rate",
    baseline:
      "ICP: VP Growth at Series B SaaS. Offer stays fixed: a short teardown of reply quality. Same list source, same inbox pool, same send window.",
    test:
      "Generate 3 variants where only the opener changes. Keep the subject line and CTA fixed. Send 100 emails per variant.",
    decision:
      "Keep the opener only if it beats control by 20% or more without increasing complaints.",
  },
  {
    title: "Pricing page / anchor test",
    metric: "Pricing-page CTA rate",
    baseline:
      "Same plans, same prices, same CTA. The only thing that changes is which plan is centered or visually highlighted first.",
    test:
      "Variant A centers the middle plan. Variant B leads with the premium anchor. Variant C keeps plan order but adds an annual savings anchor above the grid.",
    decision:
      "Ship the winner only if CTA rate rises and sales-qualified opportunity rate does not fall.",
  },
  {
    title: "AP/AR / invoice reminder cadence",
    metric: "On-time payment rate",
    baseline:
      "Same customer tier, same payment terms, same finance owner. Every reminder includes the same invoice details and payment instructions.",
    test:
      "Test a three-step cadence: due-soon reminder, overdue reminder, and confirm-payment-date note. Only change timing and wording.",
    decision:
      "Keep the cadence only if on-time payments rise without increasing complaint or escalation volume.",
  },
];

export default function Home() {
  const categories = getCategories();
  const loops = getLoops();
  const featuredLoops = getFeaturedLoops().slice(0, 6);
  const categoryCounts = Object.fromEntries(
    categories.map((category) => [
      category.slug,
      loops.filter((loop) => loop.category === category.slug).length,
    ]),
  );

  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col gap-14 px-5 pb-16 pt-6 sm:px-8 lg:px-10">
      <section className="overflow-hidden rounded-[34px] border border-line bg-panel-strong shadow-[0_22px_80px_rgba(38,30,19,0.08)]">
        <div className="grid gap-10 px-6 py-8 lg:grid-cols-[1.25fr_0.85fr] lg:px-10 lg:py-10">
          <div className="flex flex-col gap-7">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-line bg-[rgba(255,255,255,0.6)] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.28em] text-muted">
              Autonomous business experiment loops
            </div>
            <div className="space-y-4">
              <h1 className="max-w-3xl text-4xl font-semibold tracking-[-0.06em] text-ink sm:text-5xl lg:text-6xl">
                The directory for templates that learn while your team sleeps.
              </h1>
              <p className="max-w-2xl text-base leading-8 text-muted sm:text-lg">
                loops.md turns Karpathy-style experiment loops into reusable business systems. Pick a surface, start from a battle-tested template, define the scoring rule, and compound learning across every channel.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 text-sm text-muted">
              <div className="rounded-full border border-line bg-white/70 px-4 py-2">
                45 launch templates
              </div>
              <div className="rounded-full border border-line bg-white/70 px-4 py-2">
                9 operating surfaces
              </div>
              <div className="rounded-full border border-line bg-white/70 px-4 py-2">
                Visible baseline / template / program kits
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="#library"
                className="rounded-full bg-accent px-5 py-3 text-sm font-medium text-white transition hover:bg-[color:var(--accent-strong)]"
              >
                Browse the library
              </Link>
              <Link
                href="/run-with-claude-code"
                className="rounded-full border border-line px-5 py-3 text-sm font-medium text-ink transition hover:border-accent hover:text-accent"
              >
                Run a concrete example
              </Link>
            </div>
          </div>
          <div className="rounded-[30px] border border-line bg-[rgba(255,255,255,0.72)] p-5">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-muted">
                Experiment loop
              </p>
              <span className="rounded-full border border-line px-3 py-1 font-mono text-xs text-muted">
                24h to 90d signals
              </span>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {experimentSteps.map((step, index) => (
                <article
                  key={step.label}
                  className="rounded-[24px] border border-line bg-white/80 p-4"
                >
                  <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[rgba(212,91,55,0.14)] font-mono text-sm text-accent">
                    {index + 1}
                  </div>
                  <h2 className="text-lg font-semibold text-ink">{step.label}</h2>
                  <p className="mt-2 text-sm leading-7 text-muted">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-5">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.26em] text-muted">
              Source context
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-ink sm:text-3xl">
              Where this idea comes from.
            </h2>
          </div>
          <p className="hidden max-w-md text-sm leading-7 text-muted md:block">
            The concept is adapted from {"Karpathy's"} autonomous research loop and translated into business systems that can be templated, scored, and repeated.
          </p>
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          {sourceContext.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group rounded-[28px] border border-line bg-panel p-5 transition hover:-translate-y-1 hover:border-accent hover:shadow-[0_16px_45px_rgba(38,30,19,0.08)]"
            >
              <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-muted">
                {item.eyebrow}
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-ink transition group-hover:text-accent">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-muted">{item.description}</p>
              <p className="mt-5 font-mono text-xs uppercase tracking-[0.18em] text-accent">
                {item.action}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section id="categories" className="space-y-5">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.26em] text-muted">
              Explore by surface
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-ink sm:text-3xl">
              Each category is one repeatable operating loop.
            </h2>
          </div>
          <p className="hidden max-w-md text-sm leading-7 text-muted md:block">
            Browse copy systems, revenue operations handoffs, and procurement workflows through the same experiment architecture.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/category/${category.slug}`}
              className="group rounded-[28px] border border-line bg-panel p-5 transition hover:-translate-y-1 hover:border-accent hover:shadow-[0_16px_45px_rgba(38,30,19,0.08)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-3">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[rgba(212,91,55,0.14)] font-mono text-sm font-medium text-accent">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-ink">{category.name}</h3>
                    <p className="mt-2 text-sm leading-7 text-muted">
                      {category.description}
                    </p>
                  </div>
                </div>
                <span className="inline-flex min-w-[9.5rem] items-center justify-center rounded-full border border-line px-4 py-2 font-mono text-xs whitespace-nowrap text-muted">
                  {categoryCounts[category.slug]} templates
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="space-y-5">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.26em] text-muted">
              Concrete examples
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-ink sm:text-3xl">
              What one real loop looks like in practice.
            </h2>
          </div>
          <Link
            href="/run-with-claude-code"
            className="hidden text-sm font-medium text-accent transition hover:text-[color:var(--accent-strong)] md:block"
          >
            Full Claude Code walkthrough
          </Link>
        </div>
        <div className="grid gap-4 xl:grid-cols-3">
          {concreteExamples.map((example) => (
            <article key={example.title} className="rounded-[28px] border border-line bg-panel p-5">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-xl font-semibold text-ink">{example.title}</h3>
                <span className="rounded-full border border-line px-3 py-1 font-mono text-xs text-muted">
                  {example.metric}
                </span>
              </div>
              <div className="mt-5 space-y-4 text-sm leading-7 text-muted">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                    baseline
                  </p>
                  <p className="mt-1">{example.baseline}</p>
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                    test
                  </p>
                  <p className="mt-1">{example.test}</p>
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                    keep / discard
                  </p>
                  <p className="mt-1">{example.decision}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="featured" className="space-y-5">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.26em] text-muted">
              Featured loops
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-ink sm:text-3xl">
              Start with high-leverage templates that move quickly.
            </h2>
          </div>
          <p className="hidden max-w-md text-sm leading-7 text-muted md:block">
            These are the launch picks for teams that want a visible feedback cycle and a clean first test.
          </p>
        </div>
        <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
          {featuredLoops.map((loop) => {
            const category = categories.find((item) => item.slug === loop.category);

            return (
              <LoopCard
                key={loop.slug}
                loop={loop}
                categoryName={category?.name ?? loop.category}
              />
            );
          })}
        </div>
      </section>

      <DirectoryBrowser
        categories={categories}
        loops={loops}
        title="Search the full template directory"
        description="Use a lighter browser to narrow by category, signal speed, or a single search term. Each card now shows what the loop is actually testing instead of a wall of tags."
      />

      <section className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <article className="rounded-[30px] border border-line bg-panel p-6">
          <p className="text-[11px] font-medium uppercase tracking-[0.26em] text-muted">
            Why this shape works
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-ink">
            One system, many surfaces.
          </h2>
          <p className="mt-4 text-sm leading-7 text-muted">
            Landing pages, ads, pricing, and procurement requests look different on the surface, but the operating model is the same: fixed context, modifiable asset, observable metric, and a decision rule.
          </p>
        </article>
        <article className="rounded-[30px] border border-line bg-[rgba(44,106,143,0.08)] p-6">
          <p className="text-[11px] font-medium uppercase tracking-[0.26em] text-muted">
            What compounds
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <div className="rounded-[22px] border border-line bg-white/70 p-4">
              <h3 className="font-semibold text-ink">Signal collection</h3>
              <p className="mt-2 text-sm leading-7 text-muted">
                The same hooks and objections keep appearing across your outbound, pricing, and funnel assets.
              </p>
            </div>
            <div className="rounded-[22px] border border-line bg-white/70 p-4">
              <h3 className="font-semibold text-ink">Template memory</h3>
              <p className="mt-2 text-sm leading-7 text-muted">
                Winning variants become reusable building blocks rather than isolated campaign notes.
              </p>
            </div>
            <div className="rounded-[22px] border border-line bg-white/70 p-4">
              <h3 className="font-semibold text-ink">Learning velocity</h3>
              <p className="mt-2 text-sm leading-7 text-muted">
                Teams stop debating taste and start iterating against a visible score.
              </p>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}
