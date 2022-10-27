import {
  DEFAULT_MAX_SNAP_POINT,
  INDICATOR_HEIGHT,
} from '../BottomSheet.constants';
import { SnapPointPayload } from '../BottomSheet.types';

export const calculateSnapPoint = ({
  bottom,
  top,
  windowHeight,
  contentHeight,
}: Omit<SnapPointPayload, 'snapPoint'>) => {
  const maxSnapPoint =
    windowHeight - windowHeight * DEFAULT_MAX_SNAP_POINT + top;

  const snapPoint = windowHeight - bottom - contentHeight - INDICATOR_HEIGHT;

  if (snapPoint <= 0) {
    return maxSnapPoint;
  }
  return snapPoint;
};
