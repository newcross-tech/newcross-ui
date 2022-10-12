import React, { ReactNode, useEffect, useRef, useState } from 'react';
import * as Styled from './Accordion.style';
import { Icon } from './Accordion.style';
import { TypographyVariant } from '../Typography';
import { faChevronDown } from '@fortawesome/pro-solid-svg-icons/faChevronDown';
import { RotateProp } from '@fortawesome/fontawesome-svg-core';
import { useSpring } from '@react-spring/web';

export type AccordionProps = {
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
  expanded?: boolean;
  /**
   * The content of the component.
   */
  children?: ReactNode;
  /**
   * Text element to describe the accordion.
   */
  label?: string;
  /**
   * Used to locate this view in end-to-end tests.
   */
  testID?: string;
};

const Accordion = ({
  icon,
  testID,
  onClick,
  children,
  expanded = false,
  label = 'Label',
}: AccordionProps) => {
  const [openAccordion, setOpenAccordion] = useState(expanded);
  const [contentMaxHeight, setContentMaxHeight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setOpenAccordion(expanded);
  }, [expanded]);

  const toggleAccordion = () => {
    onClick ? onClick() : setOpenAccordion((prevState) => !prevState);
  };

  useEffect(() => {
    const getContentHeight = () => {
      ref && ref.current && setContentMaxHeight(ref.current.scrollHeight);
    };

    getContentHeight();

    window.addEventListener('resize', () => getContentHeight());

    return () => window.removeEventListener('resize', getContentHeight);
  }, [ref, contentMaxHeight]);

  const springProps = useSpring(
    Styled.getAnimatedStyles({
      openAccordion,
      contentMaxHeight,
    })
  );

  return (
    <div data-testid={`accordion-pressable-container-${testID}`}>
      <Styled.HeaderContainer
        isContentShown={openAccordion}
        data-testid={`accordion-header-container-${testID}`}
        onClick={toggleAccordion}
      >
        <Styled.HeaderContent>
          <Styled.HeaderLabel>
            {icon}
            <Styled.Text
              hasIcon={!!icon}
              variant={TypographyVariant.paragraph1}
              numberOfLines={2}
            >
              {label}
            </Styled.Text>
          </Styled.HeaderLabel>
          <Icon
            icon={faChevronDown}
            rotation={(openAccordion ? 180 : 0) as RotateProp}
          />
        </Styled.HeaderContent>
      </Styled.HeaderContainer>
      <Styled.BodyContainer>
        <Styled.BodyContent
          ref={ref}
          style={springProps}
          data-testid={
            openAccordion
              ? `accordion-body-container-expanded-${testID}`
              : `accordion-body-container-${testID}`
          }
        >
          {children}
        </Styled.BodyContent>
      </Styled.BodyContainer>
    </div>
  );
};

export default Accordion;
