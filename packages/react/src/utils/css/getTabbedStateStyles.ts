import { css } from 'styled-components';
import { Theme } from '../../types/Theme';

export const getTabbedStateStyles = (optionalOffset?: string) => css`
  ${({ theme }: Theme) => css`
    &:focus-visible {
      outline: ${theme.ColorBaseBlue400} auto ${theme.LabelOutline};
      outline-offset: ${optionalOffset
        ? optionalOffset
        : theme.LabelOutlineOffset};
    }
  `};
`;
