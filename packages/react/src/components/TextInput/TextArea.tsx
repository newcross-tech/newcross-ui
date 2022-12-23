import { TextAreaProps } from './TextInput.types';
import * as Styled from './TextInput.style';
import { TypographyVariant } from '../Typography';

export const TextArea = ({
  maxLength,
  placeholder,
  disabled,
  length,
  value,
  hasError,
  onChangeHandler,
  testID = 'TextArea',
}: TextAreaProps) => (
  <Styled.TextAreaContainer data-testid={`${testID}-container-component`}>
    <Styled.TextArea
      maxLength={maxLength}
      disabled={disabled}
      placeholder={placeholder}
      hasError={hasError}
      data-testid={`${testID}-component`}
      onChange={(event) => onChangeHandler(event)}
    >
      {value}
    </Styled.TextArea>

    {!!maxLength && maxLength > 0 && (
      <Styled.LengthInfo
        variant={TypographyVariant.paragraph3}
        data-testid={`${testID}-max-length`}
      >
        {`${length}/${maxLength} characters`}
      </Styled.LengthInfo>
    )}
  </Styled.TextAreaContainer>
);
