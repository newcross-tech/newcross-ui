import { Parameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { isWebPlatform } from './isWebPlatform';

type Backgrounds = 'white' | 'figma';

export const getParameters = (
  showViewport = false,
  showPanel = true,
  background: Backgrounds = 'figma'
): Parameters => {
  const parameters = {
    viewport: showViewport && {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iphone5',
    },
    options: { showPanel },
  };

  if (isWebPlatform) {
    return {
      backgrounds: {
        default: background,
      },
      ...parameters,
    };
  }

  return parameters;
};
