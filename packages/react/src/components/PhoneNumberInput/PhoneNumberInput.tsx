import { PhoneInput } from 'react-international-phone';
import * as Styled from './PhoneNumberInput.styles';
import 'react-international-phone/style.css';

export type PhoneNumberInputProps = {
  /**
   * Gives text input a value
   */
  value: string;
  /**
   * Gives text input a label
   */
  label?: string;
  /**
   * Updates text in input box
   */
  onChange: (phone: string) => void;
  /**
   * Accepts a boolean to determine if the input is disabled.
   */
  disabled?: boolean;
};

const PhoneNumberInput = ({
  value,
  label,
  onChange,
  disabled,
}: PhoneNumberInputProps) => {
  return (
    <Styled.Content>
      <Styled.LabelWithMargin variant="subtitle1">
        {label}
      </Styled.LabelWithMargin>
      <PhoneInput
        value={value}
        defaultCountry="gb"
        disabled={disabled}
        onChange={(phone) => onChange(phone)}
      />
    </Styled.Content>
  );
};

export default PhoneNumberInput;
