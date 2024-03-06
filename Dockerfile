# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# User the playwright to run test and install browser dependencies
FROM mcr.microsoft.com/playwright:v1.33.0-jammy

# Set the working directory
WORKDIR /test/

# Copy the all files to the container (.dockerignore will be applied when using the build command)
COPY . .

# Install dependencies
RUN npm install

# Start the a test run
CMD [ "npm",  "run", "test" ]
