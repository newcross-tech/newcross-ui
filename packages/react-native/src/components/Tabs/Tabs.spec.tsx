import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faKitMedical } from '@fortawesome/pro-light-svg-icons/faKitMedical';
import { faUser } from '@fortawesome/pro-light-svg-icons/faUser';
import Tabs, { TabsProps } from './Tabs';

describe('Tabs Component', () => {
  it('renders successfully', () => {
    // Arrange
    const props: TabsProps = {
      tabs: ['Label A', 'Label B'],
      currentIndex: 0,
      onCurrentIndexChange: jest.fn(),
    };
    // Act
    const { getByText } = render(<Tabs {...props} />);

    // Assert
    expect(getByText(/label a/i)).toBeTruthy();
    expect(getByText(/label b/i)).toBeTruthy();
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
    const { getByTestId } = render(<Tabs {...props} />);

    // Assert
    expect(getByTestId('tab-view-0')).toBeTruthy();
    expect(getByTestId('tab-view-1')).toBeTruthy();
  });

  it('triggers onPress successfully', () => {
    // Arrange
    const onPress = jest.fn();
    const props: TabsProps = {
      tabs: ['Label A', 'Label B', 'Label C', 'Label D'],
      currentIndex: 0,
      onCurrentIndexChange: onPress,
    };

    // Act
    const { getByTestId } = render(<Tabs {...props} />);
    fireEvent.press(getByTestId('tab-3'));

    // Assert
    expect(onPress).toBeCalled();
    expect(onPress).toHaveBeenCalledWith(3);
  });

  it('does not trigger onPress when disabled prop is passed', () => {
    // Arrange
    const onPress = jest.fn();
    const props: TabsProps = {
      tabs: ['Label A', 'Label B'],
      currentIndex: 0,
      onCurrentIndexChange: onPress,
      disabled: true,
    };

    // Act
    const { getByTestId } = render(<Tabs {...props} />);
    fireEvent.press(getByTestId('tab-1'));

    // Assert
    expect(onPress).not.toBeCalled();
  });

  it('calculates width of the tabs container', () => {
    // Arrange
    const widthOfContainer = 566;
    const onPress = jest.fn();
    const props: TabsProps = {
      tabs: ['Label A', 'Label B'],
      currentIndex: 0,
      onCurrentIndexChange: onPress,
    };

    // Act
    const { getByTestId } = render(<Tabs {...props} />);

    fireEvent(getByTestId('tab-0'), 'layout', {
      nativeEvent: { layout: { width: widthOfContainer } },
    });
  });
  it('renders successfully', () => {
    // Arrange
    const tabs = ['Label A', 'Label B'];
    const props: TabsProps = {
      tabs,
      currentIndex: 0,
      onCurrentIndexChange: jest.fn(),
      badgeCountObject: {
        [tabs[0]]: '1',
        [tabs[1]]: '2',
      },
    };
    // Act
    const { getByText, getByTestId } = render(<Tabs {...props} />);

    // Assert
    expect(getByText(/label a/i)).toBeTruthy();
    expect(getByText(/label b/i)).toBeTruthy();
    expect(getByTestId('tab-badge-0')).toBeTruthy();
    expect(getByTestId('tab-badge-1')).toBeTruthy();
  });
});
