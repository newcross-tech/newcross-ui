import { Theme } from '../../types';

export const getScrollbarStyles = ({ theme }: Theme) => ({
  '::-webkit-scrollbar': {
    width: theme.BaselineSpacesSpace4,
  },
  '::-webkit-scrollbar-thumb': {
    background: theme.ElementsSurfaceDefaultSecondary,
    borderRadius: theme.BorderBaseRadiusMd,
  },
});
