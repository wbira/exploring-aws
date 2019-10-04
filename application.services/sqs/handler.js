'use strict';

const AWS = require('aws-sdk');
const sqs = new AWS.SQS({ region: 'eu-west-1' });

const AWS_ACCOUNT = process.env.ACCOUNT_ID;
const QueueUrl = `https://sqs.eu-west-1.amazonaws.com/${AWS_ACCOUNT}/MyQueue`;

module.exports.hello = async event => {
  console.log('Event:', event);
  const params = {
    MessageBody: 'Hola',
    QueueUrl
  };
  try {
    data = await sqs.sendMessage(params).promise();
    console.log('Message id:', data.MessageId);
  } catch (err) {
    console.log(err);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'ERROR'
      })
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: data.MessageId
    })
  };
};

module.exports.sqsHello = async event => {
  console.log('Reciver was called');
  console.log(event);
};
