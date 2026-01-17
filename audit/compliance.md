# Audit Readiness Checklist

This checklist defines the **minimum requirements** for a repository
to be considered **audit-ready** under TEOS Forge.

Failure to meet these requirements may block releases or value-flow eligibility.

---

## Repository Hygiene

- [ ] `README.md` present and accurate
- [ ] `LICENSE` present
- [ ] `CONTRIBUTING.md` present
- [ ] `CODE_OF_CONDUCT.md` present
- [ ] `SECURITY.md` present

---

## Governance

- [ ] `docs/governance.md` present
- [ ] Governance changes documented via proposals
- [ ] Roles and permissions defined
- [ ] Escalation protocol documented

---

## Contribution Controls

- [ ] Issues required for PRs
- [ ] Pull request template enforced
- [ ] Required reviews enabled
- [ ] CI checks required before merge

---

## CI / Automation

- [ ] Forge CI workflow present
- [ ] CI runs on `push` and `pull_request`
- [ ] CI status required for merge
- [ ] CI results retained

---

## Security

- [ ] Responsible disclosure process defined
- [ ] No secrets committed
- [ ] Dependency risks reviewed
- [ ] Security issues handled privately

---

## Audit Logging

- [ ] Audit findings logged
- [ ] Decisions documented
- [ ] Evidence linked (PRs, issues, CI)
- [ ] Logs retained per policy

---

## Value Flow (If Applicable)

- [ ] Value-flow rules documented
- [ ] Rewards gated by verification
- [ ] Treasury actions auditable
- [ ] Disputes pause payouts

---

## Audit Outcome

A repository may be classified as:

- **Audit Ready** — all requirements met
- **Conditionally Ready** — minor remediation required
- **Not Ready** — blocking issues present

Audit status must be documented.

