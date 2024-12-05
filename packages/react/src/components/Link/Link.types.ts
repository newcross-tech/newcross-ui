import { LinkProps } from './Link';

export type LinkType = Omit<LinkProps, 'variant'>;

export type LinkIconProps = Pick<
  LinkProps,
  'leftIcon' | 'rightIcon' | 'variant'
>;
