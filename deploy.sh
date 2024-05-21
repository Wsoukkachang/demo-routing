set -e  # Exit immediately if a command exits with a non-zero status.
set -x  # Print commands and their arguments as they are executed.

# Ensure the script is running from the correct directory
cd "$(dirname "$0")"

# Print current directory for debugging
echo "Current directory: $(pwd)"

# Build the Next.js application
echo "Running npm run build"
npm run build

# Check if the out directory exists
if [ -d "out" ]; then
  echo "out directory exists"
  # Generate the router paths file
  echo "Generating router paths file"
  find out -name "*.html" | sed -E 's:out/(.*):\1:g' > out/router-paths.txt
  echo "Router paths file created successfully."

  # Sync the output directory with the S3 bucket
  echo "Syncing files to S3 bucket"
  aws s3 sync --delete out s3://my-nextjs-demo-bucket/
  echo "S3 sync completed successfully."
else
  echo "Error: The 'out' directory does not exist. Ensure 'npm run export' ran successfully."
  exit 1
fi