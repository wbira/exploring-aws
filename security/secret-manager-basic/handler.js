'use strict';
const AWS = require('aws-sdk');

module.exports.hello = async () => {
  const { region, secretName } = process.env;
  const client = new AWS.SecretsManager({
    region
  });
  const params = {
    SecretId: secretName
  };

  try {
    const { ARN, CreatedDate, Name, SecretString, VersionId, VersionStages } = await client
      .getSecretValue(params)
      .promise();
    return {
      statusCode: 200,
      body: JSON.stringify({ ARN, CreatedDate, Name, SecretString, VersionId, VersionStages })
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ err })
    };
  }
};
