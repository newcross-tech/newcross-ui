import { css } from 'styled-components';
import { Theme } from '../../types/Theme';

export const getScrollbarStyles = () => css`
  ${({ theme }: Theme) => css`
    ::-webkit-scrollbar {
      width: ${theme.SpacingBase4};
    }
    ::-webkit-scrollbar-thumb {
      background: ${theme.ColorNeutralGrey300};
      border-radius: ${theme.TextInputBorderRadius};
    }
  `};
`;
