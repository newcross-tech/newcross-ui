import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Accordion from '../Accordion/Accordion';
import AccordionGroup from './AccordionGroup';
import { AccordionGroupSpacing } from './AccordionGroup.types';

describe('Accordion Group Component', () => {
  it('renders successfully', () => {
    // Arrange
    const onExclusivePress = jest.fn;
    const props = { exclusiveSelection: false };

    // Act
    const { getByTestId } = render(
      <AccordionGroup {...props}>
        <Accordion label="Section 1" onPress={onExclusivePress}></Accordion>
        <Accordion label="Section 2" onPress={onExclusivePress}></Accordion>
      </AccordionGroup>
    );

    // Assert

    expect(getByTestId('accordion-group-container')).toBeTruthy();
  });
  it('renders the children successfully', () => {
    // Arrange
    const onExclusivePress = jest.fn;
    const props = {
      spacing: AccordionGroupSpacing.default,
    };

    // Act
    const { getByTestId } = render(
      <AccordionGroup {...props}>
        <Accordion
          testID="1"
          label="Section 1"
          onPress={onExclusivePress}
        ></Accordion>
        <Accordion
          testID="2"
          label="Section 2"
          onPress={onExclusivePress}
        ></Accordion>
      </AccordionGroup>
    );

    // Assert
    expect(getByTestId('accordion-container-1')).toBeTruthy();
    expect(getByTestId('accordion-container-2')).toBeTruthy();
  });
  it('triggers onExclusivePress successfully', () => {
    // Arrange
    const onExclusivePress = jest.fn;
    const props = { exclusiveSelection: true };

    // Act
    const { getByText } = render(
      <AccordionGroup {...props}>
        <Accordion
          testID="1"
          label="Section 1"
          onPress={onExclusivePress}
        ></Accordion>
        <Accordion
          testID="2"
          label="Section 2"
          onPress={onExclusivePress}
        ></Accordion>
      </AccordionGroup>
    );

    fireEvent.press(getByText('Section 1'));
    // Assert
    expect(onExclusivePress).toHaveBeenCalled;
  });
  it('triggers onExclusivePress successfully and closes the unpressed children', () => {
    // Arrange
    const onExclusivePress = jest.fn;
    const props = { exclusiveSelection: true };

    // Act
    const { getByText, getByTestId } = render(
      <AccordionGroup {...props}>
        <Accordion
          testID="1"
          label="Section 1"
          onPress={onExclusivePress}
        ></Accordion>
        <Accordion
          testID="2"
          label="Section 2"
          onPress={onExclusivePress}
        ></Accordion>
      </AccordionGroup>
    );

    fireEvent.press(getByText('Section 1'));
    // Assert
    expect(getByTestId('accordion-body-expanded-container-1')).toBeTruthy();
    expect(getByTestId('accordion-body-container-2')).toBeTruthy();
  });
  it('triggers onPress successfully and opens the pressed children with exclusiveSelection false', () => {
    // Arrange
    const props = { exclusiveSelection: false };

    // Act
    const { getByText, getByTestId } = render(
      <AccordionGroup {...props}>
        <Accordion testID="1" label="Section 1"></Accordion>
        <Accordion testID="2" label="Section 2"></Accordion>
      </AccordionGroup>
    );

    fireEvent.press(getByText('Section 1'));
    fireEvent.press(getByText('Section 2'));
    // Assert
    expect(getByTestId('accordion-body-expanded-container-1')).toBeTruthy();
    expect(getByTestId('accordion-body-expanded-container-2')).toBeTruthy();
  });
});
