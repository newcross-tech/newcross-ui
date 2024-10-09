import { PhoneInput, PhoneInputProps } from 'react-international-phone';
import * as Styled from './PhoneNumberInput.styles';
import 'react-international-phone/style.css';
import Typography from '../Typography';

export type PhoneNumberInputProps = {
  /**
   * Gives phone number input a label
   */
  label?: string;
  /**
   * Gives phone number input an error state
   */
  error?: string;
} & PhoneInputProps;

const PhoneNumberInput = ({
  label,
  error,
  ...phoneInputProps
}: PhoneNumberInputProps) => {
  console.log(phoneInputProps);
  return (
    <Styled.Content $isError={!!error}>
      {label && (
        <Styled.LabelWithMargin variant="subtitle1">
          {label}
        </Styled.LabelWithMargin>
      )}
      <PhoneInput {...phoneInputProps} />
      {error && (
        <Styled.ErrorMessage variant="paragraph3" color="error">
          {error}
        </Styled.ErrorMessage>
      )}
    </Styled.Content>
  );
};

export default PhoneNumberInput;
