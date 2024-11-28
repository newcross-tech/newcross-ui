import { LinkProps } from './Link';

export type LinkType = Omit<LinkProps, 'variant'>;

export type IconProps = Pick<LinkProps, 'leftIcon' | 'rightIcon' | 'variant'>;
