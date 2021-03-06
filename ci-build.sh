#!/bin/sh

# Make the script to abort if any command fails
set -e

# Print the commands as it is executed. Useful for debugging
set -x

npm install

npm run test:ci

npm run build

docker build --pull -t com.harishkannarao/react-tic-tac-toe:latest -f Dockerfile build

docker run --rm -d --name react-tic-tac-toe -p '3000:80' com.harishkannarao/react-tic-tac-toe:latest

npm run cypress:run-functional

docker stop react-tic-tac-toe