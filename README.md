# AWS Examples

I've added here some code examples created during preparation to AWS Certified Developer - Associate exam.

Here list of "touched" services

### S3

- Example of basic operations (getObject, PutObject, getSignedUrl)
- Handling events dispatched from S3 (create, remove)

### Security

- Very basic implementation of custom authorizer that protects other resources (lambda) according to following docs:
  https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-use-lambda-authorizer.html
