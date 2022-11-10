import { StyleSheet } from 'react-native';
import useTheme from '../../hooks/useTheme';

const toastStyle = () => {
  const theme = useTheme();

  return StyleSheet.create({
    container: {
      flex: 1,
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1,
      padding: theme.ToastPadding,
    },
  });
};

export default toastStyle;
