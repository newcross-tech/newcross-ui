import styled, { css } from 'styled-components';
import { ThemeDesignTokens } from '../../theme/ThemeProvider';
import { ExtendedTheme, Theme } from '../../types/Theme';
import Typography, { TypographyVariant } from '../Typography';
import { BadgeContentProps, BadgePositions, BadgeSizes } from './Badge.types';

export const getHeightWidthValues = (theme: ThemeDesignTokens) => ({
  [BadgeSizes.large]: css`
    height: ${theme.BadgeLargeHeight};
    min-width: ${theme.BadgeLargeWidth};
  `,
  [BadgeSizes.medium]: css`
    height: ${theme.BadgeMediumHeight};
    min-width: ${theme.BadgeMediumWidth};
  `,
  [BadgeSizes.small]: css`
    height: ${theme.BadgeSmallHeight};
    width: ${theme.BadgeSmallWidth};
  `,
});

export const getTypographyVariant = (size: BadgeSizes) =>
  ({
    [BadgeSizes.large]: 'heading3',
    [BadgeSizes.medium]: 'heading5',
    [BadgeSizes.small]: 'heading5',
  }[size]);

export const getPositionValues = ({
  BadgeLargePosition: largePosition,
  BadgeMediumPosition: mediumPosition,
  BadgeSmallPosition: smallPosition,
}: ThemeDesignTokens) => ({
  [BadgeSizes.large]: {
    [BadgePositions.TopRight]: css`
      top: -${largePosition};
      right: -${largePosition};
    `,
    [BadgePositions.TopLeft]: css`
      top: -${largePosition};
      left: -${largePosition};
    `,
    [BadgePositions.BottomRight]: css`
      bottom: -${largePosition};
      right: -${largePosition};
    `,
    [BadgePositions.BottomLeft]: css`
      bottom: -${largePosition};
      left: -${largePosition};
    `,
  },
  [BadgeSizes.medium]: {
    [BadgePositions.TopRight]: css`
      top: -${mediumPosition};
      right: -${mediumPosition};
    `,
    [BadgePositions.TopLeft]: css`
      top: -${mediumPosition};
      left: -${mediumPosition};
    `,
    [BadgePositions.BottomRight]: css`
      bottom: -${mediumPosition};
      right: -${mediumPosition};
    `,
    [BadgePositions.BottomLeft]: css`
      bottom: -${mediumPosition};
      left: -${mediumPosition};
    `,
  },
  [BadgeSizes.small]: {
    [BadgePositions.TopRight]: css`
      top: ${smallPosition};
      right: ${smallPosition};
    `,
    [BadgePositions.TopLeft]: css`
      top: ${smallPosition};
      left: ${smallPosition};
    `,
    [BadgePositions.BottomRight]: css`
      bottom: ${smallPosition};
      right: ${smallPosition};
    `,
    [BadgePositions.BottomLeft]: css`
      bottom: ${smallPosition};
      left: ${smallPosition};
    `,
  },
});

export const Container = styled.div`
  cursor: pointer;
  position: relative;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;

  ${({ theme, size, renderContent, position, isSingleChar }: ExtendedTheme<BadgeContentProps>) => css`
    ${renderContent &&
    !isSingleChar &&
    css`
      padding-right: ${theme.BadgePadding};
      padding-left: ${theme.BadgePadding};
    `};
    position: ${position ? 'absolute' : 'relative'};
    ${getPositionValues(theme)[size as BadgeSizes][position as BadgePositions]};
    ${getHeightWidthValues(theme)[size as BadgeSizes]};
    background-color: ${theme.BadgeBackgroundColor};
    border-radius: ${theme.BadgeBorderRadius};
  `}
`;

export const Text = styled(Typography)`
  text-align: center;
  ${({ theme }: Theme) => css`
    color: ${theme.BadgeColor};
  `}
`;
