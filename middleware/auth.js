"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth0LoginWithPopup = exports.MyAuthClient = void 0;
const auth0_spa_js_1 = require("@auth0/auth0-spa-js");
exports.MyAuthClient = new auth0_spa_js_1.Auth0Client({
    domain: 'dev-8jqvakisbfvohagq.us.auth0.com',
    clientId: 'vVtrK6aFCof3STSEo7ICjhWYtDQe82f4',
    authorizationParams: {
        redirect_uri: 'http://localhost:3000'
    }
});
exports.auth0LoginWithPopup = exports.MyAuthClient.loginWithPopup;
