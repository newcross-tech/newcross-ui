import { StyleSheet } from 'react-native';
import useTheme from '../../hooks/useTheme';
import { AccordionProps } from './Accordion';

const accordionStyle = ({ icon }: AccordionProps) => {
  const theme = useTheme();

  return StyleSheet.create({
    headerContainer: {
      backgroundColor: theme.AccordionHeaderBackgroundColor,
      borderBottomWidth: theme.AccordionHeaderBorderBottomWidth / 2,
      borderBottomColor: theme.AccordionHeaderBorderBottomColor,
    },
    headerContent: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      paddingHorizontal: theme.AccordionHeaderContentPaddingHorizontal,
      paddingVertical: theme.AccordionHeaderContentPaddingVertical,
    },
    headerLabel: {
      flexDirection: 'row',
      alignItems: 'center',
      flexWrap: 'wrap',
      width: '80%',
    },
    bodyContainer: {
      position: 'relative',
      overflow: 'hidden',
      backgroundColor: theme.AccordionHeaderBackgroundColor,
      borderBottomWidth: theme.AccordionHeaderBorderBottomWidth / 2,
      borderBottomColor: theme.AccordionHeaderBorderBottomColor,
    },
    bodyContent: {
      position: 'absolute',
      paddingHorizontal: theme.AccordionBodyPaddingHorizontal,
      paddingVertical: theme.AccordionBodyPaddingVertical,
      width: '100%',
    },
    label: {
      marginLeft: icon ? theme.AccordionTextMarginLeft : 0,
      color: theme.AccordionTextColor,
    },
    icon: {
      marginVertical: theme.AccordionIconMarginVertical,
      color: theme.AccordionIconColor,
    },
  });
};

export default accordionStyle;
