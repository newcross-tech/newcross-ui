import { Scheme, TestProp } from '../../types';

export type BadgeSizes = 'small' | 'medium' | 'large';

export type BadgeType = 'number' | 'notification' | 'icon';

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
    height: '8px',
    minWidth: '8px',
  },
  large: {
    height: '12px',
    minWidth: '12px',
  },
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
  badgeContent: number;
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
} & TestProp;
