import { TypographyVariant } from '../Typography';

export enum PillSizes {
    small = 'small',
    medium = 'medium',
}

export const getTypographySizes = (): Record<PillSizes, TypographyVariant> => ({
    [PillSizes.small]: TypographyVariant.paragraph3,
    [PillSizes.medium]: TypographyVariant.paragraph1,
});