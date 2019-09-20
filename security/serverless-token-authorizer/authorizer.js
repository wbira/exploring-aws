const jwt = require('jsonwebtoken');
const SECRET_KEY = 'someSecretKey';

module.exports.generatePolicy = (token, methodArn) => {
  if (this.decodeToken(token) != null) {
    return createPolicy();
  } else {
    console.log('Unauthorized!!!');
    const error = new Error('Unauthorized');
    throw error;
  }
};

module.exports.generateToken = jsonToSign => {
  const token = jwt.sign(jsonToSign, SECRET_KEY);
  console.log('Token:', token);
  return token;
};

module.exports.decodeToken = token => {
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    console.log('Decoded:', decoded);
    return decoded;
  } catch (err) {
    console.log('Decode error: ', err);
    return null;
  }
};

// todo implement proper policy creator
function createPolicy() {}
