import { OktaAuth } from "@okta/okta-auth-js";

export default new OktaAuth({
  issuer: "https://dev-79267171.okta.com/oauth2/default",
  redirectUri: `${globalThis.location.origin}/login`,
  clientId: {
    3000: "0oa18rgt77QSgzzXv5d7",
    4000: "0oa192qyjgTAUADL55d7",
  }[globalThis.location.port],
});
