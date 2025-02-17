import { faDog } from '@fortawesome/pro-solid-svg-icons/faDog';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { render } from '@testing-library/react';
import { byTestId, byText } from 'testing-library-selector';
import { axe } from '../../utils/test/axeConfig';
import { executeKeyPress } from '../../utils/test/executeKeyPress';
import Pill, { PillProps } from './Pill';
import userEvent from '@testing-library/user-event';

const renderComponent = (overrides?: Partial<PillProps>) => {
  const props = {
    label: 'Label',
    disabled: false,
    removable: false,
    ...overrides,
  };

  render(<Pill {...props} />);
};

const baseTestId = 'pill';

describe('Pill Component', () => {
  const ui = {
    pillClickable: byTestId(`${baseTestId}-clickable`),
    pillIcon: byTestId(`${baseTestId}-icon`),
    pill: byTestId(`${baseTestId}-component`),
    pillSelected: byTestId(`${baseTestId}-component-selected`),
    pillDisabled: byTestId(`${baseTestId}-component-disabled`),
  };

  it('should not have any a11y errors', async () => {
    // Act
    renderComponent({});

    const results = await axe(document.body);
    expect(results).toHaveNoViolations();
  });

  it('renders successfully', () => {
    // Act
    renderComponent({});

    // Assert
    expect(ui.pill.get()).toBeInTheDocument();
    expect(byText(/Label/i).get()).toBeInTheDocument();
  });

  it('selects pill when Spacebar', () => {
    // Act
    renderComponent({ onClick: jest.fn() });

    executeKeyPress(ui.pill.get());
    // Assert
    expect(ui.pillSelected.get()).toBeInTheDocument();
  });

  it('removes pill when pressing remove icon using Spacebar', () => {
    // Arrange
    renderComponent({ removable: true });
    // Act
    executeKeyPress(ui.pillClickable.get());
    // Assert
    expect(ui.pill.query()).not.toBeInTheDocument();
  });

  it('renders successfully when icon prop is given', () => {
    // Act
    renderComponent({ icon: <FontAwesomeIcon icon={faDog} /> });
    // Assert
    expect(ui.pillIcon.get()).toBeInTheDocument();
  });

  it('triggers onClick successfully', () => {
    const onClick = jest.fn();

    // Act
    renderComponent({ removable: true, onClick });
    userEvent.click(ui.pillClickable.get());

    // Assert
    expect(onClick).toHaveBeenCalled();
  });

  it('does not trigger onClick when disabled prop is provided', () => {
    const onClick = jest.fn();

    // Act
    renderComponent({
      removable: true,
      onClick,
      disabled: true,
    });
    userEvent.click(ui.pillClickable.get());

    // Assert
    expect(onClick).not.toHaveBeenCalled();
  });

  it('does not trigger onClick when a variant other than default is provided', () => {
    // Act
    renderComponent({
      statusVariant: 'error',
    });

    userEvent.click(ui.pill.get());

    // Assert
    expect(ui.pillSelected.query()).not.toBeInTheDocument();
  });

  it('renders with disabled state and prevents interactions', () => {
    // Act
    renderComponent({ disabled: true });

    // Assert
    const pill = ui.pillDisabled.get();
    expect(pill).toBeInTheDocument();

    // Attempt to interact with the disabled pill
    userEvent.click(pill);
    executeKeyPress(pill);

    // Assert: no interaction should occur
    expect(ui.pillSelected.query()).not.toBeInTheDocument();
  });
});
