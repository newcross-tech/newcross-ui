import { OptionalProps } from '../../types';
import Typography, { TypographyColors } from '../Typography';
import * as Styled from './Badge.style';
import { faHeart } from '@fortawesome/pro-duotone-svg-icons/faHeart';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { badgeContentPadding, BadgePropsStrict } from './Badge.types';
import LegacyBadge, { LegacyBadgeProps } from './LegacyBadge';
import Container from '../Container';
import { useTheme } from 'styled-components';
import { cloneElement, isValidElement } from 'react';
import { isLegacyBadgeProps } from './utils/isLegacyBadgeProps';

export type BadgeProps = NewBadgeProps | LegacyBadgeProps;

type NewBadgeProps = OptionalProps<
  BadgePropsStrict,
  'size' | 'maxNumber' | 'type' | 'scheme' | 'disabled'
>;

const normalizeBadgeProps = (_props: NewBadgeProps): BadgePropsStrict => ({
  size: _props.size ?? 'large',
  maxNumber: _props.maxNumber ?? 999,
  type: _props.type ?? 'default',
  scheme: _props.scheme ?? 'light',
  disabled: _props.disabled ?? false,
  ..._props,
});

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

const FavoriteBadge = ({
  size,
  scheme,
  type,
  disabled,
  hasCutout,
  testID,
}: Pick<
  BadgePropsStrict,
  'type' | 'disabled' | 'scheme' | 'size' | 'testID'
> & {
  hasCutout: boolean;
}) => (
  <Styled.Wrapper
    scheme={scheme}
    size={size}
    alignItems="center"
    justifyContent="center"
    type={type}
    disabled={disabled}
    hasCutout={hasCutout}
    testID={`badge-container-favorite-${testID}`}
  >
    <Styled.FavoriteIcon
      icon={faHeart as IconDefinition}
      size={size}
      scheme={scheme}
      disabled={disabled}
      type={type}
    />
  </Styled.Wrapper>
);

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

  const typographyVariant = size === 'medium' ? 'p3Strong' : 'p1Strong';

  const getContent = () => {
    if (typeof badgeContent === 'number') {
      return badgeContent > maxNumber ? `${maxNumber}+` : badgeContent;
    } else {
      return badgeContent;
    }
  };

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

  if (type === 'icon') {
    return (
      <FavoriteBadge
        size={size}
        scheme={scheme}
        type={type}
        disabled={disabled}
        hasCutout={hasCutout}
        testID={testID}
      />
    );
  }

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
        {size === 'small' ? (
          <NotificationCycle disabled={disabled} type={type} scheme={scheme} />
        ) : (
          <Container px={badgeContentPadding[size]}>
            <Typography
              variant={typographyVariant}
              color={getContentColor({ disabled, scheme, type })}
            >
              {getContent()}
            </Typography>
          </Container>
        )}
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
