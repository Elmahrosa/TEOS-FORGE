# Governance Proposal: Add Independent Auditor Role

**Proposal ID:** GP-001  
**Status:** Approved  
**Author:** governance-steward  
**Date Opened:** 2026-01-15  
**Decision Date:** 2026-01-19  

---

## Summary

This proposal introduces a formally defined **Independent Auditor** role
with authority to log audit findings and block releases pending remediation.

---

## Motivation

As TEOS Forge evolves toward institutional adoption, audit independence
must be structurally enforced rather than assumed.

This role separation increases trust without centralization.

---

## Proposed Change

- Add `Auditor` as a distinct role
- Grant authority to:
  - Log audit findings
  - Block releases until remediation
- Explicitly deny:
  - Merge authority
  - Treasury access
  - Role assignment powers

---

## Governance Impact

- **Roles affected:** Auditor, Maintainer
- **Permissions:** Expanded audit authority
- **Risk level:** Medium
- **Treasury impact:** None

---

## Review & Decision

- Steward Review: Approved
- Maintainer Review: Approved
- Auditor Review: Not applicable

**Final Decision:** Approved

---

## Implementation

- Role documented in `docs/governance.md`
- Example profile added to `people/examples/auditor.md`

---

## Audit Log Reference

Recorded in `audit/logs.md` as entry `AUD-2026-001`.
