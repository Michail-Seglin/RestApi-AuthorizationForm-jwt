const jwt = require('jsonwebtoken');

function createToken(userData) {
    const token = jwt.sign(userData[0], 'testKey')
    console.log(token);
    return token
}

module.exports = createToken;