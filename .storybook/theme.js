import { create } from '@storybook/theming';
import { web } from '@newcross-tech/ui-design-tokens';

const { ColorPrimaryGravitas, ColorPrimaryVigour, ColorNeutralWhite } =
  web.healthforce;

export default create({
  base: 'light',
  colorSecondary: ColorPrimaryVigour,
  barTextColor: ColorNeutralWhite,
  barSelectedColor: ColorPrimaryVigour,
  barBg: ColorPrimaryGravitas,
  brandTitle: 'Halo Design System',
  brandUrl: 'https://github.com/newcross-tech/newcross-ui',
  fontBase: 'poppins',
  brandImage: require('../assets/images/logo.svg'),
});
