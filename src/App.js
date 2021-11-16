import { useCallback } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import { Security, SecureRoute, LoginCallback } from "@okta/okta-react";

import auth from "./auth.js";
import Nav from "./components/Nav";
import User from "./components/User";
import ErrMsg from "./components/ErrMsg";

export default function App() {
  const history = useHistory();
  const restoreOriginalUri = useCallback(
    (_, originalUri = "/") => history.replace(originalUri),
    [history]
  );

  return (
    <Security oktaAuth={auth} restoreOriginalUri={restoreOriginalUri}>
      <Nav />
      <Switch>
        <SecureRoute path="/" exact errorComponent={ErrMsg}>
          <h2>Welcome!</h2>
        </SecureRoute>

        <SecureRoute path="/user" exact errorComponent={ErrMsg}>
          <User />
        </SecureRoute>

        <Route path={new URL(auth.options.redirectUri).pathname} exact>
          <LoginCallback
            loadingElement={<h2>Authenticating...</h2>}
            errorComponent={ErrMsg}
          />
        </Route>

        <Route>
          <h2>404</h2>
        </Route>
      </Switch>
    </Security>
  );
}
