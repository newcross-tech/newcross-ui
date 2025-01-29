import { PhoneInput } from 'react-international-phone';
import {
  faCircleXmark,
  faCircleExclamation,
  faCircleCheck,
} from '@fortawesome/pro-light-svg-icons';
import * as Styled from './PhoneNumberInput.styles';
import 'react-international-phone/style.css';
import HelperText from '../TextInput/HelperText';
import Container from '../Container';
import Label from '../Label';
import Typography from '../Typography';
import { OptionalProps } from '../../types';
import Icon from '../Icon';
import { useState } from 'react';
import { PhoneNumberInputPropsStrict } from './PhoneNumberInput.types';

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

  const getTextColor = (disabled: boolean, hasError: boolean) => {
    if (disabled) return 'disabled';
    if (hasError) return 'dangerError';

    return 'defaultDark';
  };

  const phoneInputId = `phone-input-component-${testID}`;
  const preventEventPropagation = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
  };
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
        <Container gap="xs">
          <Label
            htmlFor={phoneInputId}
            variant="h3"
            color={getTextColor(disabled, isError)}
            testID={`${phoneInputId}-label`}
          >
            {label}
          </Label>
          {required && !disabled && (
            <Typography
              testID={`${phoneInputId}-required-indicator`}
              variant="h3"
              color="dangerError"
            >
              *
            </Typography>
          )}
        </Container>
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
          <Styled.IconWrapper
            testID={`${phoneInputId}-clear-icon`}
            justifyContent="center"
            /**
             * Prevents the input from losing focus when clicking on the clear icon
             * Preventing on the onClick does not work as expected, hence using onMouseDown
             */
            onMouseDown={(event) => preventEventPropagation(event)}
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
          </Styled.IconWrapper>
        )}
      </Styled.PhoneInputWrapper>
      {helperText && (
        <HelperText
          helperText={helperText}
          errorText={isError ? helperText : ''}
          testID={phoneInputId}
        />
      )}
    </Styled.Content>
  );
};

export default PhoneNumberInput;
