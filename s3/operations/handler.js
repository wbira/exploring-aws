'use strict';

const fileManager = require('./fileManager');

module.exports.appendText = async event => {
  const text = event.queryStringParameters.text;

  const url = await fileManager.appendText(text);
  return {
    statusCode: 200,
    body: JSON.stringify({
      url
    })
  };
};
