import express from "express";
import crypto from "crypto";

const app = express();

// IMPORTANT: raw body needed for signature verification
app.use(
  "/webhooks/post-receive",
  express.raw({ type: "*/*" })
);

function verifyGitHubSignature(req, secret) {
  const signature = req.headers["x-hub-signature-256"];
  if (!signature) return false;

  const hmac = crypto
    .createHmac("sha256", secret)
    .update(req.body)
    .digest("hex");

  const expected = `sha256=${hmac}`;
  return crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(expected)
  );
}

app.post("/webhooks/post-receive", (req, res) => {
  const githubEvent = req.headers["x-github-event"];
  const gitlabEvent = req.headers["x-gitlab-event"];
  const stripeSig = req.headers["stripe-signature"];

  // ---- GitHub ----
  if (githubEvent) {
    const ok = verifyGitHubSignature(req, process.env.GITHUB_WEBHOOK_SECRET);
    if (!ok) return res.status(401).send("Invalid GitHub signature");

    const payload = JSON.parse(req.body.toString());

    switch (githubEvent) {
      case "push":
        console.log("GitHub push:", payload.repository.full_name);
        break;
      case "release":
        console.log("GitHub release:", payload.release.tag_name);
        break;
      default:
        console.log("GitHub event:", githubEvent);
    }

    return res.status(200).send("GitHub OK");
  }

  // ---- GitLab ----
  if (gitlabEvent) {
    console.log("GitLab event:", gitlabEvent);
    return res.status(200).send("GitLab OK");
  }

  // ---- Stripe ----
  if (stripeSig) {
    console.log("Stripe webhook received");
    return res.status(200).send("Stripe OK");
  }

  return res.status(400).send("Unknown webhook source");
});

app.listen(3000, () => {
  console.log("Webhook server running on port 3000");
});