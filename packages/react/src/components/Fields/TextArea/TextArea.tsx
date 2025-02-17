import { OptionalProps } from '../../../types';
import HelperText from '../HelperText';
import * as Styled from './TextArea.style';
import { TextAreaPropsStrict } from './TextArea.types';

const baseTestId = 'textarea';

export type TextAreaProps = OptionalProps<
  TextAreaPropsStrict,
  'isValid' | 'disabled' | 'maxLength' | 'length'
>;

const normalizeTextAreaProps = (
  _props: TextAreaProps
): TextAreaPropsStrict => ({
  ..._props,
  isValid: _props.isValid ?? false,
  disabled: _props.disabled ?? false,
  maxLength: _props.maxLength ?? 0,
  length: _props.length ?? 0,
});

const TextArea = (_props: TextAreaProps) => {
  const {
    isValid,
    disabled,
    maxLength,
    length,
    errorText,
    placeholder,
    onChangeHandler,
    helperText,
    value,
    testID,
  } = normalizeTextAreaProps(_props);

  const hasError = !!errorText || length > maxLength;

  return (
    <Styled.Wrapper
      flexDirection="column"
      gap="xs"
      testID={`${baseTestId}-container-component-${testID}`}
      fullWidth
    >
      <Styled.TextArea
        isValid={isValid}
        disabled={disabled}
        placeholder={placeholder}
        hasError={hasError}
        data-testid={`${baseTestId}-component-${testID}`}
        onChange={(event) => onChangeHandler(event)}
        value={value}
        maxLength={maxLength}
        length={length}
      />
      <HelperText
        disabled={disabled}
        errorText={errorText}
        helperText={helperText}
        maxLength={maxLength}
        length={length}
        displayLength={!!maxLength && maxLength > 0}
        testID={testID}
      />
    </Styled.Wrapper>
  );
};

export default TextArea;
