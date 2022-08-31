# Halo Design System - React

React components for react based projects in Newcross Healthcare.

# Get started

Our library is made to be used with `react` and because of this, we assume that you already have a few things setup and a `react` project up and running.

If that is not the case, we strongly recommend that you follow the [getting started](https://reactjs.org/docs/getting-started.html) and [project setup](https://reactjs.org/docs/create-a-new-react-app.html) from the official `react` docs.

## Prerequisites

- `node>=16`
- `yarn`
- a working project with:
  - `react` >=16.8.0
  - `react-dom` >=16.8.0

## Installation

To start using the `@newcross-ui/react` components on your project, first you will need to install it

```sh
yarn add @newcross-ui/react
```

**Dependencies**

We need to install these libraries `styled-components` and `@types/styled-components`. If you already have these libraries installed and at the latest version, you can skip this step.

**How to use design tokens with react components**

Wrap your application in a ThemeProvider

```javascript
import React from 'react';
import { ThemeProvider, Brand } from '@newcross-ui/react';
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
import { Button } from '@newcross-ui/react';

export const App = () => {
  const onClick = () => console.log('I am clicked!');

  return <Button onClick={onClick}>Hello</Button>;
};
```
