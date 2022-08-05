import React, { cloneElement, ReactElement } from 'react';
import { View, Pressable, TextStyle, ViewStyle } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { ListOptionAlignment } from './ListOption.types';
import Typography, { TypographyVariant } from '../Typography';
import listOptionStyle from './ListOption.style';
import useTheme from '../../hooks/useTheme';
import { faCheck } from '@fortawesome/pro-regular-svg-icons';

export type ListOptionProps = {
  /**
   * Called when a single tap gesture is detected.
   */
  onSelect: VoidFunction;
  /**
   * Option value
   */
  value: string;
  /**
   * Set the left icon element.
   */
  leftIcon?: ReactElement;
  /**
   * Set the right icon element.
   */
  rightIcon?: ReactElement;
  /**
   * Sets list option as selected when pressed
   */
  selected: boolean;
  /**
   * When true, the check mark is displayed. Used when in a list
   */
  isMultipleSelect?: boolean;
  /**
   * Set the alignment of the option text
   */
  alignText?: ListOptionAlignment;
  /**
   * Overwrites or extends the styles applied to the component.
   */
  style?: ViewStyle | TextStyle;
  /**
   * Used to locate this view in end-to-end tests.
   */
  testID?: string;
};

const ListOption = ({
  value,
  alignText = ListOptionAlignment.LEFT,
  leftIcon,
  rightIcon,
  onSelect,
  selected,
  isMultipleSelect,
  style,
  testID,
  ...rest
}: ListOptionProps) => {
  const theme = useTheme();
  const styles = listOptionStyle(alignText, selected, isMultipleSelect);

  const renderIcon = (icon: ReactElement) =>
    cloneElement(icon, { size: theme.ListOptionIconSize });

  return (
    <Pressable
      style={[styles.container, style]}
      testID={testID}
      onPress={onSelect}
      {...rest}
    >
      <View style={styles.innerContainer}>
        {leftIcon && (
          <View testID="list-option-left-icon" style={styles.leftIcon}>
            {renderIcon(leftIcon)}
          </View>
        )}
        <View style={styles.textContainer}>
          <Typography
            style={styles.optionText}
            variant={TypographyVariant.paragraph1}
          >
            {value}
          </Typography>
        </View>
        {rightIcon && (
          <View testID="list-option-right-icon" style={styles.rightIcon}>
            {renderIcon(rightIcon)}
          </View>
        )}
        {isMultipleSelect && selected && (
          <View testID="list-option-check-icon" style={styles.rightIcon}>
            <FontAwesomeIcon
              icon={faCheck}
              color={theme.ListOptionCheckIconColor}
              size={theme.ListOptionIconSize}
            />
          </View>
        )}
      </View>
    </Pressable>
  );
};

export default ListOption;
