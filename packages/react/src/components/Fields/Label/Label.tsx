import { OptionalProps } from '../../../types';
import { getTextColor } from '../Fields.style';
import Typography from '../../Typography';
import * as Styled from './Label.style';
import { LabelPropsStrict } from './Label.types';
import Container from '../../Container';

export type LabelProps = OptionalProps<
  LabelPropsStrict,
  'required' | 'disabled' | 'hasError' | 'variant' | 'color' | 'mode'
>;

const normalizeLabelProps = (_props: LabelProps): LabelPropsStrict => ({
  ..._props,
  required: _props.required ?? false,
  disabled: _props.disabled ?? false,
  hasError: _props.hasError ?? false,
  variant: _props.variant ?? 'h3',
  mode: _props.mode ?? 'light',
});

export const Label = (_props: LabelProps) => {
  const props = normalizeLabelProps(_props);

  const {
    children,
    required,
    disabled,
    variant,
    hasError,
    mode,
    color,
    testID: _legacyTestId,
    'data-testid': _testId,
    htmlFor,
    ...rest
  } = props;

  const testIds = labelTestIds(props);

  return (
    <Container gap="xs" data-testid={testIds.root}>
      <Styled.Label
        htmlFor={htmlFor}
        disabled={disabled}
        data-testid={testIds.label}
        {...rest}
      >
        <Typography
          variant={variant}
          color={color ?? getTextColor.primaryText(props)}
          mode={mode}
        >
          {children}
        </Typography>
      </Styled.Label>
      {required && !disabled && (
        <Typography
          data-testid={testIds.required}
          variant={variant}
          color="dangerError"
        >
          *
        </Typography>
      )}
    </Container>
  );
};

/**
 * Normalizes the differences between the legacy `testID` prop and the new `data-testid` prop and provides backwards compatibility.
 * In normal conditions you should not need such function
 */
function labelTestIds({
  'data-testid': testId,
  testID: legacyTestId,
}: Pick<LabelPropsStrict, 'testID' | 'data-testid'>) {
  if (testId) {
    const baseTestId = [testId, 'label'].filter(Boolean).join('-');
    return {
      root: testId,
      label: baseTestId,
      required: `${baseTestId}-required`,
    };
  }

  return {
    root: undefined,
    label: legacyTestId,
    required: `${legacyTestId}-required-indicator`,
  };
}

export default Label;
