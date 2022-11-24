import React, { useState } from 'react';
import { View, ViewStyle, Pressable } from 'react-native';
import { IconDefinition } from '@fortawesome/pro-regular-svg-icons';
import { faCalendarDays } from '@fortawesome/pro-light-svg-icons/faCalendarDays';
import { faCheck } from '@fortawesome/pro-regular-svg-icons/faCheck';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { FABVariant } from './FloatingActionButton.types';
import Typography, { TypographyVariant } from '../Typography';
import fabStyle from './FloatingActionButton.style';
import useTheme from '../../hooks/useTheme';

export type FloatingActionButtonProps = {
  icon?: IconDefinition;
  text?: string;
  variant?: FABVariant;
  customContainerStyle?: ViewStyle;
  customContentStyle?: ViewStyle;
  testID?: string;
  /**
   * Called when a single tap gesture is detected.
   */
  onPress?: () => void;
};

const FloatingActionButton = ({
  icon = faCalendarDays,
  variant = FABVariant.icon,
  text,
  testID = 'floating-action-button',
  customContainerStyle,
  customContentStyle,
  onPress,
}: FloatingActionButtonProps) => {
  const [isPressed, setIsPressed] = useState(false);

  const theme = useTheme();
  const isIcon = variant === FABVariant.icon;
  const isText = variant === FABVariant.iconWithText;
  const styles = fabStyle(variant, theme);
  const { FabContentSize, FabContentColor, FabContentSlectedColor } = theme;

  const handlePress = () => {
    isPressed ? setIsPressed(false) : setIsPressed(true);
    onPress && onPress();
  };

  return (
    <Pressable
      testID={testID}
      style={[styles.container, customContainerStyle]}
      onPress={() => handlePress()}
    >
      {isIcon && (
        <FontAwesomeIcon
          color={FabContentColor}
          style={[customContentStyle]}
          size={FabContentSize}
          icon={icon}
        />
      )}
      {isText && (
        <View testID="icon-with-text" style={styles.textContainer}>
          {
            <FontAwesomeIcon
              color={FabContentColor}
              style={[styles.iconWithText, customContentStyle]}
              icon={icon}
              size={FabContentSize}
            />
          }
          {text && (
            <Typography
              style={[
                styles.content,
                isPressed && styles.iconWithText,
                customContentStyle,
              ]}
              variant={TypographyVariant.paragraph1}
            >
              {text}
            </Typography>
          )}
          {isPressed && (
            <View testID="selected-icon">
              <FontAwesomeIcon
                color={FabContentSlectedColor}
                style={[customContentStyle]}
                icon={faCheck}
                size={FabContentSize}
              />
            </View>
          )}
        </View>
      )}
    </Pressable>
  );
};

export default FloatingActionButton;
