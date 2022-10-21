import React, { useEffect, useState } from 'react';
import {
  Pressable,
  View,
  TextStyle,
  ViewStyle,
  GestureResponderEvent,
  PressableProps,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCheck } from '@fortawesome/pro-light-svg-icons/faCheck';
import { faMinus } from '@fortawesome/pro-light-svg-icons/faMinus';
import checkboxStyle from './Checkbox.style';
import { CheckboxType } from './Checkbox.types';
import Typography, { TypographyVariant } from '../Typography';

export type CheckboxProps = {
  /**
   * sets the checkbox to selected by default
   */
  defaultChecked?: boolean;
  /**
   * Sets the type the checkbox is - check or indeterminate
   */
  type?: CheckboxType;
  /**
   * Label for the checkbox
   */
  label: string;
  /**
   * Whether the press behavior is disabled.
   */
  disabled?: boolean;
  /**
   * Shows different styles when error is true
   */
  hasError?: boolean;
  /**
   * Callback fired when the state is changed.
   */
  onChange?: (event: GestureResponderEvent) => void;
  /**
   * Determines selected/checked state
   */
  checked?: boolean;
  /**
   * Accepts a test ID to be used for the checkbox.
   */
  testID?: string;
  /**
   * Overwrites or extends the styles applied to the component.
   */
  style?: ViewStyle | TextStyle;
} & PressableProps;

const Checkbox = ({
  onChange,
  checked,
  defaultChecked,
  type = CheckboxType.CHECK,
  label,
  disabled,
  hasError,
  testID,
  style,
  ...rest
}: CheckboxProps) => {
  const [selected, setSelected] = useState(defaultChecked);

  const styles = checkboxStyle(type, disabled, hasError, selected);

  const icon = type === CheckboxType.INDETERMINATE ? faMinus : faCheck;

  const handleChecked = (event: GestureResponderEvent) => {
    onChange && onChange(event);
    setSelected(!selected);
  };

  useEffect(() => {
    onChange && setSelected(checked);
  }, [checked]);

  return (
    <Pressable
      pointerEvents={disabled ? 'none' : 'auto'}
      onPress={handleChecked}
      style={styles.container}
      testID={testID}
      {...rest}
    >
      <View style={[styles.box, style]} testID="checkmark">
        {selected && <FontAwesomeIcon icon={icon} style={styles.checkmark} />}
      </View>
      <Typography variant={TypographyVariant.paragraph1} style={styles.label}>
        {label}
      </Typography>
    </Pressable>
  );
};

export default Checkbox;
