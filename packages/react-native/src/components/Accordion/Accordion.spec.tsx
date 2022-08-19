import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Text } from 'react-native';
import Accordion, { AccordionProps } from './Accordion';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircleInfo } from '@fortawesome/pro-solid-svg-icons/faCircleInfo';

describe('Accordion Component', () => {
  it('renders successfully', () => {
    // Arrange
    const props: AccordionProps = {
      testID: '1',
      children: (
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      ),
    };

    // Act
    const { getByTestId } = render(<Accordion {...props}></Accordion>);

    // Assert

    expect(getByTestId('accordion-container-1')).toBeTruthy();
  });
  it('renders successfully with an icon', () => {
    // Arrange
    const props: AccordionProps = {
      testID: '1',
      label: 'Information',
      expanded: true,
      children: (
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      ),
    };

    // Act
    const { getByTestId } = render(
      <Accordion
        {...props}
        icon={<FontAwesomeIcon icon={faCircleInfo} />}
      ></Accordion>
    );

    // Assert

    expect(getByTestId('accordion-container-1')).toBeTruthy();
  });
  it('triggers onPress successfully', () => {
    const onHeaderPress = jest.fn;
    // Arrange
    const props: AccordionProps = {
      testID: '1',
      onPress: onHeaderPress,
      label: 'Label',
      children: (
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      ),
    };

    // Act
    const { getByText } = render(<Accordion {...props}></Accordion>);

    fireEvent.press(getByText('Label'));

    // Assert

    expect(onHeaderPress).toHaveBeenCalled;
  });
  it('renders the body when expanded is true', () => {
    const onHeaderPress = jest.fn;
    // Arrange
    const props: AccordionProps = {
      testID: '1',
      onPress: onHeaderPress,
      label: 'Label',
      expanded: true,
      children: (
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      ),
    };

    // Act
    const { getByText, getByTestId } = render(
      <Accordion {...props}></Accordion>
    );

    fireEvent.press(getByText('Label'));

    // Assert

    expect(getByTestId('accordion-body-expanded-container-1')).toBeTruthy();
  });

  it('calculates height of accordion body container', () => {
    // Arrange
    const props: AccordionProps = {
      testID: '1',
      children: (
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Text>
      ),
    };

    // Act
    const { getByTestId } = render(<Accordion {...props}></Accordion>);

    // Assert

    fireEvent(getByTestId('accordion-body-container-1'), 'layout', {
      nativeEvent: { layout: { height: 246 } },
    });
  });
});
