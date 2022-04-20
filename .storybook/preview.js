import { healthforce } from '@newcross-ui/design-tokens';

const { ColorBaseWhite, ColorBaseGrey600 } = healthforce;

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
