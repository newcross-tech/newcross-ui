import { AccordionProps } from './Accordion';

export type AccordionContentProps = {
  isContentShown: boolean;
};

export type AnimationSpeedType = Required<
  Pick<AccordionProps, '$animationSpeed'>
>;

export type AccordionTextProps = { hasIcon: boolean };

export type AccordionAnimatedStyleArgs = {
  openAccordion: boolean;
  contentMaxHeight?: number;
} & AnimationSpeedType;
