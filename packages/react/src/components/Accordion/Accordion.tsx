import { RotateProp } from '@fortawesome/fontawesome-svg-core';
import { faChevronDown } from '@fortawesome/pro-solid-svg-icons/faChevronDown';
import { useSpring } from '@react-spring/web';
import { ReactNode, useRef, useState } from 'react';
import { useFirstRender } from '../../hooks/useFirstRender';
import { useResize } from '../../hooks/useResize';
import useTheme from '../../hooks/useTheme';
import { useToggle } from '../../hooks/useToggle';
import { TestProp } from '../../types';
import { defaultAnimationSpeed } from './Accordion.constants';
import * as Styled from './Accordion.style';

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
   * Used to override default animation speed.
   */
  $animationSpeed?: number;
} & TestProp;

/**
 * @description
 * ### Accessibility
 * #### Pattern: Accordion
 * #### Notes:
 * You can alter the toggle button level to be appropriate for the information architecture of the page by using the `aria-level` prop. The default level is 3.
 */
const Accordion = ({
  icon,
  testID,
  onClick,
  children,
  expanded = false,
  $animationSpeed = defaultAnimationSpeed,
  label = 'Label',
}: AccordionProps) => {
  const [openAccordion, setOpenAccordion] = useState(expanded);
  const [contentMaxHeight, setContentMaxHeight] = useState(0);
  const theme = useTheme();
  const ref = useRef<HTMLDivElement>(null);
  const { isFirstRender } = useFirstRender();

  useToggle(expanded, () => setOpenAccordion(expanded));

  const toggleAccordion = () => {
    onClick ? onClick() : setOpenAccordion((prevState) => !prevState);
  };

  useResize({
    ref,
    containerSize: ref?.current?.scrollHeight || 0,
    onResize: () => setContentMaxHeight(ref?.current?.scrollHeight || 0),
  });

  const initialStyles = isFirstRender
    ? {}
    : Styled.getAnimatedStyles({
        theme,
        openAccordion,
        contentMaxHeight,
        $animationSpeed,
      });

  const springProps = useSpring({
    ...initialStyles,
  });

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
              variant={'paragraph1'}
              numberOfLines={2}
            >
              {label}
            </Styled.Text>
          </Styled.HeaderLabel>
          <Styled.Icon
            icon={faChevronDown}
            rotation={(openAccordion ? 180 : 0) as RotateProp}
            $animationSpeed={$animationSpeed}
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
