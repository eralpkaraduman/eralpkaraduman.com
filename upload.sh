#!/bin/sh
cd dist && ../node_modules/s3-upload/bin/s3-upload.js ../aws-upload.conf.js 
echo "Done"
