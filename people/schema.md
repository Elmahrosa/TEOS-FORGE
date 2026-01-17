# People Module — Identity Schema

Defines contributor identity and role structure.

## Fields

- `github_username`: GitHub handle (required)
- `display_name`: Optional name
- `roles`: Array of roles (e.g. ["Contributor", "Steward"])
- `verified`: Boolean (true/false)
- `wallets`: Optional array of wallet addresses
- `affiliations`: Optional org or project links
- `badges`: Array of earned badge IDs

## Example

```json
{
  "github_username": "aymanseif",
  "display_name": "Ayman Seif",
  "roles": ["Maintainer", "Auditor"],
  "verified": true,
  "wallets": ["0xABC123..."],
  "affiliations": ["Elmahrosa International"],
  "badges": ["contribution-verified", "audit-ready"]
}

