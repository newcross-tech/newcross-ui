import { WithSpringConfig } from 'react-native-reanimated';

export const SPRING_CONFIG: WithSpringConfig = {
  damping: 50,
  overshootClamping: true,
  restDisplacementThreshold: 0.1,
  restSpeedThreshold: 0.1,
};

export const DEFAULT_MAX_SNAP_POINT = 0.9; // 90%
export const DEFAULT_COLLAPSE_THRESHOLD = 50;
export const INDICATOR_HEIGHT = 50;
