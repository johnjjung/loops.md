export const warmOutreachLoops = [
  {
    slug: "inbound-speed-to-lead",
    title: "Inbound speed-to-lead follow-up",
    category: "warm-outreach",
    summary:
      "Convert fresh inbound or hand-raise intent by responding with the right mix of urgency, context, and next-step clarity.",
    audience:
      "Revenue teams routing demo requests, contact forms, or high-intent inbound inquiries to SDRs or AEs.",
    tags: ["inbound", "speed to lead", "follow-up"],
    signalSpeed: "Fast",
    primaryMetric: "Meeting booking rate",
    variables: ["response timing", "opening context", "CTA structure", "calendar framing"],
    featured: true,
    baseline: {
      summary:
        "Keep segment, routing, and offer fixed while testing how the first response is framed and how quickly it arrives.",
      bullets: [
        "Segment by inbound source and declared intent where possible.",
        "Use one consistent owner and CTA path across variants.",
      ],
      snippet: `Source: demo request or inbound hand raise
Owner: same SDR or AE pool
Offer: one meeting path
Guardrails:
- respond inside the same working day
- one primary CTA`,
    },
    template: {
      summary:
        "Acknowledge the prospect's specific context, confirm what happens next, and reduce calendar uncertainty.",
      bullets: [
        "Reference what the buyer asked for or what page they came from.",
        "Make scheduling feel immediate but not robotic.",
      ],
      snippet: `Opening: saw you asked about pricing and rollout support
Response: here is the fastest next step
CTA: two concrete times or direct calendar link
Support: what we will cover on the call`,
    },
    program: {
      summary:
        "Optimize the first touch on booked meetings and show rate rather than email engagement.",
      bullets: [
        "Measure time-to-first-response alongside booking and attendance.",
        "Be careful not to trade better booking for lower show quality.",
      ],
      snippet: `Window: same day to 7 days
Primary metric: meeting booking rate
Guardrail: show rate
Keep if: bookings rise and attendance stays flat or better`,
    },
    examples: [
      {
        title: "Contextual replies feel human",
        insight:
          "Warm prospects move faster when the first response makes it clear the team understood their request.",
        payoff: "More booked meetings",
      },
      {
        title: "Calendar certainty reduces drop-off",
        insight:
          "Specific next-step framing often beats vague someone will be in touch copy.",
        payoff: "Faster handoff",
      },
    ],
    relatedSlugs: ["webinar-follow-up-sequence", "pql-trial-to-demo"],
  },
  {
    slug: "webinar-follow-up-sequence",
    title: "Webinar or event follow-up",
    category: "warm-outreach",
    summary:
      "Turn event attendance into sales-ready conversations by following up with the most relevant insight, not a generic thanks-for-joining note.",
    audience:
      "Marketing and SDR teams following up after webinars, field events, roundtables, or workshop sessions.",
    tags: ["events", "follow-up", "webinar"],
    signalSpeed: "Fast",
    primaryMetric: "Event attendee meeting rate",
    variables: ["follow-up angle", "resource offered", "CTA type", "segment split"],
    featured: false,
    baseline: {
      summary:
        "Keep the event and attendee segment fixed while testing which follow-up angle creates the best progression.",
      bullets: [
        "Segment attendees by engagement level if the signal exists.",
        "Tie the follow-up back to a specific moment from the event.",
      ],
      snippet: `Event: one webinar or session
Audience: attendees only
Offer: one post-event next step
Guardrails:
- no generic thank-you blast
- one reason to reply`,
    },
    template: {
      summary:
        "Reference the strongest insight from the event and offer a next step that deepens that exact topic.",
      bullets: [
        "Use the event to create context, not to recap everything.",
        "Match the CTA to the session's depth and audience intent.",
      ],
      snippet: `Opening: the moment from the session most people leaned into
Resource: the teardown, checklist, or follow-up example
CTA: want the working version for your team?`,
    },
    program: {
      summary:
        "Score on meeting progression and quality by attendee segment, not just follow-up reply rate.",
      bullets: [
        "Compare engaged attendees against passive registrants if both are mailed.",
        "Keep the follow-up within 24 hours while memory is fresh.",
      ],
      snippet: `Window: 72 hours to 7 days
Primary metric: attendee meeting rate
Guardrail: no-show or low-fit meeting rate
Keep if: meetings rise without lowering quality`,
    },
    examples: [
      {
        title: "One memorable insight drives replies",
        insight:
          "Prospects usually respond to the sharpest takeaway from the session, not a full recap deck.",
        payoff: "Better post-event conversion",
      },
      {
        title: "Segment-aware follow-up matters",
        insight:
          "Attendees who asked questions or stayed longer often need a different CTA than passive viewers.",
        payoff: "Higher meeting efficiency",
      },
    ],
    relatedSlugs: ["pql-trial-to-demo", "champion-reengagement"],
  },
  {
    slug: "pql-trial-to-demo",
    title: "PQL trial-to-demo outreach",
    category: "warm-outreach",
    summary:
      "Use product-qualified signals to move high-fit trial accounts into human conversations at the right moment.",
    audience:
      "Hybrid PLG teams with identifiable product-qualified lead triggers and optional sales assist.",
    tags: ["pql", "trial", "sales assist"],
    signalSpeed: "Fast",
    primaryMetric: "PQL meeting conversion rate",
    variables: ["trigger threshold", "outreach timing", "usage proof", "CTA framing"],
    featured: true,
    baseline: {
      summary:
        "Keep the trigger set fixed so the loop tests timing and framing rather than underlying qualification logic.",
      bullets: [
        "Use one clear PQL threshold or signal stack per sequence.",
        "Reference real product behavior in the outreach.",
      ],
      snippet: `Trigger: one PQL threshold
Audience: active trial accounts
Guardrails:
- no generic check-ins
- tie every send to observed usage`,
    },
    template: {
      summary:
        "Show the account what they have already done in the product and what a short conversation could unlock next.",
      bullets: [
        "Use behavior as proof of readiness, not as surveillance theater.",
        "Keep the assist pitch focused on acceleration, not rescue.",
      ],
      snippet: `Opening: noticed the team already configured X and invited Y users
Next unlock: where teams usually stall next
CTA: want a 15-minute walkthrough to speed up rollout?`,
    },
    program: {
      summary:
        "Judge the outreach on meetings created and conversion quality, not on whether every active trial replies.",
      bullets: [
        "Track meeting creation and post-meeting progression to paid or deeper rollout.",
        "Retire signals that look active but do not correlate with buying motion.",
      ],
      snippet: `Window: 7 days
Primary metric: PQL meeting conversion rate
Guardrail: meeting-to-opportunity rate
Keep if: meetings rise and opportunity quality stays strong`,
    },
    examples: [
      {
        title: "Behavior-specific copy signals relevance",
        insight:
          "PQL outreach converts best when the message clearly reflects what the user already did in product.",
        payoff: "More qualified meetings",
      },
      {
        title: "Acceleration beats hand-holding",
        insight:
          "High-fit accounts often respond better to speed and rollout help than to basic onboarding language.",
        payoff: "Stronger meeting acceptance",
      },
    ],
    relatedSlugs: ["champion-reengagement", "multi-thread-introduction"],
  },
  {
    slug: "champion-reengagement",
    title: "Champion re-engagement",
    category: "warm-outreach",
    summary:
      "Revive stalled opportunities by reconnecting with the internal champion using progress-based or risk-based framing.",
    audience:
      "Sales teams with open or paused deals where an internal advocate went quiet.",
    tags: ["champion", "stalled deal", "pipeline"],
    signalSpeed: "Medium",
    primaryMetric: "Deal reactivation rate",
    variables: ["re-open angle", "risk framing", "artifact offered", "timing"],
    featured: false,
    baseline: {
      summary:
        "Keep the deal stage and champion fixed while testing which re-entry angle reopens the conversation respectfully.",
      bullets: [
        "Use a real prior conversation or agreed next step as context.",
        "Do not combine reactivation with net-new product news.",
      ],
      snippet: `Deal state: paused or stale
Champion: prior engaged contact
Guardrails:
- respect prior context
- no guilt framing`,
    },
    template: {
      summary:
        "Anchor the note in what the champion was trying to accomplish and make it easy to restart without a full reset.",
      bullets: [
        "Use the champion's own success metric or internal deadline where possible.",
        "Offer one artifact or short step that makes re-entry light.",
      ],
      snippet: `Opening: last time we spoke you were trying to fix X before Y deadline
Re-open: happy to send the updated rollout path
CTA: worth revisiting this week?`,
    },
    program: {
      summary:
        "Measure whether the outreach reopens the deal in a meaningful way, not merely whether the champion replies politely.",
      bullets: [
        "Track reactivation into meetings, next steps, or stakeholder introductions.",
        "Tag responses by delay reason to sharpen future variants.",
      ],
      snippet: `Window: 14 days
Primary metric: deal reactivation rate
Guardrail: stale polite replies with no next step
Keep if: more deals reopen into real motion`,
    },
    examples: [
      {
        title: "Remember the champion's job",
        insight:
          "Re-engagement works best when it connects back to what the champion needed internally, not your quota timeline.",
        payoff: "More authentic restarts",
      },
      {
        title: "Small asks lower restart friction",
        insight:
          "A quick artifact or yes-no reply often reopens a deal better than a direct meeting request.",
        payoff: "Higher reactivation quality",
      },
    ],
    relatedSlugs: ["multi-thread-introduction", "inbound-speed-to-lead"],
  },
  {
    slug: "multi-thread-introduction",
    title: "Multi-thread stakeholder intro",
    category: "warm-outreach",
    summary:
      "Expand warm conversations to additional stakeholders without making the champion feel bypassed or threatened.",
    audience:
      "Sales teams with active deals that need more stakeholder coverage before close.",
    tags: ["multi-thread", "stakeholders", "deal strategy"],
    signalSpeed: "Medium",
    primaryMetric: "Additional stakeholder engagement rate",
    variables: ["intro framing", "champion protection language", "asset offered", "timing"],
    featured: false,
    baseline: {
      summary:
        "Keep the deal and champion fixed while changing how the request to involve others is framed.",
      bullets: [
        "Frame multi-threading as helping the champion, not going around them.",
        "Tie the ask to a concrete decision or review step.",
      ],
      snippet: `Deal: active and progressing
Champion: one internal advocate
Guardrails:
- do not bypass without consent
- make the value of extra stakeholders explicit`,
    },
    template: {
      summary:
        "Explain why another stakeholder would be helpful now and make the introduction feel lightweight and useful.",
      bullets: [
        "Use the decision process as the reason for the intro.",
        "Offer a concise artifact the champion can forward.",
      ],
      snippet: `Opening: to keep this moving cleanly, it may help to loop in the owner of security / ops / finance
Asset: short summary they can forward
CTA: want me to draft the note for you?`,
    },
    program: {
      summary:
        "Optimize on real stakeholder engagement while preserving champion trust and deal momentum.",
      bullets: [
        "Track additional stakeholder meetings or responses.",
        "Watch for any slowdown in champion responsiveness after the ask.",
      ],
      snippet: `Window: 14 days
Primary metric: additional stakeholder engagement rate
Guardrail: champion response health
Keep if: stakeholder coverage rises and champion trust holds`,
    },
    examples: [
      {
        title: "Forwardable assets reduce champion effort",
        insight:
          "Champions are more willing to multi-thread when the vendor makes the introduction easy to send internally.",
        payoff: "More stakeholder coverage",
      },
      {
        title: "Timing the ask matters",
        insight:
          "The best moment is often right before an internal review or procurement checkpoint, not at the start of the deal.",
        payoff: "Smoother deal progression",
      },
    ],
    relatedSlugs: ["inbound-speed-to-lead", "webinar-follow-up-sequence"],
  },
];
