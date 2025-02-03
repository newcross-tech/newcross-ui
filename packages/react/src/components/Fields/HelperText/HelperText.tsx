import { OptionalProps } from '../../../types';
import Container from '../../Container';
import Typography from '../../Typography';
import { getTextColor } from '../utils';
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

const HelperText = (_props: HelperTextProps) => {
  const {
    errorText,
    helperText,
    disabled,
    maxLength,
    length,
    displayLength,
    testID,
  } = normalizeHelperTextProps(_props);

  const hasText = Boolean(errorText) || Boolean(helperText);

  return (
    <Container
      px="sm"
      justifyContent={hasText ? 'space-between' : 'flex-end'}
      gap="sm"
    >
      {hasText && (
        <Typography
          variant="p2"
          testID={`${testID}-message-text`}
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
          testID={`textarea-max-length-${testID}`}
        >
          {`${length}/${maxLength}`}
        </Typography>
      )}
    </Container>
  );
};

export default HelperText;
