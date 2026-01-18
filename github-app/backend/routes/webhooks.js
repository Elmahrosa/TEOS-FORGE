// github-app/backend/routes/webhooks.js
import express from "express";
import { handleGitHubEvent } from "../services/events.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const eventType = req.headers["x-github-event"] || "unknown";
  const deliveryId = req.headers["x-github-delivery"] || "unknown";

  try {
    const result = await handleGitHubEvent({
      eventType,
      deliveryId,
      payload: req.body
    });

    // For scaffold: print audit event. In production, persist to DB/log store.
    if (result?.auditEvent) {
      console.log("[AuditEvent]", JSON.stringify(result.auditEvent, null, 2));
      return res.status(200).json({ ok: true, audit_id: result.auditEvent.audit_id });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("[WebhookError]", err?.message || err);
    return res.status(500).json({ ok: false, error: "Webhook processing failed" });
  }
});

export default router;
