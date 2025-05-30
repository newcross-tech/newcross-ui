import { ReactElement, ReactNode } from 'react';
import { TestProp } from '../../../types';
import * as Styled from './LegacyBadge.style';
import { getTypographyVariant } from './LegacyBadge.style';
import {
  BadgeBackgroundColor,
  BadgePositions,
  BadgeSizes,
} from './LegacyBadge.types';
import { calculateDisplayNumber, isSingleChar } from '../utils';

export type LegacyBadgeProps = {
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
   * Used to add a cutout around the badge
   * works for all positions and sizes, for a round badge
   */
  hasCutout?: boolean;
  /**
   * Called when a single tap gesture is detected.
   */
  onClick?: VoidFunction;
  /**
   * Used to define the background color of the badge
   */
  backgroundColor?: BadgeBackgroundColor;
} & TestProp;

const LegacyBadge = ({
  size = 'large',
  badgeContent,
  maxNumber = 999,
  children,
  position = 'topRight',
  hasCutout = false,
  onClick,
  backgroundColor,
  testID,
}: LegacyBadgeProps) => {
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
        backgroundColor={backgroundColor}
      >
        <Styled.Text variant={getTypographyVariant()[size]}>
          {renderContent && displayNumber}
        </Styled.Text>
      </Styled.Content>
      <Styled.Cutout size={size} position={position} hasCutout={hasCutout}>
        {children}
      </Styled.Cutout>
    </Styled.Container>
  );
};

export default LegacyBadge;
