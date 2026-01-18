// github-app/backend/services/github.js
import jwt from "jsonwebtoken";
import config from "../config.js";

function hasAppCreds() {
  return Boolean(
    config.GITHUB_APP_ID &&
      config.GITHUB_APP_PRIVATE_KEY &&
      config.GITHUB_INSTALLATION_ID
  );
}

function buildAppJwt() {
  const now = Math.floor(Date.now() / 1000);
  const payload = {
    iat: now - 30,
    exp: now + 9 * 60, // 9 minutes
    iss: config.GITHUB_APP_ID
  };

  return jwt.sign(payload, config.GITHUB_APP_PRIVATE_KEY, { algorithm: "RS256" });
}

async function getInstallationToken() {
  const appJwt = buildAppJwt();
  const url = `https://api.github.com/app/installations/${config.GITHUB_INSTALLATION_ID}/access_tokens`;

  const resp = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${appJwt}`,
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28"
    }
  });

  if (!resp.ok) {
    const text = await resp.text();
    throw new Error(`Failed to get installation token: ${resp.status} ${text}`);
  }

  const data = await resp.json();
  return data.token;
}

export async function postPrCommentIfConfigured({ repositoryFullName, issueNumber, body }) {
  if (!hasAppCreds()) {
    console.log("[GitHubAction:DRY_RUN] Would comment on PR:", {
      repositoryFullName,
      issueNumber
    });
    return { ok: true, mode: "dry_run" };
  }

  const token = await getInstallationToken();
  const url = `https://api.github.com/repos/${repositoryFullName}/issues/${issueNumber}/comments`;

  const resp = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `token ${token}`,
      Accept: "application/vnd.github+json",
      "Content-Type": "application/json",
      "X-GitHub-Api-Version": "2022-11-28"
    },
    body: JSON.stringify({ body })
  });

  if (!resp.ok) {
    const text = await resp.text();
    throw new Error(`Failed to post PR comment: ${resp.status} ${text}`);
  }

  return { ok: true, mode: "live" };
}
