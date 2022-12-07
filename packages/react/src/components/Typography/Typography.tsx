import { HTMLAttributes, ReactNode } from 'react';
import { TestProp } from '../../types/TestProp';
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
   * Used to set maximum number of lines
   */
  numberOfLines?: number;
} & TestProp &
  HTMLAttributes<HTMLDivElement>;

const Typography = ({ children, testID, ...rest }: TypographyProps) => {
  return (
    <Styled.Typography data-testid={testID} {...rest}>
      {children}
    </Styled.Typography>
  );
};

export default Typography;
