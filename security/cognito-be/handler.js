'use strict';

module.exports.hello = async event => {
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({
      message: 'Call was successfuly authenticated!',
      input: event
    })
  };
};
