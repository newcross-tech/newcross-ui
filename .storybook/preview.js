import { healthforce } from '@newcross-ui/design-tokens';
import { ThemeProvider, Brand } from '@newcross-ui/react-native';

const { ColorBaseWhite, ColorBaseGrey600 } = healthforce;

export const globalTypes = {
  brands: {
    name: 'Brands',
    description: 'Pick your brand',
    defaultValue: Brand.healthforce,
    toolbar: {
      icon: 'globe',
      items: [
        { value: Brand.healthforce, title: 'Health Force' },
        { value: Brand.homeclinic, title: 'Home Clinic' },
        { value: Brand.yourcare, title: 'Your Care' },
        { value: Brand.yourlife, title: 'Your Life' },
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
    default: 'white',
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

  return (
    <ThemeProvider brand={brand}>
      <Story {...context} />
    </ThemeProvider>
  );
};

export const decorators = [withThemeProvider];
