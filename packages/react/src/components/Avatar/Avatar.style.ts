import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { css } from 'styled-components';
import { ThemeDesignTokens } from '../../theme/ThemeProvider';
import { ExtendedTheme } from '../../types/Theme';
import { AvatarProps } from './Avatar';
import { AvatarSizes, getIconSize, StyledFontType } from './Avatar.types';

const getInnerEllipseSize = (theme: ThemeDesignTokens) => ({
  [AvatarSizes.small]: css`
    height: ${theme.AvatarInnerEllipseSmallHeight};
    width: ${theme.AvatarInnerEllipseSmallWidth};
  `,
  [AvatarSizes.medium]: css`
    height: ${theme.AvatarInnerEllipseMediumHeight};
    width: ${theme.AvatarInnerEllipseMediumWidth};
  `,
  [AvatarSizes.large]: css`
    height: ${theme.AvatarInnerEllipseLargeHeight};
    width: ${theme.AvatarInnerEllipseLargeWidth};
  `,
});

const getActiveEllipseStyles = (theme: ThemeDesignTokens) => ({
  [AvatarSizes.small]: css`
    width: ${theme.AvatarActiveEllipseSmallWidth};
    height: ${theme.AvatarActiveEllipseSmallHeight};
    border-width: ${theme.AvatarActiveEllipseSmallBorderWidth};
  `,
  [AvatarSizes.medium]: css`
    width: ${theme.AvatarActiveEllipseMediumWidth};
    height: ${theme.AvatarActiveEllipseMediumHeight};
    border-width: ${theme.AvatarActiveEllipseMediumBorderWidth};
  `,
  [AvatarSizes.large]: css`
    width: ${theme.AvatarActiveEllipseLargeWidth};
    height: ${theme.AvatarActiveEllipseLargeHeight};
    border-width: ${theme.AvatarActiveEllipseLargeBorderWidth};
  `,
});

export const Font = styled(FontAwesomeIcon)<ExtendedTheme<StyledFontType>>`
  ${({ theme, $size }) => css`
    height: ${$size && getIconSize(theme)[$size]};
  `};
`;
export const AvatarContainer = styled.div<AvatarProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  ${({ theme, inactive, size, source }: ExtendedTheme<AvatarProps>) => css`
    border: solid ${inactive ? theme.AvatarInactiveBackgroundColor : theme.AvatarActiveEllipseBorderColor};
    border-radius: ${theme.AvatarBorderRadius};
    ${size && getActiveEllipseStyles(theme)[size]};

    > .innerContainer {
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      border-radius: ${theme.AvatarBorderRadius};
      background-color: ${!source && inactive
        ? theme.AvatarInactiveBackgroundColor
        : theme.AvatarInnerEllipseBackgroundColor};

      ${size && getInnerEllipseSize(theme)[size as AvatarSizes]};
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
export const Text = styled.div<AvatarProps>`
  ${({ theme, inactive }: ExtendedTheme<AvatarProps>) => css`
    opacity: ${inactive && theme.AvatarInnerEllipseOpacity};
  `};
`;
