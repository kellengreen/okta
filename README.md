## Test suite for OKTA bugs

See [here](https://github.com/okta/okta-oidc-js/issues/898) for further information.
And [more fun](https://github.com/okta/okta-react/issues/148).

## Start the SWA locally

1. Install [node](https://nodejs.org/en/download/).
2. `npm install` 
3. `npm start`

## Details to reproduce
* The username and password for the OKTA client is `foo@bar.com`.
* To begin a new session visit http://localhost:3000/ directly and click `Logout`.

### Reproduce PKCE 🐛

1. Visit http://localhost:3000/.
2. Login (see credentials above).
4. You will be redirected to http://localhost:3000/welcome.
5. Click the `Error` link.
6. 🐛 You should see the `Could not load PKCE codeVerifier from storage` error.
9. Refreshing the page will yeild the "correct" error, `Unable to retrieve OAuth redirect params from storage`. 

### Reproduce logout 🐛

1. Visit http://localhost:3000/.
2. Login (see credentials above)
3. You will be redirected to http://localhost:3000/welcome.
4. Click the `Error` link.
5. 🐛 Nothing happens and the promise doesn't return (see dev tools).

### Reproduce SecureRoute 🐛

1. Visit http://localhost:3000/login?code=foobar directly.
2. Click the `Welcome` link.
3. 🐛 `<SecureRoute>` returns a blank page.
