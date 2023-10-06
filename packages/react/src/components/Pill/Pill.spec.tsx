import { faDog } from '@fortawesome/pro-solid-svg-icons/faDog';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fireEvent, render } from '@testing-library/react';
import { byTestId, byText } from 'testing-library-selector';
import { axe } from '../../utils/test/axeConfig';
import { executeKeyPress } from '../../utils/test/executeKeyPress';
import Pill, { PillProps } from './Pill';

const renderComponent = (customProps: Partial<PillProps>) => {
  const props = {
    label: 'Label',
    disabled: false,
    removable: false,
    ...customProps,
  };

  render(<Pill {...props} />);
};

const baseTestId = 'pill';

describe('Pill Component', () => {
  const ui = {
    pillClickable: byTestId(`${baseTestId}-clickable`),
    pillIcon: byTestId(`${baseTestId}-icon`),
    pillComp: byTestId(`${baseTestId}-component`),
    pillCompSelected: byTestId(`${baseTestId}-component-selected`),
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
    expect(ui.pillComp.get()).toBeInTheDocument();
    expect(byText(/Label/i).get()).toBeInTheDocument();
  });

  it('selects pill when Spacebar', () => {
    // Act
    renderComponent({});

    executeKeyPress(ui.pillComp.get());
    // Assert
    expect(ui.pillCompSelected.get()).toBeInTheDocument();
  });

  it('removes pill when pressing remove icon using Spacebar', () => {
    // Arrange
    // Act
    renderComponent({ removable: true });
    executeKeyPress(ui.pillClickable.get());
    // Assert
    expect(ui.pillComp.query()).not.toBeInTheDocument();
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
    fireEvent.click(ui.pillClickable.get());

    // Assert
    expect(onClick).toHaveBeenCalled();
  });

  it('does not triggers onClick when disabled prop is provided', () => {
    const onClick = jest.fn();

    // Act
    renderComponent({
      removable: true,
      onClick,
      disabled: true,
    });
    fireEvent.click(ui.pillClickable.get());

    // Assert
    expect(onClick).not.toHaveBeenCalled();
  });

  it('does not triggers onClick when a variant other than default is provided', () => {
    // Act
    renderComponent({
      statusVariant: 'error',
    });

    fireEvent.click(ui.pillComp.get());

    // Assert
    expect(ui.pillCompSelected.query()).not.toBeInTheDocument();
  });
});
