import { useState } from "react";
import { useOktaAuth } from "@okta/okta-react";
import { Link } from "react-router-dom";

export default function Welcome() {
  const [disabled, setDisabled] = useState(false);
  const { oktaAuth } = useOktaAuth();

  return (
    <div>
      <Link to="/welcome">Welcome</Link> |{" "}
      <Link to="/login?code=foobar">Error</Link> |{" "}
      <button
        disabled={disabled}
        onClick={() => {
          setDisabled(true);
          const result = oktaAuth.signOut();
          console.log(result);
          result.finally(() => {
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
