import { ViewStyle } from 'react-native';
import { ThemeDesignTokens } from '../../theme/ThemeProvider';
import { ProgressBarProps } from './ProgressBar';

export type ProgressBarStyleProps = ProgressBarProps & {
  isEachLabelSamePosition: boolean;
  labelsContainerHeight: number;
  labelHeight: number;
};

export enum ProgressBarColorVariant {
  primary = 'primary',
  secondary = 'secondary',
}

export enum ProgressBarVariant {
  determinate = 'determinate',
  indeterminate = 'indeterminate',
}

export enum ProgressBarLabelPositions {
  topCenter = 'top-center',
  topRight = 'top-right',
  topLeft = 'top-left',
  bottomCenter = 'bottom-center',
  bottomRight = 'bottom-right',
  bottomLeft = 'bottom-left',
}

const topLabelPositions = [
  ProgressBarLabelPositions.topLeft,
  ProgressBarLabelPositions.topRight,
  ProgressBarLabelPositions.topCenter,
];
const bottomLabelPositions = [
  ProgressBarLabelPositions.bottomLeft,
  ProgressBarLabelPositions.bottomRight,
  ProgressBarLabelPositions.bottomCenter,
];

const isEachLabelSamePosition = ({
  labelPosition,
  progressLabelPosition,
}: ProgressBarProps) => labelPosition === progressLabelPosition;

const isAnyLabelTopPosition = ({
  labelPosition,
  progressLabelPosition,
}: ProgressBarProps) => {
  const hasLabelPositionOnTopPosition =
    labelPosition !== undefined && topLabelPositions.includes(labelPosition);
  const hasProgressLabelOnTopPosition =
    progressLabelPosition !== undefined &&
    topLabelPositions.includes(progressLabelPosition);
  return hasLabelPositionOnTopPosition || hasProgressLabelOnTopPosition;
};

const isAnyLabelBotPosition = ({
  labelPosition,
  progressLabelPosition,
}: ProgressBarProps) => {
  const hasLabelPositionOnBottomPosition =
    labelPosition !== undefined && bottomLabelPositions.includes(labelPosition);
  const hasProgressLabelOnBottomPosition =
    progressLabelPosition !== undefined &&
    bottomLabelPositions.includes(progressLabelPosition);
  return hasLabelPositionOnBottomPosition || hasProgressLabelOnBottomPosition;
};

export const getColorVariantValues = (
  theme: ThemeDesignTokens
): Record<ProgressBarColorVariant, string> => ({
  [ProgressBarColorVariant.primary]: theme.ProgressBarLabelColorPrimary,
  [ProgressBarColorVariant.secondary]: theme.ProgressBarLabelColorSecondary,
});

export const getMarginTopContainerValues = (
  theme: ThemeDesignTokens,
  labelsContainerHeight: number,
  labelHeight: number,
  { labelPosition, progressLabelPosition, variant }: ProgressBarProps
): ViewStyle => {
  if (
    isAnyLabelTopPosition({ variant, labelPosition, progressLabelPosition })
  ) {
    return {
      marginTop: isEachLabelSamePosition({
        labelPosition,
        progressLabelPosition,
      })
        ? labelsContainerHeight
        : labelHeight,
    };
  }
  return { marginTop: theme.SpacingBase0 };
};

export const getMarginBottomContainerValues = (
  theme: ThemeDesignTokens,
  labelsContainerHeight: number,
  labelHeight: number,
  { labelPosition, progressLabelPosition, variant }: ProgressBarProps
): ViewStyle => {
  if (
    isAnyLabelBotPosition({ variant, labelPosition, progressLabelPosition })
  ) {
    return {
      marginBottom: isEachLabelSamePosition({
        labelPosition,
        progressLabelPosition,
      })
        ? labelsContainerHeight
        : labelHeight,
    };
  }

  return { marginBottom: theme.SpacingBase0 };
};

export const getLabelPositionValues = (
  theme: ThemeDesignTokens
): Record<ProgressBarLabelPositions, ViewStyle> => ({
  [ProgressBarLabelPositions.topCenter]: {
    bottom: theme.SpacingBase24,
  },
  [ProgressBarLabelPositions.topLeft]: {
    left: theme.SpacingBase0,
    bottom: theme.SpacingBase24,
  },
  [ProgressBarLabelPositions.topRight]: {
    right: theme.SpacingBase0,
    bottom: theme.SpacingBase24,
  },
  [ProgressBarLabelPositions.bottomCenter]: {
    top: theme.SpacingBase24,
  },
  [ProgressBarLabelPositions.bottomLeft]: {
    left: theme.SpacingBase0,
    top: theme.SpacingBase24,
  },
  [ProgressBarLabelPositions.bottomRight]: {
    right: theme.SpacingBase0,
    top: theme.SpacingBase24,
  },
});

export const getAlignItemsContainerValues = (): Record<
  ProgressBarLabelPositions,
  ViewStyle
> => ({
  [ProgressBarLabelPositions.topCenter]: {
    alignItems: 'center',
  },
  [ProgressBarLabelPositions.topLeft]: {
    alignItems: 'flex-start',
  },
  [ProgressBarLabelPositions.topRight]: {
    alignItems: 'flex-end',
  },
  [ProgressBarLabelPositions.bottomCenter]: {
    alignItems: 'center',
  },
  [ProgressBarLabelPositions.bottomLeft]: {
    alignItems: 'flex-start',
  },
  [ProgressBarLabelPositions.bottomRight]: {
    alignItems: 'flex-end',
  },
});
