import { ButtonHTMLAttributes, ReactElement } from 'react';
import { TestProp } from '../../types';
import Typography from '../Typography';
import * as Styled from './Button.style';
import { ButtonScheme, ButtonSizes, ButtonVariant } from './Button.types';

export type ButtonProps = {
  /**
   * Used to define background variant
   */
  variant?: ButtonVariant;
  /**
   * Use to define the background the button is applied to
   */
  scheme?: ButtonScheme;
  /**
   * Used to define size of button
   */
  size?: ButtonSizes;
  /**
   * To toggle between auto and full width button
   */
  fullWidth?: boolean;
  /**
   * Set the left icon element.
   */
  leftIcon?: ReactElement;
  /**
   * Set the right icon element.
   */
  rightIcon?: ReactElement;
  /**
   * Set disabled state of button
   */
  disabled?: boolean;
} & TestProp &
  ButtonHTMLAttributes<HTMLButtonElement>;

export enum TypographyValues {
  small = 'p2Action',
  large = 'p1Action',
}

const Button = ({
  children,
  variant = 'primary',
  scheme = 'light',
  size = 'large',
  leftIcon,
  rightIcon,
  testID,
  fullWidth = false,
  ...rest
}: ButtonProps) => {
  const iconOnly = !children && (leftIcon || rightIcon);
  const paddingX = iconOnly ? 'sm' : size === 'small' ? 'md' : 'lg';

  return (
    <Styled.Button
      variant={variant}
      scheme={scheme}
      fullWidth={fullWidth}
      semanticTag="button"
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
      gap="sm"
      py="sm"
      px={paddingX}
      testID={testID}
      {...rest}
    >
      {leftIcon && !iconOnly && (
        <Styled.IconWrapper
          display="flex"
          alignItems="center"
          testID="left-icon"
          size={size}
        >
          {leftIcon}
        </Styled.IconWrapper>
      )}
      {iconOnly ? (
        <Styled.IconWrapper
          display="flex"
          alignItems="center"
          testID="center-icon"
          aria-label="icon-button"
          size={size}
        >
          {leftIcon ?? rightIcon}
        </Styled.IconWrapper>
      ) : (
        <Typography variant={TypographyValues[size]}>{children}</Typography>
      )}
      {rightIcon && !iconOnly && (
        <Styled.IconWrapper
          display="flex"
          alignItems="center"
          testID="right-icon"
          size={size}
        >
          {rightIcon}
        </Styled.IconWrapper>
      )}
    </Styled.Button>
  );
};

export default Button;
