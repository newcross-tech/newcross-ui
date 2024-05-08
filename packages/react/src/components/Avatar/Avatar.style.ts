import Typography from '../Typography';
import styled, { css } from 'styled-components';
import { ExtendedTheme } from '../../types';
import { AvatarContainerType, InactiveType, StyledFontType } from './Avatar.types';
import { ThemeDesignTokens } from '../../theme/ThemeProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CONTAINER_DIVIDER } from './constants';
import { getPxFromRem } from '../../utils/getPxFromRem';

const getIconSize = (theme: ThemeDesignTokens, size: number) => {
  let spacing = theme.SpacingBase48;
  const mediumBreakpoint = getPxFromRem(theme.SpacingBase48);
  const largeBreakPoint = getPxFromRem(theme.SpacingBase80);
  if (size <= largeBreakPoint) {
    spacing = size <= mediumBreakpoint ? theme.SpacingBase12 : theme.SpacingBase24;
  }

  return css`
    width: ${spacing};
    height: ${spacing};
  `;
};

const getBorderColor = (selected?: boolean, inactive?: boolean) => {
  if (inactive) {
    return 'Disabled';
  }
  if (selected) {
    return 'Selected';
  }
  return 'Default';
};

const getContainerSize = (theme: ThemeDesignTokens, size: number, divider: number, adjstment?: string) => {
  const minSize = getPxFromRem(theme.SpacingBase32);
  const maxSize = getPxFromRem(theme.SpacingBase4) * 75;
  const safeSize = size > minSize ? Math.min(size, maxSize) : minSize;

  const spacing = safeSize / divider / 16;

  const computedSpacing = `calc(${spacing}rem - ${theme.AvatarActiveEllipseLargeBorderWidth} * 2 ${
    adjstment ? `+ ${adjstment}` : ''
  })`;

  return css`
    width: ${computedSpacing};
    height: ${computedSpacing};
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

  ${({ theme, selected, inactive, clickable, allowHoverOnDisabled, size }: ExtendedTheme<AvatarContainerType>) => css`
    position: relative;

    ::before {
      display: block;
      position: absolute;
      content: '';
      border-radius: ${theme.AvatarBorderRadius};
      transition: 0.3s;
      ${getContainerSize(theme, size, 1, `${theme.SpacingBase4}/2`)}
      border: ${theme.AvatarActiveEllipseLargeBorderWidth} solid ${theme[
        `Avatar${getBorderColor(selected, inactive)}BorderColor`
      ]};
    }

    ${clickable &&
    (!inactive || allowHoverOnDisabled) &&
    css`
      :hover::before {
        background-color: rgb(40 233 198 / 10%);
        border-color: ${theme[`AvatarSelectedBorderColor`]};
        ${getContainerSize(theme, size, 1, theme.SpacingBase8)}
      }
    `}

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
  ${({ inactive }: ExtendedTheme<InactiveType>) =>
    inactive &&
    css`
      filter: grayscale(1);
    `}
`;

export const Icon = styled.div<InactiveType>`
  ${({ theme, inactive }: ExtendedTheme<InactiveType>) => css`
    color: ${inactive ? theme.AvatarInactiveColor : theme.AvatarInnerEllipseColor};
  `};
`;

export const Text = styled(Typography)<InactiveType>`
  ${({ theme, inactive }: ExtendedTheme<InactiveType>) => css`
    color: ${inactive ? theme.AvatarInactiveColor : theme.AvatarInnerEllipseColor};
  `};
`;
