import { Theme } from '../../types';

export type LinkSizes = 'small' | 'medium';

export type LinkTextProp = {
  leftIcon?: boolean;
} & Theme;

export type LinkCoreVariant = 'email' | 'internal' | 'external' | 'phone';
export type LinkSectionVariant = 'section';
export type LinkVariant = LinkCoreVariant | LinkSectionVariant;
