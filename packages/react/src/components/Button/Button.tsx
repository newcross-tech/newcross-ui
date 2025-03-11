import { OptionalProps } from '../../types';
import Typography from '../Typography';
import * as Styled from './Button.style';
import { ButtonPropsStrict, TypographyValues } from './Button.types';

export type ButtonProps = OptionalProps<
  ButtonPropsStrict,
  'size' | 'variant' | 'scheme' | 'fullWidth' | 'disabled'
>;

const normalizeButtonProps = (_props: ButtonProps): ButtonPropsStrict => ({
  ..._props,
  variant: _props.variant ?? 'primary',
  scheme: _props.scheme ?? 'light',
  size: _props.size ?? 'large',
  fullWidth: _props.fullWidth ?? false,
  disabled: _props.disabled ?? false,
});

const Button = (_props: ButtonProps) => {
  const {
    variant,
    scheme,
    size,
    fullWidth,
    children,
    leftIcon,
    rightIcon,
    testID,
    ...rest
  } = normalizeButtonProps(_props);
  const iconOnly = !children && (leftIcon || rightIcon);
  const paddingX = iconOnly ? 'sm' : size === 'small' ? 'md' : 'lg';
  const paddingY = size === 'small' ? 'xs' : 'sm';

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
      py={paddingY}
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
