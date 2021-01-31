# Tic Tac Toe - React

This repository is the `tic tac toe` game from the official [ReactJs tutorial](https://reactjs.org/tutorial/tutorial.html).

In addition to the tutorial, it covers:

* unit/component testing using [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) and [Jest](https://jestjs.io/docs/en/getting-started)
* functional(integration) test using [Cypress](https://docs.cypress.io/guides/getting-started/installing-cypress.html).

It also demonstrates the CI setup and run using Github Actions

* Github Actions config - [.github/workflows/CI-master.yml](https://github.com/harishkannarao/react-tic-tac-toe/blob/master/.github/workflows/CI-master.yml)
* Github Actions setup - [ci-install-dependencies.sh](https://github.com/harishkannarao/react-tic-tac-toe/blob/master/ci-install-dependencies.sh)
* Github Actions build - [ci-build.sh](https://github.com/harishkannarao/react-tic-tac-toe/blob/master/ci-build.sh)

## Tools Required
* NodeJs 12: `node --version`
* Npm 6: `npm --version`
* Npx 6: `npx --version`
* Docker 19: `docker --version`

## Project creation

    npx create-react-app

## Commands

### Install node modules

    npm install

### Start application

    npm run start

    npm run start:no-browser

### Build application

    npm run build

### Run the build distribution

    npm run serve

### Run the unit and component tests

    npm run test

    npm run test:ci

### Run integration tests

    npm run cypress:open-functional

    npm run cypress:run-functional

### Run all tests

    npm run test:ci && npm run cypress:run-functional


## Run as Docker

### Build the project

    npm run build

### Build the docker container

    docker build --pull -t com.harishkannarao/react-tic-tac-toe:latest -f Dockerfile build

### Run the docker container in background

    docker run --rm -d --name react-tic-tac-toe -p '3000:80' com.harishkannarao/react-tic-tac-toe:latest

### Verify the running container

    docker ps

### See the running application at:

    http://localhost:3000

### See the docker logs:

    docker logs --follow react-tic-tac-toe

### Stop the docker container

    docker stop react-tic-tac-toe