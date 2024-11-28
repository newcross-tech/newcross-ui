import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { css } from 'styled-components';
import { ExtendedTheme } from '../../types';
import { getColorStyles } from '../Typography';
import { getIconSize } from '../../utils/css';
import { IconProps, LinkType } from './Link.types';

export const Link = styled.a<LinkType>`
  ${({ theme, mode = 'light', color = 'primary', disabled }: ExtendedTheme<LinkType>) => css`
    text-decoration: underline ${getColorStyles(theme)[mode][color]};
    color: ${disabled ? theme.ElementsTextDisabled : theme.ElementsTextDefaultDark};
    cursor: ${disabled ? 'not-allowed' : 'pointer'};
    pointer-events: ${disabled ? 'none' : 'auto'};
    &:active {
      opacity: ${theme.OpacityBaseMd};
    }
  `};
`;

export const Icon = styled(FontAwesomeIcon)<IconProps>`
  ${({ theme, variant }: ExtendedTheme<IconProps>) => css`
    ${getIconSize(theme, variant, 'heightWidth')};
  `};
`;
