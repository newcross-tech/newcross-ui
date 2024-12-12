import { ProgressHTMLAttributes } from 'react';
import { TypographyProps, TypographyVariant } from '../Typography';
import { ProgressBarProps } from './ProgressBar';

export type ProgressBarVariant = 'determinate' | 'indeterminate' | 'steps';

/**
 * @deprecated
 */
export type ProgressBarLabelPositions =
  | 'topCenter'
  | 'topRight'
  | 'topLeft'
  | 'bottomCenter'
  | 'bottomRight'
  | 'bottomLeft';

export type LabelPositionProps = Required<
  Pick<ProgressBarProps, 'labelPosition'>
>;

type SameLabelProps = {
  isEachLabelSamePosition: boolean;
};

export type ContainerProps = LabelPositionProps & SameLabelProps;

export type ProgressValueProps = Required<
  Pick<ProgressBarProps, 'progressLabelPosition'>
> &
  SameLabelProps;

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

export type ApplyCenteredStyleArgs = LabelPositionProps &
  Required<
    Pick<ProgressBarProps, 'progressLabelPosition'> & {
      forceWidthStyles: boolean;
    }
  >;

export type DifferentLabelProps = AllLabelProps &
  SameLabelProps &
  LabelPositionProps;
