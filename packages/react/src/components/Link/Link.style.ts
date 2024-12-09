import styled, { css } from 'styled-components';
import { ExtendedTheme } from '../../types';
import { getColorStyles } from '../Typography';
import { getIconSize } from '../../utils/css';
import { LinkIconProps, LinkType } from './Link.types';

export const Link = styled.a<LinkType>`
  ${({ theme, disabled }: ExtendedTheme<LinkType>) => css`
    cursor: ${disabled ? 'not-allowed' : 'pointer'};
    pointer-events: ${disabled ? 'none' : 'auto'};
    &:active {
      opacity: ${theme.OpacityBaseMd};
    }
  `};
`;

export const Icon = styled(FontAwesomeIcon)<LinkIconProps>`
  ${({ theme, variant }: ExtendedTheme<LinkIconProps>) => css`
    ${getIconSize(theme, variant, 'heightWidth')};
  `};
`;
