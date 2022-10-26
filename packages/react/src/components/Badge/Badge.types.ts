import { BadgeProps } from './Badge';

export enum BadgeSizes {
  small = 'small',
  medium = 'medium',
  large = 'large',
}

export enum BadgePositions {
  TopRight = 'top-right',
  TopLeft = 'top-left',
  BottomRight = 'bottom-right',
  BottomLeft = 'bottom-left',
}

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
