import { OptionalProps } from '../../types';
import Typography, { TypographyColors } from '../Typography';
import * as Styled from './Badge.style';
import { faHeart } from '@fortawesome/pro-duotone-svg-icons/faHeart';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { badgeContentPadding, BadgePropsStrict } from './Badge.types';
import { LegacyBadgeProps } from './LegacyBadge';
import Container from '../Container';
import { useTheme } from 'styled-components';

export type BadgeProps = NewBadgeProps & LegacyBadgeProps;

type NewBadgeProps = OptionalProps<
  BadgePropsStrict,
  | 'size'
  | 'position'
  | 'maxNumber'
  | 'type'
  | 'scheme'
  | 'disabled'
  | 'hasCutout'
>;

const normalizeBadgeProps = (_props: BadgeProps): BadgePropsStrict => ({
  size: _props.size ?? 'large',
  maxNumber: _props.maxNumber ?? 999,
  position: _props.position ?? 'topRight',
  type: _props.type ?? 'default',
  scheme: _props.scheme ?? 'light',
  disabled: _props.disabled ?? false,
  hasCutout: _props.hasCutout ?? false,
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
}: Pick<BadgePropsStrict, 'type' | 'disabled' | 'scheme' | 'size'>) => (
  <Styled.Wrapper
    scheme={scheme}
    size={size}
    alignItems="center"
    justifyContent="center"
    type={type}
    disabled={disabled}
  >
    <Styled.FavoriteIcon
      icon={faHeart as IconDefinition}
      size={size}
      scheme={scheme}
      swapOpacity
    />
  </Styled.Wrapper>
);

const Badge: React.FC<BadgeProps> = (_props: BadgeProps) => {
  const { size, badgeContent, maxNumber, type, scheme, disabled } =
    normalizeBadgeProps(_props);

  if (type === 'icon') {
    return (
      <FavoriteBadge
        size={size}
        scheme={scheme}
        type={type}
        disabled={disabled}
      />
    );
  }

  const typographyVariant = size === 'medium' ? 'p3Strong' : 'p1Strong';

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

  return (
    <Styled.Wrapper
      scheme={scheme}
      size={size}
      type={type}
      alignItems="center"
      justifyContent="center"
      disabled={disabled}
    >
      {size === 'small' ? (
        <NotificationCycle disabled={disabled} type={type} scheme={scheme} />
      ) : (
        <Container px={badgeContentPadding[size]}>
          <Typography
            variant={typographyVariant}
            color={getContentColor({ disabled, scheme, type })}
          >
            {badgeContent > maxNumber ? `${maxNumber}+` : badgeContent}
          </Typography>
        </Container>
      )}
    </Styled.Wrapper>
  );
};

export default Badge;
