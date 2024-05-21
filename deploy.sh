#!/bin/bash

# Build the Next.js application
npm run build

# Check if the out directory exists
if [ -d "out" ]; then
  # Generate the router paths file
  find out -name "*.html" | sed -E 's:out/(.*):\1:g' > out/router-paths.txt
  echo "Router paths file created successfully."

  # Sync the output directory with the S3 bucket
  AWS s3 sync --delete out s3://my-nextjs-demo-bucket/
  echo "S3 sync completed successfully."
else
  echo "Error: The 'out' directory does not exist. Ensure 'npm run export' ran successfully."
  exit 1
fi
