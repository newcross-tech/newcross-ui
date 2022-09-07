import { create } from '@storybook/theming';
import { web } from '@newcross-ui/design-tokens';

const { ColorBaseBlue100, ColorBaseOrange100, ColorBaseWhite100 } =
  web.healthforce;

export default create({
  base: 'light',
  colorSecondary: ColorBaseOrange100,
  barTextColor: ColorBaseWhite100,
  barSelectedColor: ColorBaseOrange100,
  barBg: ColorBaseBlue100,
  brandTitle: 'Halo Design System',
  brandUrl: 'https://bitbucket.org/newcrossdev/newcross-ui/src/main/',
  fontBase: 'poppins',
  brandImage: require('../assets/images/logo.svg'),
});
