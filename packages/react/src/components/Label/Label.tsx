import { HTMLAttributes } from 'react';
import { TypographyProps } from '../Typography';
import * as Styled from './Label.style';

export type LabelProps = TypographyProps & {
  /**
   * Reflects the value of the for content property
   */
  htmlFor?: string;
  /**
   * Used to assign disabled styles
   */
  disabled?: boolean;
} & HTMLAttributes<HTMLLabelElement>;

const Label = ({ children, testID, ...rest }: LabelProps) => {
  return (
    <Styled.Label data-testid={testID} {...rest}>
      {children}
    </Styled.Label>
  );
};

export default Label;
