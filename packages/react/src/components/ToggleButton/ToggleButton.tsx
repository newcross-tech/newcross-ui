import { useState } from 'react';
import { useToggle } from '../../hooks/useToggle';
import { OptionalProps } from '../../types';
import * as Styled from './ToggleButton.style';
import Typography from '../Typography';
import Icon from '../Icon';
import { ToggleButtonPropsStrict } from './ToggleButton.types';
import _ from 'lodash';

export type ToggleButtonProps = OptionalProps<
  ToggleButtonPropsStrict,
  'selected' | 'disabled' | 'value' | 'testID' | 'variant' | 'size'
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
  ..._props,
});

const baseTestId = 'toggle-button';

const ToggleButton = (_props: ToggleButtonProps) => {
  const {
    selected,
    disabled,
    value,
    variant,
    children,
    leftIcon,
    rightIcon,
    fullWidth,
    onClick,
    testID,
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
      p="sm"
      fullWidth={fullWidth}
      onClick={handleOnClick}
      selected={isMulti ? isSelected : selected}
      disabled={disabled}
      data-testid={
        selected ? `${baseTestId}-selected${testID}` : `${baseTestId}${testID}`
      }
      {...rest}
    >
      {leftIcon && (
        <Icon
          testID={`${baseTestId}-left-icon`}
          variant="p2ActionRegular"
          icon={leftIcon}
          color={contentColor}
          mr="sm"
        />
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
        <Icon
          testID={`${baseTestId}-right-icon`}
          variant="p2ActionRegular"
          icon={rightIcon}
          color={contentColor}
          ml="sm"
        />
      )}
    </Styled.Wrapper>
  );
};

export default ToggleButton;
