import { Parameters } from '@storybook/react';
import { healthforce } from '@newcross-ui/design-tokens';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { isWebPlatform } from './isWebPlatform';

const { ColorBaseGrey600 } = healthforce;

export const getParameters = (
  showViewport = false,
  showPanel = true
): Parameters => {
  return {
    backgrounds: isWebPlatform && {
      default: 'figma',
      values: [{ name: 'figma', value: ColorBaseGrey600 }],
    },
    viewport: showViewport && {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iphone6',
    },
    options: { showPanel },
  };
};
