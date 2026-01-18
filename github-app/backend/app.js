// github-app/backend/app.js
import express from "express";
import webhookRoutes from "./routes/webhooks.js";
import verifySignature from "./middleware/verify-signature.js";

const app = express();

/**
 * IMPORTANT: Capture raw body for GitHub signature verification.
 * GitHub signs the raw request bytes, not the parsed JSON.
 */
app.use(
  express.json({
    verify: (req, _res, buf) => {
      req.rawBody = buf; // Buffer
    }
  })
);

app.get("/health", (_req, res) => res.status(200).json({ ok: true }));

// Verify signature only for webhook endpoint
app.use("/webhooks", verifySignature, webhookRoutes);

export default app;
