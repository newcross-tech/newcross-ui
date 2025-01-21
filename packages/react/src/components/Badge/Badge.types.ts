import { ReactNode } from 'react';
import { Scheme, SemanticSpacing, TestProp } from '../../types';

export type BadgeSizes = 'small' | 'medium' | 'large';

export type BadgeType = 'default' | 'notification' | 'icon';

export type BadgePositions =
  | 'topRight'
  | 'topLeft'
  | 'bottomRight'
  | 'bottomLeft';

export type BadgeContentProps = Pick<BadgePropsStrict, 'size' | 'position'> & {
  isSingleChar: boolean;
  renderContent: boolean;
};

export const badgeSize: Record<
  BadgeSizes,
  { height: string; width?: string; minWidth?: string }
> = {
  small: {
    height: '12px',
    width: '12px',
  },
  medium: {
    height: '20px',
    minWidth: '20px',
  },
  large: {
    height: '32px',
    minWidth: '32px',
  },
};

export const favoriteIconSize: Record<BadgeSizes, string> = {
  small: '6px',
  medium: '8px',
  large: '16px',
};

export const badgeContentPadding: Partial<Record<BadgeSizes, SemanticSpacing>> =
  {
    medium: 'xs',
    large: 'sm',
  };

export type BadgePropsStrict = {
  /**
   * Used to define size of the badge
   */
  size: BadgeSizes;
  /**
   * Used to define the background the badge is displayed on
   */
  scheme: Scheme;
  /**
   * Used to define the type of the badge
   */
  type: BadgeType;
  /**
   * Used to define the content of the badge
   */
  badgeContent: number | string;
  /**
   * Used to define the max number to cap the value of the badge content
   */
  maxNumber: number;
  /**
   * Used to define the position of the badge
   * Positions are predefined
   */
  position: BadgePositions;
  /**
   * Used to add a cutout around the badge
   * works for all positions and sizes, for a round badge
   */
  hasCutout: boolean;
  /**
   * Defines if the badge is disabled
   */
  disabled: boolean;
  /**
   * Support any kind of content
   */
  children?: ReactNode;
  /**
   * Called when a single tap gesture is detected.
   */
  onClick?: VoidFunction;
} & TestProp;
