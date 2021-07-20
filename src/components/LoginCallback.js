import { LoginCallback } from "@okta/okta-react";

export default function LoginCallbackWrapper() {
  return (
    <div>
      <h2>Login Callback...</h2>
      <LoginCallback
        errorComponent={({ error }) => {
          return <p>{error.message}</p>;
        }}
      />
    </div>
  );
}
