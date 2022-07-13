import React, { useEffect, useState } from 'react';
import { View, Dimensions, Text, LayoutChangeEvent } from 'react-native';
import Animated, {
  withRepeat,
  withDelay,
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import progressBarStyle from './ProgressBar.style';
import {
  ProgressBarVariant,
  ProgressBarLabelPositions,
  ProgressBarColorVariant,
} from './ProgressBar.types';
import {
  DEFAULT_NUMBER_OF_LINES,
  DEFAULT_NUMBER_OF_REPETITIONS,
  DEFAULT_PROGRESS,
  DEFAULT_HAS_PROGRESS_LABEL,
  DEFAULT_MIN_PROGRESS,
  DEFAULT_MAX_PROGRESS,
  DEFAULT_ANIMATION_DURATION,
} from './ProgressBar.constants';
import { normaliseValue } from './utils';

export type ProgressBarProps = {
  /**
   * Use colorVariant to choose between label colors.
   */
  colorVariant?: ProgressBarColorVariant;
  /**
   * Use labelPosition to position the label element.
   */
  labelPosition?: ProgressBarLabelPositions;
  /**
   * Text element to describe the progress bar action.
   */
  label?: string;
  /**
   * The duration of the indeterminate progress fill bar animation.
   */
  animationDuration?: number;
  /**
   * The variant to use. Use indeterminate when there is no progress value.
   */
  variant?: ProgressBarVariant;
  /**
   * Use progressLabelPosition to position the progress element.
   */
  progressLabelPosition?: ProgressBarLabelPositions;
  /**
   * Hide the progress text element.
   */
  hasProgressLabel?: boolean;
  /**
   * The minimum expected value of the progress indicator for the determinate variant.
   */
  minProgress?: number;
  /**
   * The maximum expected value of the progress indicator for the determinate variant.
   */
  maxProgress?: number;
  /**
   * The value of the progress indicator for the determinate variant. Value between 0 and 100.
   */
  progress?: number;
};

const ProgressBar = ({
  variant = ProgressBarVariant.determinate,
  colorVariant = ProgressBarColorVariant.primary,
  labelPosition = ProgressBarLabelPositions.topLeft,
  progressLabelPosition = ProgressBarLabelPositions.topRight,
  label,
  progress = DEFAULT_PROGRESS,
  hasProgressLabel = DEFAULT_HAS_PROGRESS_LABEL,
  minProgress = DEFAULT_MIN_PROGRESS,
  maxProgress = DEFAULT_MAX_PROGRESS,
  animationDuration = DEFAULT_ANIMATION_DURATION,
}: ProgressBarProps) => {
  const { width } = Dimensions.get('screen');

  //Progress Bar Component
  const isDeterminate = variant === ProgressBarVariant.determinate;
  const isDeterminateAndHasProgressLabel = isDeterminate && hasProgressLabel;

  //Label and ProgressBar Label
  const [labelsContainerHeight, setLabelsContainerHeight] = useState(0);
  const [labelHeight, setLabelsHeight] = useState(0);
  const normalisedProgress = normaliseValue(progress, minProgress, maxProgress);
  const isEachLabelSamePosition = labelPosition === progressLabelPosition;

  //Animations
  const [progressBarFillWidth, setProgressBarFillWidth] = useState(0);
  const progressBarDeterminateWidth = useSharedValue(progressBarFillWidth);
  const translateX = useSharedValue(-progressBarFillWidth);

  const styles = progressBarStyle({
    isEachLabelSamePosition,
    labelsContainerHeight,
    labelHeight,
    colorVariant,
    progressLabelPosition,
    variant,
    labelPosition,
  });

  const progressBarAnimatedStyle = () =>
    useAnimatedStyle(() => {
      if (isDeterminate) {
        return {
          width: `${progressBarDeterminateWidth.value}%`,
          transform: [{ translateX: translateX.value }],
        };
      }
      return {
        width: progressBarFillWidth,
        transform: [{ translateX: translateX.value }],
      };
    });

  const onLayoutTrack = (event: LayoutChangeEvent) => {
    const { width } = event.nativeEvent.layout;
    setProgressBarFillWidth(width / 2);
  };

  const onLayoutLabels = (event: LayoutChangeEvent) => {
    const { height } = event.nativeEvent.layout;
    isEachLabelSamePosition
      ? setLabelsContainerHeight(height)
      : setLabelsHeight(height);
  };

  useEffect(() => {
    if (isDeterminate) {
      translateX.value = 0;
      progressBarDeterminateWidth.value = withTiming(normalisedProgress, {
        duration: animationDuration,
      });
    } else {
      translateX.value = -progressBarFillWidth;
      translateX.value = withRepeat(
        withDelay(
          animationDuration / 3,
          withTiming(width, {
            duration: animationDuration,
          })
        ),
        DEFAULT_NUMBER_OF_REPETITIONS,
        false
      );
    }
  }, [normalisedProgress, progressBarFillWidth, isDeterminate]);

  const samePositionLabelView = () => (
    <View
      style={styles.labelsContainer}
      onLayout={onLayoutLabels}
      testID="labels-container"
    >
      <Text numberOfLines={DEFAULT_NUMBER_OF_LINES} style={styles.allLabels}>
        {label}
      </Text>
      {isDeterminateAndHasProgressLabel && (
        <Text style={styles.allLabels}>{normalisedProgress}%</Text>
      )}
    </View>
  );

  const differentPositionLabelView = () => (
    <>
      <Text
        numberOfLines={DEFAULT_NUMBER_OF_LINES}
        style={[styles.allLabels, styles.label]}
        onLayout={onLayoutLabels}
        testID="label-container"
      >
        {label}
      </Text>

      {isDeterminateAndHasProgressLabel && (
        <Text
          style={[styles.allLabels, styles.progress]}
          testID="progress-label-container"
        >
          {normalisedProgress}%
        </Text>
      )}
    </>
  );

  return (
    <View style={styles.container} testID="progress-bar-container">
      {isEachLabelSamePosition
        ? samePositionLabelView()
        : differentPositionLabelView()}
      <View
        onLayout={onLayoutTrack}
        style={styles.track}
        testID="track-container"
      >
        <Animated.View
          style={[styles.fill, progressBarAnimatedStyle()]}
          testID={'fill-container'}
        />
      </View>
    </View>
  );
};

export default ProgressBar;
