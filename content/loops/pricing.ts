export const pricingLoops = [
  {
    slug: "packaging-test-matrix",
    title: "Packaging test matrix",
    category: "pricing",
    summary:
      "Reframe plans and bundle boundaries so buyers understand the right package faster and sales spends less time requalifying.",
    audience:
      "Revenue teams iterating on plan names, feature bundles, and who each package is for.",
    tags: ["pricing", "packaging", "plans"],
    signalSpeed: "Medium",
    primaryMetric: "Pricing-page to pipeline rate",
    variables: ["plan naming", "bundle boundaries", "feature order", "persona framing"],
    featured: true,
    baseline: {
      summary:
        "Keep core economics fixed while testing how plans are framed, named, and differentiated.",
      bullets: [
        "Do not change underlying pricing mechanics in the same experiment as packaging language.",
        "Keep the CTA and contact path fixed across variants.",
      ],
      snippet: `Economics: unchanged
Plans: same commercial constraints
Audience: one buying motion
Guardrails:
- no hidden pricing changes
- one packaging hypothesis at a time`,
    },
    template: {
      summary:
        "Name each plan by the stage or outcome it fits, then explain why a buyer would choose it.",
      bullets: [
        "Use buyer language for fit, not internal org language.",
        "Clarify upgrade logic in the layout itself.",
      ],
      snippet: `Plan 1: get the team started
Plan 2: centralize and measure
Plan 3: govern at scale
Support line: who each plan is built for`,
    },
    program: {
      summary:
        "Measure whether the new packaging frame creates more serious buying conversations and fewer wrong-fit demos.",
      bullets: [
        "Track pricing-page conversion and plan-fit notes from sales.",
        "Review downgrade or mismatch signals within the first call.",
      ],
      snippet: `Window: 14 days
Primary metric: pricing-page to pipeline rate
Guardrail: wrong-fit demo share
Keep if: pipeline rises and wrong-fit share drops or stays flat`,
    },
    examples: [
      {
        title: "Buyer-stage labels reduce confusion",
        insight:
          "Plans named around maturity or outcome often outperform abstract tiers like Pro or Business.",
        payoff: "Cleaner self-selection",
      },
      {
        title: "Feature order implies intent",
        insight:
          "The first features buyers see can accidentally define the product category.",
        payoff: "Better plan understanding",
      },
    ],
    relatedSlugs: ["pricing-page-anchor", "annual-plan-saver"],
  },
  {
    slug: "pricing-page-anchor",
    title: "Pricing page anchor test",
    category: "pricing",
    summary:
      "Shift willingness-to-buy by changing the reference point buyers see first on the pricing page.",
    audience:
      "Teams selling multiple price points and trying to change how prospects interpret value density.",
    tags: ["anchor", "pricing page", "value"],
    signalSpeed: "Medium",
    primaryMetric: "Pricing-page CTA rate",
    variables: ["anchor placement", "annual savings callout", "plan order", "highlight treatment"],
    featured: false,
    baseline: {
      summary:
        "Keep pricing levels fixed so the test only changes what reference point the buyer sees first.",
      bullets: [
        "Do not change discounting and anchor design in the same round.",
        "Use one recommended plan at a time.",
      ],
      snippet: `Price points: fixed
Audience: same inbound or paid mix
CTA: unchanged
Guardrails:
- one anchor strategy per variant
- same checkout or booking path`,
    },
    template: {
      summary:
        "Use visual emphasis and order to shape the perceived center of gravity on the page.",
      bullets: [
        "Test whether buyers respond better to a premium anchor or a savings anchor.",
        "Keep value explanation close to the highlighted plan.",
      ],
      snippet: `Variant A: premium plan first
Variant B: middle plan centered and highlighted
Variant C: annual savings callout above plans
CTA: start evaluation`,
    },
    program: {
      summary:
        "Use pricing-page engagement and downstream quality together to avoid shallow anchor wins.",
      bullets: [
        "Track CTA rate, plan selection, and close-readiness from follow-up.",
        "Watch for anchoring that increases clicks but reduces serious intent.",
      ],
      snippet: `Window: 14 days
Primary metric: pricing-page CTA rate
Guardrail: sales-qualified opportunity rate
Keep if: CTA rate rises and SQO rate does not fall`,
    },
    examples: [
      {
        title: "The center card sets the mental model",
        insight:
          "Many buyers interpret the visually centered plan as the default recommendation even if copy says otherwise.",
        payoff: "More deliberate plan selection",
      },
      {
        title: "Savings anchors can work better than premium anchors",
        insight:
          "For cost-sensitive motions, annual savings sometimes outperforms a luxury-style premium anchor.",
        payoff: "Higher pricing-page engagement",
      },
    ],
    relatedSlugs: ["annual-plan-saver", "trial-vs-demo-router"],
  },
  {
    slug: "annual-plan-saver",
    title: "Annual plan saver",
    category: "pricing",
    summary:
      "Increase annual plan adoption by reframing the commitment around savings, governance, and implementation leverage.",
    audience:
      "Teams with monthly and annual options that want more predictable revenue without relying on discount-only messaging.",
    tags: ["annual", "commitment", "retention"],
    signalSpeed: "Medium",
    primaryMetric: "Annual selection rate",
    variables: ["annual framing", "savings copy", "governance proof", "implementation benefit"],
    featured: false,
    baseline: {
      summary:
        "Keep the price delta fixed and test only how the annual motion is justified.",
      bullets: [
        "Use the same discount level across variants.",
        "Focus on one commitment rationale per variant.",
      ],
      snippet: `Monthly vs annual: same economics
Audience: self-serve or sales-assisted buyers
Guardrails:
- no hidden discount changes
- keep payment flow fixed`,
    },
    template: {
      summary:
        "Frame annual as a better operating decision, not just a cheaper one.",
      bullets: [
        "Pair savings with operational benefits like rollout support or governance features.",
        "Use short risk-reduction language for the commitment step.",
      ],
      snippet: `Annual value frame: lower total cost + faster implementation support
Support block: what annual buyers unlock
CTA: choose annual and launch faster`,
    },
    program: {
      summary:
        "Keep annual plan experiments honest by measuring whether higher commitment also improves retention quality.",
      bullets: [
        "Track annual selection and first-30-day activation side by side.",
        "Avoid wins that force annual adoption without product fit.",
      ],
      snippet: `Window: 14 to 30 days
Primary metric: annual selection rate
Guardrail: first-30-day activation rate
Keep if: annual mix rises and activation stays healthy`,
    },
    examples: [
      {
        title: "Operational value helps justify commitment",
        insight:
          "Buyers often respond better to launch or governance benefits than to raw discount percentages alone.",
        payoff: "More durable annual adoption",
      },
      {
        title: "Discount-first framing can cheapen the decision",
        insight:
          "Too much emphasis on savings alone can attract the wrong buying psychology.",
        payoff: "Higher-quality annual mix",
      },
    ],
    relatedSlugs: ["trial-vs-demo-router", "enterprise-faq-loop"],
  },
  {
    slug: "trial-vs-demo-router",
    title: "Trial versus demo router",
    category: "pricing",
    summary:
      "Route buyers into the right next step by matching pricing-page CTAs to complexity and urgency instead of offering the same path to everyone.",
    audience:
      "Companies with both product-led and sales-led motions that need better pathing from the pricing page.",
    tags: ["routing", "trial", "demo"],
    signalSpeed: "Fast",
    primaryMetric: "Qualified next-step rate",
    variables: ["CTA split", "route criteria", "self-serve framing", "sales framing"],
    featured: true,
    baseline: {
      summary:
        "Keep plans and economics fixed while changing how the page directs buyers into trial or demo paths.",
      bullets: [
        "The routing logic should match product complexity and buyer readiness.",
        "Use the same form depth for each path across variants.",
      ],
      snippet: `Paths: trial and demo
Audience: mixed complexity buyers
Guardrails:
- do not hide one route entirely without intent
- keep qualification logic explicit`,
    },
    template: {
      summary:
        "Explain which route fits which buyer so the choice feels guided, not arbitrary.",
      bullets: [
        "Use one sentence that helps the prospect self-route.",
        "Make path differences concrete: setup speed, support, or complexity.",
      ],
      snippet: `CTA 1: Start a trial if your team can launch fast.
CTA 2: Book a demo if you need rollout help or security review.
Decision note: who each path is for`,
    },
    program: {
      summary:
        "Optimize for the right next step, not the highest click volume on a single button.",
      bullets: [
        "Measure completion and downstream qualification by path.",
        "Review whether the routing reduces dead-end handoffs.",
      ],
      snippet: `Window: 7 to 14 days
Primary metric: qualified next-step rate
Guardrail: handoff failure or no-show rate
Keep if: path fit improves and bad handoffs decline`,
    },
    examples: [
      {
        title: "Guided routing reduces wrong-path conversions",
        insight:
          "Short explanatory copy near the CTA can meaningfully improve self-selection quality.",
        payoff: "Better follow-through",
      },
      {
        title: "A single CTA can hide demand",
        insight:
          "Mixed motions often underperform when every buyer is forced into one path.",
        payoff: "Cleaner monetization split",
      },
    ],
    relatedSlugs: ["enterprise-faq-loop", "packaging-test-matrix"],
  },
  {
    slug: "enterprise-faq-loop",
    title: "Enterprise pricing FAQ",
    category: "pricing",
    summary:
      "Reduce enterprise friction with a pricing-adjacent FAQ that answers security, rollout, and procurement concerns before the first call.",
    audience:
      "Teams selling larger contracts where buyers need policy and process answers alongside pricing clarity.",
    tags: ["enterprise", "faq", "procurement"],
    signalSpeed: "Medium",
    primaryMetric: "Enterprise demo request rate",
    variables: ["FAQ order", "procurement copy", "security proof", "CTA handoff"],
    featured: false,
    baseline: {
      summary:
        "Keep the set of enterprise concerns fixed so the loop tests prioritization and answer structure.",
      bullets: [
        "Source the questions from real security, legal, and procurement threads.",
        "Keep the pricing promise and CTA path constant.",
      ],
      snippet: `Audience: enterprise evaluators
Questions: security, rollout, support, procurement
Guardrails:
- answer with policy reality
- do not over-promise custom work`,
    },
    template: {
      summary:
        "Answer the highest-friction enterprise questions directly and route the buyer to the right next conversation.",
      bullets: [
        "Lead with the questions that block buying momentum most often.",
        "Use proof like certifications, timelines, and referenceable process details.",
      ],
      snippet: `FAQ 1: how security review works
FAQ 2: expected rollout timeline
FAQ 3: support and governance
CTA: start the evaluation process`,
    },
    program: {
      summary:
        "Measure whether the FAQ changes the quality and speed of enterprise inbound rather than chasing generic page engagement.",
      bullets: [
        "Track enterprise demo requests and time-to-first-procurement question.",
        "Look for smoother handoffs into sales and solutions.",
      ],
      snippet: `Window: 14 to 21 days
Primary metric: enterprise demo request rate
Guardrail: time to procurement or security engagement
Keep if: enterprise requests rise and process friction drops`,
    },
    examples: [
      {
        title: "Policy clarity reduces hidden friction",
        insight:
          "Enterprise buyers often convert faster when they know the review process before talking to sales.",
        payoff: "Shorter early-stage cycles",
      },
      {
        title: "FAQ order signals maturity",
        insight:
          "The way answers are prioritized can shape whether the vendor feels enterprise-ready.",
        payoff: "Better enterprise trust",
      },
    ],
    relatedSlugs: ["packaging-test-matrix", "pricing-page-anchor"],
  },
];
