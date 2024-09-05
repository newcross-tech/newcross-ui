import React, { useLayoutEffect, useState, Fragment, ReactNode } from 'react';
import { View, Pressable, ViewStyle, TextStyle } from 'react-native';
import Typography, { TypographyVariant } from '../Typography';
import Animated, {
  withSpring,
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { DEFAULT_SPRING_CONFIG } from './Tabs.constants';
import tabsStyle from './Tabs.style';
import useTheme from '../../hooks/useTheme';
import Badge, { BadgeSizes } from '../Badge';

export type TabsProps = {
  /**
   * Array of labels for the segments
   */
  tabs: Array<ReactNode | string>;
  /**
   * Index value for the current tab.
   */
  currentIndex: number;
  /**
   * Callback function for selecting a tab.
   * Returns index value of selected tab.
   */
  onCurrentIndexChange: (newState: number) => void;
  /**
   * Disables segment from being pressed
   */
  disabled?: boolean;
  /**
   * Overwrites or extends the styles applied to the component.
   */
  style?: ViewStyle | TextStyle;

  /**
   * Object containing the count of badges for each tab.
   * The key should be the value of the index of the tab and the value should be the count of the badge.
   */
  badgeCountObject?: Record<string, number>;
};

const Tabs = ({
  tabs,
  currentIndex,
  onCurrentIndexChange,
  disabled = false,
  style,
  badgeCountObject,
  ...rest
}: TabsProps) => {
  const theme = useTheme();
  const styles = tabsStyle(theme);

  const [widthOfContainer, setWidthOfContainer] = useState(0);
  const translateValue = widthOfContainer / tabs.length;

  const tabTranslateValue = useSharedValue(0);

  useLayoutEffect(() => {
    tabTranslateValue.value = withSpring(
      currentIndex * translateValue,
      DEFAULT_SPRING_CONFIG
    );
  }, [currentIndex, widthOfContainer]);

  const tabTranslateAnimatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: tabTranslateValue.value }],
    };
  });

  /**
   * this controls the logic of when the divider is shown
   * it should not show the divider on either side of the active tab
   * it should not show the divider at the end of the containter
   * @param tabIndex
   * @returns boolean
   */
  const showDivider = (tabIndex: number) => {
    return !(
      tabIndex === currentIndex ||
      tabIndex === currentIndex - 1 ||
      tabs.length - 1 === tabIndex
    );
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={styles.innerContainer}
        onLayout={(event) => {
          const { width } = event.nativeEvent.layout;
          setWidthOfContainer(width);
        }}
        pointerEvents={disabled ? 'none' : 'auto'}
        {...rest}
      >
        <Animated.View
          style={[
            styles.activeTab,
            disabled && styles.activeTabDisabled,
            { width: translateValue },
            tabTranslateAnimatedStyles,
          ]}
        />
        {tabs.map((tab, index) => {
          const isString = typeof tab === 'string';
          const isSelectedTab = currentIndex === index;
          const badgeCount =
            isString && badgeCountObject ? badgeCountObject[tab] : undefined;
          return (
            <Fragment key={index}>
              <Pressable
                testID={`tab-${index}`}
                onPress={() => onCurrentIndexChange(index)}
                style={[styles.tab]}
              >
                {isString ? (
                  <Typography
                    variant={
                      isSelectedTab
                        ? TypographyVariant.heading3
                        : TypographyVariant.paragraph1
                    }
                    style={[
                      styles.label,
                      style,
                      disabled && styles.labelDisabled,
                    ]}
                    numberOfLines={1}
                  >
                    {tab}
                    {badgeCount && (
                      <Badge
                        testID={`tab-badge-${index}`}
                        badgeContent={badgeCount}
                        size={BadgeSizes.medium}
                        style={styles.badge}
                      />
                    )}
                  </Typography>
                ) : (
                  <View
                    testID={`tab-view-${index}`}
                    style={[styles.label, styles.iconStyles, style]}
                  >
                    {tab}
                  </View>
                )}
              </Pressable>
              <View
                style={[
                  styles.divider,
                  showDivider(index) && styles.activeDivider,
                ]}
              />
            </Fragment>
          );
        })}
      </Animated.View>
    </View>
  );
};

export default Tabs;
