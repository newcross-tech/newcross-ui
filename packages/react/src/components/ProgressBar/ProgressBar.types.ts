import { ProgressHTMLAttributes } from 'react';
import { TypographyProps, TypographyVariant } from '../Typography';
import { ProgressBarProps } from './ProgressBar';

export type ProgressBarVariant = 'determinate' | 'indeterminate' | 'steps';

/**
 * Deprecated
 */
export type ProgressBarLabelPositions =
  | 'topCenter'
  | 'topRight'
  | 'topLeft'
  | 'bottomCenter'
  | 'bottomRight'
  | 'bottomLeft';

export type WrapperProps = Pick<ProgressBarProps, 'labelPosition'> & {
  isEachLabelSamePosition: boolean;
};

export type ProgressValueProps = Required<
  Pick<ProgressBarProps, 'progressLabelPosition'>
> & {
  isEachLabelSamePosition: boolean;
};

type CommonProps = {
  isIndeterminate: boolean;
};

export type AnimatedStyleArgs = CommonProps & {
  normalisedProgress: number;
};

export type CommonTextProps = {
  applyWidthStyles: boolean;
  variant: TypographyVariant;
  color: TypographyProps['color'];
};

export type ProgressProps = CommonProps &
  ProgressHTMLAttributes<HTMLProgressElement> & {
    variant: ProgressBarVariant;
    disabled: boolean;
  };

export type AllLabelProps = TypographyProps &
  Pick<ProgressBarProps, 'labelPosition'> & {
    applyWidthStyles: boolean;
  };

export type ApplyCenteredStyleArgs = Required<
  Pick<ProgressBarProps, 'labelPosition'> &
    Pick<ProgressBarProps, 'progressLabelPosition'> & {
      forceWidthStyles: boolean;
    }
>;

export type DifferentLabelProps = AllLabelProps & {
  isEachLabelSamePosition: boolean;
};
