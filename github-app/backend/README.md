# TEOS Forge GitHub App — Backend

This backend powers the **TEOS Forge GitHub App**. It serves as the observation and signaling layer for the TEOS Forge ecosystem, ensuring that repository activities align with governance standards while maintaining a strict "human-in-the-loop" architecture.

## Repository Structure

```text
github-app/backend/
├── README.md               # Documentation and technical overview
├── app.js                  # Entry point and Express server initialization
├── config.js               # Environment variables and app configuration
├── routes/                 # API endpoints
│   ├── webhooks.js         # GitHub webhook event listeners
│   └── health.js           # Service health and status checks
├── services/               # Core business logic
│   ├── audit.js            # Immutable logging and validation logic
│   ├── governance.js       # Rule-set enforcement and policy checks
│   └── badges.js           # Non-monetary reward processing
├── middleware/             # Request interceptors
│   └── verify-signature.js # GitHub cryptographic security validation
└── package.json            # Node.js dependencies and lifecycle scripts

```

---

## Core Philosophy: Observation, Not Execution

The backend is designed to provide **observation, validation, and signaling**. It acts as a transparent witness to the development process, providing the data necessary for informed governance without overriding human agency.

### Responsibilities

* **Event Handling:** Securely receive and parse GitHub webhooks.
* **Validation:** Cross-reference contribution and governance events against defined policy.
* **Audit Signaling:** Generate signals for the audit log when specific criteria are met.
* **Incentivization:** Issue non-monetary badges to recognize contribution quality.
* **Transparency:** Log all governance-relevant activity to an immutable record.

### Explicit Non-Responsibilities

To ensure safety and preserve human sovereignty, this backend **does NOT**:

* **Merge Code:** It cannot bypass human review to merge Pull Requests.
* **Change Roles:** It cannot modify repository permissions or user roles.
* **Execute Treasury Actions:** It has no access to or authority over financial assets.
* **Trigger On-Chain Execution:** It cannot independently execute blockchain transactions.

**All authority remains human and governed.**

---

## Technical Setup

### Security

All incoming requests from GitHub are filtered through the `verify-signature.js` middleware. This ensures that only payloads cryptographically signed by the official TEOS Forge GitHub App are processed.

### Development

1. Navigate to the directory: `cd github-app/backend`
2. Install dependencies: `npm install`
3. Configure environment: Copy `.env.example` to `.env` and populate with GitHub App credentials.
4. Start the service: `npm start`

---
