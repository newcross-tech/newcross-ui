import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { ThemeDesignTokens } from '../../theme/ThemeProvider';
import { ExtendedTheme, Theme } from '../../types';
import Typography, { TypographyVariant } from '../Typography';
import { BadgeContentProps, BadgePositions, BadgeSizes } from './Badge.types';

export const getHeightWidthValues = (theme: ThemeDesignTokens): Record<BadgeSizes, FlattenSimpleInterpolation> => ({
  large: css`
    height: ${theme.BadgeLargeHeight};
    min-width: ${theme.BadgeLargeWidth};
  `,
  medium: css`
    height: ${theme.BadgeMediumHeight};
    min-width: ${theme.BadgeMediumWidth};
  `,
  small: css`
    height: ${theme.BadgeSmallHeight};
    width: ${theme.BadgeSmallWidth};
  `,
});

export const getTypographyVariant = (): Record<BadgeSizes, TypographyVariant> => ({
  large: 'heading6',
  medium: 'subtitle2',
  small: 'subtitle2',
});

export const getPositionValues = ({
  BadgeLargePosition: largePosition,
  BadgeMediumPosition: mediumPosition,
  BadgeSmallPosition: smallPosition,
}: ThemeDesignTokens): Record<BadgeSizes, Record<BadgePositions, FlattenSimpleInterpolation>> => ({
  large: {
    topRight: css`
      top: -${largePosition};
      right: -${largePosition};
    `,
    topLeft: css`
      top: -${largePosition};
      left: -${largePosition};
    `,
    bottomRight: css`
      bottom: -${largePosition};
      right: -${largePosition};
    `,
    bottomLeft: css`
      bottom: -${largePosition};
      left: -${largePosition};
    `,
  },
  medium: {
    topRight: css`
      top: -${mediumPosition};
      right: -${mediumPosition};
    `,
    topLeft: css`
      top: -${mediumPosition};
      left: -${mediumPosition};
    `,
    bottomRight: css`
      bottom: -${mediumPosition};
      right: -${mediumPosition};
    `,
    bottomLeft: css`
      bottom: -${mediumPosition};
      left: -${mediumPosition};
    `,
  },
  small: {
    topRight: css`
      top: ${smallPosition};
      right: ${smallPosition};
    `,
    topLeft: css`
      top: ${smallPosition};
      left: ${smallPosition};
    `,
    bottomRight: css`
      bottom: ${smallPosition};
      right: ${smallPosition};
    `,
    bottomLeft: css`
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
    ${size && position && getPositionValues(theme)[size][position]};
    ${size && getHeightWidthValues(theme)[size]};
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
