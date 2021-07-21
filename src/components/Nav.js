import { useState, useCallback } from "react";
import { useOktaAuth } from "@okta/okta-react";
import { Link } from "react-router-dom";

export default function Welcome() {
  const [disabled, setDisabled] = useState(false);
  const { oktaAuth } = useOktaAuth();

  const signOut = useCallback(() => {
    const result = oktaAuth.signOut();
    console.log(result);
    return result;
  }, [oktaAuth]);
  return (
    <div>
      <Link to="/welcome">Welcome</Link>{" "}
      <Link to="/login?code=foobar">Error</Link>{" "}
      <button
        disabled={disabled}
        onClick={() => {
          setDisabled(true);
          signOut().finally(() => {
            setDisabled(false);
          });
        }}
      >
        Logout
      </button>
      <hr />
    </div>
  );
}
