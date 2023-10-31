import { Auth0Client } from '@auth0/auth0-spa-js';

export const MyAuthClient = new Auth0Client({
    domain: 'dev-8jqvakisbfvohagq.us.auth0.com',
    clientId: 'vVtrK6aFCof3STSEo7ICjhWYtDQe82f4',
    authorizationParams: {
        redirect_uri: 'http://localhost:3000'
    }
})

export const auth0LoginWithPopup = MyAuthClient.loginWithPopup