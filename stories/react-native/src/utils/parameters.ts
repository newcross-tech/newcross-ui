import { Parameters } from '@storybook/react';
import { healthforce } from '@newcross-ui/design-tokens';
import { isWebPlatform } from './isWebPlatform';

const { ColorBaseGrey600 } = healthforce;

export const parameters: Parameters = isWebPlatform
  ? {
      backgrounds: {
        default: 'figma',
        values: [{ name: 'figma', value: ColorBaseGrey600 }],
      },
    }
  : {};
