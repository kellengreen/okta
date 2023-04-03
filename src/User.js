import { useOktaAuth } from "@okta/okta-react";

export default function User() {
  const { authState } = useOktaAuth();
  return (
    <pre
      style={{
        whiteSpace: "pre-wrap",
        overflowWrap: "anywhere",
      }}
    >
      {JSON.stringify(authState?.accessToken, undefined, 2)}
    </pre>
  );
}
