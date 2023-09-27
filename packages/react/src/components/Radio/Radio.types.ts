import { RadioProps } from '.';

export type RadioVariant = 'primary' | 'secondary';
export type SelectedProps = Pick<
  RadioProps,
  'variant' | 'disabled' | 'selected'
>;
