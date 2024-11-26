import { RotateProp } from '@fortawesome/fontawesome-svg-core';
import { animated, useSpring } from '@react-spring/web';
import { ReactNode, useRef, useState } from 'react';
import { faChevronDown } from '@fortawesome/pro-light-svg-icons/faChevronDown';
import { useFirstRender } from '../../hooks/useFirstRender';
import { useResize } from '../../hooks/useResize';
import { useToggle } from '../../hooks/useToggle';
import { TestProp } from '../../types';
import { DEFAULT_ANIMATION_SPEED } from './Accordion.constants';
import * as Styled from './Accordion.style';
import Container from '../Container';
import Typography from '../Typography';

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
  label?: ReactNode | string;
  /**
   * Used to override default animation speed.
   */
  $animationSpeed?: number;
} & TestProp;

const AnimatedContainer = animated.div;

const Accordion = ({
  icon,
  testID,
  onClick,
  children,
  expanded = false,
  $animationSpeed = DEFAULT_ANIMATION_SPEED,
  label = 'Label',
}: AccordionProps) => {
  const [openAccordion, setOpenAccordion] = useState(expanded);
  const [contentMaxHeight, setContentMaxHeight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const { isFirstRender } = useFirstRender();

  useToggle(expanded, () => setOpenAccordion(expanded));

  const toggleAccordion = () => {
    onClick ? onClick() : setOpenAccordion((prevState) => !prevState);
  };

  useResize({
    ref,
    containerSize: ref?.current?.scrollHeight ?? 0,
    onResize: () => setContentMaxHeight(ref?.current?.scrollHeight ?? 0),
  });

  const initialStyles = isFirstRender
    ? {}
    : Styled.getAnimatedStyles({
        openAccordion,
        contentMaxHeight,
        $animationSpeed,
      });

  const springProps = useSpring({
    ...initialStyles,
  });

  return (
    <Styled.Wrapper
      testID={`accordion-pressable-container-${testID}`}
      flexDirection="column"
    >
      <Styled.HeaderContainer
        isContentShown={openAccordion}
        data-testid={`accordion-header-container-${testID}`}
        onClick={toggleAccordion}
      >
        <Styled.HeaderContent
          gap="sm"
          alignItems="center"
          justifyContent="space-between"
          py="sm"
          px="md"
        >
          <Container fullWidth gap="sm" alignItems="center">
            {icon}
            <Typography variant="h3" numberOfLines={2}>
              {label}
            </Typography>
          </Container>
          <Container>
            <Styled.Icon
              icon={faChevronDown}
              rotation={(openAccordion ? 180 : 0) as RotateProp}
              $animationSpeed={$animationSpeed}
            />
          </Container>
        </Styled.HeaderContent>
      </Styled.HeaderContainer>
      <Styled.BodyContainer>
        <AnimatedContainer
          ref={ref}
          style={springProps}
          data-testid={
            openAccordion
              ? `accordion-body-container-expanded-${testID}`
              : `accordion-body-container-${testID}`
          }
        >
          <Container p="md">{children}</Container>
        </AnimatedContainer>
      </Styled.BodyContainer>
    </Styled.Wrapper>
  );
};

export default Accordion;
