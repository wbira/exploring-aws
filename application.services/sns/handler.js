'use strict';
const AWS = require('aws-sdk');
const sns = new AWS.SNS();

module.exports.snsPublisher = async event => {
  console.log('Incoming event:', event);
  const params = {
    Message: 'Hello world!',
    TopicArn: process.env.TOPIC_ARN
  };
  console.log('Params to publish', params);
  try {
    const { MessageId } = await sns.publish(params).promise();
    console.log('Message was sent with id: ', MessageId);
    return {
      statusCode: 200,
      body: JSON.stringify({
        MessageId
      })
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        err
      })
    };
  }
};

module.exports.snsTrigger = async event => {
  console.log('SNS event:', event);
  console.log('\n\n\n\n');
  const { Message, MessageId } = event.Records[0].Sns;
  console.log('MessageId:', MessageId);
  console.log('Message:', Message);
};
