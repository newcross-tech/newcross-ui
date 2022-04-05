import React, { ReactNode } from 'react';
import { TextStyle, Text } from 'react-native';
import typographyStyle from './Typography.style';
import { Variant } from './Typography.types';

export type TypographyProps = {
  /**
   * Applies the theme typography styles.
   */
  variant: Variant;
  /**
   * The content of the component.
   */
  children: ReactNode;
  /**
   * If true, the text will have a bottom margin.
   */
  gutterBottom?: boolean;
  /**
   * Used to locate this view in end-to-end tests.
   */
  testID?: string;
  /**
   * Overwrites or extends the styles applied to the component.
   */
  style?: TextStyle;
};

const Typography = ({
  children,
  variant,
  gutterBottom = false,
  style,
  ...rest
}: TypographyProps) => {
  const styles = typographyStyle({ variant, gutterBottom } as TypographyProps);

  return (
    <Text style={[styles.text, style]} {...rest}>
      {children}
    </Text>
  );
};

export default Typography;
