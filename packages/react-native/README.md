# Halo Design System - React Native

React Native components for react-native based projects in Newcross Healthcare.

# Get started

Our library is made to be used with `react-native` and because of this, we assume that you already have a few things setup and a `react-native` project up and running.

If that is not the case, we strongly recommend that you follow the [getting started](https://reactnative.dev/docs/getting-started) and [environment setup](https://reactnative.dev/docs/environment-setup) from the official `react-native` docs.

## Prerequisites

- `node>=16`
- `yarn`
- a working project with:
  - `react` >=16.8.0
  - `react-native` >=0.63.0

## Installation

To start using the `@newcross-ui/react-native` components on your project, first you will need to install it

```sh
yarn add @newcross-ui/react-native
```

**Dependencies**

We need to install these libraries `react-native-gesture-handler`, `react-native-reanimated` and `react-native-svg`. If you already have these libraries installed and at the latest version, you can skip this step.

### Installing dependencies into an Expo managed project​

```
expo install react-native-gesture-handler react-native-reanimated react-native-svg

```

### Installing dependencies into a bare React Native project​

```
yarn add react-native-gesture-handler react-native-reanimated react-native-svg

```

**How to use design tokens with react native components**

Wrap your application in a ThemeProvider

```javascript
import React from 'react';
import { ThemeProvider, Brand } from '@newcross-ui/react-native';
import RootComponent from './RootComponent';

const App = () => {
  return (
    <ThemeProvider brand={Brand.healthforce}>
      <RootComponent />
    </ThemeProvider>
  );
};
```

### Use components in your app

```javascript
import React from 'react';
import { View, Text } from 'react-native';
import { Radio, useTheme } from '@newcross-ui/react-native';

export const App = () => {
  const theme = useTheme();
  const onPress = () => console.log('I am pressed!');

  return (
    <View style={{ padding: theme.SpacingBase24 }}>
      <Text>A page title</Text>
      <Radio selected={false} onPress={onPress} label="Primary" />
    </View>
  );
};
```
