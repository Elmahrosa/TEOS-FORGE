// github-app/backend/config.js
export default {
  PORT: process.env.PORT || 3000,
  GITHUB_WEBHOOK_SECRET: process.env.GITHUB_WEBHOOK_SECRET || ""
};
// github-app/backend/config.js
import "dotenv/config";

export default {
  PORT: process.env.PORT || 3000,

  // Webhook verification
  GITHUB_WEBHOOK_SECRET: process.env.GITHUB_WEBHOOK_SECRET || "",

  // Optional GitHub App live actions (commenting, etc.)
  GITHUB_APP_ID: process.env.GITHUB_APP_ID || "",
  GITHUB_APP_PRIVATE_KEY: process.env.GITHUB_APP_PRIVATE_KEY || "",
  GITHUB_INSTALLATION_ID: process.env.GITHUB_INSTALLATION_ID || ""
};
