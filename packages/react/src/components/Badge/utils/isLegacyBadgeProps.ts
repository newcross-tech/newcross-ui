import { LegacyBadgeProps } from '../LegacyBadge';
import { BadgeProps } from '../Badge';

/**
 * Type guard to determine if the provided props are LegacyBadgeProps.
 * @param props - The props to check.
 * @returns True if the props are LegacyBadgeProps; otherwise, false.
 */
export const isLegacyBadgeProps = (
  props: BadgeProps
): props is LegacyBadgeProps => {
  const legacySpecificProps: Array<keyof LegacyBadgeProps> = [
    'position',
    'hasCutout',
    'backgroundColor',
  ];

  return legacySpecificProps.some((prop) => prop in props);
};
