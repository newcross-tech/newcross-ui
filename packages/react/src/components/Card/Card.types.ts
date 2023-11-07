import { CardProps } from './Card';

export type CardVariants = 'primary' | 'secondary' | 'tertiary';

export type StyledCardProps = Omit<CardProps, 'onClick'> & {
  isClickable: boolean;
};
