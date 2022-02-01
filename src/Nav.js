import { useState } from "react";
import { Link } from "react-router-dom";
import { useOktaAuth } from "@okta/okta-react";

export default function Welcome() {
  const { oktaAuth } = useOktaAuth();
  const [disabled, setDisabled] = useState(false);
  return (
    <div>
      <Link to="/">Home</Link>{" "}
      <Link
        to={`${new URL(oktaAuth.options.redirectUri).pathname}?code=foobar`}
      >
        Error
      </Link>{" "}
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
      </button>
      <hr />
    </div>
  );
}
