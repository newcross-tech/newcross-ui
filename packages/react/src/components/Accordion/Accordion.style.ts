import styled, { css } from 'styled-components';
import { ExtendedTheme, Theme } from '../../types';

import { AccordionAnimatedStyleArgs, AccordionContentProps, AnimationSpeedType } from './Accordion.types';
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
});

export const Wrapper = styled(Container)`
  ${({ theme }: Theme) => css`
    border-radius: ${theme.BorderBaseRadiusMd};
    background-color: ${theme.ElementsSurfaceDefault};
  `}
`;

export const BodyContainer = styled(Container)`
  overflow: hidden;
`;

export const HeaderContainer = styled.div`
  ${({ theme, isContentShown }: ExtendedTheme<AccordionContentProps>) => css`
    ${isContentShown &&
    css`
      border-bottom: ${theme.BorderBaseWidthSm} solid ${theme.ElementsBorderDefault};
    `}
  `}
`;

export const HeaderContent = styled(Container)`
  cursor: pointer;
  ${({ theme }: Theme) => css`
    color: ${theme.ElementsTextDefaultDark};
  `}
`;

export const AnimatedIcon = styled(Icon)<AnimationSpeedType>`
  ${({ $animationSpeed }) => css`
    > svg {
      transition: ${`all ${$animationSpeed}s ease-in-out`};
    }
  `}
`;
