import { create } from '@storybook/theming';
import { healthforce } from '@newcross-ui/design-tokens';

const { ColorBaseGravitas, ColorBaseVigour, ColorBaseWhite } = healthforce;

export default create({
  base:'light',
  colorSecondary: ColorBaseVigour, 
  barTextColor: ColorBaseWhite,
  barSelectedColor: ColorBaseVigour,
  barBg: ColorBaseGravitas,
  brandTitle: 'Halo Design System',
  brandUrl: 'https://bitbucket.org/newcrossdev/newcross-ui/src/main/',
  fontBase: 'poppins',
  brandImage: require('../assets/images/logo.svg'),
});
