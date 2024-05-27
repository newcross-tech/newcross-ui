import React, {
  ReactNode,
  forwardRef,
  useCallback,
  useImperativeHandle,
  useState,
  useEffect,
  memo,
} from 'react';
import {
  Pressable,
  View,
  ScrollViewProps,
  useWindowDimensions,
  ViewStyle,
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
import {
  useSafeAreaInsets,
  initialWindowMetrics,
} from 'react-native-safe-area-context';

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
  /**
   * extend or overwrite bottom sheet  header styles
   */
  headerStyle?: ViewStyle;
  /**
   * extend or overwrite bottom sheet container styles
   */
  containerStyle?: ViewStyle;
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
      headerStyle,
      containerStyle,
      ...rest
    },
    ref
  ) => {
    const { bottom, top } = useSafeAreaInsets();
    const { bottom: initialBottom, top: initialTop } =
      initialWindowMetrics?.insets || {};
    const topSafeArea = top || initialTop || 0;
    const bottomSafeArea = bottom || initialBottom || 0;

    const { height: windowHeight } = useWindowDimensions();

    const [contentHeight, setContentHeight] = useState(0);

    const topPosition = useSharedValue(windowHeight);
    const startTopPosition = useSharedValue(0);

    const theme = useTheme();
    const { BottomSheetBackdropOpacity } = theme;
    const styles = bottomSheetStyle(theme);

    useEffect(() => {
      if (isOpen && contentHeight) {
        expand();
      } else if (!isOpen) {
        collapse();
      }
    }, [isOpen, contentHeight]);

    const snapPointValue = snapPoint
      ? normalizeSnapPoint({ snapPoint, top: topSafeArea, windowHeight })
      : calculateSnapPoint({
          bottom: bottomSafeArea,
          top: topSafeArea,
          windowHeight,
          contentHeight,
        });

    const scrollTo = useCallback(
      (destination: number) => {
        'worklet';
        topPosition.value = destination;
      },
      [topPosition]
    );

    const collapse = useCallback(() => {
      scrollTo(windowHeight);
    }, [scrollTo, windowHeight]);

    const expand = useCallback(() => {
      scrollTo(snapPointValue);
    }, [scrollTo, snapPointValue]);

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
        [0, BottomSheetBackdropOpacity]
      );

      return { opacity: withSpring(opacity, SPRING_CONFIG) };
    });

    const isContentGreaterThanMaxHeight =
      windowHeight - bottomSafeArea - topSafeArea < contentHeight;

    const handleBackdropPress = () => {
      if (hasGestureIndicator) {
        onClose && onClose();
      }
    };

    return (
      <>
        {isOpen && hasBackdrop && (
          <AnimatedPressable
            testID="bottom-sheet-backdrop"
            style={[styles.backdrop, backdropAnimationStyle]}
            onPress={handleBackdropPress}
          />
        )}
        <GestureDetector gesture={hasGestureIndicator ? gesture : undefined}>
          <Animated.View
            style={[styles.container, animationStyle, containerStyle]}
            testID={isOpen ? 'bottom-sheet-visible' : 'bottom-sheet-hidden'}
          >
            <View
              style={[
                isContentGreaterThanMaxHeight &&
                  styles.indicatorContainerScroll,
                styles.indicatorContainer,
                headerStyle,
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

export default memo(BottomSheet);
