'use strict';

module.exports.hello = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Version 3'
    })
  };
};
