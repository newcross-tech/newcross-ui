import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { useState } from 'react';
import {
  faCircleXmark,
  faCircleExclamation,
  faCircleCheck,
} from '@fortawesome/pro-light-svg-icons';
import { OptionalProps } from '../../../types';
import Icon from '../../Icon';
import HelperText from '../HelperText';
import Label from '../Label';
import { PhoneNumberInputPropsStrict } from './PhoneNumberInput.types';
import * as Styled from './PhoneNumberInput.styles';
import { preventEventPropagationOnClear } from '../utils';

export type PhoneNumberInputProps = OptionalProps<
  PhoneNumberInputPropsStrict,
  'disabled' | 'isError' | 'isValid' | 'required'
>;

const normalizePhoneNumberInputProps = (
  props: PhoneNumberInputProps,
  setIsFocused: (value: boolean) => void
): PhoneNumberInputPropsStrict => ({
  ...props,
  disabled: props.disabled ?? false,
  isError: props.isError ?? false,
  isValid: props.isValid ?? false,
  required: props.required ?? false,
  onClick: (event: React.MouseEvent<HTMLInputElement>) => {
    props.onClick?.(event);
    setIsFocused(true);
  },
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => {
    props.onBlur?.(event);
    setIsFocused(false);
  },
  onFocus: (event: React.FocusEvent<HTMLInputElement>) => {
    props.onFocus?.(event);
    setIsFocused(true);
  },
});

const PhoneNumberInput = (_props: PhoneNumberInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const {
    label,
    isError,
    isValid,
    helperText,
    disabled,
    required,
    testID,
    ...phoneInputProps
  } = normalizePhoneNumberInputProps(_props, setIsFocused);

  const phoneInputId = `phone-input-component-${testID}`;

  return (
    <Styled.Content
      isError={isError}
      isFocused={isFocused}
      isValid={isValid}
      disabled={disabled}
      flexDirection="column"
      gap="xs"
    >
      {label && (
        <Label
          htmlFor={phoneInputId}
          required={required}
          disabled={disabled}
          testID={phoneInputId}
          variant={'h3'}
        >
          {label}
        </Label>
      )}
      <Styled.PhoneInputWrapper display="block">
        <PhoneInput disabled={disabled} {...phoneInputProps} />
        {isValid && !disabled && !isFocused && !isError && (
          <Styled.IconWrapper
            testID={`${phoneInputId}-validation-check`}
            justifyContent="center"
          >
            <Icon icon={faCircleCheck} variant="p1" color="successStandalone" />
          </Styled.IconWrapper>
        )}
        {isError && !disabled && !isValid && !isFocused && (
          <Styled.IconWrapper
            testID={`${phoneInputId}-error-check`}
            justifyContent="center"
          >
            <Icon icon={faCircleExclamation} variant="p1" color="dangerError" />
          </Styled.IconWrapper>
        )}
        {isFocused && (
          <Styled.ClearIconWrapper
            testID={`${phoneInputId}-clear-icon`}
            justifyContent="center"
            onMouseDown={(event) => preventEventPropagationOnClear(event)}
            onClick={() =>
              phoneInputProps.onChange?.('', {
                country: {
                  name: '',
                  iso2: '',
                  dialCode: '',
                  format: '',
                  priority: 0,
                  areaCodes: [],
                },
                inputValue: '',
              })
            }
          >
            <Icon icon={faCircleXmark} variant="p1" color="actionPrimaryDark" />
          </Styled.ClearIconWrapper>
        )}
      </Styled.PhoneInputWrapper>
      {helperText && (
        <HelperText
          disabled={disabled}
          helperText={helperText}
          errorText={isError ? helperText : ''}
          testID={phoneInputId}
        />
      )}
    </Styled.Content>
  );
};

export default PhoneNumberInput;
