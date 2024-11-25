import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { css } from 'styled-components';
import { ExtendedTheme, Theme } from '../../types';
import { getColorStyles } from '../Typography';
import { LinkProps } from './Link';
import { getIconSize } from '../../utils/css';

type LinkType = Omit<LinkProps, 'variant'>;

export const Link = styled.a<LinkType>`
  text-decoration: underline;
  cursor: pointer;
  text-decoration: underline
    ${({ theme, mode = 'light', color = 'primary' }: ExtendedTheme<LinkType>) => getColorStyles(theme)[mode][color]};

  ${({ theme }: Theme) => css`
    color: ${theme.LinkColor};

    &:active {
      opacity: ${theme.LinkPressedOpacity};
    }
  `};
`;

type IconProps = Pick<LinkProps, 'leftIcon' | 'rightIcon' | 'variant'>;

export const Icon = styled(FontAwesomeIcon)<IconProps>`
  ${({ theme, leftIcon, rightIcon, variant }: ExtendedTheme<IconProps>) => css`
    ${getIconSize(theme, variant, 'heightWidth')};
    ${leftIcon && `margin-right: ${theme.SpacingBase8}`};
    ${rightIcon && `margin-left: ${theme.SpacingBase8}`};
  `};
`;
