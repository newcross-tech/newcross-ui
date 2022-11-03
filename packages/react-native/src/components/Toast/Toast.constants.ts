import { FadeInUp, FadeOutUp } from 'react-native-reanimated';

export const DEFAULT_DURATION = 6000;
export const DEFAULT_AUTO_HIDE = true;

const DEFAULT_SLIDE_ANIMATION_DURATION = 800;

export const animatedProps = {
  entering: FadeInUp?.springify(),
  exiting: FadeOutUp?.duration(DEFAULT_SLIDE_ANIMATION_DURATION),
  needsOffscreenAlphaCompositing: true,
};
