import { OptionalProps } from '../../types';
import * as Styled from './Badge.style';
import { BadgePropsStrict } from './Badge.types';
import { LegacyBadgeProps } from './LegacyBadge';

export type BadgeProps = NewBadgeProps & LegacyBadgeProps;

type NewBadgeProps = OptionalProps<
  BadgePropsStrict,
  'size' | 'position' | 'maxNumber'
>;

const normalizeBadgeProps = (_props: BadgeProps): BadgePropsStrict => ({
  size: _props.size ?? 'large',
  maxNumber: _props.maxNumber ?? 999,
  position: _props.position ?? 'topRight',
  ..._props,
});

const SmallBadge = () => (
  <Styled.Wrapper size="small" alignItems="center" justifyContent="center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="5"
      height="4"
      viewBox="0 0 5 4"
      fill="none"
    >
      <circle cx="2.5" cy="2" r="2" fill="white" />
    </svg>
  </Styled.Wrapper>
);

const Badge = (_props: BadgeProps) => {
  const { size, position, badgeContent, maxNumber, hasCutout, ...props } =
    normalizeBadgeProps(_props);
};

export default Badge;
