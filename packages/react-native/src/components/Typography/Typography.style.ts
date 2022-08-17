import { StyleSheet } from 'react-native';
import useTheme from '../../hooks/useTheme';
import { TypographyProps } from './Typography';
import { getTypographyValues } from './Typography.types';

const typographyStyle = ({ variant, gutterBottom }: TypographyProps) => {
  const theme = useTheme();

  const typographyValues = getTypographyValues(theme);

  const { SpacingBase8, SpacingBase0 } = theme;

  return StyleSheet.create({
    text: {
      marginBottom: gutterBottom ? SpacingBase8 : SpacingBase0,
      ...typographyValues[variant],
    },
  });
};

export default typographyStyle;
