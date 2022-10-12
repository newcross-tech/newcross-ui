import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Accordion from '../Accordion/Accordion';
import AccordionGroup from './AccordionGroup';
import { AccordionGroupSpacing } from './AccordionGroup.types';
import { byTestId } from 'testing-library-selector';

describe('Accordion Group Component', () => {
  const ui = {
    groupContainer: () => byTestId('accordion-group-container'),
    accordionPressable: (testID: string) =>
      byTestId(`accordion-pressable-container-${testID}`),
    accordionHeader: (testID: string) =>
      byTestId(`accordion-header-container-${testID}`),
    accordionContentExpanded: (testID: string) =>
      byTestId(`accordion-body-container-expanded-${testID}`),
    accordionContentCollapsed: (testID: string) =>
      byTestId(`accordion-body-container-${testID}`),
  };

  it('renders successfully', () => {
    // Arrange
    const props = { exclusiveSelection: false };

    // Act
    render(
      <AccordionGroup {...props}>
        <Accordion label="Section 1"></Accordion>
        <Accordion label="Section 2"></Accordion>
      </AccordionGroup>
    );

    // Assert
    expect(ui.groupContainer().get()).toBeVisible();
  });
  it('renders the children successfully', () => {
    // Arrange
    const testID1 = '1';
    const testID2 = '2';
    const props = {
      spacing: AccordionGroupSpacing.default,
    };

    // Act
    render(
      <AccordionGroup {...props}>
        <Accordion testID={testID1} label="Section 1"></Accordion>
        <Accordion testID={testID2} label="Section 2"></Accordion>
      </AccordionGroup>
    );

    // Assert
    expect(ui.accordionPressable(testID1).get()).toBeVisible();
    expect(ui.accordionPressable(testID2).get()).toBeVisible();
  });
  it('triggers onExclusivePress successfully and closes the unpressed children', () => {
    // Arrange
    const onExclusivePress = jest.fn();
    const props = { exclusiveSelection: true };
    const testID1 = '1';
    const testID2 = '2';

    // Act
    render(
      <AccordionGroup {...props}>
        <Accordion
          testID={testID1}
          label="Section 1"
          onClick={onExclusivePress}
        ></Accordion>
        <Accordion
          testID={testID2}
          label="Section 2"
          onClick={onExclusivePress}
        ></Accordion>
      </AccordionGroup>
    );

    fireEvent.click(ui.accordionHeader(testID1).get());

    // Assert
    expect(ui.accordionContentExpanded(testID1).get()).toBeTruthy();
    expect(ui.accordionContentCollapsed(testID2).get()).toBeTruthy();
  });
  it('triggers onPress successfully and opens the pressed children with exclusiveSelection false', () => {
    // Arrange
    const onExclusivePress = jest.fn();
    const props = { exclusiveSelection: false };
    const testID1 = '1';
    const testID2 = '2';

    // Act
    render(
      <AccordionGroup {...props}>
        <Accordion
          testID={testID1}
          label="Section 1"
          onClick={onExclusivePress}
        ></Accordion>
        <Accordion
          testID={testID2}
          label="Section 2"
          onClick={onExclusivePress}
        ></Accordion>
      </AccordionGroup>
    );

    fireEvent.click(ui.accordionHeader(testID1).get());
    fireEvent.click(ui.accordionHeader(testID2).get());

    // Assert
    expect(ui.accordionContentExpanded(testID1).get()).toBeTruthy();
    expect(ui.accordionContentExpanded(testID2).get()).toBeTruthy();
  });
});
