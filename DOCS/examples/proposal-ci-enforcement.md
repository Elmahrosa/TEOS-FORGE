# Feature Proposal: Enforce CI Before Merge

**Proposal ID:** FP-004  
**Status:** Implemented  
**Author:** contributor-core  
**Date Opened:** 2026-01-20  

---

## Problem

Merges without CI passing weaken audit readiness and institutional trust.

---

## Proposal

Require all pull requests targeting protected branches to:

- Pass Forge CI
- Receive required reviews
- Declare audit impact

---

## Impact Assessment

- **Governance:** Strengthened
- **Audit:** Improved traceability
- **Risk:** Low
- **Value Flow:** Indirect (blocks reward eligibility if CI fails)

---

## Decision

Approved by Maintainer on 2026-01-22.

---

## Result

- CI enforcement added to `.github/workflows/forge-ci.yml`
- Badge eligibility updated in `docs/badges.md`
