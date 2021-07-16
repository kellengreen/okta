import { LoginCallback as OktaLoginCallback } from "@okta/okta-react";

export default function LoginCallback() {
  return (
    <div>
      <h2>Login Callback...</h2>
      <OktaLoginCallback
        errorComponent={({ error }) => {
          return <p>{error.message}</p>;
        }}
      />
    </div>
  );
}
