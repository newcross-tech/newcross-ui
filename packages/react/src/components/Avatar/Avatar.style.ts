import Typography from '../Typography';
import styled, { css } from 'styled-components';
import { ExtendedTheme } from '../../types';
import { AvatarContainerType, InactiveType, StyledFontType } from './Avatar.types';
import { ThemeDesignTokens } from '../../theme/ThemeProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CONTAINER_DIVIDER } from './constants';

const getIconSize = (theme: ThemeDesignTokens, size: number) => {
  let spacing = theme.SpacingBase48;

  if (size <= 87) {
    spacing = size <= 47 ? theme.SpacingBase12 : theme.SpacingBase24;
  }

  return css`
    width: ${spacing};
    height: ${spacing};
  `;
};

const getContainerSize = (theme: ThemeDesignTokens, size: number, divider: number) => {
  let spacing = `calc(${28 / divider / 16}rem)`;

  if (size > 28) {
    spacing = `calc(${size / divider / 16}rem)`;
  }

  if (size > 300) {
    spacing = `calc(${300 / divider / 16}rem)`;
  }

  return css`
    width: ${spacing};
    height: ${spacing};
  `;
};

export const AvatarIcon = styled(FontAwesomeIcon)<ExtendedTheme<StyledFontType>>`
  ${({ theme, $size }: ExtendedTheme<StyledFontType>) => css`
    ${getIconSize(theme, $size)};
  `};
`;

export const InnerContainer = styled.div``;

export const AvatarContainer = styled.div<AvatarContainerType>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  ${({ theme, inactive, size = 28 }: ExtendedTheme<AvatarContainerType>) => css`
    border: ${theme.AvatarActiveEllipseLargeBorderWidth} solid
      ${inactive ? theme.AvatarInactiveBackgroundColor : theme.AvatarActiveEllipseBorderColor};
    border-radius: ${theme.AvatarBorderRadius};
    ${getContainerSize(theme, size, 1)}

    > ${InnerContainer} {
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      border-radius: ${theme.AvatarBorderRadius};
      background-color: ${theme.AvatarInnerEllipseBackgroundColor};
      ${getContainerSize(theme, size, CONTAINER_DIVIDER)}
    }
  `};
`;

export const AvatarImage = styled.img<InactiveType>`
  height: 100%;
  width: 100%;
  object-fit: cover;
  ${({ theme, inactive }: ExtendedTheme<InactiveType>) => css`
    opacity: ${inactive && theme.AvatarInnerEllipseOpacity};
  `}
`;

export const Icon = styled.div<InactiveType>`
  ${({ theme, inactive }: ExtendedTheme<InactiveType>) => css`
    color: ${inactive ? theme.AvatarInactiveColor : theme.AvatarInnerEllipseColor};
  `};
`;

export const Text = styled(Typography)<InactiveType>`
  ${({ theme, inactive }: ExtendedTheme<InactiveType>) => css`
    opacity: ${inactive && theme.AvatarInnerEllipseOpacity};
    color: ${inactive ? theme.AvatarInactiveColor : theme.AvatarInnerEllipseColor};
  `};
`;
