import { useOktaAuth } from "@okta/okta-react";

export default function Welcome() {
  const { authState } = useOktaAuth();
  return (
    <div>
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
