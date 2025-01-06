import Toast, { ToastProps } from './Toast';
import { byTestId } from 'testing-library-selector';
import { render, waitFor } from '@testing-library/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/pro-solid-svg-icons/faCalendarDays';
import userEvent from '@testing-library/user-event';

const ui = {
  toastComp: byTestId(`toast-component`),
  toastIcon: byTestId(`custom-icon`),
  alertCloseIconComp: byTestId(`alert-close-icon`),
};

const renderComponent = (customProps: Partial<ToastProps>) => {
  const props = {
    message: 'this is a toast notification',
    show: true,
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

  it('renders toast with a close icon successfully', async () => {
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

    userEvent.click(ui.alertCloseIconComp.get());

    await waitFor(() => expect(onClose).toHaveBeenCalled());
    await waitFor(() => expect(ui.toastComp.query()).not.toBeInTheDocument());
  });

  it('renders toast and autohides it ', async () => {
    // Act
    renderComponent({
      autoHide: true,
      duration: 1000,
    });

    // Assert

    expect(ui.toastComp.get()).toBeInTheDocument();

    await waitFor(() => expect(ui.toastComp.query()).not.toBeInTheDocument(), {
      timeout: 2000,
    });
  });
});
