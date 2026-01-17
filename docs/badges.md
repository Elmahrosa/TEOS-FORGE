# Badges & Trust Signals

TEOS Forge badges are **governance signals**, not marketing labels.  
Each badge reflects a verifiable state enforced by policy, automation, or review.

---

## 🟦 Forge CI

**Purpose:**  
Indicates that the repository runs the TEOS Forge CI workflow.

**Requirements:**
- CI workflow present (`forge-ci.yml`)
- Workflow runs on `push` and `pull_request`
- Core checks must pass before merge

---

## 🟦 Audit Ready

**Purpose:**  
Signals that the repository meets baseline audit and hygiene standards.

**Requirements:**
- `SECURITY.md` present
- Governance documentation present
- CI enforced
- Contribution verification enabled
- Audit module active

**Enforcement:**  
Automated checks + manual audit review when required.

---

## 🟩 Contribution Verified

**Purpose:**  
Indicates that contributions are tracked, reviewed, and verified before recognition or reward.

**Requirements:**
- Contributions linked to issues or proposals
- Required reviews completed
- CI checks passed
- Attribution recorded via People module

---

## 🟨 Sustainability Model

**Purpose:**  
Signals that the project follows a transparent, civic-first sustainability model.

**Requirements:**
- `docs/monetization.md` present
- No paywalls on contribution
- Monetization limited to hosting, enterprise support, or white-label deployments
- Value flow governed and auditable

**Reference:**  
See [`docs/monetization.md`](monetization.md)

---

## 🟥 Security Policy

**Purpose:**  
Indicates a responsible security disclosure process.

**Requirements:**
- `SECURITY.md` present
- Defined reporting channel
- Clear response expectations

---

## ⚖️ Badge Governance

- Badges may be **revoked** if requirements are no longer met
- Revocation must be logged with justification
- Badge logic is enforced through:
  - CI checks
  - Governance review
  - Audit findings

Badges are designed to **build trust**, not inflate perception.
