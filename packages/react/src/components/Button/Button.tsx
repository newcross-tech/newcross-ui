import { ButtonHTMLAttributes } from 'react';
import * as Styled from './Button.style';
import { ButtonCorners, ButtonSizes, ButtonVariant } from './Button.types';

export type ButtonProps = {
  /**
   * Used to define background variant
   */
  variant?: ButtonVariant;
  /**
   * Used to set the border radius style e.g. pill, squared
   */
  corners?: ButtonCorners;
  /**
   * Used to define size of button
   */
  size?: ButtonSizes;
  /**
   * To toggle between auto and full width button
   */
  fullWidth?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  children,
  variant = ButtonVariant.primary,
  size = ButtonSizes.medium,
  ...rest
}: ButtonProps) => {
  return (
    <Styled.Button variant={variant} size={size} {...rest}>
      {children}
    </Styled.Button>
  );
};

export default Button;
