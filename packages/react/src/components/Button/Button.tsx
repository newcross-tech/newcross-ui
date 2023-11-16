import { ButtonHTMLAttributes, ReactElement, ReactNode } from 'react';
import { TestProp } from '../../types';
import Typography from '../Typography';
import * as Styled from './Button.style';
import { ButtonSizes, ButtonVariant } from './Button.types';

export type ButtonProps = {
  /**
   * Used to define background variant
   */
  variant?: ButtonVariant;
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

  'aria-label'?: string;
  'aria-labelledby'?: string;
} & TestProp &
  ButtonHTMLAttributes<HTMLButtonElement>;

export type IconProps = Pick<
  ButtonProps,
  'size' | 'testID' | 'rightIcon' | 'leftIcon'
> & {
  hasLabel?: boolean;
  children?: ReactNode;
};

export const ButtonIcon = ({
  hasLabel,
  testID,
  rightIcon,
  leftIcon,
  children,
  size,
}: IconProps) => (
  <Styled.IconWrapper
    size={size}
    leftIcon={leftIcon}
    rightIcon={rightIcon}
    data-testid={testID}
    hasLabel={hasLabel}
  >
    {children}
  </Styled.IconWrapper>
);

/**
 * @description
 * ### Accessibility
 * #### Pattern: Button
 * #### Notes:
 * Use `aria-label` or `aria-labeledby` if you use `children` without accessible text (e.g.: non-accessible icon).
 */
const Button = ({
  children,
  variant = 'primary',
  size = 'large',
  leftIcon,
  rightIcon,
  testID,
  ...rest
}: ButtonProps) => {
  const hasLabel = !!children;
  return (
    <Styled.Button variant={variant} size={size} data-testid={testID} {...rest}>
      {leftIcon && (
        <ButtonIcon
          size={size}
          leftIcon={leftIcon}
          hasLabel={hasLabel}
          testID={'left-icon'}
        >
          {leftIcon}
        </ButtonIcon>
      )}
      <Typography variant={Styled.getTypographyValues()[size]}>
        {children}
      </Typography>
      {rightIcon && (
        <ButtonIcon
          size={size}
          rightIcon={rightIcon}
          hasLabel={hasLabel}
          testID={'right-icon'}
        >
          {rightIcon}
        </ButtonIcon>
      )}
    </Styled.Button>
  );
};

export default Button;
