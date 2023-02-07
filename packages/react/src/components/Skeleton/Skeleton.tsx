import { HTMLAttributes, useRef, useState } from 'react';
import { useResize } from '../../hooks/useResize';
import { TestProp } from '../../types/TestProp';
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

const Skeleton = ({ width, ...rest }: SkeletonProps) => {
  const [widthOfContainer, setWidthOfContainer] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useResize({
    ref,
    containerSize: ref?.current?.offsetWidth || 0,
    onResize: () => setWidthOfContainer(ref?.current?.offsetWidth || 0),
  });

  return (
    <Styled.AnimatedContent
      ref={ref}
      data-testid={'skeleton'}
      width={width || widthOfContainer.toString()}
      hasWidthOverride={!!width}
      {...rest}
    />
  );
};

export default Skeleton;
