import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds';
import { healthforce } from '@newcross-ui/design-tokens';
import { ThemeProvider, Brand } from '@newcross-ui/react-native';

const { ColorBaseGrey600, ColorBaseWhite } = healthforce;

const withThemeProvider = (Story) => {
  return (
    <ThemeProvider brand={Brand.healthforce}>
      <Story />
    </ThemeProvider>
  );
};

export const decorators = [withBackgrounds, withThemeProvider];
export const parameters = {
  backgrounds: [
    {
      name: 'white',
      value: ColorBaseWhite,
    },
    {
      name: 'figma',
      value: ColorBaseGrey600,
      default: true,
    },
  ],
};
