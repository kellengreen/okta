import { useOktaAuth } from "@okta/okta-react";

export default function User() {
  const { authState } = useOktaAuth();
  return (
    <div>
      <h2>User</h2>
      <p>
        <b>Access Token Expiration: </b>
        {new Date(authState.accessToken.expiresAt * 1000).toLocaleString()}
      </p>
      <p>
        <b>ID Token Expiration: </b>
        {new Date(authState.idToken.expiresAt * 1000).toLocaleString()}
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
