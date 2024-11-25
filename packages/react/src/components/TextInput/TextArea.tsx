import Container from '../Container';
import { HelperText } from './HelperText';
import * as Styled from './TextInput.style';
import { TextAreaProps } from './TextInput.types';

const baseTestId = 'textarea';

export const TextArea = ({
  maxLength,
  placeholder,
  disabled,
  length,
  value,
  fullWidth,
  onChangeHandler,
  testID,
  helperText,
  errorText,
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
      hasError={!!errorText}
      data-testid={`${baseTestId}-component-${testID}`}
      onChange={(event) => onChangeHandler(event)}
      value={value}
    />
    <Container
      fullWidth
      gap="SpacingBase24"
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      <Container fullWidth>
        {(helperText ?? errorText) && (
          <HelperText
            errorText={errorText}
            helperText={helperText}
            testID={baseTestId}
          />
        )}
      </Container>
      {!!maxLength && maxLength > 0 && (
        <Styled.LengthInfo
          variant={'paragraph2'}
          data-testid={`${baseTestId}-max-length-${testID}`}
        >
          {`${length}/${maxLength}`}
        </Styled.LengthInfo>
      )}
    </Container>
  </Styled.TextAreaContainer>
);
