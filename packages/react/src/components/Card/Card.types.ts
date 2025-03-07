import { ReactNode } from 'react';
import { SemanticSurfaceColors, TestProp } from '../../types';

export type CardPropsStrict = {
  /**
   * Supports any kind of content
   */
  children?: ReactNode;
  /**
   * Called when a single tap gesture is detected.
   */
  onClick?: VoidFunction;
  /**
   * Whether the click behavior is disabled.
   */
  disabled: boolean;
  /**
   * Whether the card has round border
   */
  hasBorder: boolean;
  /**
   * Whether the card has round corners
   */
  hasRoundedCorners: boolean;
  /**
   * Sets the card border color
   */
  variant: 'primary' | 'secondary' | 'tertiary';
  /**
   * Whether the card is full width
   */
  fullWidth: boolean;
  /**
   * Whether the card has padding
   */
  hasPadding: boolean;
  /**
   * Whether the card has an icon on the right hand side
   */
  hasRightIcon: boolean;
  /**
   * Whether the cards have a shadow.
   */
  hasShadow: boolean;
  /**
   * To show custom sectoin on the left side of card
   */
  thumbnailContent?: ReactNode;
  /**
   * Background color of the card
   */
  backgroundColor: SemanticSurfaceColors;
} & TestProp;
