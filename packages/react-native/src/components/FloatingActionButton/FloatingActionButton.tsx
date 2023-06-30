import React from 'react';
import {
  View,
  ViewStyle,
  Pressable,
  StyleProp,
  PressableProps,
} from 'react-native';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { faCheck } from '@fortawesome/pro-regular-svg-icons/faCheck';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { FABVariant } from './FloatingActionButton.types';
import Typography, { TypographyVariant } from '../Typography';
import fabStyle from './FloatingActionButton.style';
import useTheme from '../../hooks/useTheme';

export type FloatingActionButtonProps = {
  /**
   * The icon to display
   */
  icon?: IconDefinition;
  /**
   * The text to display
   */
  text?: string;
  /**
   * The variant of the FAB
   */
  variant?: FABVariant;
  /**
   * Custom container style
   */
  style?: StyleProp<ViewStyle>;
  /**
   * TestID for testing
   */
  testID?: string;
  /**
   * Called when a single tap gesture is detected.
   */
  onPress?: VoidFunction;
  /**
   * Whether the component displays a shadow.
   */
  hasShadow?: boolean;
  /**
   * Whether the component is detected.
   */
  isSelected?: boolean;
} & PressableProps;

const FloatingActionButton = ({
  icon,
  variant = FABVariant.big,
  text,
  testID = 'floating-action-button',
  style,
  onPress,
  hasShadow = true,
  isSelected = false,
  ...rest
}: FloatingActionButtonProps) => {
  const hasContentGreaterOne =
    [icon, text, isSelected].filter(
      (element) => typeof element !== 'undefined' && element !== false
    ).length > 1;
  const hasIcon = !!icon;

  const theme = useTheme();
  const styles = fabStyle(
    variant,
    theme,
    hasShadow,
    hasContentGreaterOne,
    hasIcon
  );

  const { FabIconSize, FabContentColor, FabIconSelectedColor } = theme;

  return (
    <Pressable
      hitSlop={theme.SpacingBase16}
      testID={testID}
      style={({ pressed }) => [
        styles.container,
        { opacity: pressed ? theme.CardPressedOpacity : 1 },
        style,
      ]}
      onPress={onPress}
      {...rest}
    >
      {icon && (
        <View testID="icon">
          <FontAwesomeIcon
            color={FabContentColor}
            icon={icon}
            size={FabIconSize}
          />
        </View>
      )}
      {text && (
        <Typography style={styles.text} variant={TypographyVariant.paragraph1}>
          {text}
        </Typography>
      )}
      {isSelected && (
        <View testID="selected-icon" style={styles.selectedIcon}>
          <FontAwesomeIcon
            color={FabIconSelectedColor}
            icon={faCheck}
            size={FabIconSize}
          />
        </View>
      )}
    </Pressable>
  );
};

export default FloatingActionButton;
