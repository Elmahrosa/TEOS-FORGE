# Escalation Protocol

This document defines **how conflicts, risks, and violations are escalated**
within TEOS Forge.

Escalation exists to **protect the system**, not to punish individuals.

---

## Escalation Principles

1. Escalate issues, not people
2. Use the least severe level necessary
3. Prefer resolution over authority
4. Preserve auditability at all times
5. Document every escalation

---

## Escalation Levels

### Level 1 — Maintainer Review

**Triggers:**
- Disputed merge decisions
- CI failures ignored
- Minor governance disagreements

**Authority:**
- Maintainer reviews and decides
- Decision must be documented

**Outcome:**
- Approve
- Request changes
- Reject with justification

---

### Level 2 — Steward Review

**Triggers:**
- Maintainer decision disputed
- Governance interpretation conflict
- Repeated unresolved issues

**Authority:**
- Steward reviews evidence
- May overrule Maintainer with justification

**Outcome:**
- Binding decision
- Recommendation for governance change

---

### Level 3 — Auditor Intervention

**Triggers:**
- Compliance violations
- Security risks
- Ignored audit findings
- Procedural abuse

**Authority:**
- Auditor may:
  - Block releases
  - Require remediation
  - Log formal audit finding

**Outcome:**
- Mandatory remediation
- Possible governance escalation

---

### Level 4 — Value Flow Hold (Exceptional)

**Triggers:**
- Unresolved disputes affecting rewards
- Suspected misuse of treasury logic
- Governance breach with financial impact

**Authority:**
- Maintainer + Auditor concurrence required

**Outcome:**
- Temporary pause of value-flow actions
- Escalation logged and reviewed

---

## Emergency Escalation

In cases of imminent harm (security breach, legal exposure):

- Auditor may act immediately
- Action must be documented within 24 hours
- Post-incident review is mandatory

---

## Escalation Logging

Every escalation must include:

- Triggering event
- Evidence links
- Authority invoked
- Decision and rationale
- Resolution status

Logs are referenced in:
- `audit/logs.md`
- Relevant Issue or PR

Escalation without documentation is invalid.

