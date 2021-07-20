## Start the SWA locally

1. Install node.
2. `npm install` 
3. `npm start`

## Steps to reproduce

1. Visit http://localhost:3000/.
2. You will be redirected to OKTA.
3. Login using `foo@bar.com` as both the username and password.
4. You will be redirected to `http://localhost:3000/welcome`.
5. Click the `Trigger Error` link.
6. You should now see the `Could not load PKCE codeVerifier from storage` error.
7. Refreshing the page will yeild the "correct" error, `Unable to retrieve OAuth redirect params from storage`. 
8. Visit http://localhost:3000/welcome and click `Logout` to begin the process again.
