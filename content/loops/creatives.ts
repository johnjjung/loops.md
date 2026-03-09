export const creativesLoops = [
  {
    slug: "hook-angle-ad-matrix",
    title: "Hook angle ad matrix",
    category: "creatives",
    summary:
      "Generate a controlled set of creative hooks around one offer so paid teams can isolate which angle earns the click.",
    audience:
      "Performance marketing teams running social or display spend with enough volume to test multiple ad hooks weekly.",
    tags: ["creative", "ads", "hooks"],
    signalSpeed: "Fast",
    primaryMetric: "Outbound click-through rate",
    variables: ["hook angle", "first line", "proof style", "thumb-stopper visual"],
    featured: true,
    baseline: {
      summary:
        "Fix the audience, offer, and CTA while rotating only the creative angle and first-frame message.",
      bullets: [
        "Keep channel, budget, and targeting constant across variants.",
        "Use one visual system so the test does not blur message and design changes.",
      ],
      snippet: `Offer: one clear action
Audience: one paid segment
CTA: same destination and form
Guardrails:
- one new variable per variant
- keep spend split even`,
    },
    template: {
      summary:
        "Build a creative matrix where each row is a hook family and each column is a visual or proof style.",
      bullets: [
        "Pair every hook with a matching proof or demonstration line.",
        "Name the buyer tension in the first sentence, not the second.",
      ],
      snippet: `Angle A: revenue leak
Angle B: time recovery
Angle C: competitor switch
Visual: stat tile / screenshot / founder face
CTA: See how it works`,
    },
    program: {
      summary:
        "Promote the best hook families into a second-round creative set and retire weak angles fast.",
      bullets: [
        "Review CTR and qualified landing-page engagement together.",
        "Do not keep hooks that attract clicks but collapse on post-click quality.",
      ],
      snippet: `Window: 48 to 72 hours
Primary metric: outbound CTR
Guardrail: landing-page qualified conversion rate
Keep if: CTR improves and downstream CVR holds`,
    },
    examples: [
      {
        title: "Hook family emerges before visual winner",
        insight:
          "Most teams learn the message angle before they learn the ideal graphic treatment.",
        payoff: "Cleaner second-round testing",
      },
      {
        title: "One proof number can carry the asset",
        insight:
          "A specific before-and-after stat often lifts click behavior more than a dense benefit stack.",
        payoff: "Faster creative iteration",
      },
    ],
    relatedSlugs: ["founder-ugc-script", "proof-carousel-ad"],
  },
  {
    slug: "founder-ugc-script",
    title: "Founder-led UGC script",
    category: "creatives",
    summary:
      "Turn founder or operator credibility into a short direct-response script that feels native instead of overproduced.",
    audience:
      "B2B teams with a visible founder, operator, or domain expert who can record low-lift talking videos.",
    tags: ["ugc", "video", "founder"],
    signalSpeed: "Fast",
    primaryMetric: "Video hold rate",
    variables: ["opening claim", "story pattern", "camera framing", "CTA phrasing"],
    featured: false,
    baseline: {
      summary:
        "Keep the speaker, offer, and CTA fixed so the test is about story structure and opening tension.",
      bullets: [
        "Record in the same environment for the first batch.",
        "Avoid changing production quality while testing copy.",
      ],
      snippet: `Speaker: founder or domain operator
Length: 20 to 35 seconds
CTA: same destination
Guardrails:
- no over-scripted delivery
- one idea per take`,
    },
    template: {
      summary:
        "Use a fast opener, a real observation from the field, and a specific next step.",
      bullets: [
        "Open with a sentence that signals hard-earned experience.",
        "Move from observation to consequence before mentioning the product.",
      ],
      snippet: `Opening: Most teams do not notice this leak until pipeline is already off pace.
Observation: what we kept seeing on customer calls
Shift: what changed after fixing it
CTA: steal the exact playbook`,
    },
    program: {
      summary:
        "Test the first three seconds aggressively because they dominate whether the rest of the script gets heard.",
      bullets: [
        "Track hold rate and qualified click-through together.",
        "Re-shoot only after copy patterns settle.",
      ],
      snippet: `Window: 48 hours
Primary metric: 3-second hold rate
Guardrail: qualified click-through rate
Keep if: hold rate rises and clicks stay efficient`,
    },
    examples: [
      {
        title: "Observation-led intros outperform generic pain hooks",
        insight:
          "A sentence that sounds like field experience often earns more attention than a standard ad-style question.",
        payoff: "Higher hold rate",
      },
      {
        title: "Shorter CTA usually wins",
        insight:
          "UGC ads often benefit from ending on one sharp instruction instead of a full feature recap.",
        payoff: "Cleaner click intent",
      },
    ],
    relatedSlugs: ["proof-carousel-ad", "before-after-creative"],
  },
  {
    slug: "proof-carousel-ad",
    title: "Customer proof carousel",
    category: "creatives",
    summary:
      "Package multiple proof moments into a swipeable or sequential ad that builds trust through accumulation.",
    audience:
      "Teams with strong case-study fragments, screenshots, or customer metrics but no single dominant headline.",
    tags: ["proof", "carousel", "case study"],
    signalSpeed: "Fast",
    primaryMetric: "Qualified click-through rate",
    variables: ["proof order", "headline format", "slide count", "CTA slide"],
    featured: true,
    baseline: {
      summary:
        "Keep the proof set fixed and test ordering plus caption style before redesigning the whole asset.",
      bullets: [
        "Use the same CTA destination across all carousel versions.",
        "Keep each slide focused on one proof fragment.",
      ],
      snippet: `Asset type: carousel or multi-panel sequence
Proof pool: 4 to 6 metrics, quotes, or screenshots
CTA: one destination
Guardrails:
- no mixed audiences
- no crowded slides`,
    },
    template: {
      summary:
        "Sequence proof from attention-catching number to believable detail to action.",
      bullets: [
        "Lead with the proof most likely to stop the scroll.",
        "Reserve product explanation for later slides.",
      ],
      snippet: `Slide 1: strongest quantified result
Slide 2: who achieved it
Slide 3: what changed in the workflow
Slide 4: CTA and reason to click`,
    },
    program: {
      summary:
        "Judge the asset by both click quality and how deep viewers move through the sequence.",
      bullets: [
        "Track outbound CTR plus slide completion or engagement depth.",
        "Pause proof orders that create clicks but weak on-site intent.",
      ],
      snippet: `Window: 72 hours
Primary metric: qualified CTR
Guardrail: carousel completion rate
Keep if: CTR lifts and completion stays healthy`,
    },
    examples: [
      {
        title: "Strongest number first",
        insight:
          "The first slide should earn the swipe; deeper context can come later once attention is secured.",
        payoff: "More slide progression",
      },
      {
        title: "Proof stacks reduce skepticism",
        insight:
          "Multiple smaller proofs often feel more credible than one oversized headline claim.",
        payoff: "Better click quality",
      },
    ],
    relatedSlugs: ["before-after-creative", "objection-flip-retargeter"],
  },
  {
    slug: "before-after-creative",
    title: "Before-and-after transformation ad",
    category: "creatives",
    summary:
      "Frame the product as a workflow transformation by contrasting the old way with the new operating state.",
    audience:
      "Growth teams selling process change or time savings where a visual contrast is easy to grasp quickly.",
    tags: ["transformation", "visual", "workflow"],
    signalSpeed: "Fast",
    primaryMetric: "Landing-page engagement rate",
    variables: ["before state", "after state", "contrast layout", "caption length"],
    featured: false,
    baseline: {
      summary:
        "Fix the offer and audience, then rotate how the before state and after state are illustrated.",
      bullets: [
        "One before/after pair per variant.",
        "Use concrete workflow states instead of vague improvement language.",
      ],
      snippet: `Theme: manual process -> systemized workflow
Channel: same audience and budget
CTA: same destination
Guardrails:
- no exaggerated contrast
- no multiple transformations per ad`,
    },
    template: {
      summary:
        "Make the cost of the old workflow obvious and the new state look reachable in one step.",
      bullets: [
        "Use labels buyers would recognize from their current stack.",
        "Keep the after state visually calmer and simpler than the before state.",
      ],
      snippet: `Before: scattered inboxes, spreadsheets, and guesswork
After: one operating view with clear next actions
Caption: what changed and why it matters now
CTA: See the playbook`,
    },
    program: {
      summary:
        "Focus on whether the contrast improves post-click engagement, not just impression-level interest.",
      bullets: [
        "Pair engagement rate with time-on-page or qualified scroll depth.",
        "Rotate visuals only after messaging patterns stabilize.",
      ],
      snippet: `Window: 72 hours
Primary metric: landing-page engagement rate
Guardrail: qualified conversion rate
Keep if: engaged visits rise and CVR stays stable`,
    },
    examples: [
      {
        title: "Clarity beats cleverness",
        insight:
          "Simple workflow contrasts often outperform highly stylized creative when the transformation is operational.",
        payoff: "More qualified post-click behavior",
      },
      {
        title: "Naming the old stack helps",
        insight:
          "Buyers respond when the before state looks exactly like their current mess.",
        payoff: "Stronger self-recognition",
      },
    ],
    relatedSlugs: ["objection-flip-retargeter", "hook-angle-ad-matrix"],
  },
  {
    slug: "objection-flip-retargeter",
    title: "Objection-flip retargeter",
    category: "creatives",
    summary:
      "Use retargeting creative to neutralize one buyer objection at a time instead of repeating top-of-funnel messaging.",
    audience:
      "Teams with enough traffic to segment retargeting pools and enough sales insight to know the common objections.",
    tags: ["retargeting", "objections", "paid social"],
    signalSpeed: "Fast",
    primaryMetric: "Retargeting conversion rate",
    variables: ["objection selected", "proof type", "CTA promise", "visual treatment"],
    featured: false,
    baseline: {
      summary:
        "Keep the audience pool and offer fixed while changing which objection the asset addresses.",
      bullets: [
        "Use real objections from calls or no-decision notes.",
        "Do not mix multiple objections in one retargeting ad.",
      ],
      snippet: `Audience: retargeting pool only
Offer: same demo or trial CTA
Objections: budget / migration / confidence / timing
Guardrails:
- one objection per creative
- one proof type per variant`,
    },
    template: {
      summary:
        "State the concern in buyer language, answer it with one proof point, then give a low-friction next step.",
      bullets: [
        "Retargeting should feel like a response, not a replay of the prospecting ad.",
        "Use visual proof that directly matches the objection.",
      ],
      snippet: `Opening: Worried this will take a full quarter to roll out?
Answer: Most teams launch the first workflow in 10 days.
Proof: onboarding timeline snapshot
CTA: See the rollout plan`,
    },
    program: {
      summary:
        "Score the objection-specific creative on conversion lift and remarketing efficiency.",
      bullets: [
        "Watch conversion rate and cost per qualified action together.",
        "Retire objections that create clicks but do not change downstream action.",
      ],
      snippet: `Window: 72 hours to 7 days
Primary metric: retargeting conversion rate
Guardrail: cost per qualified action
Keep if: conversion rate lifts and CPA stays efficient`,
    },
    examples: [
      {
        title: "Specific objections outperform generic reassurance",
        insight:
          "A concrete response to timing or migration often converts better than a broad trust message.",
        payoff: "More efficient retargeting spend",
      },
      {
        title: "Proof has to match the fear",
        insight:
          "The right screenshot or customer quote matters more than visual novelty when answering objections.",
        payoff: "Higher follow-through",
      },
    ],
    relatedSlugs: ["hook-angle-ad-matrix", "founder-ugc-script"],
  },
];
