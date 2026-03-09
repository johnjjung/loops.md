export const coldOutreachLoops = [
  {
    slug: "pain-signal-cold-email",
    title: "Pain-signal cold email",
    category: "cold-outreach",
    summary:
      "Open cold outreach with a high-cost operational problem the prospect is likely already feeling and a concise reason to reply.",
    audience:
      "Outbound teams selling into buyers with visible pain signals such as hiring, churn, pricing pressure, or funnel slowdown.",
    tags: ["cold email", "outbound", "pain"],
    signalSpeed: "Fast",
    primaryMetric: "Positive reply rate",
    variables: ["subject line", "pain statement", "CTA style", "opening sentence"],
    featured: true,
    baseline: {
      summary:
        "Keep the ICP, list source, and offer fixed so the test isolates how the pain is framed.",
      bullets: [
        "Use one segment with one dominant pain pattern.",
        "Send from the same domain, volume, and time window.",
      ],
      snippet: `Segment: one ICP and one trigger pattern
Offer: same CTA and same ask
Infrastructure: same inbox pool and daily volume
Guardrails:
- one variable per variant
- no fabricated personalization`,
    },
    template: {
      summary:
        "Lead with the costly symptom, connect it to a plausible root cause, and ask for a small reply-sized next step.",
      bullets: [
        "Subject lines should feel plausible inside the prospect's work context.",
        "Keep the CTA answerable in one sentence.",
      ],
      snippet: `Subject: quick thought on reply quality
Body:
Noticed many teams hit a wall when volume rises but positive replies stay flat.
Usually it is the first-touch angle, not the send count.
Worth sending over the exact framework we use to test that?`,
    },
    program: {
      summary:
        "Optimize for positive replies instead of opens or clicks, and keep a fixed review window across tests.",
      bullets: [
        "Score replies after 72 hours so every batch has the same wait time.",
        "Discard subject-line wins that do not improve positive reply quality.",
      ],
      snippet: `Window: 72 hours
Primary metric: positive reply rate
Guardrail: unsubscribe or complaint rate
Keep if: positive replies rise and complaint rate stays flat`,
    },
    examples: [
      {
        title: "Specific pain beats generic relevance",
        insight:
          "Prospects reply more often when the opener points at a recognizable revenue or workflow problem instead of broad personalization.",
        payoff: "Higher positive reply rate",
      },
      {
        title: "Reply-sized asks reduce friction",
        insight:
          "Low-effort CTAs like should I send it often outperform bigger calendar asks in first touch.",
        payoff: "More early conversations",
      },
    ],
    relatedSlugs: ["trigger-event-cold-email", "competitor-switch-outreach"],
  },
  {
    slug: "trigger-event-cold-email",
    title: "Trigger-event outreach",
    category: "cold-outreach",
    summary:
      "Use a recent company event as the reason for contact so the outreach feels timely and context-aware without over-personalization.",
    audience:
      "Outbound teams with reliable trigger data such as hiring, funding, product launch, territory expansion, or pricing changes.",
    tags: ["trigger", "timing", "prospecting"],
    signalSpeed: "Fast",
    primaryMetric: "Positive reply rate",
    variables: ["trigger used", "time-to-send", "opening line", "offer framing"],
    featured: false,
    baseline: {
      summary:
        "Keep the trigger source, audience, and offer fixed while changing how the event is interpreted.",
      bullets: [
        "Use one trigger type per test batch.",
        "Send soon enough that the event still feels alive.",
      ],
      snippet: `Trigger: one event pattern only
Audience: one buyer persona
Offer: same next step
Guardrails:
- no fake congratulations
- no multiple triggers in one email`,
    },
    template: {
      summary:
        "Tie the event to the operational pressure it probably creates, then offer a useful angle or artifact.",
      bullets: [
        "The event matters only because of the downstream workload it introduces.",
        "Keep the email short enough that the trigger remains the core of the note.",
      ],
      snippet: `Subject: after the new hiring push
Body:
Saw the team is adding SDR headcount.
That usually means reply quality and routing become harder before pipeline catches up.
Want the short teardown we use to stress-test that stage?`,
    },
    program: {
      summary:
        "Compare trigger-specific notes against a non-trigger control to prove whether timing is truly helping.",
      bullets: [
        "Review positive replies after the same 72-hour window.",
        "Watch for false positives from newsworthy but irrelevant triggers.",
      ],
      snippet: `Window: 72 hours
Primary metric: positive reply rate
Guardrail: neutral or confused replies
Keep if: trigger batches beat control on positive intent`,
    },
    examples: [
      {
        title: "Fresh triggers create natural relevance",
        insight:
          "The best trigger emails sound like a useful observation, not a scraped news mention.",
        payoff: "More credible outreach",
      },
      {
        title: "Operational consequence is the real hook",
        insight:
          "Prospects care less about the event itself than the pain it probably caused internally.",
        payoff: "Stronger response quality",
      },
    ],
    relatedSlugs: ["competitor-switch-outreach", "loom-audit-offer"],
  },
  {
    slug: "competitor-switch-outreach",
    title: "Competitor switch outreach",
    category: "cold-outreach",
    summary:
      "Target accounts likely outgrowing an incumbent with messaging that makes the switch feel lower-risk and more urgent.",
    audience:
      "Teams selling against a dominant competitor with a clear migration or replacement story.",
    tags: ["switch", "migration", "replacement"],
    signalSpeed: "Fast",
    primaryMetric: "Positive reply rate",
    variables: ["switch trigger", "migration proof", "subject line", "CTA angle"],
    featured: true,
    baseline: {
      summary:
        "Fix the incumbent, offer, and target segment so the experiment focuses on switching language and risk framing.",
      bullets: [
        "Use only accounts with real incumbent-fit evidence where possible.",
        "Keep migration support offer consistent across variants.",
      ],
      snippet: `Incumbent: one named competitor or category status quo
Audience: likely current users
Offer: same migration angle
Guardrails:
- do not attack features you cannot prove
- keep risk language honest`,
    },
    template: {
      summary:
        "Position the outreach around the moment the old tool starts creating drag and the new path feels safer than expected.",
      bullets: [
        "Lead with the trigger for switching, not your feature set.",
        "Reduce the perceived migration cost before asking for a call.",
      ],
      snippet: `Subject: when [incumbent] starts slowing the team down
Body:
Most teams do fine on it until routing, reporting, or rollout complexity jumps.
That is usually where the switch conversation starts.
Want the 10-day migration map we share with buyers?`,
    },
    program: {
      summary:
        "Score on positive reply rate and whether replies indicate real incumbent pain rather than curiosity.",
      bullets: [
        "Tag replies by whether the prospect confirms current-tool usage.",
        "Retire messages that sound too aggressive or vendor-biased.",
      ],
      snippet: `Window: 72 hours
Primary metric: positive reply rate
Guardrail: % of positive replies confirming incumbent usage
Keep if: replies rise and tool-fit confirmation stays high`,
    },
    examples: [
      {
        title: "Migration safety matters more than feature flexing",
        insight:
          "Switch buyers often reply to rollout and risk language before they care about feature superiority.",
        payoff: "More serious replies",
      },
      {
        title: "Switch triggers are situational",
        insight:
          "The same incumbent can create different pain depending on stage, team size, or workflow complexity.",
        payoff: "Sharper segmentation",
      },
    ],
    relatedSlugs: ["loom-audit-offer", "breakup-sequence-loop"],
  },
  {
    slug: "loom-audit-offer",
    title: "Loom audit offer",
    category: "cold-outreach",
    summary:
      "Offer a fast async teardown or audit as the first conversion step for prospects who will not yet book time.",
    audience:
      "Outbound teams selling a diagnostic or optimization product where insight can be shown before the meeting.",
    tags: ["audit", "loom", "offer"],
    signalSpeed: "Fast",
    primaryMetric: "Interested reply rate",
    variables: ["audit promise", "asset named", "credibility proof", "CTA wording"],
    featured: false,
    baseline: {
      summary:
        "Keep the audit scope and segment fixed so the loop only changes how the offer is framed.",
      bullets: [
        "Offer one clear artifact with one clear turnaround promise.",
        "Use the same outbound list source across variants.",
      ],
      snippet: `Offer: async teardown or audit
Delivery: one short Loom or scorecard
Audience: one ICP
Guardrails:
- do not over-personalize manually
- keep effort realistic`,
    },
    template: {
      summary:
        "Make the deliverable concrete and show the buyer what they will learn without asking for too much commitment.",
      bullets: [
        "Name the artifact precisely: teardown, scorecard, routing map, or benchmark.",
        "Set expectations on scope to protect delivery quality.",
      ],
      snippet: `Subject: can I send a 5-minute teardown?
Body:
Happy to record a short audit of your pricing page and show where qualified buyers likely fall off.
No call needed first.
Worth sending over?`,
    },
    program: {
      summary:
        "Judge the offer by interested replies and whether those replies convert into substantive conversations after delivery.",
      bullets: [
        "Track accepted audits and post-audit meeting creation.",
        "Retire offers that create work without downstream pipeline.",
      ],
      snippet: `Window: 72 hours for interest, 14 days for downstream conversion
Primary metric: interested reply rate
Guardrail: audit-to-meeting rate
Keep if: interest rises and delivered audits still convert`,
    },
    examples: [
      {
        title: "Specific asset naming increases trust",
        insight:
          "Prospects respond better when they know exactly what the audit contains and how long it will take.",
        payoff: "Higher interested replies",
      },
      {
        title: "Async beats calendar ask in colder stages",
        insight:
          "A useful asynchronous artifact often opens doors that a direct meeting request cannot.",
        payoff: "More first conversions",
      },
    ],
    relatedSlugs: ["breakup-sequence-loop", "pain-signal-cold-email"],
  },
  {
    slug: "breakup-sequence-loop",
    title: "Breakup sequence",
    category: "cold-outreach",
    summary:
      "Close the loop on non-responsive prospects with a respectful final note that often draws out hidden objections or delayed interest.",
    audience:
      "Outbound teams running sequenced outreach and wanting a structured end-of-sequence message rather than a throwaway goodbye.",
    tags: ["breakup", "sequencing", "objections"],
    signalSpeed: "Fast",
    primaryMetric: "Late-stage reply rate",
    variables: ["tone", "exit framing", "objection prompt", "subject line"],
    featured: false,
    baseline: {
      summary:
        "Keep the sequence timing and prior touches fixed so the test only changes the final-note structure.",
      bullets: [
        "Send breakup only after a consistent number of prior attempts.",
        "Use one final objective: close the loop or surface the objection.",
      ],
      snippet: `Sequence stage: final touch only
Audience: no-response prospects
Guardrails:
- respectful tone
- no guilt bait`,
    },
    template: {
      summary:
        "Use a short note that gives the prospect an easy out while inviting one honest reason for the silence.",
      bullets: [
        "The best breakup emails feel clean, not theatrical.",
        "Prompting for a reason often outperforms another value pitch.",
      ],
      snippet: `Subject: close the loop?
Body:
I will leave this here after today.
If timing is off or this is the wrong angle, a quick no helps me clean up my notes.
If useful later, I can resend the teardown example.`,
    },
    program: {
      summary:
        "Measure whether the final note surfaces hidden objections or delayed demand without harming domain reputation.",
      bullets: [
        "Tag breakup replies by objection, timing, or referral.",
        "Watch complaint rate carefully on final-sequence messages.",
      ],
      snippet: `Window: 72 hours
Primary metric: late-stage reply rate
Guardrail: unsubscribe or complaint rate
Keep if: end-of-sequence replies rise and complaints stay low`,
    },
    examples: [
      {
        title: "Respectful exits invite honest responses",
        insight:
          "Prospects often answer once the pressure is removed and the note feels like closure instead of one more pitch.",
        payoff: "More useful objections surfaced",
      },
      {
        title: "Tone matters more than cleverness",
        insight:
          "Cute breakup copy often underperforms plain respectful language in B2B contexts.",
        payoff: "Better brand signal",
      },
    ],
    relatedSlugs: ["pain-signal-cold-email", "trigger-event-cold-email"],
  },
];
