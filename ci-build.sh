#!/bin/sh

# Make the script to abort if any command fails
set -e

# Print the commands as it is executed. Useful for debugging
set -x

npm install

yarn test:ci

# yarn build

# docker build --pull -t com.harishkannarao/learn-tdd-in-react:latest -f Dockerfile build

# docker run --rm -d --name learn-tdd-in-react -p '3000:80' com.harishkannarao/learn-tdd-in-react:latest

# yarn cypress:run-functional

# docker stop learn-tdd-in-react