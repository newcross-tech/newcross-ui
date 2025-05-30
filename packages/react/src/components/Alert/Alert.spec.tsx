import { faCircleCheck } from '@fortawesome/pro-regular-svg-icons/faCircleCheck';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fireEvent, render } from '@testing-library/react';
import { byTestId, byText } from 'testing-library-selector';
import { axe } from '../../utils/test/axeConfig';
import { executeKeyPress } from '../../utils/test';
import Link from '../Link';
import Alert, { AlertProps } from './Alert';

const alertActionText = 'Click Here';

const renderComponent = (customProps: Partial<AlertProps>) => {
  const props = {
    action: <Link variant="paragraph1">{alertActionText}</Link>,
    children: 'This is success. This is success. This is success.',
    ...customProps,
  };

  render(<Alert {...props} />);
};

describe('Alert component', () => {
  const ui = {
    alertComp: byTestId(`alert-component`),
    alertCloseIconComp: byTestId(`alert-close-icon`),
    alertAction: byText(alertActionText),
  };

  it('should not have any a11y errors', async () => {
    // Act
    renderComponent({});

    const results = await axe(document.body);
    expect(results).toHaveNoViolations();
  });

  it('closes Alert using Spacebar', () => {
    const onClose = jest.fn();
    // Act
    renderComponent({ hasButton: true, onClose });

    executeKeyPress(ui.alertCloseIconComp.get());
    // Assert
    expect(onClose).toHaveBeenCalled();
  });

  it('renders successfully with custom title', () => {
    // Act
    renderComponent({ variant: 'info', title: 'Custom title' });

    // Assert
    expect(ui.alertComp.get()).toBeInTheDocument();
    expect(byText(/Custom title/i).get()).toBeInTheDocument();
  });

  it('renders successfully with close icon', () => {
    // Act
    renderComponent({ hasButton: true });

    // Assert
    expect(ui.alertCloseIconComp.get()).toBeInTheDocument();
  });

  it('expects onClose to have been called when we click the close icon', () => {
    // Arrange
    const onClose = jest.fn();

    // Act
    renderComponent({
      hasButton: true,
      onClose,
    });

    fireEvent.click(ui.alertCloseIconComp.get());
    // Assert
    expect(onClose).toHaveBeenCalled();
  });

  it('renders successfully with custom icon', () => {
    // Act
    renderComponent({
      icon: (
        <div data-testid={'alert-icon'}>
          <FontAwesomeIcon
            style={{ alignSelf: 'flex-start' }}
            icon={faCircleCheck}
          />
        </div>
      ),
    });

    // Assert
    expect(byTestId('alert-icon').get()).toBeInTheDocument();
  });

  it('renders successfully with action with a string', () => {
    // Arrange & Act
    renderComponent({ action: alertActionText });

    // Assert
    expect(ui.alertAction.get()).toBeInTheDocument();
  });
});
