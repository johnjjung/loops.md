import Link from "next/link";

const setupSteps = [
  {
    title: "1. Install Claude Code and start in a clean folder",
    body:
      "Use Claude Code exactly like a coding project. The loop lives in three files plus a small results file that you refresh after each send batch.",
    code: `curl -fsSL https://claude.ai/install.sh | bash
mkdir cold-outreach-loop
cd cold-outreach-loop
claude --permission-mode plan`,
  },
  {
    title: "2. Ask Claude Code to create the loop kit",
    body:
      "Start in plan mode first so Claude maps the files and the workflow before it writes anything. Then switch to a normal session and have it generate the initial files.",
    code: `Create a cold outreach experiment loop for VP Growth at Series B SaaS companies.
Make these files:
- baseline.md
- template.json
- program.md
- results.csv

The loop should optimize positive reply rate over a 72 hour window.
Only change the opener between variants.
Keep subject line and CTA fixed.
Use plain language and realistic business constraints.`,
  },
  {
    title: "3. Run one iteration after every send batch",
    body:
      "Once your sending tool has written the latest outcomes into results.csv, use Claude Code to score the batch and decide what survives into the next round.",
    code: `Read baseline.md, template.json, program.md, and results.csv.
Score each variant on positive reply rate.
Reject any winner if complaint rate increased.
Create the next 3 variants by only changing the opener.
Keep the control in the file set so I can compare the next batch.`,
  },
];

const fileExamples = [
  {
    name: "baseline.md",
    description: "The fixed context Claude should not rewrite every round.",
    code: `ICP: VP Growth at Series B SaaS
Offer: 5 minute teardown of reply quality
Guardrails:
- no fake personalization
- no guilt language
- no more than 90 words per email
- keep subject line and CTA fixed for this round`,
  },
  {
    name: "template.json",
    description: "The mutable asset Claude keeps regenerating.",
    code: `{
  "subject_line": "quick thought on reply quality",
  "opener": "Most teams add volume before fixing the angle.",
  "body_bridge": "Usually the leak is in how the first line frames the risk.",
  "cta": "Worth sending the teardown?"
}`,
  },
  {
    name: "program.md",
    description: "The scoring rule and the keep-discard logic.",
    code: `Goal: increase positive reply rate
Window: 72 hours
Primary metric: positive reply rate
Guardrail metric: complaint rate
Keep if:
- winner beats control by at least 20 percent
- complaint rate does not increase
Discard if:
- replies are neutral instead of positive
- complaint rate rises`,
  },
];

const operationalNotes = [
  "Claude Code is generating the structured assets and the next variants, not sending the emails for you.",
  "You still need a sender and a measurement source to append the latest outcomes into results.csv or a similar file.",
  "This works best when one variable changes per round. If you change the opener, do not also change the subject line or CTA in the same batch.",
  "The same pattern translates to pricing pages, onboarding emails, AP reminders, and procurement review packets once you can score the result consistently.",
];

export default function RunWithClaudeCodePage() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-5 pb-16 pt-6 sm:px-8 lg:px-10">
      <section className="rounded-[34px] border border-line bg-panel-strong p-6 shadow-[0_18px_60px_rgba(38,30,19,0.07)] lg:p-10">
        <p className="text-[11px] font-medium uppercase tracking-[0.26em] text-muted">
          Concrete execution example
        </p>
        <h1 className="mt-3 max-w-4xl text-4xl font-semibold tracking-[-0.05em] text-ink sm:text-5xl">
          How to run one real loop with Claude Code.
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-muted sm:text-lg">
          This page shows one concrete business loop: cold outreach for a B2B growth team. The structure is adapted from Karpathy&apos;s <Link href="https://x.com/karpathy/status/2030371219518931079" className="text-accent underline decoration-accent/40 underline-offset-4">original autoresearch post</Link> and the <Link href="https://github.com/karpathy/autoresearch" className="text-accent underline decoration-accent/40 underline-offset-4">karpathy/autoresearch repo</Link>, but translated into a marketing workflow you can actually run.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            href="https://code.claude.com/docs/en/quickstart"
            className="rounded-full bg-accent px-5 py-3 text-sm font-medium text-white transition hover:bg-[color:var(--accent-strong)]"
          >
            Claude Code quickstart
          </Link>
          <Link
            href="https://code.claude.com/docs/en/tutorials"
            className="rounded-full border border-line px-5 py-3 text-sm font-medium text-ink transition hover:border-accent hover:text-accent"
          >
            Claude Code workflows
          </Link>
        </div>
      </section>

      <section className="space-y-4">
        {setupSteps.map((step) => (
          <article
            key={step.title}
            className="rounded-[28px] border border-line bg-panel p-5 lg:grid lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-6 lg:p-6"
          >
            <div>
              <h2 className="text-xl font-semibold text-ink">{step.title}</h2>
              <p className="mt-3 text-sm leading-7 text-muted">{step.body}</p>
            </div>
            <pre className="mt-5 overflow-x-auto rounded-[24px] border border-line bg-[#1f1b17] p-4 font-mono text-xs leading-6 text-[#f7ebde] lg:mt-0 lg:p-5">
              {step.code}
            </pre>
          </article>
        ))}
      </section>

      <section className="space-y-5">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.26em] text-muted">
            Concrete file set
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-ink sm:text-3xl">
            The exact files Claude Code should maintain.
          </h2>
        </div>
        <div className="grid gap-4 xl:grid-cols-3">
          {fileExamples.map((file) => (
            <article key={file.name} className="rounded-[28px] border border-line bg-panel p-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
                {file.name}
              </p>
              <p className="mt-3 text-sm leading-7 text-muted">{file.description}</p>
              <pre className="mt-5 overflow-x-auto rounded-[24px] border border-line bg-[#1f1b17] p-4 font-mono text-xs leading-6 text-[#f7ebde]">
                {file.code}
              </pre>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
        <article className="rounded-[30px] border border-line bg-panel p-6">
          <p className="text-[11px] font-medium uppercase tracking-[0.26em] text-muted">
            Results file pattern
          </p>
          <p className="mt-4 text-sm leading-7 text-muted">
            After each send batch, append the measured outcomes to `results.csv` so Claude can decide whether to keep or discard the last round.
          </p>
          <pre className="mt-5 overflow-x-auto rounded-[24px] border border-line bg-[#1f1b17] p-4 font-mono text-xs leading-6 text-[#f7ebde]">
            {`variant_id,opener,sent,positive_replies,neutral_replies,complaints
control,"Most teams add volume before fixing the angle.",100,2,6,0
variant_b,"Most reply problems start before the CTA.",100,3,4,0
variant_c,"Teams usually blame list quality before message angle.",100,1,5,1`}
          </pre>
        </article>
        <article className="rounded-[30px] border border-line bg-[rgba(44,106,143,0.08)] p-6">
          <p className="text-[11px] font-medium uppercase tracking-[0.26em] text-muted">
            What Claude should return
          </p>
          <div className="mt-4 space-y-3 text-sm leading-7 text-muted">
            <p>1. A short scorecard naming the control, the winner, and whether the guardrail held.</p>
            <p>2. A keep-discard decision using the exact threshold from `program.md`.</p>
            <p>3. Three new opener variants for the next batch, with subject line and CTA untouched.</p>
            <p>4. One sentence explaining what the system learned from the winning opener.</p>
          </div>
          <Link
            href="/loops/pain-signal-cold-email"
            className="mt-6 inline-flex rounded-full border border-line bg-white/75 px-4 py-3 text-sm font-medium text-ink transition hover:border-accent hover:text-accent"
          >
            See the related loop template
          </Link>
        </article>
      </section>

      <section className="rounded-[30px] border border-line bg-panel p-6">
        <p className="text-[11px] font-medium uppercase tracking-[0.26em] text-muted">
          Operational notes
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {operationalNotes.map((note) => (
            <div key={note} className="rounded-[22px] border border-line bg-white/75 px-4 py-4 text-sm leading-7 text-muted">
              {note}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
