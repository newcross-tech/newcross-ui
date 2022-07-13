import { StyleSheet } from 'react-native';
import useTheme from '../../hooks/useTheme';
import { AlertProps } from './Alert';
import {
  AlertStyle,
  AlertVariant,
  getAccentColor,
  getBackgroundColor,
} from './Alert.types';

const alertStyle = ({
  variant,
}: AlertProps): StyleSheet.NamedStyles<AlertStyle> => {
  const theme = useTheme();
  const {
    AlertTextColor,
    AlertBorderWidth,
    AlertBorderRadius,
    AlertTextContainerPadding,
  } = theme;

  const primaryColor = getAccentColor(theme);
  const secondaryColor = getBackgroundColor(theme);

  return StyleSheet.create({
    alertContainer: {
      borderWidth: AlertBorderWidth,
      borderRadius: AlertBorderRadius,
      borderColor: primaryColor[variant as AlertVariant],
      backgroundColor: secondaryColor[variant as AlertVariant],
    },
    textContainer: {
      flexDirection: 'column',
      paddingLeft: AlertTextContainerPadding,
    },
    text: {
      color: AlertTextColor,
    },
    iconStyle: {
      alignSelf: 'flex-start',
    },
  });
};

export default alertStyle;
