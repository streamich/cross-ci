./bin/cross-ci.js :echo \
    "AWS_ACCESS_KEY_ID=\${process.env.AWS_ACCESS_KEY_STAGING}" \
    "AWS_SECRET_ACCESS_KEY=\${process.env.AWS_SECRET_STAGING}" \
        s3 sync ./public "s3://bucket/builds/\${PROJECT_NAME}/\${BUILD_VERSION}/public" \
            --region eu-west-1 \
            --acl public-read
