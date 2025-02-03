import { OptionalProps } from '../../../types';
import { getTextColor } from '../utils';
import Typography from '../../Typography';
import * as Styled from './Label.style';
import { LabelPropsStrict } from './Label.types';
import Container from '../../Container';

export type LabelProps = OptionalProps<
  LabelPropsStrict,
  'required' | 'disabled' | 'hasError' | 'variant' | 'color'
>;

const normalizeLabelProps = (_props: LabelProps): LabelPropsStrict => ({
  ..._props,
  required: _props.required ?? false,
  disabled: _props.disabled ?? false,
  hasError: _props.hasError ?? false,
  variant: _props.variant ?? 'h3',
  get color() {
    return (
      _props.color ??
      getTextColor.primaryText({
        disabled: this.disabled,
        hasError: this.hasError,
      })
    );
  },
});

const Label = (_props: LabelProps) => {
  const {
    children,
    required,
    disabled,
    hasError,
    variant,
    color,
    testID,
    htmlFor,
    ...rest
  } = normalizeLabelProps(_props);

  return (
    <Container gap="xs">
      <Styled.Label
        htmlFor={htmlFor}
        disabled={disabled}
        data-testid={testID}
        {...rest}
      >
        <Typography variant={variant} color={color}>
          {children}
        </Typography>
      </Styled.Label>
      {required && !disabled && (
        <Typography
          testID={`${testID}-required-indicator`}
          variant={variant}
          color="dangerError"
        >
          *
        </Typography>
      )}
    </Container>
  );
};

export default Label;
