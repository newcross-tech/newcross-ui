import { StyleSheet } from 'react-native';
import useTheme from '../../hooks/useTheme';
import { CheckboxType } from './Checkbox.types';

const checkboxStyle = (
  type: CheckboxType,
  disabled?: boolean,
  hasError?: boolean,
  selected?: boolean
) => {
  const theme = useTheme();

  const selectedBackgroundColorValues = () => {
    if (type === CheckboxType.INDETERMINATE) {
      return { backgroundColor: theme.CheckboxBackgroundColor };
    }
    if (disabled) {
      return { backgroundColor: theme.CheckboxDisabledBackgroundColor };
    }
    if (!hasError && selected) {
      return { backgroundColor: theme.CheckboxSelectedBackgroundColor };
    }
    if (hasError && selected) {
      return { backgroundColor: theme.CheckboxErrorBackgroundColor };
    }
    return { backgroundColor: theme.CheckboxBackgroundColor };
  };

  const checkmarkColorValues = () => {
    if (disabled) {
      return { color: theme.CheckboxDisabledCheckmarkColor };
    }
    if (hasError) {
      if (type === CheckboxType.INDETERMINATE) {
        return { color: theme.CheckboxErrorBackgroundColor };
      }
      return { color: theme.CheckboxErrorCheckmarkColor };
    }
    return { color: theme.CheckboxSelectedCheckmarkColor };
  };

  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      marginVertical: theme.CheckboxMarginVertical,
    },
    box: {
      width: theme.CheckboxWidth,
      height: theme.CheckboxHeight,
      ...selectedBackgroundColorValues(),
      borderColor: disabled
        ? theme.CheckboxDisabledBorderColor
        : hasError
        ? theme.CheckboxErrorBackgroundColor
        : theme.CheckboxBorderColor,
      borderWidth: theme.CheckboxBorderWidth,
      borderRadius: theme.CheckboxBorderRadius,
      justifyContent: 'center',
      alignItems: 'center',
    },
    label: {
      color: disabled
        ? theme.CheckboxLabelDisabledColor
        : theme.CheckboxLabelColor,
      marginHorizontal: theme.CheckboxLabelMarginHorizontal,
    },
    checkmark: {
      ...checkmarkColorValues(),
    },
  });
};

export default checkboxStyle;
