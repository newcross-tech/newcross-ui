import { BadgeProps } from './Badge';

export type BadgeSizes = 'small' | 'medium' | 'large';

export type BadgePositions =
  | 'topRight'
  | 'topLeft'
  | 'bottomRight'
  | 'bottomLeft';

type RenderContentType = {
  renderContent: boolean;
};

export type BadgeContainerProps = RenderContentType & {
  onClick?: Pick<BadgeProps, 'onClick'>;
};

export type BadgeContentProps = RenderContentType &
  Pick<BadgeProps, 'size' | 'position'> & {
    isSingleChar: boolean;
  };
