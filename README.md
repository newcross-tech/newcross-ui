# Halo Design System

Design system consist of design tokens, React & React Native components for web and mobile projects in Newcross Healthcare

## Design Tokens

[link to documentation](packages/design-tokens/README.md)

## React Native

[link to documentation](packages/react-native/README.md)

## How to use

Watch all changes in packages

```
yarn build:watch
```

Run storybook locally

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
