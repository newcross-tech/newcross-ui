import Typography from '../Typography';
import Container from '../Container';
import { OptionalProps } from '../../types';
import * as Styled from './Link.style';
import Icon from '../Icon';
import { type LinkPropsStrict } from './Link.types';

export type LinkProps = OptionalProps<
  LinkPropsStrict,
  'variant' | 'disabled' | 'mode' | 'color'
>;

const normalizeLinkProps = (props: LinkProps): LinkPropsStrict => ({
  ...props,
  variant: props.variant ?? 'p1',
  disabled: props.disabled ?? false,
  mode: props.mode ?? 'light',
  get color() {
    return this.disabled ? 'disabled' : props.color ?? 'primary';
  },
  get onClick() {
    return this.disabled ? undefined : props.onClick;
  },
});

export default function Link(_props: LinkProps) {
  const {
    children,
    onClick,
    role,
    testID,
    'data-testid': testId,
    ...props
  } = normalizeLinkProps(_props);

  return (
    <Styled.Link
      data-testid={testID ?? testId}
      onClick={onClick}
      role={role}
      {...props}
    >
      <Container display="inline-flex" alignItems="center" gap="sm">
        {props.leftIcon && (
          <Icon
            testID="link-left-icon"
            icon={props.leftIcon}
            color={props.color}
            variant={props.variant}
          />
        )}
        <Typography textDecoration="underline" {...props}>
          {children}
        </Typography>
        {props.rightIcon && (
          <Icon
            testID="link-right-icon"
            icon={props.rightIcon}
            color={props.color}
            variant={props.variant}
          />
        )}
      </Container>
    </Styled.Link>
  );
}
