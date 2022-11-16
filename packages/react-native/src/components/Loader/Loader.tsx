import React, { ReactNode, useEffect } from 'react';
import { View } from 'react-native';
import Animated, {
  cancelAnimation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import { default as Typography, TypographyVariant } from '../Typography';
import { HealthforceIcon } from '../../icons/HealthforceIcon';
import { loadingStyles } from './Loader.style';
import { LoadingDot } from './LoaderDot';
import {
  DOT_DELAY,
  ICON_ANIMATION_DURATION,
  NUMBER_OF_DOTS,
} from './Loader.types';

export type LoaderProps = {
  testID?: string;
  icon?: ReactNode;
  text?: string;
};

export const Loader = ({ testID, icon, text }: LoaderProps) => {
  const styles = loadingStyles();

  const inputRange = [0, 1];
  const scaleRange = [0.7, 1];

  const iconSharedValue = useSharedValue(inputRange[0]);

  const iconAnimationStyle = useAnimatedStyle(() => ({
    transform: [
      { scale: interpolate(iconSharedValue.value, inputRange, scaleRange) },
    ],
  }));

  useEffect(() => {
    iconSharedValue.value = withRepeat(
      withTiming(inputRange[1], { duration: ICON_ANIMATION_DURATION }),
      -1,
      true
    );

    return () => cancelAnimation(iconSharedValue);
  }, []);

  return (
    <View style={styles.container} testID={testID}>
      <Animated.View style={iconAnimationStyle} testID="loader-icon">
        {icon ?? <HealthforceIcon testID="healthforce-icon" />}
      </Animated.View>
      <View style={styles.textContainer}>
        <Typography style={styles.text} variant={TypographyVariant.paragraph1}>
          {text ?? 'Loading'}
        </Typography>
        {Array(NUMBER_OF_DOTS)
          .fill(true)
          .map((_, index) => (
            <LoadingDot
              testID={`loader-dot-${index}`}
              key={`loader-dot-${index}`}
              delay={DOT_DELAY * index}
            />
          ))}
      </View>
    </View>
  );
};
