# Contribution Module — Proposal & Bounty Schema

## Fields

- `id`: Unique contribution ID
- `type`: "proposal", "bounty", "fix", "docs", etc.
- `linked_issue`: GitHub issue ID
- `status`: "draft", "review", "approved", "merged"
- `contributor`: GitHub username
- `reviewers`: Array of usernames
- `ci_passed`: Boolean
- `audit_flag`: Boolean
- `reward`: Optional value-flow intent

## Example

```json
{
  "id": "PR-42",
  "type": "proposal",
  "linked_issue": "#123",
  "status": "approved",
  "contributor": "aymanseif",
  "reviewers": ["auditor1"],
  "ci_passed": true,
  "audit_flag": false,
  "reward": "100 TEOS"
}
