import { OktaAuth } from "@okta/okta-auth-js";

export default new OktaAuth({
  issuer: "https://dev-79267171.okta.com/oauth2/aus6rml1o6MhXoESS5d7",
  redirectUri: `${globalThis.location.origin}/login`,
  clientId: "0oa6tg3aiysdVL24j5d7",
  tokenManager: {
    storageKey: "okta-token-storage",
  },
  scopes: ["openid", "email", "groups"],
});

export const splunkOktaAuth = new OktaAuth({
  issuer: "https://splunkcloud.okta.com/oauth2/aus5ej71znwoaVPA62p7",
  redirectUri: `${globalThis.location.origin}/login`,
  clientId: "0oa669or56WopHdph2p7",
  tokenManager: {
    storageKey: "okta-token-storage",
  },
  scopes: ["openid", "email", "groups"],
});
