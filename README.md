## Start the app locally

1. Install [node](https://nodejs.org/en/download/).
2. `npm install` 
3. `npm start`

## Details on reproducing issues
* The username and password for the OKTA client is `foo@bar.com`.
* To begin a new session visit http://localhost:3000/ directly and click `Logout`.

### [898](https://github.com/okta/okta-oidc-js/issues/898) - Reproduce PKCE storage bug

1. Visit http://localhost:3000/.
2. Login ([see credentials](https://github.com/kellengreen/okta#details-on-reproducing-issues)).
3. Click the `Error` link.
4. 🐛 You should see the "incorrect" error, `Could not load PKCE codeVerifier from storage`.
5. Refreshing the page will yeild the "correct" error, `Unable to retrieve OAuth redirect params from storage`. 
6. 
### [174](https://github.com/okta/okta-react/issues/174) - Reproduce logout promise hangs bug

1. Visit http://localhost:3000/.
2. Login ([see credentials](https://github.com/kellengreen/okta#details-on-reproducing-issues)).
3. Click the `Error` link.
4. Click the `Logout` button.
5. 🐛 Nothing happens and the promise doesn't resolve (see dev tools).

### [173](https://github.com/okta/okta-react/issues/173) - Reproduce SecureRoute returns null

1. Visit http://localhost:3000/login?code=foobar directly.
2. Click the `Welcome` link.
3. 🐛 `<SecureRoute>` returns a blank page.
