import Typography from '../Typography';
import { AvatarProps } from './Avatar';
import styled, { css } from 'styled-components';
import { ExtendedTheme } from '../../types';
import { StyledFontType } from './Avatar.types';
import { ThemeDesignTokens } from '../../theme/ThemeProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CONTAINER_DIVIDER } from './constants';

const getIconSize = (theme: ThemeDesignTokens, size: number) => {
  if (size <= 47)
    return css`
      width: ${theme.SpacingBase12};
      height: ${theme.SpacingBase12};
    `;
  if (size >= 48 && size <= 87)
    return css`
      width: ${theme.SpacingBase24};
      height: ${theme.SpacingBase24};
    `;

  return css`
    width: ${theme.SpacingBase48};
    height: ${theme.SpacingBase48};
  `;
};

export const AvatarIcon = styled(FontAwesomeIcon)<ExtendedTheme<StyledFontType>>`
  ${({ theme, $size = 28 }: ExtendedTheme<StyledFontType>) => css`
    ${getIconSize(theme, $size)};
  `};
`;

export const InnerContainer = styled.div``;

export const AvatarContainer = styled.div<AvatarProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  ${({ theme, inactive, size = 28 }: ExtendedTheme<AvatarProps>) => css`
    border: ${theme.AvatarActiveEllipseLargeBorderWidth} solid
      ${inactive ? theme.AvatarInactiveBackgroundColor : theme.AvatarActiveEllipseBorderColor};
    border-radius: ${theme.AvatarBorderRadius};
    width: ${size > 28 ? `calc(${size / 16}rem)` : `calc(${28 / 16}rem)`};
    height: ${size > 28 ? `calc(${size / 16}rem)` : `calc(${28 / 16}rem)`};

    > ${InnerContainer} {
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      border-radius: ${theme.AvatarBorderRadius};
      background-color: ${theme.AvatarInnerEllipseBackgroundColor};
      width: ${size > 28 ? `calc(${size / CONTAINER_DIVIDER / 16}rem)` : `calc(${28 / CONTAINER_DIVIDER / 16}rem)`};
      height: ${size > 28 ? `calc(${size / CONTAINER_DIVIDER / 16}rem)` : `calc(${28 / CONTAINER_DIVIDER / 16}rem)`};
    }
  `};
`;

export const AvatarImage = styled.img<AvatarProps>`
  height: 100%;
  width: 100%;
  object-fit: cover;
  ${({ theme, inactive }: ExtendedTheme<AvatarProps>) => css`
    opacity: ${inactive && theme.AvatarInnerEllipseOpacity};
  `}
`;

export const Icon = styled.div<AvatarProps>`
  ${({ theme, inactive }: ExtendedTheme<AvatarProps>) => css`
    color: ${inactive ? theme.AvatarInactiveColor : theme.AvatarInnerEllipseColor};
  `};
`;

export const Text = styled(Typography)<AvatarProps>`
  ${({ theme, inactive }: ExtendedTheme<AvatarProps>) => css`
    opacity: ${inactive && theme.AvatarInnerEllipseOpacity};
    color: ${inactive ? theme.AvatarInactiveColor : theme.AvatarInnerEllipseColor};
  `};
`;
