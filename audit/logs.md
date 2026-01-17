# Audit Logs

This document defines the **format, content, and retention policy** for audit logs in TEOS Forge.  
Audit logs serve as **immutable records of enforcement and review**.

---

## Log Principles

- **Factual & Neutral**  
  Logs must record events objectively, without interpretation or bias.

- **Evidence-Based**  
  Every entry must reference verifiable evidence.

- **Timestamped**  
  All actions must be recorded in UTC using ISO-8601 format.

- **Reviewable**  
  Log entries must be human-readable and machine-parsable.

- **Immutable**  
  Logs must not be altered retroactively.

---

## Log Entry Format

Each audit log entry **must include all fields** below:

| Field | Description |
|------|-------------|
| **Audit ID** | `AUD-YYYY-NNN` |
| **Date** | ISO-8601 timestamp (e.g. `2026-01-18T00:00:00Z`) |
| **Auditor** | GitHub username of the reviewer |
| **Trigger** | The specific event or action being audited |
| **Scope** | Modules or directories affected |
| **Severity** | Low \| Medium \| High \| Critical |
| **Finding** | Concise summary of the issue or confirmation |
| **Evidence** | Links to PRs, issues, or CI/CD logs |
| **Action Taken** | Required remediation steps or approval status |
| **Status** | Open \| Resolved \| Escalated |

---

## Example Entry

**Audit ID:** AUD-2026-004  
**Date:** 2026-01-25T15:40:00Z  
**Auditor:** `audit-reviewer`  
**Trigger:** Merge to protected branch  
**Scope:** `audit/`, `docs/`  
**Severity:** Low  
**Finding:** Documentation update verified; no policy impact.  
**Evidence:** PR #27  
**Action Taken:** None  
**Status:** Resolved  

---

## Retention Policy

- **Indefinite Retention**  
  Audit logs must be retained for the life of the project.

- **No Deletion**  
  Manual deletion of audit logs is strictly prohibited.

- **Redaction Protocol**  
  Redactions (e.g. for PII or legal compliance) require:
  - Documented justification  
  - Secondary audit approval  

- **Accessibility**  
  Archived logs must remain accessible to the core maintenance team.

---

## Enforcement

> **IMPORTANT**  
> Failure to log audit actions invalidates the associated decision.  
> Audit logs are the **authoritative record** in the event of a dispute, compliance review, or security investigation.
