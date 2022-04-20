import { Dimensions } from 'react-native';

const dimensions = Dimensions.get('window');

export const normalizeSnapPoint = (snapPoint: string | number) => {
  if (typeof snapPoint === 'string') {
    const snapPointNumber = Number(snapPoint.split('%')[0]);

    return ((100 - snapPointNumber) * dimensions.height) / 100;
  }
  return snapPoint;
};
