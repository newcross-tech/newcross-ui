import { css } from 'styled-components';
import { Theme } from '../../types';

export const getTabbedStateStyles = () => css`
  ${({ theme }: Theme) => css`
    &:focus-visible {
      outline: ${theme.ColorBaseBlue400} auto ${theme.BorderBaseWidthSm};
      outline-offset: ${theme.BaselineSpacesSpace4};
    }
  `};
`;
