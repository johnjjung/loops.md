export const aeoSeoLoops = [
  {
    slug: "comparison-brief",
    title: "Comparison article brief",
    category: "aeo-seo",
    summary:
      "Capture high-intent comparison searches with a repeatable article format that answers the real switching question quickly.",
    audience:
      "Content and demand teams targeting buyers already evaluating multiple tools or approaches.",
    tags: ["seo", "comparison", "intent"],
    signalSpeed: "Medium",
    primaryMetric: "Organic assisted demo rate",
    variables: ["comparison frame", "proof density", "answer order", "CTA placement"],
    featured: true,
    baseline: {
      summary:
        "Keep the competing options and core proof fixed so the experiment changes answer structure, not topic selection.",
      bullets: [
        "Focus on one real comparison query with commercial intent.",
        "Use balanced language and buyer-relevant criteria only.",
      ],
      snippet: `Query: [your product] vs [alternative]
Intent: active evaluation
Proof: customer scenarios + criteria table
Guardrails:
- no bad-faith competitor framing
- no thin content`,
    },
    template: {
      summary:
        "Open with a direct answer, then move into decision criteria, trade-offs, and a low-friction CTA.",
      bullets: [
        "Answer the query before adding context.",
        "Use a decision framework instead of a feature dump.",
      ],
      snippet: `Section 1: short answer for who each option fits
Section 2: decision criteria table
Section 3: migration or trade-off notes
CTA: see the side-by-side walkthrough`,
    },
    program: {
      summary:
        "Measure business intent, not just rankings, by tying page sessions to assisted pipeline or demo creation.",
      bullets: [
        "Track engaged sessions, CTA clicks, and assisted demo creation.",
        "Treat ranking gains as secondary to commercial behavior.",
      ],
      snippet: `Window: 30 days
Primary metric: organic assisted demo rate
Guardrail: engaged session depth
Keep if: assisted demos rise without lowering content quality`,
    },
    examples: [
      {
        title: "Direct answers help answer engines",
        insight:
          "Short answer blocks near the top improve both human scanning and machine extraction.",
        payoff: "Better qualified organic traffic",
      },
      {
        title: "Decision criteria beat feature lists",
        insight:
          "Comparison pages perform better when buyers can self-sort quickly.",
        payoff: "More commercial clicks",
      },
    ],
    relatedSlugs: ["jtbd-faq-cluster", "answer-engine-landing-blocks"],
  },
  {
    slug: "jtbd-faq-cluster",
    title: "JTBD FAQ cluster",
    category: "aeo-seo",
    summary:
      "Build answerable FAQ clusters around the job buyers are trying to complete, not just product terminology.",
    audience:
      "Teams that want organic discovery from problem queries, implementation questions, and workflow-specific searches.",
    tags: ["faq", "jobs-to-be-done", "answers"],
    signalSpeed: "Slow",
    primaryMetric: "Qualified organic sessions",
    variables: ["question framing", "FAQ order", "answer depth", "internal link pattern"],
    featured: false,
    baseline: {
      summary:
        "Choose one job, one audience, and one set of linked questions to avoid bloated clusters.",
      bullets: [
        "Questions should come from real calls, support threads, or search console data.",
        "Keep the CTA light so the page remains answer-first.",
      ],
      snippet: `Job: one operational outcome
Question set: 6 to 10 related queries
Audience: one buyer or operator persona
Guardrails:
- answer first
- product mention only where helpful`,
    },
    template: {
      summary:
        "Structure the cluster around the natural journey from definition to execution to risk.",
      bullets: [
        "Group questions by the buyer's sequence, not by your internal taxonomy.",
        "Use short direct answer blocks before deeper explanation.",
      ],
      snippet: `Question 1: what is it
Question 2: when does it break
Question 3: how to measure it
Question 4: how teams fix it
CTA: see the implementation checklist`,
    },
    program: {
      summary:
        "Run these as slower loops and optimize for engagement quality and assisted conversion over time.",
      bullets: [
        "Review search queries, internal click-through, and assisted conversion monthly.",
        "Promote questions that start showing commercial signals into standalone assets.",
      ],
      snippet: `Window: 30 to 60 days
Primary metric: qualified organic sessions
Guardrail: assisted signup or demo rate
Keep if: qualified discovery compounds month over month`,
    },
    examples: [
      {
        title: "Buyer-sequence order matters",
        insight:
          "Clusters perform better when they mirror the real order of questions from calls and implementation threads.",
        payoff: "Higher answer depth",
      },
      {
        title: "FAQ pages become discovery hubs",
        insight:
          "The best FAQ pages often seed multiple later pages once one question begins to monetize.",
        payoff: "Better content leverage",
      },
    ],
    relatedSlugs: ["answer-engine-landing-blocks", "proof-case-study-pack"],
  },
  {
    slug: "answer-engine-landing-blocks",
    title: "Answer-engine landing blocks",
    category: "aeo-seo",
    summary:
      "Refactor solution pages into block-level answers that search and answer engines can extract without losing conversion intent.",
    audience:
      "Teams adapting commercial pages for AI summaries, rich snippets, and answer-first discovery behaviors.",
    tags: ["aeo", "solution page", "structured answers"],
    signalSpeed: "Medium",
    primaryMetric: "Organic answer-block CTR",
    variables: ["answer block length", "schema placement", "proof adjacency", "CTA softness"],
    featured: true,
    baseline: {
      summary:
        "Hold the page intent and CTA fixed while changing how quickly the answer becomes extractable.",
      bullets: [
        "Keep one core commercial outcome per page.",
        "Add extractable answer blocks without turning the page into a glossary.",
      ],
      snippet: `Page type: commercial solution page
Intent: problem-aware buyer
Proof: one core customer result
Guardrails:
- answer fast
- preserve conversion path`,
    },
    template: {
      summary:
        "Use short answer blocks, explicit question headings, and proof immediately after the answer statement.",
      bullets: [
        "Make the answer understandable out of context.",
        "Place commercial proof directly after the answer block.",
      ],
      snippet: `H2: How do revenue teams reduce lead response lag?
Answer block: 2 to 3 sentence direct answer
Proof block: one customer metric
CTA: see the workflow`,
    },
    program: {
      summary:
        "Judge the page on discoverability gains and whether commercial behavior stays intact.",
      bullets: [
        "Track organic CTR, engaged time, and assisted conversion together.",
        "Avoid extractable answers that detach completely from the product context.",
      ],
      snippet: `Window: 21 to 30 days
Primary metric: organic answer-block CTR
Guardrail: assisted conversion rate
Keep if: visibility rises and assisted intent stays flat or better`,
    },
    examples: [
      {
        title: "Proof next to the answer matters",
        insight:
          "Answer blocks that immediately show one result feel more trustworthy and commercially relevant.",
        payoff: "Better click quality",
      },
      {
        title: "Answerable does not mean generic",
        insight:
          "The strongest pages answer the problem directly while still preserving a distinctive angle.",
        payoff: "Higher commercial intent retention",
      },
    ],
    relatedSlugs: ["proof-case-study-pack", "glossary-definition-loop"],
  },
  {
    slug: "proof-case-study-pack",
    title: "Proof-forward case study pack",
    category: "aeo-seo",
    summary:
      "Turn one customer story into an answerable case-study format that can rank, get cited, and support buying conversations.",
    audience:
      "Content teams with strong customer outcomes that need more search visibility and reusability.",
    tags: ["case study", "proof", "content"],
    signalSpeed: "Slow",
    primaryMetric: "Assisted pipeline from proof content",
    variables: ["headline framing", "story order", "proof density", "quote usage"],
    featured: false,
    baseline: {
      summary:
        "Fix the customer story and result while experimenting with the framing and answer structure.",
      bullets: [
        "One story should map to one buyer problem clearly.",
        "Use quotable proof snippets near the top of the page.",
      ],
      snippet: `Customer: one named or anonymized case
Result: one primary outcome
Audience: one buyer type
Guardrails:
- no inflated attribution
- keep the timeline clear`,
    },
    template: {
      summary:
        "Lead with the outcome, explain the starting point quickly, then show the intervention and the result stack.",
      bullets: [
        "Use short extractable answer lines throughout the story.",
        "Keep the case study scannable enough for both research and sales reuse.",
      ],
      snippet: `Outcome headline
Starting point in 3 bullets
What changed in the workflow
Results stack with timeframes
CTA: see the full playbook`,
    },
    program: {
      summary:
        "Treat proof content as a slower compounding loop and optimize for assisted commercial impact.",
      bullets: [
        "Review organic entry queries, sales reuse, and assisted pipeline monthly.",
        "Promote the best-performing proof lines into ads, pages, and outreach.",
      ],
      snippet: `Window: 30 to 60 days
Primary metric: assisted pipeline from proof content
Guardrail: engaged sessions
Keep if: sales reuse and assisted influence increase`,
    },
    examples: [
      {
        title: "Outcome-first case studies get read",
        insight:
          "Buyers often decide whether to continue reading within the first metric and company context.",
        payoff: "More proof consumption",
      },
      {
        title: "Reusable proof beats long narrative",
        insight:
          "Short proof atoms make case studies more useful across search, sales, and ads.",
        payoff: "Higher content leverage",
      },
    ],
    relatedSlugs: ["glossary-definition-loop", "comparison-brief"],
  },
  {
    slug: "glossary-definition-loop",
    title: "Glossary definition page",
    category: "aeo-seo",
    summary:
      "Own high-frequency category terms with a definition page that quickly moves from meaning to buying context.",
    audience:
      "Teams in emerging or noisy categories where buyer language is still unstable or overloaded.",
    tags: ["glossary", "definition", "category"],
    signalSpeed: "Slow",
    primaryMetric: "Definition-page assisted signup rate",
    variables: ["definition style", "example depth", "commercial handoff", "FAQ set"],
    featured: false,
    baseline: {
      summary:
        "Fix the target term and audience while changing how much explanation and context the page provides.",
      bullets: [
        "Start with one term that actually matters to pipeline, not just traffic.",
        "Keep the definition accurate, plain, and non-promotional.",
      ],
      snippet: `Term: one category concept
Audience: one buyer or operator type
Outcome: educate then route
Guardrails:
- no jargon loops
- no keyword stuffing`,
    },
    template: {
      summary:
        "Answer what it is, why it matters, what to avoid, and where the reader should go next.",
      bullets: [
        "Use a plain-language definition before introducing your point of view.",
        "Bridge definition traffic into a more commercial or deeper educational page.",
      ],
      snippet: `Definition in 2 sentences
Why teams care now
Common mistakes
How to evaluate solutions
CTA: explore the operating guide`,
    },
    program: {
      summary:
        "Optimize glossary pages for qualified education, not empty pageview growth.",
      bullets: [
        "Track assisted signups, internal click depth, and query quality.",
        "Prune pages that rank for non-buyer traffic only.",
      ],
      snippet: `Window: 30 to 60 days
Primary metric: assisted signup rate
Guardrail: internal click-through to commercial or deep pages
Keep if: definition traffic progresses into buyer journeys`,
    },
    examples: [
      {
        title: "Plain language wins extraction",
        insight:
          "Simple definitions tend to travel better into snippets and answer-engine summaries.",
        payoff: "Broader discovery",
      },
      {
        title: "Commercial handoff cannot be abrupt",
        insight:
          "Readers convert better when the next step feels like a natural extension of the definition.",
        payoff: "Better assisted conversion",
      },
    ],
    relatedSlugs: ["comparison-brief", "jtbd-faq-cluster"],
  },
];
