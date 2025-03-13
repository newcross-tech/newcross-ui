import { OptionalProps } from '../../../types';
import { HelperText } from '../HelperText';
import * as Styled from './TextArea.style';
import { TextAreaPropsStrict } from './TextArea.types';

export type TextAreaProps = Omit<
  OptionalProps<TextAreaPropsStrict, 'isValid' | 'disabled' | 'maxLength'>,
  'hasError' | 'displayLength' | 'length'
>;

const normalizeTextAreaProps = (props: TextAreaProps): TextAreaPropsStrict => {
  return {
    ...props,
    isValid: props.isValid ?? false,
    disabled: props.disabled ?? false,
    maxLength: props.maxLength ?? -1,
    get displayLength() {
      return !!this.maxLength && this.maxLength > 0;
    },
    get length() {
      return typeof props.value === 'string' ? props.value.length : 0;
    },
    get hasError() {
      return (
        !!props.errorText ||
        (this.displayLength && this.length > this.maxLength)
      );
    },
  };
};

/**
 * @internal Used by TextArea component. Extracted only for clarity of the main component.
 */
export const TextArea = (_props: TextAreaProps) => {
  const props = normalizeTextAreaProps(_props);

  const testIds = textAreaTestIds(props);

  return (
    <Styled.Wrapper flexDirection="column" gap="xs" {...testIds.root} fullWidth>
      <Styled.TextArea
        id={props.id}
        isValid={props.isValid}
        disabled={props.disabled}
        placeholder={props.placeholder}
        hasError={props.hasError}
        {...testIds.input}
        onChange={(event) => props.onChange?.(event.target.value, event)}
        value={props.value}
        maxLength={props.maxLength}
        length={props.length}
      />
      <HelperText
        disabled={props.disabled}
        errorText={props.errorText}
        helperText={props.helperText}
        maxLength={props.maxLength}
        length={props.length}
        displayLength={props.displayLength}
        {...testIds.helperText}
      />
    </Styled.Wrapper>
  );
};

/**
 * Normalizes the differences between the legacy `testID` prop and the new `data-testid` prop and provides backwards compatibility.
 * In normal conditions you should not need such function
 */
function textAreaTestIds({
  'data-testid': testId,
  testID: legacyTestId,
}: Pick<TextAreaPropsStrict, 'testID' | 'data-testid'>) {
  if (testId) {
    const baseTestId = [testId, 'textarea'].filter(Boolean).join('-');
    return {
      root: {
        'data-testid': testId,
      },
      input: {
        'data-testid': `${baseTestId}-input`,
      },
      helperText: {
        'data-testid': `${baseTestId}-helper-text`,
      },
    };
  }

  return {
    root: {
      'data-testid': `textarea-container-component-${legacyTestId}`,
    },
    input: {
      'data-testid': `textarea-component-${legacyTestId}`,
    },
    helperText: {
      testID: legacyTestId,
    },
  };
}
