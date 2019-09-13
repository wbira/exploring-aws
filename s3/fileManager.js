'use strict';

const AWS = require('aws-sdk');
const S3 = new AWS.S3();

const BUCKET = 'wb-s3-example-operations';
const OBJECT_KEY = 'file.txt';

module.exports.appendText = async text => {
  getS3Object(BUCKET, OBJECT_KEY)
    .then(data => appendText(data.Body, text))
    .then(appendedText => putS3Object(BUCKET, OBJECT_KEY, appendedText))
    .then(() => getSignedUrl(BUCKET, OBJECT_KEY));
};

function getS3Object(bucket, key) {
  return S3.getObject({
    Bucket: bucket,
    Key: key,
    ResponseContentType: 'text/plain'
  })
    .promise()
    .then(file => file)
    .catch(_ => putS3Object(bucket, key, ''));
}

function appendText(buffer, text) {
  if (buffer === undefined) {
    return text;
  }
  return buffer.toString('ascii') + '\n' + text;
}

function putS3Object(bucket, key, body) {
  return S3.putObject({
    Bucket: bucket,
    Body: body,
    ContentType: 'text/plain',
    Key: key
  });
}

function getSignedUrl(bucket, key) {
  return S3.getSignedUrl('getObject', {
    Bucket: bucket,
    Key: key
  });
}
