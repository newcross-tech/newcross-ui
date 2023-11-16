# Halo Design System

Design system consist of design tokens, React & React Native components for web and mobile projects in Newcross Healthcare

## Design Tokens

[link to documentation](packages/design-tokens/README.md)

## React Native

[link to documentation](packages/react-native/README.md)

## React

[link to documentation](packages/react/README.md)

## How to use

### Prerequisites

- Request NPM Access token by sending an email to `itdev@newcrosshealthcaretest.com`
- Setup NPM_TOKEN env variable:
  - `cd ~`
  - `vim .zshrc OR vim .bash_profile`
  - Click `i` on your keyboard and paste `export NPM_TOKEN=*****-***-***-***-*****` at the top of file.
  - Enter `:wq` on your keyboard to save the changes
  - Reopen your terminal, `NPM_TOKEN` will be exported as env variable
- Install commitizen globally by running `npm install -g commitizen`. This is required to manage conventional commits

### Local setup

Install dependencies

```
yarn
```

Build packages

```
yarn build
```

Watch changes in all packages

```
yarn build:watch
```

Run storybook

```
yarn storybook
```

Run storybook in simulator

```
cd stories/react-native

yarn start
```

Below commands runs as part of CI/CD pipeline so generally not required to run locally

Build storybook locally

```
yarn build-storybook
```

Deploy Storybook to AWS locally

```
# Acceptance
yarn sls deploy -s acceptance

# Production
yarn sls deploy -s production
```
