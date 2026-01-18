// github-app/backend/services/events.js
import { createAuditEvent } from "./audit.js";
import { postPrCommentIfConfigured } from "./github.js";

function isMergedPullRequest(payload) {
  // GitHub PR "merged" signal:
  // event: pull_request, action: closed, pull_request.merged: true
  return (
    payload?.action === "closed" &&
    payload?.pull_request?.merged === true
  );
}

export async function handleGitHubEvent({ eventType, deliveryId, payload }) {
  // Default: acknowledge event and produce an audit trace.
  const repoUrl = payload?.repository?.html_url || "";
  const prUrl = payload?.pull_request?.html_url || "";
  const issueUrl = payload?.issue?.html_url || "";

  const scope = [];
  if (payload?.repository?.full_name) scope.push(payload.repository.full_name);
  if (payload?.pull_request?.number) scope.push(`PR#${payload.pull_request.number}`);

  // Phase 1: PR merged -> issue "Contribution Verified" signal (comment)
  if (eventType === "pull_request" && isMergedPullRequest(payload)) {
    const prNumber = payload.pull_request.number;
    const author = payload.pull_request.user?.login || "unknown";

    const auditEvent = createAuditEvent({
      auditor: "github-app",
      trigger: `github:pull_request.merged`,
      scope,
      severity: "Low",
      finding: `PR merged. Contribution verified signal generated for @${author}. (delivery: ${deliveryId})`,
      evidence: [repoUrl, prUrl].filter(Boolean),
      actionTaken: "Recorded verification signal; attempted badge comment if configured.",
      status: "Resolved"
    });

    // Optional GitHub action: comment on PR
    const commentBody =
      `✅ **TEOS Forge Signal: Contribution Verified**\n\n` +
      `- Contributor: @${author}\n` +
      `- PR: #${prNumber}\n` +
      `- Audit ID: \`${auditEvent.audit_id}\`\n\n` +
      `This is a governance signal (not a payout). See \`docs/badges.md\` and \`audit/logs.md\`.`;

    await postPrCommentIfConfigured({
      repositoryFullName: payload.repository.full_name,
      issueNumber: prNumber,
      body: commentBody
    });

    return { ok: true, auditEvent };
  }

  // All other events: basic audit trace (Phase 1 minimal)
  const auditEvent = createAuditEvent({
    auditor: "github-app",
    trigger: `github:${eventType}`,
    scope,
    severity: "Low",
    finding: `Received GitHub webhook event '${eventType}' (delivery: ${deliveryId}).`,
    evidence: [repoUrl, prUrl, issueUrl].filter(Boolean),
    actionTaken: "Event accepted.",
    status: "Resolved"
  });

  return { ok: true, auditEvent };
}

