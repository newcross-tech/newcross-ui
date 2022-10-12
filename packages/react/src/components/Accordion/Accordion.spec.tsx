import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Accordion, { AccordionProps } from './Accordion';
import { faCircleInfo } from '@fortawesome/pro-solid-svg-icons/faCircleInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { byTestId } from 'testing-library-selector';

const renderComponent = (props: AccordionProps) => {
  // Arrange
  const customProps = {
    children: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </>
    ),
    ...props,
  };

  render(<Accordion {...customProps} />);
};

describe('Accordion Component', () => {
  const ui = {
    container: (testID: string) =>
      byTestId(`accordion-pressable-container-${testID}`),
    headerContainer: (testID: string) =>
      byTestId(`accordion-header-container-${testID}`),
    contentExpanded: (testID: string) =>
      byTestId(`accordion-body-container-expanded-${testID}`),
    contentCollapsed: (testID: string) =>
      byTestId(`accordion-body-container-${testID}`),
  };

  it('renders successfully', () => {
    const testID = '1';

    // Act
    renderComponent({ testID });

    // Assert
    expect(ui.container(testID).get()).toBeVisible();
  });

  it('renders successfully with an icon', () => {
    // Arrange
    const testID = '1';
    const props: AccordionProps = {
      testID,
      expanded: true,
      icon: <FontAwesomeIcon icon={faCircleInfo} />,
    };

    // Act
    renderComponent({ ...props });

    // Assert
    expect(ui.container(testID).get()).toBeTruthy();
  });
  it('triggers onClick successfully', () => {
    const onClick = jest.fn();

    const testID = '1';

    // Act
    renderComponent({ testID, onClick });

    fireEvent.click(ui.headerContainer(testID).get());

    // Assert
    expect(onClick).toBeCalled();
  });

  it('does not trigger onClick successfully', () => {
    const onClick = jest.fn();

    const testID = '1';

    // Act
    renderComponent({ testID });

    fireEvent.click(ui.headerContainer(testID).get());

    // Assert
    expect(onClick).not.toBeCalled();
  });

  it('does not show the content when expanded is false', () => {
    const testID = '1';

    // Act
    renderComponent({ testID, expanded: false });

    // Assert
    expect(ui.contentCollapsed(testID).get()).toBeTruthy();
  });

  it('renders the content when expanded is true', () => {
    const testID = '1';

    // Act
    renderComponent({ testID, expanded: true });

    // Assert
    expect(ui.contentExpanded(testID).get()).toBeVisible();
  });
});
