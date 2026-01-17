// github-app/backend/config.js
export default {
  PORT: process.env.PORT || 3000,
  GITHUB_WEBHOOK_SECRET: process.env.GITHUB_WEBHOOK_SECRET || ""
};
