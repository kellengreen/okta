## Start the SWA locally

1. Install node.
2. `npm install` 
3. `npm start`

## Steps to reproduce

1. Visit http://localhost:3000/
2. Login using `foo@bar.com` as both the username and password.
3. You well be redirected to `http://localhost:3000/welcome`. Click the `Trigger Error
` link.
4. You should now see the `Could not load PKCE codeVerifier from storage` error.
5. Refreshing the page will yeild the "correct" error, `Unable to retrieve OAuth redirect params from storage`. 
6. Visit http://localhost:3000/welcome and click `Logout` to begin again.
