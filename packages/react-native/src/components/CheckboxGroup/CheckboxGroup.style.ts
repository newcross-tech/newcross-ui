import { StyleSheet } from 'react-native';
import useTheme from '../../hooks/useTheme';

const checkboxGroupStyle = () => {
  const theme = useTheme();

  return StyleSheet.create({
    optionsContainer: {
      marginLeft: theme.SpacingBase16,
    },
  });
};

export default checkboxGroupStyle;
