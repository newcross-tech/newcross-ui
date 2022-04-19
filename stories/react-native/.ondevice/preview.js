import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds';
import { healthforce } from '@newcross-ui/design-tokens';

const { ColorBaseGrey600 } = healthforce;

export const decorators = [withBackgrounds];
export const parameters = {
  backgrounds: [
    { name: 'figma', value: ColorBaseGrey600, default: true },
    { name: 'plain', value: 'white' },
    { name: 'warm', value: 'hotpink' },
    { name: 'cool', value: 'deepskyblue' },
  ],
};
