import { TooltipProps } from './Tooltip';

export type TooltipVariant = 'info' | 'question';

export type TooltipPositions = 'top' | 'right' | 'bottom' | 'left';

export type ContainerProps = Pick<TooltipProps, 'position'>;

export type PositionValuesArgs = {
  marginOffset: string;
};
