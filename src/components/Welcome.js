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
      <a href="/login?code=foobar">Trigger Error</a>
      <h2>Welcome "{authState.accessToken.claims.sub}"</h2>
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
