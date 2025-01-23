import { ReactNode } from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { Scheme, SemanticSpacing, TestProp } from '../../types';

export type BadgeSizes = 'small' | 'medium' | 'large';

export type BadgeType = 'default' | 'notification';

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

export const maskSizeMap: Record<BadgeSizes, string> = {
  small: '8.5px',
  medium: '13px',
  large: '19px',
};

export const cutoutPositionMap: Record<string, Record<BadgeSizes, string>> = {
  avatarHalo: {
    small: '11px',
    medium: '9px',
    large: '9px',
  },
  avatarContent: {
    small: '3.5px',
    medium: '3px',
    large: '5px',
  },
  iconContent: {
    small: '4px',
    medium: '3px',
    large: '5px',
  },
};

export const contentPositionMap: Record<BadgeSizes, string> = {
  small: '-2px',
  medium: '-7px',
  large: '-11px',
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
  badgeContent: number | string | IconDefinition;
  /**
   * Used to define the max number to cap the value of the badge content
   */
  maxNumber: number;
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
