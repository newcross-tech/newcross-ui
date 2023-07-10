import * as Styled from './TextInput.style';
import { TextAreaProps } from './TextInput.types';

const baseTestId = 'textarea';

export const TextArea = ({
  maxLength,
  placeholder,
  disabled,
  length,
  value,
  hasError,
  fullWidth,
  onChangeHandler,
  testID,
}: TextAreaProps) => (
  <Styled.TextAreaContainer
    data-testid={`${baseTestId}-container-component-${testID}`}
    fullWidth={fullWidth}
  >
    <Styled.TextArea
      maxLength={maxLength}
      fullWidth={fullWidth}
      disabled={disabled}
      placeholder={placeholder}
      hasError={hasError}
      data-testid={`${baseTestId}-component-${testID}`}
      onChange={(event) => onChangeHandler(event)}
      value={value}
    />

    {!!maxLength && maxLength > 0 && (
      <Styled.LengthInfo
        variant={'paragraph3'}
        data-testid={`${baseTestId}-max-length-${testID}`}
      >
        {`${length}/${maxLength} characters`}
      </Styled.LengthInfo>
    )}
  </Styled.TextAreaContainer>
);
