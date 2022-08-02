import React, { useState, cloneElement, ReactElement } from 'react';
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
  onSelect?: () => void;
  /**
   * Option value
   */
  optionText: string;
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
  selected?: boolean;
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
  optionText,
  alignText = ListOptionAlignment.LEFT,
  leftIcon,
  rightIcon,
  onSelect,
  selected,
  style,
  testID,
  ...rest
}: ListOptionProps) => {
  const [isSelected, setIsSelected] = useState(selected);

  const theme = useTheme();
  const styles = listOptionStyle(alignText, isSelected);

  const renderIcon = (icon: ReactElement) =>
    cloneElement(icon, { size: theme.ListOptionIconSize });

  const handleSelect = () => {
    setIsSelected(!isSelected);
    onSelect && onSelect();
  };

  return (
    <View style={[styles.container, style]}>
      <Pressable testID={testID} onPress={handleSelect} {...rest}>
        <View>
          <View style={styles.innerContainer}>
            {leftIcon && (
              <View testID="left-icon" style={styles.leftIcon}>
                {renderIcon(leftIcon)}
              </View>
            )}
            <View style={styles.textContainer}>
              <Typography
                style={styles.optionText}
                variant={TypographyVariant.paragraph1}
              >
                {optionText}
              </Typography>
            </View>
            {rightIcon && (
              <View testID="right-icon" style={styles.rightIcon}>
                {renderIcon(rightIcon)}
              </View>
            )}
            {isSelected && (
              <View testID="check-icon" style={styles.rightIcon}>
                <FontAwesomeIcon
                  icon={faCheck}
                  color={theme.ListOptionCheckIconColor}
                  size={theme.ListOptionIconSize}
                />
              </View>
            )}
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default ListOption;

/** TODO:
 * - Create group component to control single and multiple select
 * - Add unit tests for group list option component
 */
