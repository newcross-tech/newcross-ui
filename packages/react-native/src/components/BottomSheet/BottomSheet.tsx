import { Dimensions, Pressable, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import bottomSheetStyle from './BottomSheet.style';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  runOnJS,
  interpolate,
} from 'react-native-reanimated';
import React, {
  ReactNode,
  forwardRef,
  useCallback,
  useImperativeHandle,
  useState,
} from 'react';
import {
  DEFAULT_COLLAPSE_THRESHOLD,
  DEFAULT_SNAP_POINT,
  SPRING_CONFIG,
} from './BottomSheet.constants';
import { normalizeSnapPoint } from './BottomSheet.utils';
import useTheme from '../../hooks/useTheme';

const dimensions = Dimensions.get('window');

export type BottomSheetProps = {
  /**
   * children component
   */
  children?: ReactNode;
  /**
   * position of bottom sheet when it expands
   */
  snapPoint?: `${number}%` | number;
  /**
   * threshold of dragging position to auto collapse
   */
  collapseThreshold?: number;
  /**
   * control backdrop
   */
  hasBackdrop?: boolean;
};

export type BottomSheetRefProps = {
  /**
   * pass value to scroll to specific position
   */
  scrollTo: (destination: number) => void;
  /**
   * close bottom sheet
   */
  collapse: () => void;
  /**
   * open bottom sheet
   */
  expand: () => void;
};

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const BottomSheet = forwardRef<BottomSheetRefProps, BottomSheetProps>(
  (
    {
      children,
      snapPoint = DEFAULT_SNAP_POINT,
      collapseThreshold = DEFAULT_COLLAPSE_THRESHOLD,
      hasBackdrop = true,
    },
    ref
  ) => {
    const [active, setActive] = useState(false);
    const topPosition = useSharedValue(dimensions.height);
    const startTopPosition = useSharedValue(0);
    const theme = useTheme();

    const styles = bottomSheetStyle(theme);
    const normalizedSnapPoint = normalizeSnapPoint(snapPoint);

    const scrollTo = useCallback((destination: number) => {
      'worklet';
      topPosition.value = destination;
    }, []);

    const collapse = useCallback(() => {
      scrollTo(dimensions.height);
      setActive(false);
    }, []);

    const expand = useCallback(() => {
      scrollTo(normalizedSnapPoint);
      setActive(true);
    }, []);

    useImperativeHandle(ref, () => ({ scrollTo, collapse, expand }));

    const gesture = Gesture.Pan()
      .onStart(() => {
        startTopPosition.value = topPosition.value;
      })
      .onUpdate((event) => {
        topPosition.value = event.translationY + startTopPosition.value;
      })
      .onEnd(() => {
        if (topPosition.value > normalizedSnapPoint + collapseThreshold) {
          scrollTo(dimensions.height);
          runOnJS(setActive)(false);
        } else {
          scrollTo(normalizedSnapPoint);
        }
      });

    const animationStyle = useAnimatedStyle(() => ({
      top: withSpring(topPosition.value, SPRING_CONFIG),
    }));

    const backdropAnimationStyle = useAnimatedStyle(() => {
      const opacity = interpolate(
        topPosition.value,
        [dimensions.height, topPosition.value],
        [0, theme.BottomSheetBackdropOpacity]
      );

      return { opacity: withSpring(opacity, SPRING_CONFIG) };
    });

    return (
      <>
        {active && hasBackdrop && (
          <AnimatedPressable
            testID="bottom-sheet-backdrop"
            style={[styles.backdrop, backdropAnimationStyle]}
            onPress={collapse}
          />
        )}
        <GestureDetector gesture={gesture}>
          <Animated.View
            style={[styles.container, animationStyle]}
            testID={active ? 'bottom-sheet-visible' : 'bottom-sheet-hidden'}
          >
            <View style={styles.line} />
            {children}
          </Animated.View>
        </GestureDetector>
      </>
    );
  }
);

export default BottomSheet;
