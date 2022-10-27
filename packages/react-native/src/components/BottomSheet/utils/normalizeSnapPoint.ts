import { SnapPointPayload } from '../BottomSheet.types';

export const normalizeSnapPoint = ({
  snapPoint,
  top,
  windowHeight,
}: Omit<SnapPointPayload, 'contentHeight' | 'bottom'>) => {
  if (typeof snapPoint === 'string') {
    const snapPointNumber = Number(snapPoint.split('%')[0]);

    return windowHeight - windowHeight * (snapPointNumber / 100) + top;
  }
  return windowHeight - snapPoint;
};
