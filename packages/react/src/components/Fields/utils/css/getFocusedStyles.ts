import { Theme } from '../../../..';

export const getFocusedStyles = ({ theme }: Theme) => ({
  border: `${theme.BorderBaseWidthSm} solid ${theme.ElementsBorderActionDefault}`,
});
