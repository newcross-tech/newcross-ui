import { Children, cloneElement, ReactElement, useState } from 'react';
import { AccordionProps } from '../Accordion';
import * as Styled from './AccordionGroup.style';
import { AccordionGroupSpacing } from './AccordionGroup.types';

export type AccordionGroupProps = {
  /**
   * Spacing applied between accordions.
   */
  spacing?: AccordionGroupSpacing;
  /**
   * If set, only one of the accordions can be open at one time.
   */
  exclusiveSelection?: boolean;
  /**
   * The content of the component
   */
  children: Array<ReactElement<AccordionProps>>;
};

const AccordionGroup = ({
  spacing = 'default',
  exclusiveSelection = true,
  children,
}: AccordionGroupProps) => {
  const [
    exclusiveExpansionAccordionIndex,
    setExclusiveExpansionAccordionIndex,
  ] = useState(-1);

  const onExclusivePress = (index: number) => {
    exclusiveExpansionAccordionIndex !== index
      ? setExclusiveExpansionAccordionIndex(index)
      : setExclusiveExpansionAccordionIndex(-1);
  };

  return (
    <Styled.Container data-testid="accordion-group-container" spacing={spacing}>
      {Children.map(children, (child, index) => {
        return cloneElement(child, {
          expanded:
            exclusiveSelection && exclusiveExpansionAccordionIndex === index,
          onClick: exclusiveSelection
            ? () => onExclusivePress(index)
            : undefined,
        });
      })}
    </Styled.Container>
  );
};

export default AccordionGroup;
