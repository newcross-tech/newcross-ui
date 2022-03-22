# Halo Design System - Design Tokens

Design tokens for react and react-native based projects inside Newcross Healthcare.

# Get started

Design tokens library contains all the design decisions across web and mobile app and it supports multi brand/multi platform setup

## Prerequisites

- `node>=14`
- `yarn` or `npm`

## Installation

To start using the `@newcross-ui/design-tokens` on your project, first you will need to install it

```sh
npm install --save @newcross-ui/design-tokens

# OR

yarn add @newcross-ui/design-tokens
```

### Using the tokens in your app

```javascript
// pick the brand and associated tokens

import { healthforce } from '@newcross-ui/design-tokens';

const {
  RadioHeight,
  RadioWidth,
  RadioBorderWidth,
  RadioBorderColor,
  RadioPadding
} = healthforce;

const radioStyle = (): StyleSheet.NamedStyles<RadioStyle> => ({
  wrapper: {
    padding: RadioPadding,
  },
  radio: {
    width: RadioWidth,
    height: RadioHeight,
    borderWidth: RadioBorderWidth,
    borderRadius: RadioHeight / 2,
  },
})
```