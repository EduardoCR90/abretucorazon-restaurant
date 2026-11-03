import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";

const manifestBytes = await readFile("instance.manifest.json");
const manifest = JSON.parse(manifestBytes.toString("utf8"));
const endpoint = manifest.deployment.provisioning_endpoint;
assert.match(endpoint, /^https:\/\//);
const requestUrl = process.env.ACTIONS_ID_TOKEN_REQUEST_URL;
const requestToken = process.env.ACTIONS_ID_TOKEN_REQUEST_TOKEN;
assert.ok(requestUrl && requestToken, "GitHub OIDC is unavailable");
const tokenResponse = await fetch(
  `${requestUrl}${requestUrl.includes("?") ? "&" : "?"}audience=restaurant-platform-provisioning`,
  { headers: { Authorization: `Bearer ${requestToken}` }, signal: AbortSignal.timeout(15000) },
);
assert.equal(tokenResponse.status, 200, "GitHub did not issue the OIDC identity");
const identity = await tokenResponse.json();
assert.equal(typeof identity.value, "string");
const response = await fetch(endpoint, {
  method: "POST",
  headers: { Authorization: `Bearer ${identity.value}`, "Content-Type": "application/json" },
  body: JSON.stringify({
    action: "source_ready",
    request_id: manifest.request_id,
    source_commit: process.env.INSTANCE_SOURCE_COMMIT,
    manifest_hash: createHash("sha256").update(manifestBytes).digest("hex"),
  }),
  signal: AbortSignal.timeout(20000),
});
assert.equal(response.status, 200, `Provisioning callback rejected (${response.status})`);
console.log("Provisioning callback accepted");
