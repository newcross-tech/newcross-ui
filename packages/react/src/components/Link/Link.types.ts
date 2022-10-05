import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { TypographyVariant } from '../Typography';

export enum LinkSizes {
  small = 'small',
  medium = 'medium',
}

export const getTypographySizes = (): Record<LinkSizes, TypographyVariant> => ({
  [LinkSizes.small]: TypographyVariant.paragraph2,
  [LinkSizes.medium]: TypographyVariant.paragraph1,
});

export type StyledFontType = FontAwesomeIconProps & {
  $size?: LinkSizes;
};
