import { useState } from "react";
import { useOktaAuth } from "@okta/okta-react";

export default function Welcome() {
  const [disabled, setDisabled] = useState(false);
  const { authState, oktaAuth } = useOktaAuth();
  return (
    <div>
      <button
        disabled={disabled}
        onClick={() => {
          setDisabled(true);
          oktaAuth.signOut().finally(() => {
            setDisabled(false);
          });
        }}
      >
        Logout
      </button>{" "}
      <a href={`${window.location.origin}/login?code=foobar`}>Trigger Error</a>
      <h2>Welcome "{authState.accessToken.claims.sub}"</h2>
      <p>
        <strong>Access Token Expires:</strong>{" "}
        <span>
          {new Date(authState.accessToken.expiresAt * 1000).toLocaleString()}
        </span>
      </p>
      <p>
        <strong>ID Token Expires:</strong>{" "}
        <span>
          {new Date(authState.idToken.expiresAt * 1000).toLocaleString()}
        </span>
      </p>
      <pre
        style={{
          whiteSpace: "pre-wrap",
          overflowWrap: "anywhere",
        }}
      >
        {JSON.stringify(authState, undefined, 2)}
      </pre>
    </div>
  );
}
