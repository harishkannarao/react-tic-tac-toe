#!/bin/sh

# Make the script to abort if any command fails
set -e

# Print the commands as it is executed. Useful for debugging
set -x

sudo apt-get -qq update

# Print pre-installed dependencies version

node --version

npm --version

npx --version

docker --version

# Installing yarn

curl -o- -L https://yarnpkg.com/install.sh | bash -s -- --version 1.22.4

export PATH="$HOME/.yarn/bin:$HOME/.config/yarn/global/node_modules/.bin:$PATH"

yarn --version