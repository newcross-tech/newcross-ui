import { StyleSheet } from 'react-native';
import useTheme from '../../hooks/useTheme';
import { AlertProps } from './Alert';
import { AlertStyle, getAccentColor, getBackgroundColor } from './Alert.types';

const alertStyle = ({
  variant,
  hasBorder,
}: AlertProps): StyleSheet.NamedStyles<AlertStyle> => {
  const theme = useTheme();
  const {
    AlertTextColor,
    AlertBorderWidth,
    AlertBorderRadius,
    AlertTextContainerPadding,
    AlertShadowColor,
    AlertShadowOffsetWidth,
    AlertShadowOffsetHeight,
    AlertShadowOpacity,
    AlertShadowRadius,
    AlertShadowElevation,
  } = theme;

  const primaryColor = getAccentColor(theme);
  const secondaryColor = getBackgroundColor(theme);

  return StyleSheet.create({
    cardContainer: {
      shadowColor: AlertShadowColor,
      shadowOffset: {
        width: AlertShadowOffsetWidth,
        height: AlertShadowOffsetHeight,
      },
      shadowRadius: AlertShadowRadius,
      shadowOpacity: AlertShadowOpacity,
      elevation: AlertShadowElevation,
    },
    alertContainer: {
      borderRadius: AlertBorderRadius,
      backgroundColor: secondaryColor[variant],
      ...(hasBorder && {
        borderWidth: AlertBorderWidth,
        borderColor: primaryColor[variant],
      }),
    },
    textContainer: {
      flexDirection: 'column',
      paddingHorizontal: AlertTextContainerPadding,
    },
    text: {
      color: AlertTextColor,
    },
    iconStyle: {
      alignSelf: 'flex-start',
    },
    closeIconStyle: {
      marginLeft: 'auto',
    },
  });
};

export default alertStyle;
