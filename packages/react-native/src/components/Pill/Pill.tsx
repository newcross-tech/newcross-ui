import React, { cloneElement, isValidElement, ReactNode } from 'react';
import { View, Pressable, ViewStyle } from 'react-native';
import Typography, { TypographyVariant } from '../Typography';
import pillStyle from './Pill.style';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faXmark } from '@fortawesome/pro-solid-svg-icons/faXmark';

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
   * Called when a single tap gesture is detected.
   */
  onPress?: VoidFunction;
  /**
   * Used to locate this view in end-to-end tests.
   */
  testID?: string;
};

const Pill = ({
  disabled = false,
  icon,
  removable = true,
  style,
  onPress,
  testID,
  label,
}: PillProps) => {
  const styles = pillStyle({ label, disabled, icon, removable });

  return (
    <View
      style={[styles.pillContainer, style]}
      testID={`pill-container-${testID}`}
    >
      <View style={styles.pillContent} testID={`pill-content-${testID}`}>
        {isValidElement(icon) && cloneElement(icon, { style: styles.pillIcon })}
        <Typography
          variant={TypographyVariant.paragraph1}
          style={styles.pillText}
          testID={`pill-typography-${testID}`}
        >
          {label}
        </Typography>
        {removable && (
          <Pressable
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
