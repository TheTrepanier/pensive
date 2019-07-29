const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${REACT_APP_AUTH0_DOMAIN}/.well-known/jwks.json`,
  }),
  audience: REACT_APP_AUTH0_CLIENT_ID,
  issuer: `https://${REACT_APP_AUTH0_DOMAIN}/`,
  algorithms: ['RS256'],
});


module.exports = checkJwt;