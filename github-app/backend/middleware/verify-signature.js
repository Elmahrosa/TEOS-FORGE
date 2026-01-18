// github-app/backend/middleware/verify-signature.js
import crypto from "crypto";
import config from "../config.js";

/**
 * Verify GitHub Webhook Signature (sha256)
 * Requires req.rawBody to be set (see app.js express.json verify hook).
 */
export default function verifySignature(req, res, next) {
  const signature = req.headers["x-hub-signature-256"];

  if (!signature) {
    return res.status(401).send("Signature missing");
  }

  if (!config.GITHUB_WEBHOOK_SECRET) {
    return res.status(500).send("Webhook secret not configured");
  }

  // GitHub signs the raw request bytes
  const rawBody = req.rawBody;
  if (!rawBody) {
    return res.status(400).send("Raw body missing (cannot verify signature)");
  }

  const hmac = crypto.createHmac("sha256", config.GITHUB_WEBHOOK_SECRET);
  const digest = `sha256=${hmac.update(rawBody).digest("hex")}`;

  // Timing-safe compare
  const checksumBuf = Buffer.from(signature, "utf8");
  const digestBuf = Buffer.from(digest, "utf8");

  const isValid =
    checksumBuf.length === digestBuf.length &&
    crypto.timingSafeEqual(checksumBuf, digestBuf);

  if (!isValid) {
    console.error(`[Audit] Invalid webhook signature from IP: ${req.ip}`);
    return res.status(403).send("Signature verification failed");
  }

  return next();
}
