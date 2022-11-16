import React, { useEffect } from 'react';
import Animated, {
  cancelAnimation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import { default as Typography, TypographyVariant } from '../Typography';
import { loadingStyles } from './Loader.style';
import { DOT_ANIMATION_DURATION } from './Loader.types';

type LoadingDotProps = {
  delay: number;
  testID?: string;
};

export const LoadingDot = ({ delay, testID }: LoadingDotProps) => {
  const styles = loadingStyles();

  const inputRange = [0, 1];
  const opacityRange = [1, 0];

  const dotSharedValue = useSharedValue(inputRange[0]);

  const dotAnimationStyle = useAnimatedStyle(() => ({
    opacity: interpolate(dotSharedValue.value, inputRange, opacityRange),
  }));

  useEffect(() => {
    dotSharedValue.value = withDelay(
      delay,
      withRepeat(
        withTiming(inputRange[1], { duration: DOT_ANIMATION_DURATION }),
        -1,
        false
      )
    );

    return () => cancelAnimation(dotSharedValue);
  }, []);

  return (
    <Animated.View style={[dotAnimationStyle]} testID={testID}>
      <Typography style={styles.text} variant={TypographyVariant.heading3}>
        .
      </Typography>
    </Animated.View>
  );
};
