import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { SkeletonProps } from './Skeleton';
import { skeletonStyles } from './Skeleton.style';
import useTheme from '../../hooks/useTheme';

export const SkeletonLinearGradient = () => {
  const styles = skeletonStyles({} as SkeletonProps);

  const theme = useTheme();

  const startDirection = { x: 0, y: 0 };
  const endDirection = { x: 1, y: 0 };

  return (
    <LinearGradient
      testID="skeleton-linear-gradient"
      start={startDirection}
      end={endDirection}
      style={styles.fillContainer}
      colors={[
        theme.ColorBaseGrey300,
        theme.ColorBaseGrey500,
        theme.ColorBaseGrey300,
      ]}
    />
  );
};
