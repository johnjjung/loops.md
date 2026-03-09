export const procurementLoops = [
  {
    slug: "vendor-intake-request",
    title: "Vendor intake request",
    category: "procurement",
    summary:
      "Standardize new vendor requests so teams supply enough context for fast procurement triage and fewer restart loops.",
    audience:
      "Procurement, finance, and operations teams managing incoming requests from business stakeholders.",
    tags: ["vendor intake", "procurement", "workflow"],
    signalSpeed: "Medium",
    primaryMetric: "Intake completion rate",
    variables: ["request form language", "required fields", "justification framing", "owner guidance"],
    featured: true,
    baseline: {
      summary:
        "Keep the request categories fixed while testing which intake wording produces cleaner first submissions.",
      bullets: [
        "Use one intake path for one class of purchase or vendor type.",
        "Clarify what information is mandatory before review starts.",
      ],
      snippet: `Request types: software, services, renewal
Owner: requestor plus procurement reviewer
Guardrails:
- no hidden requirements
- one intake route`,
    },
    template: {
      summary:
        "Ask for the business reason, expected value, contract impact, and stakeholders up front so the review can start immediately.",
      bullets: [
        "Use plain language, not procurement jargon.",
        "Frame fields around decisions the team actually needs to make.",
      ],
      snippet: `Vendor name
Business problem being solved
Expected value or risk reduced
Budget owner
Timing and renewal or contract impact`,
    },
    program: {
      summary:
        "Optimize for complete submissions and lower restart volume, not just more requests entered.",
      bullets: [
        "Track completion rate and how often procurement has to ask for missing context.",
        "Review which fields create confusion and whether they are truly necessary.",
      ],
      snippet: `Window: 30 days
Primary metric: intake completion rate
Guardrail: restart or clarification rate
Keep if: complete requests rise and restarts fall`,
    },
    examples: [
      {
        title: "Clear business-purpose prompts improve quality",
        insight:
          "Requestors submit better information when the form asks what decision the vendor supports, not just what the vendor is called.",
        payoff: "Faster triage",
      },
      {
        title: "Too many mandatory fields can backfire",
        insight:
          "A lean intake with the right fields often outperforms a long comprehensive form that people resist completing.",
        payoff: "Higher completion rate",
      },
    ],
    relatedSlugs: ["rfp-scorecard-loop", "security-legal-review-pack"],
  },
  {
    slug: "rfp-scorecard-loop",
    title: "RFP scorecard loop",
    category: "procurement",
    summary:
      "Turn vendor evaluation into a scorecard process that weights criteria consistently and speeds final recommendation.",
    audience:
      "Procurement and cross-functional evaluation teams comparing multiple vendors for a meaningful purchase decision.",
    tags: ["rfp", "scorecard", "vendor selection"],
    signalSpeed: "Slow",
    primaryMetric: "Decision-cycle length",
    variables: ["criteria weighting", "scorecard layout", "owner assignment", "evidence format"],
    featured: false,
    baseline: {
      summary:
        "Keep the vendor set and high-level criteria fixed so the experiment changes evaluation mechanics, not scope.",
      bullets: [
        "Weight the criteria before scoring starts.",
        "Use the same evidence standard for each vendor.",
      ],
      snippet: `Vendors: fixed shortlist
Criteria: cost, fit, security, support, rollout
Guardrails:
- weights set in advance
- one scoring rubric`,
    },
    template: {
      summary:
        "Present criteria, weight, evidence, and owner in a single scorecard so disagreements surface earlier and cleaner.",
      bullets: [
        "Separate must-have criteria from preference criteria.",
        "Use comments fields to capture rationale, not just numbers.",
      ],
      snippet: `Criterion -> weight -> owner -> evidence -> score -> note
Final section: recommendation and unresolved risks`,
    },
    program: {
      summary:
        "Score the loop by whether the selection process closes faster and with fewer late-stage re-opened debates.",
      bullets: [
        "Track evaluation-cycle length and number of criteria disputes after scoring.",
        "Review where decision stalls still happen and whether the scorecard can absorb them earlier.",
      ],
      snippet: `Window: one full vendor cycle
Primary metric: decision-cycle length
Guardrail: late-stage evaluation re-open rate
Keep if: decisions close faster with fewer reopened debates`,
    },
    examples: [
      {
        title: "Weights reduce politics later",
        insight:
          "Setting weights before vendor demos often prevents last-minute argument loops once preferences appear.",
        payoff: "Cleaner selection process",
      },
      {
        title: "Evidence fields matter",
        insight:
          "A score without proof tends to trigger rework during final recommendation.",
        payoff: "Better decision traceability",
      },
    ],
    relatedSlugs: ["security-legal-review-pack", "renewal-savings-negotiation"],
  },
  {
    slug: "security-legal-review-pack",
    title: "Security and legal review pack",
    category: "procurement",
    summary:
      "Pre-package vendor review materials so security and legal stakeholders can move faster with fewer scattered follow-ups.",
    audience:
      "Procurement and vendor management teams coordinating reviews across security, legal, and IT stakeholders.",
    tags: ["security review", "legal", "risk"],
    signalSpeed: "Medium",
    primaryMetric: "Review turnaround time",
    variables: ["pack order", "summary style", "evidence included", "owner prompts"],
    featured: true,
    baseline: {
      summary:
        "Keep the same vendor review scope while changing how the package is organized and summarized.",
      bullets: [
        "Use one intake checklist for required review artifacts.",
        "Name the open risks and unresolved items explicitly.",
      ],
      snippet: `Artifacts: security docs, legal terms, DPA, certifications, contacts
Owners: procurement plus review stakeholders
Guardrails:
- one package source of truth
- unresolved items visible`,
    },
    template: {
      summary:
        "Lead with a short executive summary, then provide the exact review materials and open questions by owner.",
      bullets: [
        "The summary should tell each reviewer where to focus.",
        "Do not bury open issues below the fold.",
      ],
      snippet: `Section 1: vendor summary and use case
Section 2: security docs and gaps
Section 3: legal terms and redlines
Section 4: open questions and owners`,
    },
    program: {
      summary:
        "Optimize the package on turnaround speed and reduction in repeated clarification requests.",
      bullets: [
        "Track review completion time and number of follow-up asks per stakeholder.",
        "Retain package structures that lower noise even if the review still finds real issues.",
      ],
      snippet: `Window: one full review cycle
Primary metric: review turnaround time
Guardrail: follow-up clarification count
Keep if: reviews close faster with fewer repeated asks`,
    },
    examples: [
      {
        title: "Reviewers want orientation first",
        insight:
          "A short summary helps specialists enter the right part of the packet faster and ask better questions.",
        payoff: "Less review thrash",
      },
      {
        title: "Visible gaps build trust",
        insight:
          "Reviewers move faster when the packet openly flags unresolved issues instead of making them discover everything themselves.",
        payoff: "Cleaner stakeholder alignment",
      },
    ],
    relatedSlugs: ["renewal-savings-negotiation", "single-source-justification"],
  },
  {
    slug: "renewal-savings-negotiation",
    title: "Renewal savings negotiation",
    category: "procurement",
    summary:
      "Improve renewal outcomes by structuring vendor negotiations around leverage, alternatives, and timing instead of ad hoc last-minute asks.",
    audience:
      "Procurement and finance teams managing software or service renewals with room to negotiate spend or terms.",
    tags: ["renewal", "negotiation", "savings"],
    signalSpeed: "Medium",
    primaryMetric: "Renewal savings rate",
    variables: ["leverage angle", "timing", "alternative framing", "term trade-off"],
    featured: false,
    baseline: {
      summary:
        "Keep the vendor and renewal scope fixed so the experiment isolates which negotiation framing produces the best outcome.",
      bullets: [
        "Enter the loop before the final renewal week.",
        "Track what concessions are acceptable before outreach starts.",
      ],
      snippet: `Vendor: one renewal scenario
Levers: price, term length, seats, support
Guardrails:
- approved walkaway boundaries
- one lead negotiator`,
    },
    template: {
      summary:
        "State the renewal context, the commercial gap, and the specific change required to move forward on schedule.",
      bullets: [
        "Use timing and alternative options as real leverage, not bluff.",
        "Trade terms deliberately instead of asking for pure discount first.",
      ],
      snippet: `Context: current spend, usage, and renewal date
Gap: what does not work in current proposal
Ask: exact change needed
Trade: what procurement can commit in return`,
    },
    program: {
      summary:
        "Measure negotiated savings and whether the process creates durable agreement instead of temporary concessions only.",
      bullets: [
        "Track total savings plus accepted term or scope trade-offs.",
        "Avoid wins that lower price but worsen flexibility or support beyond tolerance.",
      ],
      snippet: `Window: one renewal cycle
Primary metric: renewal savings rate
Guardrail: unfavorable term concessions beyond threshold
Keep if: savings improve without violating term guardrails`,
    },
    examples: [
      {
        title: "Preparation changes the negotiation more than tone",
        insight:
          "Having a clear trade map and walkaway line often matters more than stylistic differences in the email itself.",
        payoff: "Better procurement leverage",
      },
      {
        title: "Timing is a variable",
        insight:
          "Renewal outreach started early enough gives procurement more options and credibility.",
        payoff: "Higher savings capture",
      },
    ],
    relatedSlugs: ["single-source-justification", "vendor-intake-request"],
  },
  {
    slug: "single-source-justification",
    title: "Single-source justification memo",
    category: "procurement",
    summary:
      "Document why a no-bid or single-source purchase is reasonable so approvals move with less backtracking.",
    audience:
      "Procurement and business owners navigating exceptions to standard competitive-bid policies.",
    tags: ["single source", "exceptions", "approvals"],
    signalSpeed: "Slow",
    primaryMetric: "Approval cycle length",
    variables: ["justification frame", "risk section", "evidence depth", "approval path"],
    featured: false,
    baseline: {
      summary:
        "Keep the exception class fixed so the loop tests memo structure and decision support, not policy rules themselves.",
      bullets: [
        "State the policy exception basis plainly.",
        "Include the alternatives considered or why competition is not realistic.",
      ],
      snippet: `Use case: one exception scenario
Approvers: same policy path
Guardrails:
- evidence for uniqueness
- risks and mitigations stated`,
    },
    template: {
      summary:
        "Lay out business need, uniqueness rationale, alternatives reviewed, and risk controls in a concise approval memo.",
      bullets: [
        "Use the decision-maker's lens: speed, compliance, cost, and operational risk.",
        "Separate justification from supporting evidence cleanly.",
      ],
      snippet: `Need: what must be solved now
Why single source: uniqueness or continuity reason
Alternatives: what was considered
Risks and mitigations
Decision requested`,
    },
    program: {
      summary:
        "Optimize the memo on approval speed and reduction in follow-up clarification rounds.",
      bullets: [
        "Track cycle time and the number of policy or legal follow-up questions.",
        "Prune sections that create more confusion than confidence.",
      ],
      snippet: `Window: one approval cycle
Primary metric: approval cycle length
Guardrail: clarification request count
Keep if: approvals move faster with fewer clarification loops`,
    },
    examples: [
      {
        title: "Alternatives section reduces suspicion",
        insight:
          "Approvers are more comfortable when the memo shows what was considered and why it was insufficient.",
        payoff: "Faster exception approvals",
      },
      {
        title: "Risk controls create confidence",
        insight:
          "Decision-makers move faster when the memo explains how the team will manage the downside of the exception.",
        payoff: "Cleaner approval process",
      },
    ],
    relatedSlugs: ["vendor-intake-request", "rfp-scorecard-loop"],
  },
];
