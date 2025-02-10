import { AccordionProps } from './Accordion';
import { ReactNode } from 'react';
import { TestProp } from '../../types';

export type AccordionContentProps = {
  isContentShown: boolean;
};

export type AnimationSpeedType = Required<
  Pick<AccordionProps, '$animationSpeed'>
>;

export type AccordionAnimatedStyleArgs = {
  openAccordion: boolean;
  contentMaxHeight?: number;
} & AnimationSpeedType;

export type AccordionPropsStrict = {
  /**
   * Called when a single tap gesture is detected.
   */
  onClick?: () => void;
  /**
   * Each accordion can opt to include an icon which will be displayed before the section label in the header.
   */
  icon?: ReactNode;
  /**
   * If true, expands the accordion, otherwise collapse it. Setting this prop enables control over the accordion. Used only in stand-alone accordion or multiple selection accordion group.
   */
  expanded: boolean;
  /**
   * The content of the component.
   */
  children?: ReactNode;
  /**
   * Text element to describe the accordion.
   */
  label: ReactNode | string;
  /**
   * Used to override default animation speed.
   */
  $animationSpeed: number;
} & TestProp;
