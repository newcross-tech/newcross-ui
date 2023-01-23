import React, { ComponentType, useEffect } from 'react';
import { View, ViewStyle } from 'react-native';
import Animated, {
  cancelAnimation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import { skeletonStyles } from './Skeleton.style';
import { ANIMATION_DURATION } from './Skeleton.constants';
import { SkeletonLinearGradient } from './SkeletonLinearGradient';

export type SkeletonProps = {
  /**
   * Set width
   */
  width: number;
  /**
   * Set height
   */
  height: number;
  /**
   * Define circle shape
   */
  circle?: boolean;
  /**
   * overwrite styles
   */
  style?: ViewStyle;
  /**
   * Overwrite Linear Gradient to allow this component
   * compatible with expo, by default its
   * only compatible with react native cli projects
   */
  LinearGradientComponent?: ComponentType;
  /**
   * TestID for testing
   */
  testID?: string;
};

const Skeleton = ({
  height,
  width,
  circle = false,
  style,
  LinearGradientComponent = SkeletonLinearGradient,
  ...rest
}: SkeletonProps) => {
  const styles = skeletonStyles({ height, width, circle });

  const sharedValue = useSharedValue(0);
  const inputRange = [0, 1];
  const outputRange = [-width, width];

  const animationStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: interpolate(sharedValue.value, inputRange, outputRange),
      },
    ],
  }));

  useEffect(() => {
    sharedValue.value = withRepeat(
      withTiming(1, { duration: ANIMATION_DURATION }),
      -1,
      false
    );

    return () => cancelAnimation(sharedValue);
  }, []);

  return (
    <View style={[styles.container, style]} {...rest}>
      <Animated.View style={[styles.fillContainer, animationStyle]}>
        <LinearGradientComponent />
      </Animated.View>
    </View>
  );
};

export default Skeleton;
