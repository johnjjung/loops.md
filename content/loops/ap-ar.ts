export const apArLoops = [
  {
    slug: "invoice-reminder-cadence",
    title: "Invoice reminder cadence",
    category: "ap-ar",
    summary:
      "Reduce late payments with a structured reminder sequence that escalates tone and detail without damaging the customer relationship.",
    audience:
      "Finance and revenue operations teams managing receivables for B2B customers with mixed payment behavior.",
    tags: ["accounts receivable", "collections", "cash flow"],
    signalSpeed: "Fast",
    primaryMetric: "On-time payment rate",
    variables: ["reminder timing", "tone", "detail level", "escalation trigger"],
    featured: true,
    baseline: {
      summary:
        "Keep payment terms and account segment fixed while testing how reminders are timed and framed.",
      bullets: [
        "Segment by invoice value or customer tier if payment behavior varies widely.",
        "Do not change payment methods during the same experiment.",
      ],
      snippet: `Segment: one customer tier
Terms: unchanged
Channels: same email sender and escalation path
Guardrails:
- respectful tone
- one escalation rule`,
    },
    template: {
      summary:
        "Move from friendly reminder to clear consequence or next step in a predictable cadence.",
      bullets: [
        "Use the same factual invoice details in every step.",
        "Escalate clarity before escalating tone.",
      ],
      snippet: `Reminder 1: due soon / due today
Reminder 2: now overdue with invoice details
Reminder 3: request update or payment date
CTA: confirm payment timing`,
    },
    program: {
      summary:
        "Judge the cadence by on-time payment improvement and whether customer friction stays manageable.",
      bullets: [
        "Track days-sales-outstanding at the segment level.",
        "Watch for account-level complaints or churn signals from overly aggressive wording.",
      ],
      snippet: `Window: 30 days
Primary metric: on-time payment rate
Guardrail: customer complaint rate
Keep if: on-time payments rise without harming relationship health`,
    },
    examples: [
      {
        title: "Predictable cadence lowers excuses",
        insight:
          "When reminders arrive on a consistent schedule, customers are more likely to respond with a date instead of silence.",
        payoff: "Improved cash timing",
      },
      {
        title: "Clarity usually beats pressure",
        insight:
          "Explicit invoice detail and payment instructions often outperform heavier tone changes early in the sequence.",
        payoff: "Higher response quality",
      },
    ],
    relatedSlugs: ["collections-escalation-sequence", "dispute-resolution-playbook"],
  },
  {
    slug: "collections-escalation-sequence",
    title: "Collections escalation sequence",
    category: "ap-ar",
    summary:
      "Escalate delinquent receivables with a controlled sequence that protects leverage while preserving a path to resolution.",
    audience:
      "Finance teams dealing with aged receivables that need firmer follow-up than standard reminders.",
    tags: ["collections", "escalation", "receivables"],
    signalSpeed: "Fast",
    primaryMetric: "Past-due recovery rate",
    variables: ["escalation timing", "owner voice", "payment-plan offer", "consequence framing"],
    featured: false,
    baseline: {
      summary:
        "Keep the aged receivables segment fixed while changing the escalation language and timing thresholds.",
      bullets: [
        "Use consistent criteria for when an invoice enters escalation.",
        "Separate standard reminder tests from aged-balance tests.",
      ],
      snippet: `Segment: aged receivables only
Owner: finance or AR contact
Guardrails:
- document all commitments
- preserve audit trail`,
    },
    template: {
      summary:
        "State the overdue status, requested action, and escalation consequence clearly without sounding chaotic or emotional.",
      bullets: [
        "Offer a payment-plan path where policy allows.",
        "Use a clear deadline for next action.",
      ],
      snippet: `Notice: invoice remains unpaid after prior reminders
Action: confirm payment date or discuss approved plan
Consequence: account hold or next internal step if unresolved`,
    },
    program: {
      summary:
        "Score the sequence by recovered balance and whether promised payment dates become more reliable.",
      bullets: [
        "Track total past-due balance recovered and promise-to-pay fulfillment.",
        "Avoid escalation patterns that generate empty promises only.",
      ],
      snippet: `Window: 30 days
Primary metric: past-due recovery rate
Guardrail: promise-to-pay fulfillment rate
Keep if: recovered balance rises and commitments become more reliable`,
    },
    examples: [
      {
        title: "Specific action requests beat vague urgency",
        insight:
          "Customers respond better when the finance team asks for a payment date or approved resolution path rather than saying urgent repeatedly.",
        payoff: "More actionable replies",
      },
      {
        title: "Policy-backed language feels stronger",
        insight:
          "Escalation works best when it references clear company policy rather than personal frustration.",
        payoff: "Cleaner collections process",
      },
    ],
    relatedSlugs: ["dispute-resolution-playbook", "vendor-bill-approval-handoff"],
  },
  {
    slug: "dispute-resolution-playbook",
    title: "Payment dispute resolution template",
    category: "ap-ar",
    summary:
      "Resolve invoice disputes faster by standardizing how finance teams capture the issue, respond, and route ownership.",
    audience:
      "Finance teams handling billing disputes, PO mismatches, approval delays, or service-delivery questions.",
    tags: ["disputes", "billing", "finance ops"],
    signalSpeed: "Medium",
    primaryMetric: "Dispute resolution time",
    variables: ["intake prompt", "owner routing", "response template", "status cadence"],
    featured: true,
    baseline: {
      summary:
        "Keep the dispute categories fixed so the loop tests response structure and routing speed, not policy itself.",
      bullets: [
        "Use one intake format for every dispute case.",
        "Clarify whether finance, sales, or delivery owns each dispute type.",
      ],
      snippet: `Dispute categories: pricing, PO, delivery, timing
Owners: predefined by category
Guardrails:
- one source of truth for status
- confirm next owner in every reply`,
    },
    template: {
      summary:
        "Acknowledge the dispute, identify the owner, list required evidence, and set a next update time.",
      bullets: [
        "Use calm factual language with explicit process steps.",
        "Close every note with the next status checkpoint.",
      ],
      snippet: `Acknowledgement: issue received and categorized
Owner: finance / sales / delivery
Needed inputs: PO, contract, service evidence
Next update: specific date and time`,
    },
    program: {
      summary:
        "Optimize for faster clean resolution and fewer back-and-forth loops per dispute.",
      bullets: [
        "Track average resolution time and number of reply rounds.",
        "Review repeat dispute causes for upstream process fixes.",
      ],
      snippet: `Window: 30 days
Primary metric: dispute resolution time
Guardrail: average number of handoffs or reply rounds
Keep if: resolution speeds up and loops shrink`,
    },
    examples: [
      {
        title: "Named ownership reduces drift",
        insight:
          "Disputes drag out when the customer is not told who owns the next step.",
        payoff: "Faster resolution cycles",
      },
      {
        title: "Checkpoint dates reduce follow-up noise",
        insight:
          "A promised next update cuts the number of anxious status emails from both sides.",
        payoff: "Lower process friction",
      },
    ],
    relatedSlugs: ["vendor-bill-approval-handoff", "monthly-cash-collection-standup"],
  },
  {
    slug: "vendor-bill-approval-handoff",
    title: "Vendor bill approval handoff",
    category: "ap-ar",
    summary:
      "Speed internal bill approvals with a repeatable handoff message that tells approvers exactly what they need to do and by when.",
    audience:
      "Accounts payable teams routing invoices through department owners, budget holders, or procurement partners.",
    tags: ["accounts payable", "approvals", "internal ops"],
    signalSpeed: "Fast",
    primaryMetric: "Approval turnaround time",
    variables: ["request format", "due date framing", "context depth", "escalation trigger"],
    featured: false,
    baseline: {
      summary:
        "Keep invoice type and approver segment fixed so the loop tests the clarity of the approval ask.",
      bullets: [
        "Use one message structure for one invoice class.",
        "Always include amount, vendor, due date, and required action.",
      ],
      snippet: `Invoice class: recurring or one-time
Approver type: budget owner
Guardrails:
- all approval context in one note
- clear deadline`,
    },
    template: {
      summary:
        "State the invoice details, why the approver is being asked, and what happens if approval does not arrive in time.",
      bullets: [
        "Reduce back-and-forth by including the supporting context upfront.",
        "Use a clear action verb: approve, reject, or request change.",
      ],
      snippet: `Vendor: name and invoice number
Amount and due date
Reason for spend or renewal
Action: approve by date or flag issue now`,
    },
    program: {
      summary:
        "Score the handoff on approval speed and how often approvers need clarifying follow-up.",
      bullets: [
        "Track approval turnaround and reminder count.",
        "Identify whether slowdowns come from missing context or low priority.",
      ],
      snippet: `Window: 14 to 30 days
Primary metric: approval turnaround time
Guardrail: average reminder count per approval
Keep if: approvals speed up and reminders fall`,
    },
    examples: [
      {
        title: "Approvers want decision context fast",
        insight:
          "Approval requests move faster when the finance team explains why the bill matters in one paragraph.",
        payoff: "Lower internal lag",
      },
      {
        title: "Explicit deadlines reduce passive delay",
        insight:
          "Approvers often respond faster when the note makes the due date and consequence concrete.",
        payoff: "More predictable AP process",
      },
    ],
    relatedSlugs: ["monthly-cash-collection-standup", "invoice-reminder-cadence"],
  },
  {
    slug: "monthly-cash-collection-standup",
    title: "Monthly cash-collection standup",
    category: "ap-ar",
    summary:
      "Run a recurring cross-functional cash review that turns AR status into concrete owners and next actions.",
    audience:
      "Finance, revenue ops, and account teams coordinating on large receivables or risky payment timelines.",
    tags: ["cash collection", "meetings", "revops"],
    signalSpeed: "Medium",
    primaryMetric: "DSO improvement",
    variables: ["meeting agenda", "account prioritization", "owner assignment", "follow-up format"],
    featured: false,
    baseline: {
      summary:
        "Keep attendee roles and account thresholds fixed so the experiment changes the meeting operating rhythm, not who attends.",
      bullets: [
        "Use one threshold for which accounts enter the standup.",
        "Assign a next owner for every discussed account.",
      ],
      snippet: `Cadence: monthly or biweekly
Accounts: threshold by amount or days overdue
Guardrails:
- one owner per next step
- decisions captured live`,
    },
    template: {
      summary:
        "Structure the standup around risk-ranked accounts, blockers, and committed next actions rather than general status updates.",
      bullets: [
        "Move quickly from account status to owner action.",
        "End with a short written recap and commitment dates.",
      ],
      snippet: `Agenda:
1. Top-risk accounts
2. Blocker and owner
3. Escalation needed?
4. Commitment date for next action`,
    },
    program: {
      summary:
        "Judge the meeting by whether it improves collection outcomes and reduces unresolved owner ambiguity.",
      bullets: [
        "Track DSO and aged-balance movement after each meeting cycle.",
        "Review whether action items actually close by the next meeting.",
      ],
      snippet: `Window: monthly
Primary metric: DSO improvement
Guardrail: open action items carried to next cycle
Keep if: DSO improves and carryover decreases`,
    },
    examples: [
      {
        title: "Ownership is the product of the meeting",
        insight:
          "Cash reviews fail when they produce awareness instead of assigned next actions.",
        payoff: "Sharper collections execution",
      },
      {
        title: "Risk ranking keeps the room honest",
        insight:
          "Starting with highest-risk accounts prevents the meeting from drifting into low-value updates.",
        payoff: "Better time spent per review",
      },
    ],
    relatedSlugs: ["invoice-reminder-cadence", "collections-escalation-sequence"],
  },
];
