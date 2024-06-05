import { StyleSheet } from 'react-native';
import useTheme from '../../hooks/useTheme';

const phoneInputStyle = () => {
  const theme = useTheme();

  return StyleSheet.create({
    dropdownContent: {
      paddingRight: 0,
      paddingLeft: 0,
    },
    dropdownContainer: {
      flex: 1,
      borderWidth: 0,
      maxWidth: 75,
      paddingHorizontal: theme.PhoneInputContainerPaddingHorizontal,
    },
    phoneNumberContainer: {
      justifyContent: 'space-between',
      flexDirection: 'row',
    },
    dialcode: {
      paddingLeft: theme.PhoneInputDialcodePaddingHorizontal,
    },
    divider: {
      backgroundColor: theme.PhoneInputDividerBackgroundColor,
      width: theme.PhoneInputDividerWidth / 2,
      height: theme.PhoneInputDividerHeight - 4,
    },
    iconStyle: {
      paddingHorizontal: 0,
    },
  });
};
export default phoneInputStyle;
