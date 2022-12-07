import Typography from '../Typography';
import { AvatarProps } from './Avatar';
import styled, { css } from 'styled-components';
import { ExtendedTheme } from '../../types/Theme';
import { getHaloValue } from '../../utils/getHaloValue';
import { AvatarSizes, StyledFontType } from './Avatar.types';
import { ThemeDesignTokens } from '../../theme/ThemeProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const getInnerEllipseSize = (theme: ThemeDesignTokens) => ({
  [AvatarSizes.small]: css`
    height: ${theme.AvatarInnerEllipseSmallHeight};
    width: ${theme.AvatarInnerEllipseSmallWidth};
  `,
  [AvatarSizes.medium]: css`
    width: ${+getHaloValue(theme.SpacingBase4) * 9}rem;
    height: ${+getHaloValue(theme.SpacingBase4) * 9}rem;
  `,
  [AvatarSizes.large]: css`
    height: ${theme.AvatarInnerEllipseLargeHeight};
    width: ${theme.AvatarInnerEllipseLargeWidth};
  `,
});

const getActiveEllipseStyles = (theme: ThemeDesignTokens) => ({
  [AvatarSizes.small]: css`
    width: ${+getHaloValue(theme.SpacingBase4) * 7}rem;
    height: ${+getHaloValue(theme.SpacingBase4) * 7}rem;
  `,
  [AvatarSizes.medium]: css`
    width: ${+getHaloValue(theme.SpacingBase4) * 11}rem;
    height: ${+getHaloValue(theme.SpacingBase4) * 11}rem;
  `,
  [AvatarSizes.large]: css`
    width: ${+getHaloValue(theme.SpacingBase12) * 5}rem;
    height: ${+getHaloValue(theme.SpacingBase12) * 5}rem;
  `,
});

export const getIconSize = (theme: ThemeDesignTokens) => ({
  [AvatarSizes.small]: css`
    width: ${theme.AvatarInnerEllipseIconHeightSmall};
    height: ${theme.AvatarInnerEllipseIconHeightSmall};
  `,
  [AvatarSizes.medium]: css`
    width: ${theme.AvatarInnerEllipseIconHeightMedium};
    height: ${theme.AvatarInnerEllipseIconHeightMedium};
  `,
  [AvatarSizes.large]: css`
    width: ${theme.AvatarInnerEllipseIconHeightLarge};
    height: ${theme.AvatarInnerEllipseIconHeightLarge};
  `,
});

export const AvatarIcon = styled(FontAwesomeIcon)<ExtendedTheme<StyledFontType>>`
  ${({ theme, $size }) => css`
    ${$size && getIconSize(theme)[$size]};
  `};
`;

export const InnerContainer = styled.div``;

export const AvatarContainer = styled.div<AvatarProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  ${({ theme, inactive, size }: ExtendedTheme<AvatarProps>) => css`
    border: ${theme.AvatarActiveEllipseLargeBorderWidth} solid
      ${inactive ? theme.AvatarInactiveBackgroundColor : theme.AvatarActiveEllipseBorderColor};
    border-radius: ${theme.AvatarBorderRadius};

    ${size && getActiveEllipseStyles(theme)[size]};

    > ${InnerContainer} {
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      border-radius: ${theme.AvatarBorderRadius};
      background-color: ${theme.AvatarInnerEllipseBackgroundColor};

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

export const Text = styled(Typography)<AvatarProps>`
  ${({ theme, inactive }: ExtendedTheme<AvatarProps>) => css`
    opacity: ${inactive && theme.AvatarInnerEllipseOpacity};
    color: ${inactive ? theme.AvatarInactiveColor : theme.AvatarInnerEllipseColor};
  `};
`;
