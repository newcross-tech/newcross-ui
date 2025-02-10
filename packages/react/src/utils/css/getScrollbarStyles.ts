import { Theme } from '../../types';

export const getScrollbarStyles = ({ theme }: Theme) => ({
  '::-webkit-scrollbar': {
    width: theme.BaselineSpacesSpace4,
    background: 'transparent',
  },

  '::-webkit-scrollbar-track': {
    background: 'transparent',
  },

  '::-webkit-scrollbar-thumb': {
    borderRadius: theme.BorderBaseRadiusMd,
    background: theme.ElementsSurfaceDefaultSecondary,
  },
});
