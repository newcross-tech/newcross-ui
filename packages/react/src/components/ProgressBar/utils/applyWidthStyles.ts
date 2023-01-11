import {
  bottomLabelPositions,
  topLabelPositions,
} from '../ProgressBar.constants';
import { ApplyCenteredStyleArgs } from '../ProgressBar.types';

/**
 * function to decide whether to apply specific width styles
 * @param
 * @returns
 */
export const applyWidthStyles = ({
  labelPosition,
  progressLabelPosition,
  forceWidthStyles,
}: ApplyCenteredStyleArgs) => {
  //when forced override apply styles
  if (forceWidthStyles) return true;

  const isSamePosition = labelPosition === progressLabelPosition;

  const isBothTop =
    topLabelPositions.includes(labelPosition) &&
    topLabelPositions.includes(progressLabelPosition);

  const isBothBottom =
    bottomLabelPositions.includes(labelPosition) &&
    bottomLabelPositions.includes(progressLabelPosition);

  //when center alignment apply styles
  if (isSamePosition && labelPosition.endsWith('Center')) return true;

  //when both positions top/bottom don't apply
  return !(isBothTop || isBothBottom);
};
