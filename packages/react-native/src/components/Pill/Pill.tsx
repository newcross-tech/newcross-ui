import React, { cloneElement, isValidElement, ReactNode } from 'react';
import { TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';
import Typography from '../Typography';
import pillStyle from './Pill.style';
import {
  FontAwesomeIcon,
  FontAwesomeIconStyle,
} from '@fortawesome/react-native-fontawesome';
import { faXmark } from '@fortawesome/pro-solid-svg-icons/faXmark';
import { getTypographySizes, PillSizes, PillVariant } from './Pill.types';

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
   * Adds a selected state background color to the pill
   */
  selected?: boolean;
  /**
   * Used to add custom style to the icon.
   */
  iconStyle?: FontAwesomeIconStyle;
  /**
   * Used to add custom style to the text.
   */
  textStyle?: TextStyle;
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
  selected = false,
  style,
  iconStyle = {},
  textStyle,
  onPress,
  testID,
  label,
  hasBorder = true,
  size = PillSizes.medium,
  variant = PillVariant.default,
}: PillProps) => {
  const styles = pillStyle({
    label,
    disabled,
    icon,
    removable,
    hasBorder,
    variant,
    selected,
  });

  return (
    <TouchableOpacity disabled={disabled} onPress={onPress}>
      <View
        style={[styles.pillContainer, style]}
        testID={`pill-container-${testID}`}
      >
        <View style={styles.pillContent} testID={`pill-content-${testID}`}>
          {isValidElement(icon) &&
            cloneElement(icon, { style: [styles.pillIcon, iconStyle] })}
          <Typography
            variant={getTypographySizes()[size]}
            style={[styles.pillText, textStyle]}
            testID={`pill-typography-${testID}`}
            numberOfLines={1}
          >
            {label}
          </Typography>
          {removable && (
            <View testID="pill-close-icon-container-label">
              <FontAwesomeIcon style={styles.pillRemoveIcon} icon={faXmark} />
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Pill;
