# Accountability Governance Rules

This document defines **how disputes are handled** and
**how authority is constrained** within TEOS Forge.

---

## Core Rules

1. Authority must be documented
2. Decisions must be reviewable
3. Disputes must have a clear path
4. Audit evidence overrides opinion
5. No silent or retroactive enforcement

---

## Dispute Types

Accountability governance applies to:

- Governance interpretation disputes
- Merge and release disagreements
- Role or permission challenges
- Audit finding disagreements
- Value-flow eligibility disputes

---

## Dispute Handling Process

1. Dispute raised via Issue (labelled appropriately)
2. Evidence collected and referenced
3. Initial authority review (Maintainer or Steward)
4. Escalation if required
5. Decision logged and closed

No dispute may be closed without a recorded decision.

---

## Authority Constraints

### Maintainers

- Cannot change governance rules alone
- Cannot override audit findings
- Cannot approve treasury changes without governance trace

### Stewards

- Cannot merge code
- Cannot control releases
- Cannot access treasury

### Auditors

- Cannot merge code
- Cannot assign roles
- Cannot execute value flow

Separation of powers is mandatory.

---

## Abuse Prevention

Indicators of abuse include:

- Repeated undocumented decisions
- Ignoring audit findings
- Retaliatory role removal
- Suppressing dispute visibility

Confirmed abuse triggers mandatory escalation.

---

## Amendments

Changes to accountability rules require:

- Governance Change proposal
- Steward review
- Maintainer approval
- Audit log entry

---

## Final Authority

The governance constitution (`docs/governance.md`)
supersedes all module-level rules.

In case of conflict, the constitution prevails.

