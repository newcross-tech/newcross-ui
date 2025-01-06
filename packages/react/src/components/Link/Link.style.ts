import styled, { css } from 'styled-components';
import { Theme } from '../../types';

export const Link = styled.a`
  ${({ theme, disabled }: Theme & { disabled: boolean }) => css`
    cursor: ${disabled ? 'not-allowed' : 'pointer'};
    pointer-events: ${disabled ? 'none' : 'auto'};
    &:active {
      opacity: ${theme.OpacityBaseMd};
    }
  `};
`;
