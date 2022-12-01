import { TooltipProps } from './Tooltip';

export enum TooltipVariant {
  info = 'info',
  question = 'question',
}

export enum TooltipPositions {
  Top = 'top',
  Right = 'right',
  Bottom = 'bottom',
  Left = 'left',
}

export type ContainerProps = Pick<TooltipProps, 'position'>;

export type PositionValuesArgs = {
  marginOffset: string;
  paddingOffset: string;
  widthOffset: string;
};
