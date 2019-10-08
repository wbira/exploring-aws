'use strict';

const databaseManager = require('./databaseManager');
const uuidv1 = require('uuid/v1');

function createResponse(statusCode, body) {
  return {
    statusCode,
    body: JSON.stringify(body)
  };
}

module.exports.getItem = async event => {};
module.exports.saveItem = async event => {};
module.exports.deleteItem = async event => {};
module.exports.updateItem = async event => {};
