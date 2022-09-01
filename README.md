# The OWASP Top Ten Workshop

![CI](https://github.com/nearform/owasp-top-ten-workshop/actions/workflows/ci.yml/badge.svg?event=push)
## Requirements

- Node LTS
- npm >=7 - you can install it with [`npm install -g npm@latest`](https://docs.npmjs.com/try-the-latest-stable-version-of-npm)
- docker
- docker-compose

## Setup

- `npm ci`
- `npm run db:up`
- `npm run db:migrate`

### Run automated tests

- `npm test --workspaces`

#### Run automated tests on a single project

- `npm test -w src/step-05-testing`

## Running the modules

- `cd src/step-{n}-{name}`
- check each module's README file to see which scripts are available

## Presenting

- `npm start`

# Bench Template
A feature-packed template to start a new repository on the bench, including:

- code linting with [ESlint](https://eslint.org) and [prettier](https://prettier.io)
- pre-commit code linting and commit message linting with [husky](https://www.npmjs.com/package/husky) and [commitlint](https://commitlint.js.org/)
- dependabot setup with automatic merging thanks to ["merge dependabot" GitHub action](https://github.com/fastify/github-action-merge-dependabot)
- notifications about commits waiting to be released thanks to ["notify release" GitHub action](https://github.com/nearform/github-action-notify-release)
- PRs' linked issues check with ["check linked issues" GitHub action](https://github.com/nearform/github-action-check-linked-issues)
- Continuous Integration GitHub workflow

## When you have already a repo

If you already created a repo and you want to add some of the features above to it, you can have a look at [NearForm MRM Preset](https://github.com/nearform/mrm-preset-nearform).
