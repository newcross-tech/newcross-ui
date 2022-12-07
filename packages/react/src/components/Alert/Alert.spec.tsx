import { faCircleCheck } from '@fortawesome/pro-regular-svg-icons/faCircleCheck';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fireEvent, render } from '@testing-library/react';
import { byTestId, byText } from 'testing-library-selector';
import { AlertVariant } from '../../types/AlertVariant';
import { axe } from '../../utils/test/axeConfig';
import { executeKeyPress } from '../../utils/test/executeKeyPress';
import Link from '../Link';
import Alert, { AlertProps } from './Alert';

const baseTestId = 'alert';
describe('Alert component', () => {
  const ui = {
    alertComp: byTestId(`${baseTestId}-component`),
    alertCloseIconComp: byTestId(`${baseTestId}-close-icon`),
    alertByReg: (reg: RegExp) => byText(reg),
    alertById: (id: string) => byTestId(id),
  };

  const defaultProps = {
    action: <Link>Click Here</Link>,
    children: 'This is success. This is success. This is success.',
  };

  const renderComponent = (customProps: Partial<AlertProps>) => {
    const props = {
      ...defaultProps,
      ...customProps,
    };

    render(<Alert {...props} />);
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
    renderComponent({ variant: AlertVariant.info, title: 'Custom title' });

    // Assert
    expect(ui.alertComp.get()).toBeInTheDocument();
    expect(ui.alertByReg(/Custom title/i).get()).toBeInTheDocument();
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
    expect(ui.alertById('alert-icon').get()).toBeInTheDocument();
  });
});

describe.each([
  [
    {
      variant: AlertVariant.info,
    },
    'Info',
  ],
  [
    {
      variant: AlertVariant.success,
    },
    'Success',
  ],
  [
    {
      variant: AlertVariant.warning,
    },
    'Warning',
  ],
  [
    {
      variant: AlertVariant.error,
    },
    'Error',
  ],
])('Variant props', (alertProps, result) => {
  const baseTestId = 'alert';

  const ui = {
    alertComp: byTestId(`${baseTestId}-component`),
    text: (text: string) => byText(text),
  };

  it(`renders successfully with ${result}`, () => {
    // Act
    render(<Alert {...alertProps} />);

    // Assert
    expect(ui.alertComp.get()).toBeInTheDocument();
    expect(ui.text(result).get()).toBeInTheDocument();
  });
});
