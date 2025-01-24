import { OptionalProps } from '../../types';
import Typography, { TypographyColors } from '../Typography';
import * as Styled from './Badge.style';
import { BadgePropsStrict } from './Badge.types';
import LegacyBadge, { LegacyBadgeProps } from './LegacyBadge';
import Container from '../Container';
import { cloneElement, isValidElement } from 'react';
import { isLegacyBadgeProps } from './utils';
import useTheme from '../../hooks/useTheme';

export type BadgeProps = NewBadgeProps | LegacyBadgeProps;

type NewBadgeProps = OptionalProps<
  BadgePropsStrict,
  'size' | 'maxNumber' | 'type' | 'scheme' | 'disabled' | 'badgeContent'
>;

const normalizeBadgeProps = (_props: NewBadgeProps): BadgePropsStrict => ({
  ..._props,
  size: _props.size ?? 'large',
  maxNumber: _props.maxNumber ?? 999,
  type: _props.type ?? 'default',
  scheme: _props.scheme ?? 'light',
  disabled: _props.disabled ?? false,
  get badgeContent() {
    if (typeof _props.badgeContent === 'number') {
      return _props.badgeContent > this.maxNumber
        ? `${this.maxNumber}+`
        : _props.badgeContent;
    }
    return _props.badgeContent ?? 0;
  },
  get onClick() {
    return this.disabled ? undefined : _props.onClick;
  },
});

const getContentColor = ({
  disabled,
  scheme,
  type,
}: Pick<
  BadgePropsStrict,
  'type' | 'disabled' | 'scheme'
>): TypographyColors => {
  if (disabled) return 'disabled';
  if (scheme === 'dark' && type !== 'notification') return 'defaultDark';
  return 'defaultLight';
};

export const NotificationCycle = ({
  disabled,
  scheme,
  type,
}: Pick<BadgePropsStrict, 'type' | 'disabled' | 'scheme'>) => {
  const theme = useTheme();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="5"
      height="4"
      viewBox="0 0 5 4"
      fill="none"
      data-testid="notification-cycle"
    >
      <circle
        cx="2.5"
        cy="2"
        r="2"
        fill={Styled.getFillColor({ theme, disabled, scheme, type })}
      />
    </svg>
  );
};

const BadgeContent = ({
  size,
  badgeContent,
  disabled,
  scheme,
  type,
}: Pick<
  BadgePropsStrict,
  'size' | 'badgeContent' | 'disabled' | 'scheme' | 'type'
>) => {
  const typographyVariant = size === 'medium' ? 'p3Strong' : 'p1Strong';

  if (!(typeof badgeContent === 'string' || typeof badgeContent === 'number')) {
    return (
      <Styled.BadgeIcon
        icon={badgeContent}
        customSize={size}
        scheme={scheme}
        disabled={disabled}
        type={type}
        data-testid="icon-badge"
      />
    );
  }

  if (size === 'small')
    return (
      <NotificationCycle disabled={disabled} type={type} scheme={scheme} />
    );

  return (
    <Container px={size === 'medium' ? 'xs' : 'sm'}>
      <Typography
        variant={typographyVariant}
        color={getContentColor({ disabled, scheme, type })}
      >
        {badgeContent}
      </Typography>
    </Container>
  );
};

const NewBadge = (_props: NewBadgeProps) => {
  const {
    size,
    badgeContent,
    maxNumber,
    type,
    scheme,
    disabled,
    children,
    onClick,
    testID,
  } = normalizeBadgeProps(_props);

  const hasCutout = isValidElement(children);

  return (
    <Styled.BadgeWrapper
      onClick={onClick}
      testID={`badge-container-${testID}`}
      disabled={disabled}
    >
      <Styled.Wrapper
        scheme={scheme}
        size={size}
        type={type}
        alignItems="center"
        justifyContent="center"
        disabled={disabled}
        hasCutout={hasCutout}
      >
        <BadgeContent
          {...{ size, badgeContent, maxNumber, disabled, scheme, type }}
        />
      </Styled.Wrapper>
      {hasCutout && (
        <Styled.Cutout size={size} data-testid={`badge-cutout-${testID}`}>
          {cloneElement(children)}
        </Styled.Cutout>
      )}
    </Styled.BadgeWrapper>
  );
};

const Badge = (props: BadgeProps) => {
  return isLegacyBadgeProps(props) ? (
    <LegacyBadge {...props} />
  ) : (
    <NewBadge {...props} />
  );
};

export default Badge;
