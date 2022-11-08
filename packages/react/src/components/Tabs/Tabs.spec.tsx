import { faKitMedical } from '@fortawesome/pro-light-svg-icons/faKitMedical';
import { faUser } from '@fortawesome/pro-light-svg-icons/faUser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { byTestId, byText } from 'testing-library-selector';
import Tabs, { TabsProps } from './Tabs';

import axe from '../../../testutils';

describe('Tabs Component', () => {
  const baseTestId = 'tab';
  const ui = {
    tabText: byTestId(`${baseTestId}-with-text`),
    tabIcon: (index: number) => byTestId(`${baseTestId}-view-${index}`),
    tabComp: (index: number) => byTestId(`${baseTestId}-${index}`),
    tabByReg: (reg: RegExp) => byText(reg),
  };

  it('should not have any a11y errors', async () => {
    // Arrange
    const props: TabsProps = {
      tabs: ['Label A', 'Label B'],
      currentIndex: 0,
      onCurrentIndexChange: jest.fn(),
    };

    // Act
    render(<Tabs {...props} />);

    const results = await axe(document.body);
    expect(results).toHaveNoViolations();
  });

  it('renders successfully', () => {
    // Arrange
    const props: TabsProps = {
      tabs: ['Label A', 'Label B'],
      currentIndex: 0,
      onCurrentIndexChange: jest.fn(),
    };
    // Act
    render(<Tabs {...props} />);

    // Assert
    expect(ui.tabByReg(/label a/i).get()).toBeTruthy();
    expect(ui.tabByReg(/label b/i).get()).toBeTruthy();
  });

  it('renders successfully with icons', () => {
    // Arrange
    const props: TabsProps = {
      tabs: [
        <FontAwesomeIcon icon={faUser} />,
        <FontAwesomeIcon icon={faKitMedical} />,
      ],
      currentIndex: 0,
      onCurrentIndexChange: jest.fn(),
    };
    // Act
    render(<Tabs {...props} />);

    // Assert
    expect(ui.tabIcon(0).get()).toBeTruthy();
    expect(ui.tabIcon(1).get()).toBeTruthy();
  });

  it('triggers onClick successfully', () => {
    // Arrange
    const onClick = jest.fn();
    const props: TabsProps = {
      tabs: ['Label A', 'Label B', 'Label C', 'Label D'],
      currentIndex: 0,
      onCurrentIndexChange: onClick,
    };

    // Act
    render(<Tabs {...props} />);
    fireEvent.click(ui.tabComp(3).get());

    // Assert
    expect(onClick).toBeCalled();
    expect(onClick).toHaveBeenCalledWith(3);
  });

  it('does not trigger onPress when disabled prop is passed', () => {
    // Arrange
    const onClick = jest.fn();
    const props: TabsProps = {
      tabs: ['Label A', 'Label B'],
      currentIndex: 0,
      onCurrentIndexChange: onClick,
      disabled: true,
    };

    // Act
    render(<Tabs {...props} />);
    fireEvent.click(ui.tabComp(1).get());

    // Assert
    expect(onClick).not.toBeCalled();
  });
});
