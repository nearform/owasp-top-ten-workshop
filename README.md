# The OWASP Top Ten Workshop

![CI](https://github.com/nearform/owasp-top-ten-workshop/actions/workflows/ci.yml/badge.svg?event=push)

Workshop based on the [OWASP Top Ten](https://owasp.org/www-project-top-ten/) security vulnerabilities

## Requirements

- Node LTS
- npm >=7 - you can install it with [`npm install -g npm@latest`](https://docs.npmjs.com/try-the-latest-stable-version-of-npm)
- docker
- docker-compose
- Postman for testing requests

## Setup

- `npm ci`
- `npm run db:up`
- `npm run db:migrate`

# Slides

Slides contain instructions for the workshop. You can read them in `slides.md`, or:

`npm start` will open the slides in the browser

#### Run automated tests on a single project

- `npm test -w src/step-05-testing`

## Running the modules

### Running the server

- `npm run step:x` (x: number of the step)

### Running validation tests for exercises

- `npm run test:x` (x: number of the step)
