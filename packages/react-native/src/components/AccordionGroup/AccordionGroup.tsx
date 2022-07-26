import React, { Children, cloneElement, ReactElement, useState } from 'react';
import { View } from 'react-native';
import { AccordionProps } from '../Accordion';
import useTheme from '../../hooks/useTheme';
import {
  getSpacingValues,
  AccordionGroupSpacing,
} from './AccordionGroup.types';

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
  spacing = AccordionGroupSpacing.default,
  exclusiveSelection = true,
  children,
}: AccordionGroupProps) => {
  const [
    exclusiveExpansionAccordionIndex,
    setExclusiveExpansionAccordionIndex,
  ] = useState(-1);
  const theme = useTheme();

  const onExclusivePress = (index: number) => {
    exclusiveExpansionAccordionIndex !== index
      ? setExclusiveExpansionAccordionIndex(index)
      : setExclusiveExpansionAccordionIndex(-1);
  };

  const calculateSpacing = (isLastChild: boolean) => {
    const spacingValues =
      getSpacingValues(theme)[spacing as AccordionGroupSpacing];
    return !isLastChild && { ...spacingValues };
  };

  return (
    <View testID="accordion-group-container">
      {Children.map(children, (child, index) => {
        const isLastChild = children.length - 1 === index;
        return cloneElement(child, {
          styleAccordionContainer: { ...calculateSpacing(isLastChild) },
          expanded:
            exclusiveSelection && exclusiveExpansionAccordionIndex === index,
          onPress: exclusiveSelection
            ? () => onExclusivePress(index)
            : undefined,
        });
      })}
    </View>
  );
};

export default AccordionGroup;
