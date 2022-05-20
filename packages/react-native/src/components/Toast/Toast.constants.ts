import { SlideInUp, SlideOutUp } from 'react-native-reanimated';

export const DEFAULT_DURATION = 5000;
export const DEFAULT_AUTO_HIDE = true;

const DEFAULT_SLIDE_ANIMATION_DURATION = 800;

export const animatedProps = {
  entering: SlideInUp.duration(DEFAULT_SLIDE_ANIMATION_DURATION),
  exiting: SlideOutUp.duration(DEFAULT_SLIDE_ANIMATION_DURATION),
};
