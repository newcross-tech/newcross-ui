import { Dimensions } from 'react-native';

const dimensions = Dimensions.get('window');

/**
 * Enter either a number or a string as a percentage value
 * to detremine snapPoint
 * @param snapPoint
 * @returns pixels or percentage of snapPoint for screen
 */

export const normalizeSnapPoint = (snapPoint: string | number) => {
  if (typeof snapPoint === 'string') {
    const snapPointNumber = Number(snapPoint.split('%')[0]);

    return ((100 - snapPointNumber) * dimensions.height) / 100;
  }
  return snapPoint;
};
