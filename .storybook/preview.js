import * as tokens from '@newcross-ui/design-tokens';
import * as Native from '@newcross-ui/react-native';
import * as Web from '@newcross-ui/react';

const { ColorBaseWhite, ColorBaseGrey600 } = tokens.web.healthforce;

const ComponentTypes = {
  ReactNative: 'ReactNative',
  React: 'React',
};

export const globalTypes = {
  brands: {
    name: 'Brands',
    description: 'Pick your brand',
    defaultValue: Web.Brand.healthforce,
    toolbar: {
      icon: 'globe',
      items: [
        { value: Web.Brand.healthforce, title: 'Health Force' },
        { value: Web.Brand.homeclinic, title: 'Home Clinic' },
        { value: Web.Brand.yourcare, title: 'Your Care' },
        { value: Web.Brand.yourlife, title: 'Your Life' },
      ],
      showName: true,
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'figma',
    values: [
      {
        name: 'white',
        value: ColorBaseWhite,
      },
      {
        name: 'figma',
        value: ColorBaseGrey600,
      },
    ],
  },
  options: { showPanel: true, panelPosition: 'bottom' },
};

const withThemeProvider = (Story, context) => {
  const brand = context.globals.brands;
  const [componentType] = context.title ? context.title.split('/') : [];

  const ThemeProviders = {
    [ComponentTypes.ReactNative]: (
      <Native.ThemeProvider brand={brand}>
        <Story {...context} />
      </Native.ThemeProvider>
    ),
    [ComponentTypes.React]: (
      <Web.ThemeProvider brand={brand}>
        <Story {...context} />
      </Web.ThemeProvider>
    ),
  };

  return ThemeProviders[componentType];
};

export const decorators = [withThemeProvider];
