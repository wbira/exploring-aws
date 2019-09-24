const jwt = require('jsonwebtoken');
const SECRET_KEY = 'someSecretKey';

module.exports.generatePolicy = (token, methodArn) => {
  if (this.decodeToken(token) != null) {
    return createPolicy('user', 'Allow', methodArn);
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

function createPolicy(principalId, effect, resource) {
  var authResponse = {};

  authResponse.principalId = principalId;
  if (effect && resource) {
    var policyDocument = {};
    policyDocument.Version = '2012-10-17';
    policyDocument.Statement = [];
    var statementOne = {};
    statementOne.Action = 'execute-api:Invoke';
    statementOne.Effect = effect;
    statementOne.Resource = resource;
    policyDocument.Statement[0] = statementOne;
    authResponse.policyDocument = policyDocument;
  }

  authResponse.context = {
    stringKey: 'stringval',
    numberKey: 123,
    booleanKey: true
  };
  return authResponse;
}
