import React, { cloneElement, isValidElement, ReactNode } from 'react';
import { View, Pressable, ViewStyle } from 'react-native';
import Typography from '../Typography';
import pillStyle from './Pill.style';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faXmark } from '@fortawesome/pro-solid-svg-icons/faXmark';
import useTheme from '../../hooks/useTheme';
import { PillSizes, getTypographySizes, PillVariant } from './Pill.types';

export type PillProps = {
  /**
   * Text element to describe the pill.
   */
  label?: string;
  /**
   * Disables pill from being pressed
   */
  disabled?: boolean;
  /**
   * Each pill can opt to include an icon which will be displayed before the label.
   */
  icon?: ReactNode;
  /**
   * If true displays a delete icon next to the label
   */
  removable?: boolean;
  /**
   * Used to add custom style to the pill container.
   */
  style?: ViewStyle;
  /**
   * Used to add custom style to the icon container.
   */
  iconStyle?: ViewStyle;
  /**
   * Used to add custom style to the text container.
   */
  textStyle?: ViewStyle;
  /**
   * Called when a single tap gesture is detected.
   */
  onPress?: VoidFunction;
  /**
   * Used to locate this view in end-to-end tests.
   */
  testID?: string;
  /**
   * Whether the pill has border
   */
  hasBorder?: boolean;
  /**
   * Used to define size of the Pills.
   */
  size?: PillSizes;
  /**
   * Used to define color palette of the Pills.
   */
  variant?: PillVariant;
};

const Pill = ({
  disabled = false,
  icon,
  removable = true,
  style,
  iconStyle,
  textStyle,
  onPress,
  testID,
  label,
  hasBorder = true,
  size = PillSizes.medium,
  variant = PillVariant.default,
}: PillProps) => {
  const theme = useTheme();
  const styles = pillStyle({
    label,
    disabled,
    icon,
    removable,
    hasBorder,
    variant,
  });
  return (
    <View
      style={[styles.pillContainer, style]}
      testID={`pill-container-${testID}`}
    >
      <View style={styles.pillContent} testID={`pill-content-${testID}`}>
        {isValidElement(icon) &&
          cloneElement(icon, { style: { ...styles.pillIcon, ...iconStyle } })}
        <Typography
          variant={getTypographySizes()[size]}
          style={[styles.pillText, textStyle]}
          testID={`pill-typography-${testID}`}
        >
          {label}
        </Typography>
        {removable && (
          <Pressable
            hitSlop={theme.SpacingBase8}
            style={({ pressed }) => [
              { opacity: pressed ? theme.CardPressedOpacity : 1 },
            ]}
            onPress={onPress}
            disabled={disabled}
            testID={`pill-pressable-container-${testID}`}
          >
            <FontAwesomeIcon style={styles.pillRemoveIcon} icon={faXmark} />
          </Pressable>
        )}
      </View>
    </View>
  );
};

export default Pill;
