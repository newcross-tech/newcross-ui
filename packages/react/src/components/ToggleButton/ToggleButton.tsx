import { useState } from 'react';
import { useToggle } from '../../hooks/useToggle';
import { OptionalProps } from '../../types';
import Typography from '../Typography';
import { ContentProps, ToggleButtonPropsStrict } from './ToggleButton.types';
import * as Styled from './ToggleButton.style';
import Container from '../Container';

export type ToggleButtonProps = OptionalProps<
  ToggleButtonPropsStrict,
  'selected' | 'disabled' | 'value' | 'testID' | 'variant' | 'size' | 'styleAs'
>;

const normalizeToggleButtonProps = (
  _props: ToggleButtonProps
): ToggleButtonPropsStrict => ({
  size: _props.size ?? 'small',
  selected: _props.selected ?? false,
  disabled: _props.disabled ?? false,
  value: _props.value ?? '',
  testID: _props.testID ?? '',
  variant: _props.variant ?? 'single',
  styleAs: _props.styleAs ?? 'default',
  ..._props,
});

const ToggleIcon = ({
  testID,
  children,
  hasLeftContent,
  hasRightContent,
}: ContentProps) => (
  <Container
    display="block"
    testID={testID}
    mr={hasLeftContent ? 'sm' : undefined}
    ml={hasRightContent ? 'sm' : undefined}
  >
    {children}
  </Container>
);

const baseTestId = 'toggle-button';

const ToggleButton = (_props: ToggleButtonProps) => {
  const {
    selected,
    disabled,
    value,
    variant,
    size,
    children,
    leftIcon,
    rightIcon,
    fullWidth,
    onClick,
    testID,
    styleAs,
    ...rest
  } = normalizeToggleButtonProps(_props);

  const [isSelected, setIsSelected] = useState(selected);
  const isMulti = variant === 'multi';
  const contentColor = disabled ? 'disabled' : 'primary';

  useToggle(selected, () => setIsSelected(selected));

  const handleOnClick = () => {
    if (disabled) return;

    onClick && onClick(value);
    setIsSelected(!isSelected);
  };

  return (
    <Styled.Wrapper
      semanticTag="button"
      alignItems="center"
      justifyContent="center"
      size={size}
      px="sm"
      py={size === 'small' ? 'xs' : 'sm'}
      fullWidth={fullWidth}
      onClick={handleOnClick}
      selected={isMulti ? isSelected : selected}
      disabled={disabled}
      styleAs={styleAs}
      testID={
        selected ? `${baseTestId}-selected${testID}` : `${baseTestId}${testID}`
      }
      {...rest}
    >
      {leftIcon && (
        <ToggleIcon
          hasLeftContent={leftIcon && !!children}
          testID={`${baseTestId}-left-icon`}
        >
          {leftIcon}
        </ToggleIcon>
      )}
      {typeof children === 'string' ? (
        <Typography
          testID={`${baseTestId}-text`}
          variant="p2ActionRegular"
          color={contentColor}
        >
          {children}
        </Typography>
      ) : (
        children
      )}
      {rightIcon && (
        <ToggleIcon
          hasRightContent={rightIcon && !!children}
          testID={`${baseTestId}-right-icon`}
        >
          {rightIcon}
        </ToggleIcon>
      )}
    </Styled.Wrapper>
  );
};

export default ToggleButton;
