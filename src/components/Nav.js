import { useState } from "react";
import { useOktaAuth } from "@okta/okta-react";
import { Link } from "react-router-dom";

export default function Welcome() {
  const { oktaAuth } = useOktaAuth();
  const [disabled, setDisabled] = useState(false);
  return (
    <div>
      <Link to="/">Home</Link> | <Link to="/user">User</Link> |{" "}
      <Link
        to={`${new URL(oktaAuth.options.redirectUri).pathname}?code=foobar`}
      >
        Error
      </Link>{" "}
      |{" "}
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
