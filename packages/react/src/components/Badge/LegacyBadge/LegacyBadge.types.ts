import { LegacyBadgeProps } from './LegacyBadge';

export type BadgeSizes = 'small' | 'medium' | 'large';

export type BadgePositions =
  | 'topRight'
  | 'topLeft'
  | 'bottomRight'
  | 'bottomLeft';

type RenderContentType = {
  renderContent: boolean;
};

export type BadgeContentProps = RenderContentType &
  Pick<LegacyBadgeProps, 'size' | 'position' | 'backgroundColor'> & {
    isSingleChar: boolean;
  };

export type BadgeBackgroundColor =
  | 'primary'
  | 'secondary'
  | 'error'
  | 'warning'
  | 'success'
  | 'info';
