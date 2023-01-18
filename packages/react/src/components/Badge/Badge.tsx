import { ReactElement, ReactNode } from 'react';
import { TestProp } from '../../types/TestProp';
import * as Styled from './Badge.style';
import { getTypographyVariant } from './Badge.style';
import { BadgePositions, BadgeSizes } from './Badge.types';
import { calculateDisplayNumber, isSingleChar } from './utils';

export type BadgeProps = {
  /**
   * Used to define size of the badge
   */
  size?: BadgeSizes;
  /**
   * Used to define the content of the badge
   */
  badgeContent?: number | string | ReactElement;
  /**
   * Used to define the max number to cap the value of the badge content
   */
  maxNumber?: number;
  /**
   * Support any kind of content
   */
  children?: ReactNode;
  /**
   * Used to define the position of the badge
   * Positions are predefined
   */
  position?: BadgePositions;
  /**
   * Called when a single tap gesture is detected.
   */
  onClick?: VoidFunction;
} & TestProp;

const Badge = ({
  size = 'large',
  badgeContent,
  maxNumber = 999,
  children,
  position,
  onClick,
  testID,
}: BadgeProps) => {
  const isSmallBadge = size === 'small';
  const isNumber = typeof badgeContent === 'number';
  const renderContent = !!badgeContent && !isSmallBadge;

  const displayNumber = isNumber
    ? calculateDisplayNumber(badgeContent, maxNumber)
    : badgeContent;

  return (
    <Styled.Container
      onClick={onClick}
      data-testid={`badge-container-${testID}`}
    >
      <Styled.Content
        isSingleChar={isSingleChar(displayNumber)}
        renderContent={renderContent}
        size={size}
        position={position}
      >
        <Styled.Text variant={getTypographyVariant()[size]}>
          {renderContent && displayNumber}
        </Styled.Text>
      </Styled.Content>
      {children}
    </Styled.Container>
  );
};

export default Badge;
