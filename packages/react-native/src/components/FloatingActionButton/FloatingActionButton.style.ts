import { StyleSheet } from 'react-native';
import useTheme from '../../hooks/useTheme';
import { FABVariant, getContainerStyle } from './FloatingActionButton.types';

const fabStyle = (variant: FABVariant) => {
  const {
    FabContainerColor,
    FabContainerBorderRadius,
    FabContentColor,
    FabContentWithTextMarginRight,
  } = useTheme();
  const containerStyle = getContainerStyle(useTheme());
  const isWithText = variant === 'iconWithText';

  return StyleSheet.create({
    container: {
      backgroundColor: FabContainerColor,
      borderRadius: FabContainerBorderRadius,
      alignSelf: 'flex-start',
      alignItems: 'center',
      justifyContent: 'center',
      ...containerStyle[variant],
    },
    textContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      marginLeft: 16,
      marginRight: 16,
    },
    content: {
      color: FabContentColor,
    },
    iconWithText: {
      marginRight: isWithText ? FabContentWithTextMarginRight : 0,
    },
  });
};

export default fabStyle;
