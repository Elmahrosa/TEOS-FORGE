# Payout Intent — Example 1

This document records a **proposed and approved payout intent**
under TEOS Forge value-flow governance.

---

## Contributor

- **GitHub:** `aymanseif`
- **Role:** Maintainer
- **Verified:** ✅

---

## Contribution

- **Linked Issue:** #123
- **Pull Request:** #42
- **Module:** `contribution`
- **Status:** Merged
- **Audit Status:** Passed

---

## Reward Details

- **Reward Type:** Fixed
- **Amount:** `100 TEOS`
- **Treasury Source:** `core-contribution-pool`
- **Required Approvals:** Maintainer + Auditor
- **Approval Status:** Approved

---

## Justification

- Verified contribution to proposal lifecycle logic
- CI checks passed
- Audit finding logged and resolved
- No active disputes or escalations

---

## Audit Reference

- **Audit Log Entry:** `audit/logs.md#AUD-2026-001`
- **Audit Status:** Cleared

---

## Contributor Snapshot (Non-Authoritative)

```json
{
  "github_username": "aymanseif",
  "verified": true,
  "roles": ["maintainer"],
  "contributions": 12,
  "audit_flags": 1,
  "badges": ["contribution-verified", "audit-ready"],
  "stake": 500,
  "reputation_score": 185
}
````

> Note: Snapshot data is informational only.
> Governance and audit records are authoritative.

````

---

# 📄 `value-flow/templates/treasury-report.md`

```markdown
# Treasury Report — Institutional Format

This report summarizes **verified treasury activity**
for a defined reporting period under TEOS Forge governance.

---

## Reporting Period

- **Start:** 2026-01-01
- **End:** 2026-01-15

---

## Executive Summary

- **Total Payouts:** `1,200 TEOS`
- **Contributors Paid:** `8`
- **Modules Funded:** `contribution`, `audit`, `docs`
- **Active Disputes:** `0`
- **Audit Flags Raised:** `1`

---

## Payout Breakdown

| Contributor | Amount | Module | Verified | Audit Cleared |
|------------|--------|--------|----------|---------------|
| aymanseif  | 100 TEOS | contribution | ✅ | ✅ |
| devX       | 150 TEOS | audit         | ✅ | ✅ |
| writerY    | 75 TEOS  | docs          | ✅ | ✅ |

---

## Governance Notes

- All payouts linked to verified PRs and Issues
- No treasury movement executed without audit clearance
- Dual approval (Maintainer + Auditor) recorded
- No payout occurred during disputes or escalations

---

## Audit Reference

- All payout actions traceable in `audit/logs.md`
- Relevant entries cross-referenced per payout intent

---

## Declaration

This report is accurate to the best of governance and audit records
and is suitable for institutional review.
