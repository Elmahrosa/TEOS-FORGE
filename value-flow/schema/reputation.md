# Reputation Scoring Schema

## Fields

- `github_username`: GitHub handle
- `verified`: Boolean
- `roles`: Array of roles
- `contributions`: Count of merged PRs
- `audit_flags`: Count of audit issues
- `badges`: Array of earned badges
- `stake`: Amount staked (if applicable)
- `score`: Computed reputation score

## Scoring Logic

```python
score = (
  contributions * 10 +
  len(badges) * 5 +
  (100 if verified else 0) -
  audit_flags * 20 +
  stake * 0.1
)
