import { TabsProps } from './Tabs';

export type DisabledType = Pick<TabsProps, 'disabled'>;

export type TabsPropsDivider = {
  showDivider: boolean;
};

export type AnimatedTabArgs = {
  translateValue: number;
  index: number;
};
