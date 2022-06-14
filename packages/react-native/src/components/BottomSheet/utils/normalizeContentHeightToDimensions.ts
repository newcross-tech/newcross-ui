import { Dimensions } from 'react-native';
import {
  DEFAULT_MAX_HEIGHT,
  DEFAULT_MIN_HEIGHT,
} from '../BottomSheet.constants';

const dimensions = Dimensions.get('window');

/**
 * Enter the content height to get a percentage of the screen
 * @param contentHeight
 * @returns % of screen height
 */

export const normalizeContentHeightAsPercentage = (contentHeight: number) => {
  return Math.round((contentHeight / dimensions.height) * 100);
};

export const normalizeContentHeightToDimensions = (contentHeight: number) => {
  if (contentHeight < dimensions.height) {
    if (
      normalizeContentHeightAsPercentage(contentHeight) + DEFAULT_MIN_HEIGHT >
      DEFAULT_MAX_HEIGHT
    ) {
      return DEFAULT_MAX_HEIGHT;
    }
    return (
      normalizeContentHeightAsPercentage(contentHeight) + DEFAULT_MIN_HEIGHT
    );
  } else {
    return DEFAULT_MAX_HEIGHT;
  }
};
