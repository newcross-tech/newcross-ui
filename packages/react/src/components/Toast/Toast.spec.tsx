import React from 'react';
import Toast, { ToastProps } from './Toast';
import { byTestId } from 'testing-library-selector';
import { AlertVariant } from '../../types/AlertVariant';
import { render, fireEvent } from '@testing-library/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/pro-solid-svg-icons/faCalendarDays';

const ui = {
  toastComp: byTestId(`toast-component`),
  toastIcon: byTestId(`custom-icon`),
  alertCloseIconComp: byTestId(`alert-close-icon`),
};

const renderComponent = (customProps: Partial<ToastProps>) => {
  const props = {
    message: 'this is a toast notification',
    show: true,
    variant: AlertVariant.success,
    onClose: jest.fn(),
    ...customProps,
  };

  render(<Toast {...props} />);
};

describe('Toast component', () => {
  it('renders successfully', () => {
    // Act
    renderComponent({});

    // Assert
    expect(ui.toastComp.get()).toBeInTheDocument();
  });

  it('renders toast with custom status icon successfully', () => {
    // Act
    renderComponent({
      customStatusIcon: (
        <FontAwesomeIcon data-testid={'custom-icon'} icon={faCalendarDays} />
      ),
    });

    // Assert
    expect(ui.toastIcon.get()).toBeInTheDocument();
  });

  it('renders toast with a close icon successfully', () => {
    // Arrange
    const onClose = jest.fn();

    // Act
    renderComponent({
      hasButton: true,
      autoHide: false,
      onClose,
    });

    // Assert
    expect(ui.alertCloseIconComp.get()).toBeInTheDocument();

    fireEvent.click(ui.alertCloseIconComp.get());

    expect(onClose).toHaveBeenCalled();
  });
});
