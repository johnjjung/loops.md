import Link from "next/link";

const contributionSteps = [
  "Choose the closest category in content/loops.",
  "Follow the LoopTemplate shape from src/lib/types.ts.",
  "Keep the baseline, template, and program sections explicit.",
  "Open a GitHub pull request with the new or updated loop.",
];

export default function ContributePage() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-5 pb-16 pt-6 sm:px-8 lg:px-10">
      <section className="rounded-[34px] border border-line bg-panel-strong p-6 shadow-[0_18px_60px_rgba(38,30,19,0.07)] lg:p-10">
        <p className="text-[11px] font-medium uppercase tracking-[0.26em] text-muted">
          Open-source contribution flow
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-[-0.05em] text-ink sm:text-5xl">
          Submit new loops through GitHub pull requests.
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-muted sm:text-lg">
          loops.md is intentionally repo-backed. There is no marketplace, login wall, or hidden CMS. The fastest way to improve the library is to ship structured content changes in public.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            href="https://github.com/johnjjung/loops.md"
            className="rounded-full bg-accent px-5 py-3 text-sm font-medium text-white transition hover:bg-[color:var(--accent-strong)]"
          >
            Open the repository
          </Link>
          <Link
            href="https://github.com/johnjjung/loops.md/tree/main/content/loops"
            className="rounded-full border border-line px-5 py-3 text-sm font-medium text-ink transition hover:border-accent hover:text-accent"
          >
            Browse content files
          </Link>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {contributionSteps.map((step, index) => (
          <article
            key={step}
            className="rounded-[28px] border border-line bg-panel p-5"
          >
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[rgba(212,91,55,0.14)] font-mono text-sm text-accent">
              {index + 1}
            </div>
            <p className="mt-4 text-base leading-8 text-ink">{step}</p>
          </article>
        ))}
      </section>

      <section className="rounded-[30px] border border-line bg-[rgba(44,106,143,0.08)] p-6">
        <p className="text-[11px] font-medium uppercase tracking-[0.26em] text-muted">
          What good submissions include
        </p>
        <div className="mt-4 grid gap-4 lg:grid-cols-3">
          <div className="rounded-[22px] border border-line bg-white/75 p-4">
            <h2 className="font-semibold text-ink">Real signal</h2>
            <p className="mt-2 text-sm leading-7 text-muted">
              Pick one primary metric and one review window that a team can actually observe.
            </p>
          </div>
          <div className="rounded-[22px] border border-line bg-white/75 p-4">
            <h2 className="font-semibold text-ink">Concrete assets</h2>
            <p className="mt-2 text-sm leading-7 text-muted">
              The template snippet should be specific enough that another operator can adapt it immediately.
            </p>
          </div>
          <div className="rounded-[22px] border border-line bg-white/75 p-4">
            <h2 className="font-semibold text-ink">Tight guardrails</h2>
            <p className="mt-2 text-sm leading-7 text-muted">
              Baselines should clarify audience, non-negotiables, and what the experiment is not allowed to change.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
