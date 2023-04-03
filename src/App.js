import { useCallback } from "react";
import { Route, useNavigate, Routes } from "react-router-dom";
import { Security, LoginCallback } from "@okta/okta-react";

import Nav from "./Nav";
import User from "./User";
import auth from "./auth.js";
import Authenticated from "./Authenticated";

export default function App() {
  const navigate = useNavigate();

  const restoreOriginalUri = useCallback(
    (_, originalUri = "/") => navigate(originalUri),
    [navigate]
  );

  return (
    <Security oktaAuth={auth} restoreOriginalUri={restoreOriginalUri}>
      <Nav />
      <Routes>
        <Route
          path={new URL(auth.options.redirectUri).pathname}
          element={
            <LoginCallback
              loadingElement={<h2>Loading...</h2>}
              errorComponent={({ error }) => <strong>{error.message}</strong>}
            />
          }
        />
        <Route
          path="/"
          element={
            <Authenticated loadingElement={<h2>Authenticating...</h2>} />
          }
        >
          <Route path="/" element={<User />} />
        </Route>
      </Routes>
    </Security>
  );
}
