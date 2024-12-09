import styled, { css } from 'styled-components';
import { ExtendedTheme } from '../../types';
import Typography, { getColorStyles } from '../Typography';
import { LinkType } from './Link.types';

export const Link = styled.a<LinkType>`
  ${({ theme, disabled }: ExtendedTheme<LinkType>) => css`
    cursor: ${disabled ? 'not-allowed' : 'pointer'};
    pointer-events: ${disabled ? 'none' : 'auto'};
    &:active {
      opacity: ${theme.OpacityBaseMd};
    }
  `};
`;

export const Text = styled(Typography)`
  ${({ theme, mode = 'light', color = 'primary', disabled }: ExtendedTheme<LinkType>) => css`
    color: ${disabled ? theme.ElementsTextDisabled : theme.ElementsTextDefaultDark};
    text-decoration: underline ${getColorStyles(theme)[mode][color]};
  `}
`;
