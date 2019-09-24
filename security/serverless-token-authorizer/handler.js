'use strict';

const authorizer = require('./authorizer');

module.exports.hello = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'The token was valid.'
    })
  };
};

module.exports.generateToken = async event => {
  const token = authorizer.generateToken(event.body);
  return {
    statusCode: 200,
    body: JSON.stringify({
      token
    })
  };
};

module.exports.authorize = async ({ authorizationToken, methodArn }) => {
  try {
    console.log('Token:', authorizationToken);
    console.log('MethodArn:', methodArn);

    const policy = authorizer.generatePolicy(authorizationToken, methodArn);
    return policy;
  } catch (error) {
    console.error(error.message);
    return error;
  }
};
