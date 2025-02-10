import { useRef, useState } from 'react';
import { animated, useSpring } from '@react-spring/web';
import { faChevronDown } from '@fortawesome/pro-light-svg-icons/faChevronDown';
import { useResize } from '../../hooks/useResize';
import { OptionalProps } from '../../types';
import {
  DEFAULT_ANIMATION_SPEED,
  ROTATION_DEGREES,
} from './Accordion.constants';
import Container from '../Container';
import Typography from '../Typography';
import { AccordionPropsStrict } from './Accordion.types';
import { useUpstreamState } from '../../hooks/useUpstreamState';
import * as Styled from './Accordion.style';

export type AccordionProps = OptionalProps<
  AccordionPropsStrict,
  'expanded' | '$animationSpeed' | 'label'
>;

const normalizeAccordionProps = (
  props: AccordionProps
): AccordionPropsStrict => ({
  ...props,
  expanded: props.expanded ?? false,
  $animationSpeed: props.$animationSpeed ?? DEFAULT_ANIMATION_SPEED,
  label: props.label ?? 'Label',
});

const AnimatedContainer = animated.div;

const Accordion = (_props: AccordionProps) => {
  const { children, onClick, icon, expanded, label, testID, $animationSpeed } =
    normalizeAccordionProps(_props);

  const [openAccordion, setOpenAccordion] = useUpstreamState(expanded);
  const [contentMaxHeight, setContentMaxHeight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const toggleAccordion = () => {
    onClick ? onClick() : setOpenAccordion((prevState) => !prevState);
  };

  useResize({
    ref,
    containerSize: ref?.current?.scrollHeight ?? 0,
    onResize: () => setContentMaxHeight(ref?.current?.scrollHeight ?? 0),
  });

  const springProps = useSpring(
    Styled.getAnimatedStyles({
      openAccordion,
      contentMaxHeight,
      $animationSpeed,
    })
  );

  return (
    <Styled.Wrapper
      testID={`accordion-pressable-container-${testID}`}
      flexDirection="column"
    >
      <Styled.HeaderContainer
        isContentShown={openAccordion}
        testID={`accordion-header-container-${testID}`}
        onClick={toggleAccordion}
      >
        <Styled.HeaderContent
          fullWidth
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
            <Styled.AnimatedIcon
              variant="h2"
              icon={faChevronDown}
              rotation={
                openAccordion ? ROTATION_DEGREES.OPEN : ROTATION_DEGREES.CLOSED
              }
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
