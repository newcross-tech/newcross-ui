import { ReactNode } from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { Scheme, TestProp } from '../../types';

export type BadgeSizes = 'small' | 'medium' | 'large';

export type BadgeType = 'default' | 'notification';

export type BadgeStyleProps = Pick<
  BadgePropsStrict,
  'type' | 'scheme' | 'disabled'
>;

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
