## Test suite for OKTA bugs

See [here](https://github.com/okta/okta-oidc-js/issues/898) for further information.
And [more fun](https://github.com/okta/okta-react/issues/148).

## Start the SWA locally

1. Install [node](https://nodejs.org/en/download/).
2. `npm install` 
3. `npm start`

## Details on reproducing issues
* The username and password for the OKTA client is `foo@bar.com`.
* To begin a new session visit http://localhost:3000/ directly and click `Logout`.

### Reproduce PKCE storage 🐛

1. Visit http://localhost:3000/.
2. Login (see credentials above).
3. Click the `Error` link.
4. 🐛 You should see the `Could not load PKCE codeVerifier from storage` error.
5. Refreshing the page will yeild the "correct" error, `Unable to retrieve OAuth redirect params from storage`. 

### Reproduce logout promise hang 🐛

1. Visit http://localhost:3000/.
2. Login (see credentials above).
3. Click the `Error` link.
4. 🐛 Nothing happens and the promise doesn't return (see dev tools).

### Reproduce SecureRoute returns null 🐛

1. Visit http://localhost:3000/login?code=foobar directly.
2. Click the `Welcome` link.
3. 🐛 `<SecureRoute>` returns a blank page.
