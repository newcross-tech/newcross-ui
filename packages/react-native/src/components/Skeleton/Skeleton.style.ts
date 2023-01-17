import { StyleSheet } from 'react-native';
import useTheme from '../../hooks/useTheme';
import { SkeletonProps } from './Skeleton';

export const skeletonStyles = ({ height, width, circle }: SkeletonProps) => {
  const theme = useTheme();

  return StyleSheet.create({
    container: {
      width,
      height,
      overflow: 'hidden',
      backgroundColor: theme.ColorBaseGrey300,
      borderRadius: circle ? width / 2 : undefined,
    },
    fillContainer: { flex: 1 },
  });
};
