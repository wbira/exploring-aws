'use strict';

const databaseRepository = require('./databaseRepository');
const uuidv1 = require('uuid/v1');

function createResponse(statusCode, body) {
  return {
    statusCode,
    body: JSON.stringify(body)
  };
}

module.exports.saveItem = async event => {
  const item = JSON.parse(event.body);
  item.itemId = uuidv1();

  try {
    const response = await databaseRepository.saveItem(item);
    return createResponse(200, response);
  } catch (err) {
    console.log('Error during save item: ', err);
    return createResponse(500, err);
  }
};

module.exports.getItem = async event => {
  const itemId = event.pathParameters.itemId;

  try {
    const response = await databaseRepository.getItem(itemId);
    return createResponse(200, response);
  } catch (err) {
    console.log('Error during get item: ', err);
    return createResponse(500, err);
  }
};

module.exports.deleteItem = async event => {
  const itemId = event.pathParameters.itemId;

  try {
    const response = await databaseRepository.deleteItem(itemId);

    return createResponse(200, `Item ${itemId} was deleted`);
  } catch (err) {
    console.log('Error during delete item: ', err);
    return createResponse(500, err);
  }
};

module.exports.updateItem = async event => {
  const itemId = event.pathParameters.itemId;

  const body = JSON.parse(event.body);
  const paramName = body.paramName;
  const paramValue = body.paramValue;

  try {
    const response = await databaseRepository.updateItem(itemId, paramName, paramValue);
    return createResponse(200, response);
  } catch (err) {
    console.log('err', err);
    return createResponse(500, err);
  }
};
