import { useCallback } from "react";
import { Switch, Route, useHistory } from "react-router-dom";

import { OktaAuth } from "@okta/okta-auth-js";
import { Security, SecureRoute } from "@okta/okta-react";

import Nav from "./components/Nav";
import Welcome from "./components/Welcome";
import LoginRedirect from "./components/LoginRedirect";
import LoginCallback from "./components/LoginCallback";

const oktaAuth = new OktaAuth({
  issuer: "https://dev-79267171.okta.com/oauth2/default",
  clientId: "0oa18rgt77QSgzzXv5d7",
  redirectUri: `${window.location.origin}/login`,
  postLogoutRedirectUri: `${window.location.origin}/`,
});

export default function App() {
  const history = useHistory();
  const restoreOriginalUri = useCallback(
    (_, originalUri) => history.replace(originalUri || "/"),
    [history]
  );

  return (
    <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
      <Nav />
      <Switch>
        <SecureRoute path="/welcome" exact>
          <Welcome />
        </SecureRoute>
        <Route path="/login" exact>
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
