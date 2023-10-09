import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { animated } from '@react-spring/web';
import styled, { css } from 'styled-components';
import { ExtendedTheme, Theme } from '../../types';
import Typography from '../Typography';

import {
  AccordionAnimatedStyleArgs,
  AccordionContentProps,
  AccordionIconProps,
  AccordionTextProps,
} from './Accordion.types';

export const getAnimatedStyles = ({
  theme,
  openAccordion,
  contentMaxHeight,
  $animationSpeed,
}: AccordionAnimatedStyleArgs) => ({
  opacity: openAccordion ? 1 : 0,
  maxHeight: openAccordion && contentMaxHeight ? `${contentMaxHeight}px` : '0px',
  config: { duration: $animationSpeed * 1000 },
  paddingTop: openAccordion ? theme.AccordionHeaderContentPaddingVertical : '0',
  paddingBottom: openAccordion ? theme.AccordionHeaderContentPaddingVertical : '0',
});

export const BodyContainer = styled.div`
  overflow: hidden;
  ${({ theme }: Theme) => css`
    background-color: ${theme.AccordionHeaderBackgroundColor};
    border-bottom: ${theme.AccordionHeaderBorderBottomWidth} solid ${theme.AccordionHeaderBorderBottomColor};
  `};
`;

export const BodyContent = styled(animated.div)`
  ${({ theme }: Theme) => css`
    padding-right: ${theme.AccordionHeaderContentPaddingHorizontal};
    padding-left: ${theme.AccordionHeaderContentPaddingHorizontal};
  `};
`;

export const HeaderContainer = styled.div`
  ${({ theme, isContentShown }: ExtendedTheme<AccordionContentProps>) => css`
    background-color: ${theme.AccordionHeaderBackgroundColor};

    ${isContentShown &&
    css`
      border-bottom: ${theme.AccordionHeaderBorderBottomWidth} solid ${theme.AccordionHeaderBorderBottomColor};
    `}
  `}
`;

export const HeaderContent = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  ${({ theme }: Theme) => css`
    color: ${theme.AccordionIconColor};
    padding: ${theme.AccordionHeaderContentPaddingVertical} ${theme.AccordionHeaderContentPaddingHorizontal};
  `}
`;

export const HeaderLabel = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 80%;
`;

export const Text = styled(Typography)`
  ${({ theme, hasIcon }: ExtendedTheme<AccordionTextProps>) => css`
    margin-left: ${hasIcon ? theme.AccordionTextMarginLeft : 0};
  `}
`;

export const Icon = styled(FontAwesomeIcon)`
  ${({ theme, $animationSpeed }: ExtendedTheme<AccordionIconProps>) => css`
    transition: ${`all ${$animationSpeed}s ease-in-out`};
    margin-top: ${theme.AccordionIconMarginVertical};
    margin-top: ${theme.AccordionIconMarginVertical};
  `}
`;
