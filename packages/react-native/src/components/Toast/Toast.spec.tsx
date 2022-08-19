import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Toast, { ToastProps } from './Toast';
import { ToastStatus } from './Toast.types';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCalendarDays } from '@fortawesome/pro-solid-svg-icons/faCalendarDays';

describe('Toast component', () => {
  it('renders successfully', () => {
    // Arrange
    const props: ToastProps = {
      message: 'this is a toast notification',
      show: true,
      status: ToastStatus.info,
      onClose: jest.fn(),
    };

    // Act
    const { getByText } = render(<Toast {...props} />);

    // Assert
    expect(getByText(/this is a toast notification/i)).toBeTruthy();
  });

  it('renders toast with custom status icon successfully', () => {
    // Arrange
    const props: ToastProps = {
      message: 'this is toast notification has a custom status icon',
      show: true,
      status: ToastStatus.info,
      onClose: jest.fn(),
      customStatusIcon: <FontAwesomeIcon icon={faCalendarDays} />,
    };

    // Act
    const { getByText } = render(<Toast {...props} />);

    // Assert
    expect(
      getByText(/this is toast notification has a custom status icon/i)
    ).toBeTruthy();
  });

  it('renders toast with a close icon successfully', () => {
    // Arrange
    const onClose = jest.fn();
    const props: ToastProps = {
      message: 'this is toast notification has a close icon',
      show: true,
      status: ToastStatus.info,
      onClose: onClose,
      autoHide: false,
    };

    // Act
    const { getByText, getByTestId } = render(<Toast {...props} />);
    fireEvent.press(getByTestId('toast-close-icon'));

    // Assert
    expect(
      getByText(/this is toast notification has a close icon/i)
    ).toBeTruthy();
    expect(onClose).toHaveBeenCalled();
  });
});
