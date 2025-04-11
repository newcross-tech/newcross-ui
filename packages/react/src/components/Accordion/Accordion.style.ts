import styled from 'styled-components';
import { Theme } from '../../types';
import { AccordionAnimatedStyleArgs, AccordionContentProps, AccordionPropsStrict } from './Accordion.types';
import Container from '../Container';
import Icon from '../Icon';

export const getAnimatedStyles = ({
  openAccordion,
  contentMaxHeight,
  $animationSpeed,
}: AccordionAnimatedStyleArgs) => ({
  opacity: openAccordion ? 1 : 0,
  maxHeight: openAccordion && contentMaxHeight ? `${contentMaxHeight}px` : '0px',
  config: { duration: $animationSpeed * 1000 },
  width: '100%',
});

export const Wrapper = styled(Container)(({ theme }) => ({
  borderRadius: theme.BorderBaseRadiusMd,
  backgroundColor: theme.ElementsSurfaceDefault,
}));

export const BodyContainer = styled(Container)(() => ({
  overflow: 'hidden',
}));

export const HeaderContainer = styled(Container)(({ theme, isContentShown }: Theme & AccordionContentProps) => ({
  ...(isContentShown && {
    borderBottom: `${theme.BorderBaseWidthSm} solid ${theme.ElementsBorderDefault}`,
  }),
}));

export const HeaderContent = styled(Container)(({ theme }) => ({
  cursor: 'pointer',
  color: theme.ElementsTextDefaultDark,
}));

export const AnimatedIcon = styled(Icon)<Pick<AccordionPropsStrict, '$animationSpeed'>>(({ $animationSpeed }) => ({
  '> svg': {
    transition: `all ${$animationSpeed}s ease-in-out`,
  },
}));
