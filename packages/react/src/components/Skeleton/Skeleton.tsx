import { HTMLAttributes } from 'react';
import { TestProp } from '../../types';
import * as Styled from './Skeleton.style';

export type SkeletonProps = {
  /**
   * Set width
   */
  width?: string;
  /**
   * Set height
   */
  height?: string;
  /**
   * Whether the card has round corners
   */
  hasRoundedCorners?: boolean;
} & HTMLAttributes<HTMLDivElement> &
  TestProp;

const Skeleton = ({ testID = '', ...rest }: SkeletonProps) => {
  return (
    <Styled.AnimatedContent data-testid={`skeleton-${testID}`} {...rest} />
  );
};

export default Skeleton;
