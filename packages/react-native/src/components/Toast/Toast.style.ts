import { StyleSheet } from 'react-native';
import {
  ToastStatus,
  getBackgroundColorValues,
  getStatusIconColorValues,
} from './Toast.types';
import useTheme from '../../hooks/useTheme';
import { ToastProps } from './Toast';

const toastStyle = ({ status }: ToastProps) => {
  const theme = useTheme();

  const backgroundColorValues = getBackgroundColorValues(theme);
  const statusIconColorValues = getStatusIconColorValues(theme);

  return StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      backgroundColor: backgroundColorValues[status as ToastStatus],
      zIndex: 1,
      elevation: theme.ToastElevation,
      padding: theme.ToastPadding,
    },
    statusIcon: {
      marginRight: theme.ToastPadding,
      color: statusIconColorValues[status as ToastStatus],
    },
    text: {
      flex: 1,
      lineHeight: theme.ToastLineHeight,
      fontFamily: theme.ToastFontFamily,
      fontSize: theme.ToastFontSize,
      color: theme.ToastColor,
    },
    closeIcon: {
      marginLeft: theme.ToastPadding,
      color: theme.ToastCloseIconColor,
      justifyContent: 'flex-end',
    },
  });
};

export default toastStyle;
