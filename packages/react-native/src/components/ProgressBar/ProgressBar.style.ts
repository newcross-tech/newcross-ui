import { StyleSheet } from 'react-native';
import useTheme from '../../hooks/useTheme';

import {
  getLabelPositionValues,
  getMarginBottomContainerValues,
  getMarginTopContainerValues,
  getColorVariantValues,
  getAlignItemsContainerValues,
  ProgressBarLabelPositions,
  ProgressBarColorVariant,
  ProgressBarStyleProps,
} from './ProgressBar.types';

const progressBarStyle = ({
  isEachLabelSamePosition,
  labelsContainerHeight,
  labelHeight,
  labelPosition,
  progressLabelPosition,
  variant,
  colorVariant,
}: ProgressBarStyleProps) => {
  const theme = useTheme();
  const labelPositionValues = getLabelPositionValues(theme);
  const colorVariantValues = getColorVariantValues(theme);
  const alignItemsContainerValues = getAlignItemsContainerValues();

  const marginTopContainerValues = getMarginTopContainerValues(
    theme,
    labelsContainerHeight,
    labelHeight,
    {
      labelPosition,
      progressLabelPosition,
      variant,
    }
  );

  const marginBottomContainerValues = getMarginBottomContainerValues(
    theme,
    labelsContainerHeight,
    labelHeight,
    {
      labelPosition,
      progressLabelPosition,
      variant,
    }
  );

  return StyleSheet.create({
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      ...marginBottomContainerValues,
      ...marginTopContainerValues,
    },
    track: {
      marginTop: theme.ProgressBarTrackMarginTop,
      marginBottom: theme.ProgressBarTrackMarginBottom,
      backgroundColor: theme.ProgressBarTrackBackgroundColor,
      borderRadius: theme.ProgressBarTrackBorderRadius,
      height: theme.ProgressBarTrackHeight,
      width: '100%',
      overflow: 'hidden',
    },
    fill: {
      backgroundColor: theme.ProgressBarFillBackgroundColor,
      height: theme.ProgressBarFillHeight,
    },
    labelsContainer: {
      maxWidth: '70%',
      position: 'absolute',
      justifyContent: 'center',
      flexDirection: 'column',
      ...alignItemsContainerValues[labelPosition as ProgressBarLabelPositions],
      ...labelPositionValues[labelPosition as ProgressBarLabelPositions],
    },
    allLabels: {
      position: isEachLabelSamePosition ? 'relative' : 'absolute',
      color: colorVariantValues[colorVariant as ProgressBarColorVariant],
    },
    label: {
      ...labelPositionValues[labelPosition as ProgressBarLabelPositions],
      maxWidth: '45%',
    },
    progress: {
      ...labelPositionValues[
        progressLabelPosition as ProgressBarLabelPositions
      ],
    },
  });
};

export default progressBarStyle;
