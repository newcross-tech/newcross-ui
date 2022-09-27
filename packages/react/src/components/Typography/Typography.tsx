import { ReactNode } from 'react';
import * as Styled from './Typography.style';
import { TypographyVariant } from './Typography.types';

export type TypographyProps = {
  /**
   * Applies the theme typography styles.
   */
  variant: TypographyVariant;
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
};

const Typography = ({ children, testID, ...rest }: TypographyProps) => {
  return (
    <Styled.Typography data-testid={testID} {...rest}>
      {children}
    </Styled.Typography>
  );
};

export default Typography;
