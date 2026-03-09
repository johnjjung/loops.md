export const emailLoops = [
  {
    slug: "onboarding-activation-sequence",
    title: "Onboarding activation sequence",
    category: "emails",
    summary:
      "Move new users toward the first meaningful action with a short sequence keyed to friction moments, not generic welcomes.",
    audience:
      "Product-led or hybrid teams with a clear activation event and identifiable setup drop-off points.",
    tags: ["onboarding", "activation", "lifecycle"],
    signalSpeed: "Fast",
    primaryMetric: "Activation rate",
    variables: ["email trigger", "friction framing", "CTA step", "send timing"],
    featured: true,
    baseline: {
      summary:
        "Keep the activation goal fixed and rotate only the framing, timing, and step emphasis of each message.",
      bullets: [
        "Every message should point to one next action.",
        "Sequence logic should reflect the user's actual setup state.",
      ],
      snippet: `Activation event: first meaningful action
Segment: new users only
Guardrails:
- no generic product tours
- one CTA per message`,
    },
    template: {
      summary:
        "Frame each email around the exact blocker or missed milestone the user is likely facing at that point in the journey.",
      bullets: [
        "Use event-based copy instead of chronological filler.",
        "Show the smallest next step that unlocks progress.",
      ],
      snippet: `Email 1: what to do first
Email 2: why most users stall here
Email 3: proof that finishing this step pays off
CTA: complete the next milestone`,
    },
    program: {
      summary:
        "Optimize the sequence on activation lift and time-to-activation, not just open rate.",
      bullets: [
        "Pair email performance with product event completion.",
        "Retire messages that earn opens but do not move behavior.",
      ],
      snippet: `Window: 72 hours to 7 days
Primary metric: activation rate
Guardrail: time-to-activation
Keep if: activation rises and time-to-activation falls`,
    },
    examples: [
      {
        title: "Friction-based subject lines create action",
        insight:
          "Emails that mirror the exact setup snag often outperform cheerful welcome language.",
        payoff: "More milestone completion",
      },
      {
        title: "One next step is enough",
        insight:
          "Activation emails lose power when they ask users to do multiple things at once.",
        payoff: "Cleaner click intent",
      },
    ],
    relatedSlugs: ["feature-launch-email-arc", "proof-nurture-email"],
  },
  {
    slug: "feature-launch-email-arc",
    title: "Feature launch email arc",
    category: "emails",
    summary:
      "Roll out a new feature with a sequence that tests which framing gets users to try it, not just notice it.",
    audience:
      "Product marketing and lifecycle teams launching net-new capability into an existing user base.",
    tags: ["launch", "adoption", "product marketing"],
    signalSpeed: "Fast",
    primaryMetric: "Feature adoption rate",
    variables: ["launch angle", "benefit frame", "announcement length", "CTA verb"],
    featured: false,
    baseline: {
      summary:
        "Keep the feature scope and audience segment fixed while testing the adoption angle.",
      bullets: [
        "Launch one feature, one segment, one adoption action.",
        "Do not combine adoption prompts with unrelated newsletter content.",
      ],
      snippet: `Feature: one clear capability
Segment: existing users with fit
Action: try feature now
Guardrails:
- no roadmap language
- one adoption ask`,
    },
    template: {
      summary:
        "Position the launch around the job the feature unlocks, then show the shortest path to first use.",
      bullets: [
        "Lead with the workflow change, not the release note.",
        "Use proof or screenshots that make first use feel safe.",
      ],
      snippet: `Email 1: what just got easier
Email 2: who should turn it on first
Email 3: proof from an early user or internal example
CTA: try it in your workflow`,
    },
    program: {
      summary:
        "Judge the sequence on actual product adoption and repeat use rather than awareness metrics.",
      bullets: [
        "Track first use and seven-day repeat use.",
        "Pause launch frames that spike clicks but fail to create usage.",
      ],
      snippet: `Window: 7 days
Primary metric: feature adoption rate
Guardrail: repeat usage after first use
Keep if: adoption lifts and repeat use stays healthy`,
    },
    examples: [
      {
        title: "Workflow language beats release language",
        insight:
          "Users respond better when the launch email tells them what problem is now easier to solve.",
        payoff: "Higher first-use rate",
      },
      {
        title: "Screenshots can replace paragraphs",
        insight:
          "A single useful screenshot often does more than a long explanation in launch email.",
        payoff: "Faster trial behavior",
      },
    ],
    relatedSlugs: ["proof-nurture-email", "winback-email-loop"],
  },
  {
    slug: "proof-nurture-email",
    title: "Proof-driven nurture email",
    category: "emails",
    summary:
      "Turn a nurture sequence into a chain of credible proof moments that keep warming the buyer toward a serious conversation.",
    audience:
      "Demand generation teams with case-study fragments, quantified outcomes, and long buying cycles.",
    tags: ["nurture", "proof", "pipeline"],
    signalSpeed: "Medium",
    primaryMetric: "Nurture to demo rate",
    variables: ["proof type", "story order", "CTA softness", "subject line angle"],
    featured: true,
    baseline: {
      summary:
        "Keep the offer and stage fixed and rotate only the type of proof and how it is introduced.",
      bullets: [
        "One proof theme per send works better than mixed evidence stacks.",
        "Match proof type to the buyer's current skepticism.",
      ],
      snippet: `Audience: mid-funnel leads
Offer: same next step
Proof types: metric / quote / mini case study / teardown
Guardrails:
- no generic newsletters
- one proof thesis per email`,
    },
    template: {
      summary:
        "Use a compact proof story with a light CTA that invites deeper evaluation without pushing too early.",
      bullets: [
        "Lead with the specific outcome, not the customer logo.",
        "Close with a next step that fits the proof level.",
      ],
      snippet: `Subject: how one team recovered 12 hours a week
Body: before -> intervention -> result in 120 words
CTA: see the exact workflow`,
    },
    program: {
      summary:
        "Optimize for progression toward pipeline, not just clicks, by tracking reply or meeting intent downstream.",
      bullets: [
        "Measure demo requests and sales-engaged responses from nurtured leads.",
        "Keep proof types that generate deeper behavior, not just open spikes.",
      ],
      snippet: `Window: 14 days
Primary metric: nurture to demo rate
Guardrail: unsubscribes and spam complaints
Keep if: demo progression rises without list damage`,
    },
    examples: [
      {
        title: "Quantified proof travels farther",
        insight:
          "Short proof emails with one hard number often outperform broad thought-leadership sends for mid-funnel leads.",
        payoff: "More commercial follow-up",
      },
      {
        title: "Soft CTAs preserve trust",
        insight:
          "A lighter CTA can outperform a hard demo ask when the reader still needs more evidence.",
        payoff: "Higher nurture efficiency",
      },
    ],
    relatedSlugs: ["winback-email-loop", "customer-expansion-email"],
  },
  {
    slug: "winback-email-loop",
    title: "Win-back email loop",
    category: "emails",
    summary:
      "Re-engage stalled or former users with targeted messages that test whether timing, use case, or proof reopens the account.",
    audience:
      "Lifecycle and customer teams trying to recover dormant or churned accounts without blasting generic offers.",
    tags: ["winback", "retention", "reactivation"],
    signalSpeed: "Medium",
    primaryMetric: "Reactivation rate",
    variables: ["return angle", "offer type", "proof style", "timing"],
    featured: false,
    baseline: {
      summary:
        "Keep the segment and offer fixed while rotating the story for why the account should re-engage now.",
      bullets: [
        "Segment dormant users by likely reason for churn or inactivity.",
        "Do not mix discounting and messaging tests in the same round.",
      ],
      snippet: `Audience: dormant or churned users
Offer: one return path
Guardrails:
- one win-back reason per sequence
- no blanket discounts`,
    },
    template: {
      summary:
        "Frame the return around changed conditions, missed value, or a newly solved objection.",
      bullets: [
        "Use a reason-to-reconsider that feels timely, not desperate.",
        "Lower the friction of re-entry with one obvious next step.",
      ],
      snippet: `Email 1: what is different now
Email 2: the exact workflow they can reopen
Email 3: proof from a returning account
CTA: reactivate or review your setup`,
    },
    program: {
      summary:
        "Treat reactivation as a quality loop and prefer meaningful return behavior over low-value clicks.",
      bullets: [
        "Track reactivation and retained usage after return.",
        "Avoid win-back copy that creates trial behavior without actual product fit.",
      ],
      snippet: `Window: 14 to 30 days
Primary metric: reactivation rate
Guardrail: 14-day retained usage after return
Keep if: more accounts return and stay active`,
    },
    examples: [
      {
        title: "Why now matters more than remember us",
        insight:
          "The best win-back emails explain why the product is newly relevant, not merely available.",
        payoff: "More serious returns",
      },
      {
        title: "One path back works best",
        insight:
          "Dormant accounts often need a single re-entry motion rather than multiple branching options.",
        payoff: "Lower return friction",
      },
    ],
    relatedSlugs: ["customer-expansion-email", "onboarding-activation-sequence"],
  },
  {
    slug: "customer-expansion-email",
    title: "Customer expansion email",
    category: "emails",
    summary:
      "Drive expansion by showing current customers the next workflow or seat motion that unlocks more value.",
    audience:
      "CS and lifecycle teams with clear expansion triggers such as usage depth, team size, or new workflow adoption.",
    tags: ["expansion", "upsell", "customer"],
    signalSpeed: "Medium",
    primaryMetric: "Expansion conversation rate",
    variables: ["trigger used", "expansion angle", "proof type", "CTA ask"],
    featured: false,
    baseline: {
      summary:
        "Keep the segment and expansion path fixed while testing which trigger and proof create the cleanest next-step motion.",
      bullets: [
        "Use product behavior to define the send segment.",
        "Frame expansion as the next unlocked outcome, not just a bigger plan.",
      ],
      snippet: `Audience: active customers with a visible trigger
Expansion path: seats / workflow / governance / feature set
Guardrails:
- no broad blast sends
- tie copy to actual usage`,
    },
    template: {
      summary:
        "Show the customer what they have already achieved and what the next layer of value would look like.",
      bullets: [
        "Use current-product behavior as proof of readiness.",
        "Keep the ask proportional to the customer's stage.",
      ],
      snippet: `Opening: your team is already doing X successfully
Next unlock: what changes with broader rollout
Proof: customer example or internal benchmark
CTA: plan the next phase`,
    },
    program: {
      summary:
        "Optimize on expansion conversations or accepted next-step meetings, not just CTA clicks.",
      bullets: [
        "Track expansion replies, meeting creation, and downstream conversion.",
        "Watch for fatigue in over-messaged segments.",
      ],
      snippet: `Window: 14 days
Primary metric: expansion conversation rate
Guardrail: unsubscribes and customer sentiment
Keep if: expansion meetings rise without trust damage`,
    },
    examples: [
      {
        title: "Usage-triggered expansion feels natural",
        insight:
          "Customers are more open to expansion when the email reflects a real moment in their product behavior.",
        payoff: "Higher meeting acceptance",
      },
      {
        title: "Outcome-led expansion beats plan-led expansion",
        insight:
          "Teams respond better to the next business outcome than to a bigger package description alone.",
        payoff: "Stronger expansion quality",
      },
    ],
    relatedSlugs: ["onboarding-activation-sequence", "feature-launch-email-arc"],
  },
];
