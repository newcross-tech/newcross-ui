import { css } from 'styled-components';
import { Theme } from '../../types/Theme';

export const getTabbedStateStyles = () => css`
  ${({ theme }: Theme) => css`
    &:focus-visible {
      outline: ${theme.ColorBaseBlue400} auto ${theme.LabelOutline};
      outline-offset: ${theme.LabelOutlineOffset};
    }
  `};
`;
