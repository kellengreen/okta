import { useCallback } from "react";
import { Switch, Route, useHistory } from "react-router-dom";

import { OktaAuth } from "@okta/okta-auth-js";
import { Security, SecureRoute } from "@okta/okta-react";

import Welcome from "./components/Welcome";
import LoginRedirect from "./components/LoginRedirect";
import LoginCallback from "./components/LoginCallback";

const oktaAuth = new OktaAuth({
  issuer: "https://dev-79267171.okta.com/oauth2/default",
  clientId: {
    3000: "0oa18rgt77QSgzzXv5d7",
    4000: "0oa192qyjgTAUADL55d7",
  }[window.location.port],
  redirectUri: `${window.location.origin}/login`,
});

export default function App() {
  const history = useHistory();
  const restoreOriginalUri = useCallback(
    (_, originalUri) => history.replace(originalUri || "/"),
    [history]
  );

  return (
    <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
      <Switch>
        <SecureRoute path="/welcome" exact>
          <Welcome />
        </SecureRoute>
        <Route path={new URL(oktaAuth.options.redirectUri).pathname} exact>
          <LoginCallback />
        </Route>
        <Route path="/" exact>
          <LoginRedirect path="/welcome" />
        </Route>
        <Route>
          <h2>404</h2>
        </Route>
      </Switch>
    </Security>
  );
}
