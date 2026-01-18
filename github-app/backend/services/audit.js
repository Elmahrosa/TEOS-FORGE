// github-app/backend/services/audit.js

/**
 * In-memory yearly counter for demo scaffold.
 * In production, replace with persistent store (DB).
 */
const countersByYear = new Map();

function nextAuditNumber(year) {
  const current = countersByYear.get(year) || 0;
  const next = current + 1;
  countersByYear.set(year, next);
  return next;
}

function pad3(n) {
  return String(n).padStart(3, "0");
}

export function createAuditEvent({
  auditor,
  trigger,
  scope,
  severity,
  finding,
  evidence,
  actionTaken,
  status
}) {
  const now = new Date();
  const year = now.getUTCFullYear();
  const num = nextAuditNumber(year);
  const auditId = `AUD-${year}-${pad3(num)}`;

  return {
    audit_id: auditId,
    date: now.toISOString(),
    auditor: auditor || "github-app",
    trigger: trigger || "github_webhook",
    scope: scope || [],
    severity: severity || "Low",
    finding: finding || "",
    evidence: evidence || [],
    action_taken: actionTaken || "",
    status: status || "Open"
  };
}
