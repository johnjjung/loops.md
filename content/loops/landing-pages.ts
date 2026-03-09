export const landingPageLoops = [
  {
    slug: "pain-funnel-landing-page",
    title: "Pain-led solution page",
    category: "landing-pages",
    summary:
      "Turn problem-aware traffic into qualified demos by quantifying the cost of doing nothing before introducing the product.",
    audience:
      "B2B SaaS growth teams selling a clear revenue, productivity, or risk-reduction outcome.",
    tags: ["conversion", "landing page", "paid search"],
    signalSpeed: "Medium",
    primaryMetric: "Qualified conversion rate",
    variables: ["hero framing", "proof order", "CTA copy", "pain headline"],
    featured: true,
    baseline: {
      summary:
        "Keep the ICP, offer, and core proof fixed so the experiment only changes message framing.",
      bullets: [
        "Target one buyer persona with one high-cost problem.",
        "Keep pricing model, CTA destination, and hero proof constant.",
      ],
      snippet: `ICP: VP Growth at Series A/B SaaS
Problem: demo volume is flat while paid spend rises
Offer: conversion teardown + implementation plan
Guardrails:
- no fake urgency
- no unsupported claims
- one CTA only`,
    },
    template: {
      summary:
        "Lead with the cost of delay, then show how the product removes that drag with proof and a single CTA.",
      bullets: [
        "Open with an expensive symptom instead of a product feature.",
        "Stack proof directly above the CTA instead of below the fold.",
      ],
      snippet: `Hero: Your demo funnel is leaking high-intent buyers.
Subhead: See where qualified demand drops before pipeline feels it.
Proof row: 3 customer logos + one quantified result
CTA: Get the teardown`,
    },
    program: {
      summary:
        "Test one message angle against the current control and keep winners only if lead quality holds.",
      bullets: [
        "Run on one traffic source for at least 500 sessions per variant.",
        "Guard against vanity wins by checking qualified lead rate, not raw form fills.",
      ],
      snippet: `Window: 7 days
Primary metric: qualified conversion rate
Guardrail: demo show rate
Keep if: +15% qualified CVR and no drop in show rate
Discard if: lower intent or higher bounce`,
    },
    examples: [
      {
        title: "Cost framing beats feature framing",
        insight:
          "A hero focused on lost revenue per quarter can outperform a product-led headline when buyers already feel the problem.",
        payoff: "Higher demo intent from the same traffic",
      },
      {
        title: "Proof above the fold shortens evaluation",
        insight:
          "Moving the strongest case-study number above the CTA often lifts qualified submissions faster than adding more copy.",
        payoff: "Faster trust formation",
      },
    ],
    relatedSlugs: ["competitor-switch-landing-page", "roi-proof-landing-page"],
  },
  {
    slug: "competitor-switch-landing-page",
    title: "Competitor switch page",
    category: "landing-pages",
    summary:
      "Capture replacement demand by mapping the buyer's current tool frustrations to a cleaner migration narrative.",
    audience:
      "Teams selling against an entrenched incumbent and needing a page for switch-ready prospects.",
    tags: ["comparison", "migration", "switchers"],
    signalSpeed: "Medium",
    primaryMetric: "Demo request rate from comparison traffic",
    variables: ["comparison framing", "migration promise", "headline contrast", "CTA offer"],
    featured: false,
    baseline: {
      summary:
        "Fix the incumbent, the replacement story, and the migration proof so the test stays on positioning.",
      bullets: [
        "Use only buyer-observed pain points, not vague competitor attacks.",
        "Keep migration support details consistent across variants.",
      ],
      snippet: `Incumbent: category leader with slow setup and complex pricing
Promise: switch with low migration risk
Proof: one migration story + one time-to-value stat
Guardrails:
- no trademark misuse
- no unverifiable comparisons`,
    },
    template: {
      summary:
        "Structure the page as switch trigger -> migration safety -> proof -> CTA.",
      bullets: [
        "Name the moment when the current tool stops being good enough.",
        "Reduce risk before talking about upside.",
      ],
      snippet: `Hero: Outgrow [incumbent] without another six-month rollout.
Section: Why teams switch now
Section: What migration looks like in week 1
CTA: See the migration plan`,
    },
    program: {
      summary:
        "Measure whether the comparison framing brings in more serious replacement conversations, not just curiosity clicks.",
      bullets: [
        "Source traffic from branded search, review sites, and sales follow-ups.",
        "Track call notes for true incumbent usage to validate intent.",
      ],
      snippet: `Window: 14 days
Primary metric: demo request rate from comparison traffic
Guardrail: % of demos currently using incumbent
Keep if: +12% requests and incumbent-fit stays flat or better`,
    },
    examples: [
      {
        title: "Risk reduction first",
        insight:
          "Switch buyers often respond more to migration clarity than to feature superiority in the first scroll depth.",
        payoff: "Lower comparison-page bounce",
      },
      {
        title: "Buyer language beats vendor language",
        insight:
          "Listing real frustrations from loss notes usually outperforms internal product copy.",
        payoff: "Sharper demo qualification",
      },
    ],
    relatedSlugs: ["roi-proof-landing-page", "vertical-use-case-landing-page"],
  },
  {
    slug: "roi-proof-landing-page",
    title: "ROI proof page",
    category: "landing-pages",
    summary:
      "Win skeptical, spreadsheet-driven buyers with quantified outcomes, cost ranges, and short proof blocks.",
    audience:
      "B2B teams selling to finance-aware buyers who need a clear economic case before entering a call.",
    tags: ["roi", "proof", "pipeline"],
    signalSpeed: "Medium",
    primaryMetric: "ROI page to demo rate",
    variables: ["headline number", "proof density", "calculator CTA", "case-study order"],
    featured: true,
    baseline: {
      summary:
        "Keep the business case fixed around one economic promise and one proof set.",
      bullets: [
        "Use only validated customer numbers or conservative modeled ranges.",
        "Hold the CTA and proof assets constant while changing narrative emphasis.",
      ],
      snippet: `Offer: quantified business case
Primary proof: 3 customer numbers
Economic lens: pipeline, labor savings, or risk avoided
Guardrails:
- use ranges where precision is weak
- avoid unsupported ROI math`,
    },
    template: {
      summary:
        "Center the page on a single value equation and use short case-study evidence to support it.",
      bullets: [
        "Put the strongest number in the headline or subhead.",
        "Translate product outcomes into money, time, or risk.",
      ],
      snippet: `Headline: Recover 10 to 20 hours of sales capacity every week.
Value frame: where the savings show up
Proof cards: customer name -> metric -> timeframe
CTA: Build your ROI case`,
    },
    program: {
      summary:
        "Treat the page as a qualification asset and favor buyer seriousness over sheer volume.",
      bullets: [
        "Measure demo rate and pipeline quality together.",
        "Review assisted conversions from outbound and paid traffic.",
      ],
      snippet: `Window: 14 days
Primary metric: ROI page to demo rate
Guardrail: average sales-qualified pipeline per demo
Keep if: demo rate rises and SQO value stays neutral or better`,
    },
    examples: [
      {
        title: "Specific numbers reduce friction",
        insight:
          "A narrow outcome range usually converts better than broad promises like improve efficiency.",
        payoff: "Better self-qualification",
      },
      {
        title: "Case-study scannability matters",
        insight:
          "Short proof tiles often beat long testimonial paragraphs for financially minded buyers.",
        payoff: "More CTA clicks from mid-page visitors",
      },
    ],
    relatedSlugs: ["vertical-use-case-landing-page", "launch-waitlist-landing-page"],
  },
  {
    slug: "vertical-use-case-landing-page",
    title: "Vertical use-case page",
    category: "landing-pages",
    summary:
      "Tailor one core offer to a specific industry workflow so paid, outbound, and partner traffic land on familiar language.",
    audience:
      "Growth teams expanding into a new vertical and needing tighter category-language fit.",
    tags: ["vertical", "segmentation", "use case"],
    signalSpeed: "Medium",
    primaryMetric: "Vertical page qualified form rate",
    variables: ["industry language", "proof logos", "use-case order", "CTA promise"],
    featured: false,
    baseline: {
      summary:
        "Keep the product and offer fixed while changing the language, examples, and pain hierarchy for one segment.",
      bullets: [
        "One page should serve one industry or one workflow cluster.",
        "Proof and screenshots should match the segment whenever possible.",
      ],
      snippet: `Segment: one vertical only
Offer: same core product, same CTA
Proof: at least one segment-relevant customer or scenario
Guardrails:
- do not fake vertical expertise
- keep core promise consistent`,
    },
    template: {
      summary:
        "Show the segment-specific workflow first, then map the product into that sequence.",
      bullets: [
        "Mirror the vertical's own terms for teams, events, and systems.",
        "Anchor the narrative in one repeatable workflow instead of listing generic features.",
      ],
      snippet: `Headline: Built for revenue teams selling into multi-location healthcare groups.
Workflow blocks: intake -> qualification -> handoff -> reporting
Proof: customer quote from same segment
CTA: See the vertical playbook`,
    },
    program: {
      summary:
        "Compare the segment page against the generic page for the same traffic slice.",
      bullets: [
        "Source traffic from segment-specific campaigns or outbound follow-ups.",
        "Look for both conversion lift and better qualification comments.",
      ],
      snippet: `Window: 14 days
Primary metric: qualified form rate
Guardrail: meetings accepted by sales
Keep if: +10% qualified forms and better close-readiness in notes`,
    },
    examples: [
      {
        title: "Language fit changes attention",
        insight:
          "Replacing generic terminology with the buyer's actual workflow vocabulary often reduces bounce immediately.",
        payoff: "More engaged scroll depth",
      },
      {
        title: "Wrong proof feels obvious",
        insight:
          "Logos from adjacent segments can depress trust even when the product fit is real.",
        payoff: "Stronger segment resonance",
      },
    ],
    relatedSlugs: ["launch-waitlist-landing-page", "pain-funnel-landing-page"],
  },
  {
    slug: "launch-waitlist-landing-page",
    title: "Feature launch waitlist page",
    category: "landing-pages",
    summary:
      "Collect launch demand for a new feature or product wedge while learning which angle creates the strongest urgency.",
    audience:
      "Product marketing and growth teams testing demand before a full feature launch or expansion motion.",
    tags: ["launch", "waitlist", "demand capture"],
    signalSpeed: "Fast",
    primaryMetric: "Waitlist signup rate",
    variables: ["launch angle", "benefit framing", "urgency copy", "signup CTA"],
    featured: false,
    baseline: {
      summary:
        "Fix the launch asset, target audience, and signup action so the test isolates the positioning angle.",
      bullets: [
        "Keep the feature scope and access promise constant.",
        "Use one signup form and one audience per page variant.",
      ],
      snippet: `Feature: one launch wedge
Action: join waitlist / request early access
Audience: current customers or target prospects
Guardrails:
- no fake countdowns
- no vague feature promises`,
    },
    template: {
      summary:
        "Position the launch as an immediate workflow unlock and give buyers a reason to raise their hand early.",
      bullets: [
        "Use a concrete before-and-after statement instead of roadmap language.",
        "Make the CTA clear about what happens after signup.",
      ],
      snippet: `Headline: Be first to automate renewal prep without another spreadsheet.
Subhead: Join the launch list for guided early access.
CTA: Reserve a launch slot
Support: who this is built for + what unlocks on day one`,
    },
    program: {
      summary:
        "Optimize for demand quality, not raw list size, by tracking follow-through after signup.",
      bullets: [
        "Review signup source and launch-interest replies within 72 hours.",
        "Use activation intent or sales interest as a secondary screen.",
      ],
      snippet: `Window: 72 hours to 7 days
Primary metric: waitlist signup rate
Guardrail: qualified follow-up response rate
Keep if: signup rate rises and launch-intent quality holds`,
    },
    examples: [
      {
        title: "Specific launch promises outperform generic early access copy",
        insight:
          "Naming the exact workflow the feature replaces often raises signups more than a broad product teaser.",
        payoff: "Higher intent list growth",
      },
      {
        title: "Clarity beats hype",
        insight:
          "Waitlist pages often do better when they explain what access means instead of leaning on vague exclusivity.",
        payoff: "Cleaner post-signup follow-through",
      },
    ],
    relatedSlugs: ["pain-funnel-landing-page", "competitor-switch-landing-page"],
  },
];
