import { OptionalProps } from '../../../types';
import Container from '../../Container';
import Typography from '../../Typography';
import { getTextColor } from '../Fields.style';
import { HelperTextPropsStrict } from './HelperText.types';

export type HelperTextProps = OptionalProps<
  HelperTextPropsStrict,
  'disabled' | 'maxLength' | 'length' | 'displayLength'
>;

const normalizeHelperTextProps = (
  _props: HelperTextProps
): HelperTextPropsStrict => ({
  ..._props,
  disabled: _props.disabled ?? false,
  maxLength: _props.maxLength ?? 0,
  length: _props.length ?? 0,
  displayLength: _props.displayLength ?? false,
});

export const HelperText = (_props: HelperTextProps) => {
  const props = normalizeHelperTextProps(_props);

  const { errorText, helperText, disabled, maxLength, length, displayLength } =
    props;

  const hasText = Boolean(errorText) || Boolean(helperText);

  const testIds = helperTextTestIds(props);

  if (!hasText && !displayLength) {
    return null;
  }

  return (
    <Container
      px="sm"
      justifyContent={hasText ? 'space-between' : 'flex-end'}
      gap="sm"
      data-testid={testIds.root}
    >
      {hasText && (
        <Typography
          variant="p2"
          data-testid={testIds.text}
          color={getTextColor.secondaryText({
            disabled,
            hasError: Boolean(errorText),
          })}
        >
          {errorText || helperText}
        </Typography>
      )}
      {displayLength && maxLength > 0 && (
        <Typography
          variant="p2"
          color={getTextColor.secondaryText({
            disabled,
            hasError: Boolean(errorText),
          })}
          data-testid={testIds.maxLength}
        >
          {`${length}/${maxLength}`}
        </Typography>
      )}
    </Container>
  );
};

function helperTextTestIds({
  'data-testid': testId,
  testID: legacyTestId,
}: Pick<HelperTextPropsStrict, 'testID' | 'data-testid'>) {
  if (testId) {
    const baseTestId = [testId, 'helper-text'].filter(Boolean).join('-');
    return {
      root: testId,
      text: `${baseTestId}-text`,
      maxLength: `${baseTestId}-max-length`,
    };
  }

  return {
    root: undefined,
    text: `${legacyTestId}-message-text`,
    maxLength: `textarea-max-length-${legacyTestId}`,
  };
}

export default HelperText;
