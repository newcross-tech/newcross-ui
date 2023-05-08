import React, { ReactNode, useState, useEffect } from 'react';
import { Pressable, View, LayoutChangeEvent, ViewStyle } from 'react-native';
import accordionStyle from './Accordion.style';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronDown } from '@fortawesome/pro-regular-svg-icons/faChevronDown';
import Typography, { TypographyVariant } from '../Typography';

import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';

export type AccordionProps = {
  /**
   * Called when a single tap gesture is detected.
   */
  onPress?: () => void;
  /**
   * Used to add custom header styles.
   */
  styleHeader?: ViewStyle;
  /**
   * Used to add custom header content styles.
   */
  styleHeaderContent?: ViewStyle;
  /**
   * Used to add custom content container styles.
   */
  styleContentContainer?: ViewStyle;
  /**
   * Each accordion can opt to include an icon which will be displayed before the section label in the header.
   */
  icon?: ReactNode;
  /**
   * If true, expands the accordion, otherwise collapse it. Setting this prop enables control over the accordion. Used only in stand-alone accordion or multiple selection accordion group.
   */
  expanded?: boolean;
  /**
   * The content of the component.
   */
  children?: ReactNode;
  /**
   * Text element to describe the accordion.
   */
  label?: string;
  /**
   * Alternative to label. Used to add custom header content.
   */
  headerContent?: ReactNode;
  /**
   * Used to style the accordion group container.
   */
  styleAccordionContainer?: ViewStyle;
  /**
   * Used to locate this view in end-to-end tests.
   */
  testID?: string;
};

const Accordion = ({
  onPress,
  styleHeader,
  styleHeaderContent,
  styleContentContainer,
  headerContent,
  icon,
  expanded = false,
  children,
  label,
  styleAccordionContainer,
  testID,
}: AccordionProps) => {
  const [openAccordion, setOpenAccordion] = useState(expanded);
  const [bodyHeight, setBodyHeight] = useState(0);
  const styles = accordionStyle({ icon });
  const animationProgress = useDerivedValue(() =>
    openAccordion ? withTiming(1) : withTiming(0)
  );

  useEffect(() => {
    setOpenAccordion(expanded);
  }, [expanded]);

  const onLayoutBodyContent = (event: LayoutChangeEvent) => {
    const { height } = event.nativeEvent.layout;
    setBodyHeight(height);
  };

  const onHeaderPress = () => {
    onPress ? onPress() : setOpenAccordion(!openAccordion);
  };

  const bodyContainerAnimationStyle = useAnimatedStyle(() => {
    return {
      height: bodyHeight * animationProgress.value,
      opacity: animationProgress.value === 0 ? 0 : 1,
    };
  });

  const iconAnimationStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${animationProgress.value * 180}deg` }],
    };
  });

  return (
    <View
      style={[styleAccordionContainer]}
      testID={`accordion-container-${testID}`}
    >
      <Pressable
        onPress={onHeaderPress}
        testID={`accordion-pressable-container-${testID}`}
      >
        <View
          style={[styles.headerContainer, styleHeader]}
          testID={`accordion-header-container-${testID}`}
        >
          <View style={[styles.headerContent, styleHeaderContent]}>
            <View style={styles.headerLabel}>
              {icon}
              {label ? (
                <Typography
                  variant={TypographyVariant.paragraph1}
                  style={styles.content}
                  numberOfLines={2}
                >
                  {label}
                </Typography>
              ) : (
                <View style={styles.content}>{headerContent}</View>
              )}
            </View>
            <Animated.View style={iconAnimationStyle}>
              <FontAwesomeIcon icon={faChevronDown} style={styles.icon} />
            </Animated.View>
          </View>
        </View>
      </Pressable>
      <Animated.View
        style={[styles.bodyContainer, bodyContainerAnimationStyle]}
      >
        <View
          onLayout={onLayoutBodyContent}
          style={[styles.bodyContent, styleContentContainer]}
          testID={
            openAccordion
              ? `accordion-body-expanded-container-${testID}`
              : `accordion-body-container-${testID}`
          }
        >
          {children}
        </View>
      </Animated.View>
    </View>
  );
};

export default Accordion;
