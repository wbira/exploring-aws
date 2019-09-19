'use strict';

module.exports.hello = async event => {
  const bucket = event.Records[0].s3.bucket.name;
  const key = event.Records[0].s3.object.key;

  console.log('Bucket:', bucket);
  console.log('Object key:', key);
  console.log(`A new file ${key} was created in the bucket ${bucket}`);
  console.log('Event: ', event);
  return null;
};

module.exports.bye = async event => {
  const bucket = event.Records[0].s3.bucket.name;
  const key = event.Records[0].s3.object.key;

  console.log('Bucket:', bucket);
  console.log('Object key:', key);
  console.log(`A new file ${key} was created in the bucket ${bucket}`);
  console.log('Event: ', event);
  return null;
};
