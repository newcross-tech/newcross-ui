import { PhoneInput, PhoneInputProps } from 'react-international-phone';
import * as Styled from './PhoneNumberInput.styles';
import 'react-international-phone/style.css';

export type PhoneNumberInputProps = {
  /**
   * Gives phone number input a label
   */
  label?: string;
  /**
   * Gives phone number input an error state
   */
  isError?: boolean;
  /**
   * Gives phone number input an helper text
   */
  helperText?: string;
} & PhoneInputProps;

const PhoneNumberInput = ({
  label,
  isError,
  helperText,
  ...phoneInputProps
}: PhoneNumberInputProps) => (
  <Styled.Content $isError={!!isError}>
    {label && (
      <Styled.LabelWithMargin variant="subtitle1">
        {label}
      </Styled.LabelWithMargin>
    )}
    <PhoneInput {...phoneInputProps} />
    {helperText && (
      <Styled.ErrorMessage
        variant="paragraph3"
        color={isError ? 'error' : 'secondary'}
      >
        {helperText}
      </Styled.ErrorMessage>
    )}
  </Styled.Content>
);

export default PhoneNumberInput;
