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
const getMaskPosition = (position: BadgePositions) => {
  switch (position) {
    case 'topRight':
      return 'top 4px right 4px';
    case 'topLeft':
      return 'top 4px left 4px';
    case 'bottomRight':
      return 'bottom 4px right 4px';
    case 'bottomLeft':
      return 'bottom 4px left 4px';
    default:
      return '';
  }
};

const getMaskBeforePosition = (position: BadgePositions) => {
  switch (position) {
    case 'topRight':
      return 'top 9.5px right 9.5px';
    case 'topLeft':
      return 'top 9.5px left 9.5px';
    case 'bottomRight':
      return 'bottom 9.5px right 9.5px';
    case 'bottomLeft':
      return 'bottom 9.5px left 9.5px';
    default:
      return '';
  }
};

const getMaskSize = (size: BadgeSizes) => {
  switch (size) {
    case 'small':
      return '6.5px';
    case 'medium':
      return '11px';
    case 'large':
      return '15px';
    default:
      return '0';
  }
};

const getCutoutStyles = ({ size, position }: Partial<BadgeProps>) => {
  if (position && size) {
    const maskPosition = getMaskPosition(position);
    const maskBeforePosition = getMaskBeforePosition(position);
    const maskSize = getMaskSize(size);

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
