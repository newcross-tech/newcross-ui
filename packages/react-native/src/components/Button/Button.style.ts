import { StyleSheet } from 'react-native';
import { ButtonStyle } from './Button.types';

const buttonStyle: StyleSheet.NamedStyles<ButtonStyle> = {
  button: {
    paddingVertical: 16,
    paddingHorizontal: 16 * 2,
    borderRadius: 16 * 10,
    flexGrow: 0,
    backgroundColor: '#0062A2',
  },
  buttonText: {
    textTransform: 'uppercase',
    textAlign: 'center',
    color: '#fff',
  },
};

export default buttonStyle;
