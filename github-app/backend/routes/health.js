// github-app/backend/routes/health.js
import express from "express";

const router = express.Router();

router.get("/", (_req, res) => {
  return res.status(200).json({
    ok: true,
    service: "teos-forge-github-app-backend",
    timestamp: new Date().toISOString()
  });
});

export default router;
