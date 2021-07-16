import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useOktaAuth } from "@okta/okta-react";

export default function LoginRedirect({ path }) {
  const history = useHistory();
  const { authState, oktaAuth } = useOktaAuth();

  useEffect(() => {
    if (authState) {
      if (authState.isAuthenticated) {
        history.replace(path);
      } else {
        oktaAuth.signInWithRedirect();
      }
    }
  }, [path, authState, oktaAuth, history]);

  return <h2>Login Redirect...</h2>;
}
