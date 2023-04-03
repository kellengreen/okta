import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useOktaAuth } from "@okta/okta-react";
import { toRelativeUrl } from "@okta/okta-auth-js";

export default function Authenticated({ loadingElement }) {
  const { oktaAuth, authState } = useOktaAuth();

  useEffect(() => {
    if (authState?.isAuthenticated === false) {
      const originalUri = toRelativeUrl(
        globalThis.location.href,
        globalThis.location.origin
      );
      oktaAuth.setOriginalUri(originalUri);
      oktaAuth.signInWithRedirect();
    }
  }, [oktaAuth, authState?.isAuthenticated]);

  if (authState?.isAuthenticated === true) {
    return <Outlet />;
  } else {
    return loadingElement;
  }
}
