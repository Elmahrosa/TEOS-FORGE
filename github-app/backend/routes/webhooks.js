// github-app/backend/routes/webhooks.js
import express from "express";
import { createAuditEvent } from "../services/audit.js";

const router = express.Router();

router.post("/", (req, res) => {
  const eventType = req.headers["x-github-event"] || "unknown";
  const deliveryId = req.headers["x-github-delivery"] || "unknown";

  // Minimal scope inference (expand later)
  const scope = [];
  if (req.body?.repository?.name) scope.push(req.body.repository.name);

  const auditEvent = createAuditEvent({
    auditor: "github-app",
    trigger: `github:${eventType}`,
    scope,
    severity: "Low",
    finding: `Received GitHub webhook event '${eventType}' (delivery: ${deliveryId}).`,
    evidence: [
      req.body?.repository?.html_url ? `${req.body.repository.html_url}` : "",
      req.body?.pull_request?.html_url ? `${req.body.pull_request.html_url}` : "",
      req.body?.issue?.html_url ? `${req.body.issue.html_url}` : ""
    ].filter(Boolean),
    actionTaken: "Event accepted. Downstream processing may occur asynchronously.",
    status: "Resolved"
  });

  // For scaffold: log to console. In production: append to durable log store.
  console.log("[AuditEvent]", JSON.stringify(auditEvent, null, 2));

  return res.status(200).json({ ok: true, audit_id: auditEvent.audit_id });
});

export default router;
