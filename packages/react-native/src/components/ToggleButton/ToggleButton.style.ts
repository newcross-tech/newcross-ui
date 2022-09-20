import { StyleSheet } from 'react-native';

import useTheme from '../../hooks/useTheme';
import { ToggleButtonProps } from './ToggleButton';

const toggleStyle = ({
  selected,
  fullWidth,
  leftIcon,
  rightIcon,
  children,
}: ToggleButtonProps) => {
  const theme = useTheme();

  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      paddingVertical: theme.ToggleButtonPaddingVertical,
      paddingHorizontal: theme.ToggleButtonPaddingHorizontal,
      borderRadius: theme.ToggleButtonBorderRadius,
      borderWidth: theme.ToggleButtonBorderWidth,
      borderColor: selected
        ? theme.ToggleButtonSelectedBorderColor
        : theme.ToggleButtonBorderColor,
      backgroundColor: selected
        ? theme.ToggleButtonSelectedBackgroundColor
        : theme.ToggleButtonBackgroundColor,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: fullWidth ? 'stretch' : 'flex-start',
    },
    text: {
      color: theme.ToggleButtonColor,
    },
    icon: {
      marginRight: leftIcon && children ? theme.ToggleButtonMargin : undefined,
      marginLeft: rightIcon && children ? theme.ToggleButtonMargin : undefined,
      color: theme.ToggleButtonColor,
    },
  });
};

export default toggleStyle;
