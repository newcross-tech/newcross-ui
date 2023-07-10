import { CardProps } from './Card';

export type CardVariants = 'primary' | 'secondary';

export type StyledCardProps = Omit<CardProps, 'onClick'> & {
  isClickable: boolean;
};
