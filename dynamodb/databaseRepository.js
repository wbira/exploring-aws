const AWS = require('aws-sdk');
const dynamoClient = new AWS.DynamoDB.DocumentClient();
const TableName = process.env.TABLE_NAME;

module.exports.saveItem = async item => {
  const params = { TableName, Item: item };
  return dynamoClient
    .put(params)
    .promise()
    .then(response => {
      console.log('Puted item attrubiutes:', response.Attributes);
      return item.itemId; // todo should return real value from table
    });
};

module.exports.getItem = async itemId => {
  const params = {
    Key: {
      itemId
    },
    TableName
  };

  return dynamoClient
    .get(params)
    .promise()
    .then(response => {
      if (response.Item) {
        return response.Item;
      }
      throw Error('item not exits');
    });
};

module.exports.deleteItem = async itemId => {
  const params = {
    Key: {
      itemId
    },
    TableName
  };

  return dynamoClient.delete(params).promise();
};

module.exports.updateItem = async (itemId, paramsName, paramsValue) => {
  const params = {
    TableName,
    Key: {
      itemId
    },
    ConditionExpression: 'attribute_exists(itemId)',
    UpdateExpression: 'set ' + paramsName + ' = :v',
    ExpressionAttributeValues: {
      ':v': paramsValue
    },
    ReturnValues: 'ALL_NEW'
  };
  return dynamoClient
    .update(params)
    .promise()
    .then(response => response.Attributes);
};
