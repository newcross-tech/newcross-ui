import { SkeletonProps } from './Skeleton';

export type AnimatedContentProps = Omit<SkeletonProps, 'width'> & {
  hasWidthOverride: boolean;
  width: string;
};
