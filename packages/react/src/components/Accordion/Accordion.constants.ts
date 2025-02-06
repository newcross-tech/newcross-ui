import { RotateProp } from '@fortawesome/fontawesome-svg-core';

export const DEFAULT_ANIMATION_SPEED = 0.2;
export const ROTATION_DEGREES: Record<'OPEN' | 'CLOSED', RotateProp> = {
  OPEN: 180,
  CLOSED: 0 as RotateProp,
};
