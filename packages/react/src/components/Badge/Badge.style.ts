import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { ThemeDesignTokens } from '../../theme/ThemeProvider';
import { ExtendedTheme, Theme } from '../../types';
import Typography, { TypographyVariant } from '../Typography';
import { BadgeContentProps, BadgePositions, BadgeSizes } from './Badge.types';
import { BadgeProps } from './Badge';

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

export const getBadgeBackgroundColor = (theme: ThemeDesignTokens): Record<string, string> => ({
  primary: theme.ColorPrimaryGravitas,
  secondary: theme.ColorBaseMint100,
  error: theme.ColorSemanticsError200,
  warning: theme.ColorSemanticsWarning200,
  success: theme.ColorSemanticsSuccess200,
  info: theme.ColorSemanticsInfo100,
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

  ${({ theme, size, renderContent, position, isSingleChar, backgroundColor }: ExtendedTheme<BadgeContentProps>) => css`
    ${renderContent &&
    !isSingleChar &&
    css`
      padding-right: ${theme.BadgePadding};
      padding-left: ${theme.BadgePadding};
    `};
    position: ${position ? 'absolute' : 'relative'};
    ${size && position && getPositionValues(theme)[size][position]};
    ${size && getHeightWidthValues(theme)[size]};
    background-color: ${backgroundColor ? getBadgeBackgroundColor(theme)[backgroundColor] : theme.BadgeBackgroundColor};
    border-radius: ${theme.BadgeBorderRadius};
  `}
`;

export const Text = styled(Typography)`
  text-align: center;
  ${({ theme }: Theme) => css`
    color: ${theme.BadgeColor};
  `}
`;

//cutout styles
const maskPositionMap: Record<BadgePositions, string> = {
  topRight: 'top 4px right 4px',
  topLeft: 'top 4px left 4px',
  bottomRight: 'bottom 4px right 4px',
  bottomLeft: 'bottom 4px left 4px',
};
const maskBeforePositionMap: Record<BadgePositions, string> = {
  topRight: 'top 9.5px right 9.5px',
  topLeft: 'top 9.5px left 9.5px',
  bottomRight: 'bottom 9.5px right 9.5px',
  bottomLeft: 'bottom 9.5px left 9.5px',
};
const maskSizeMap: Record<BadgeSizes, string> = {
  small: '6.5px',
  medium: '11px',
  large: '15px',
};

const getCutoutStyles = ({ size, position }: Partial<BadgeProps>) => {
  if (position && size) {
    const maskPosition = maskPositionMap[position];
    const maskBeforePosition = maskBeforePositionMap[position];
    const maskSize = maskSizeMap[size];

    return css`
      > svg {
        mask-image: radial-gradient(circle at ${maskPosition}, transparent ${maskSize}, black 0);
      }
      > div > div {
        mask-image: radial-gradient(circle at ${maskPosition}, transparent ${maskSize}, black 0);
      }
      > div::before {
        mask-image: radial-gradient(circle at ${maskBeforePosition}, transparent ${maskSize}, black 0);
      }
    `;
  }
};

export const Cutout = styled.div`
  ${({ size, position, hasCutout }: Partial<BadgeProps>) => hasCutout && getCutoutStyles({ size, position })}
`;
