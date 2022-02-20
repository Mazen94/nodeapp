const dotenv = require('dotenv');

// get config vars
dotenv.config(); 
function generateAccessToken(userId) {
    return jwt.sign(userId, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
}

exports.generateAccessToken = generateAccessToken;