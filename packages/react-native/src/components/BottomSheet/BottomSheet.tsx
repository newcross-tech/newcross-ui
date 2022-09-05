import { Dimensions, Pressable, View, ScrollViewProps } from 'react-native';
import {
  Gesture,
  GestureDetector,
  ScrollView,
} from 'react-native-gesture-handler';
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
  useEffect,
} from 'react';
import {
  DEFAULT_COLLAPSE_THRESHOLD,
  SPRING_CONFIG,
  DEFAULT_MAX_HEIGHT,
} from './BottomSheet.constants';
import {
  normalizeSnapPoint,
  normalizeContentHeightToDimensions,
  normalizeContentHeightAsPercentage,
} from './utils';
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
  onBackdropPress?: VoidFunction;
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
      onBackdropPress,
      ...rest
    },
    ref
  ) => {
    const [active, setActive] = useState(false);
    const [contentHeight, setContentHeight] = useState(0);

    useEffect(() => {
      isOpen ? expand() : collapse();
    }, [isOpen, contentHeight]);

    const topPosition = useSharedValue(dimensions.height);
    const startTopPosition = useSharedValue(0);
    const theme = useTheme();
    const styles = bottomSheetStyle(theme);
    const hasSnapPoint =
      snapPoint || `${normalizeContentHeightToDimensions(contentHeight)}%`;

    const normalizedSnapPoint = Math.round(normalizeSnapPoint(hasSnapPoint));

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
    }, [normalizedSnapPoint]);

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

    const isContentGreaterThanMaxHeight =
      normalizeContentHeightAsPercentage(contentHeight) > DEFAULT_MAX_HEIGHT;

    const handleBackdropPress = () => {
      if (hasGestureIndicator) {
        onBackdropPress && onBackdropPress();
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
