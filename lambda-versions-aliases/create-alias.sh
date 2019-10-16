#!/bin/bash

aws lambda create-alias --function-name lambda-versions-aliasases-dev-hello \
--description "beta alias" --function-version $1 --name $2