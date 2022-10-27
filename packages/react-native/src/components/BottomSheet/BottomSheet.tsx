import React, {
  ReactNode,
  forwardRef,
  useCallback,
  useImperativeHandle,
  useState,
  useEffect,
} from 'react';
import {
  Pressable,
  View,
  ScrollViewProps,
  useWindowDimensions,
} from 'react-native';
import {
  Gesture,
  GestureDetector,
  ScrollView,
} from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  runOnJS,
  interpolate,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import {
  DEFAULT_COLLAPSE_THRESHOLD,
  SPRING_CONFIG,
} from './BottomSheet.constants';
import bottomSheetStyle from './BottomSheet.style';
import { normalizeSnapPoint, calculateSnapPoint } from './utils';
import useTheme from '../../hooks/useTheme';

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
  /**
   * control gesture indicator
   */
  hasGestureIndicator?: boolean;
  /**
   * boolean that controls whether the bottom sheet is open or close
   */
  isOpen?: boolean;
  /**
   * callback to run on backdrop press
   */
  onClose?: VoidFunction;
} & ScrollViewProps;

export type BottomSheetRefProps = {
  /**
   * pass value to scroll to specific position
   */
  scrollTo: (destination: number) => void;
};

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const BottomSheet = forwardRef<BottomSheetRefProps, BottomSheetProps>(
  (
    {
      children,
      snapPoint,
      collapseThreshold = DEFAULT_COLLAPSE_THRESHOLD,
      hasBackdrop = true,
      hasGestureIndicator = true,
      isOpen = false,
      onClose,
      ...rest
    },
    ref
  ) => {
    const { bottom, top } = useSafeAreaInsets();
    const { height: windowHeight } = useWindowDimensions();

    const [active, setActive] = useState(false);
    const [contentHeight, setContentHeight] = useState(0);

    const topPosition = useSharedValue(windowHeight);
    const startTopPosition = useSharedValue(0);

    const theme = useTheme();
    const styles = bottomSheetStyle(theme);

    useEffect(() => {
      isOpen ? expand() : collapse();
    }, [isOpen, contentHeight]);

    const snapPointValue = snapPoint
      ? normalizeSnapPoint({ snapPoint, top, windowHeight })
      : calculateSnapPoint({ bottom, top, windowHeight, contentHeight });

    const scrollTo = useCallback((destination: number) => {
      'worklet';
      topPosition.value = destination;
    }, []);

    const collapse = useCallback(() => {
      scrollTo(windowHeight);
      setActive(false);
    }, []);

    const expand = useCallback(() => {
      scrollTo(snapPointValue);
      setActive(true);
    }, [snapPointValue]);

    useImperativeHandle(ref, () => ({ scrollTo, collapse, expand }));

    const gesture = Gesture.Pan()
      .onStart(() => {
        startTopPosition.value = topPosition.value;
      })
      .onUpdate((event) => {
        topPosition.value = event.translationY + startTopPosition.value;
      })
      .onEnd(() => {
        if (topPosition.value > snapPointValue + collapseThreshold) {
          scrollTo(windowHeight);
          runOnJS(setActive)(false);
          onClose && runOnJS(onClose)();
        } else {
          scrollTo(snapPointValue);
        }
      });

    const animationStyle = useAnimatedStyle(() => ({
      top: withSpring(topPosition.value, SPRING_CONFIG),
    }));

    const backdropAnimationStyle = useAnimatedStyle(() => {
      const opacity = interpolate(
        topPosition.value,
        [windowHeight, topPosition.value],
        [0, theme.BottomSheetBackdropOpacity]
      );

      return { opacity: withSpring(opacity, SPRING_CONFIG) };
    });

    const isContentGreaterThanMaxHeight =
      windowHeight - bottom - top < contentHeight;

    const handleBackdropPress = () => {
      if (hasGestureIndicator) {
        onClose && onClose();
      }
    };

    return (
      <>
        {active && hasBackdrop && (
          <AnimatedPressable
            testID="bottom-sheet-backdrop"
            style={[styles.backdrop, backdropAnimationStyle]}
            onPress={handleBackdropPress}
          />
        )}
        <GestureDetector gesture={hasGestureIndicator ? gesture : undefined}>
          <Animated.View
            style={[styles.container, animationStyle]}
            testID={active ? 'bottom-sheet-visible' : 'bottom-sheet-hidden'}
          >
            <View
              style={[
                isContentGreaterThanMaxHeight &&
                  styles.indicatorContainerScroll,
                styles.indicatorContainer,
              ]}
            >
              {hasGestureIndicator && <View style={styles.indicator} />}
            </View>

            <ScrollView {...rest}>
              <View
                onLayout={(event) => {
                  const { height } = event.nativeEvent.layout;
                  setContentHeight(height);
                }}
              >
                {children}
              </View>
            </ScrollView>
          </Animated.View>
        </GestureDetector>
      </>
    );
  }
);

export default BottomSheet;
