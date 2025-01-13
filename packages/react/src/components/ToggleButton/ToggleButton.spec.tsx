import { faCalendarDays } from '@fortawesome/pro-solid-svg-icons/faCalendarDays';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fireEvent, render } from '@testing-library/react';
import { byTestId, byText } from 'testing-library-selector';
import { axe } from '../../utils/test/axeConfig';
import ToggleButton, { ToggleButtonProps } from './ToggleButton';

const renderComponent = (customProps: Partial<ToggleButtonProps>) => {
  const props = {
    onClick: jest.fn(),
    children: 'Sort',
    ...customProps,
  };

  render(<ToggleButton {...props} />);
};

describe('Toggle Button Component', () => {
  const ui = {
    toggleComp: byTestId('toggle-button'),
    toggleCompSelected: byTestId('toggle-button-selected'),
    toggleIcon: (side: string) => byTestId(`toggle-button-${side}-icon`),
    toggleText: byTestId('toggle-button-text'),
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
    expect(ui.toggleComp.get()).toBeInTheDocument();
    expect(byText(/sort/i).get()).toBeInTheDocument();
  });

  it('triggers onClick successfully when selected is false', () => {
    // Arrange
    const onClick = jest.fn();

    // Act
    renderComponent({ onClick });
    fireEvent.click(ui.toggleComp.get());

    // Assert
    expect(onClick).toHaveBeenCalled();
  });

  it('renders successfully when left icon prop is given', () => {
    // Act
    renderComponent({ leftIcon: <FontAwesomeIcon icon={faCalendarDays} /> });

    // Assert
    expect(ui.toggleIcon('left').get()).toBeInTheDocument();
  });

  it('renders successfully when right icon prop is given', () => {
    // Act
    renderComponent({ rightIcon: <FontAwesomeIcon icon={faCalendarDays} /> });

    // Assert
    expect(ui.toggleIcon('right').get()).toBeInTheDocument();
  });

  it('does not render Typography element if children is not a simple string', () => {
    // Act
    renderComponent({
      children: <div data-testid="nested-div">Nested Content</div>,
    });

    // Assert
    expect(ui.toggleText.query()).toBeNull();
  });

  it('renders both left and right icons when props are provided', () => {
    // Act
    renderComponent({
      leftIcon: <FontAwesomeIcon icon={faCalendarDays} />,
      rightIcon: <FontAwesomeIcon icon={faCalendarDays} />,
    });

    // Assert
    expect(ui.toggleIcon('left').get()).toBeInTheDocument();
    expect(ui.toggleIcon('right').get()).toBeInTheDocument();
  });

  it('renders successfully with selected=true', () => {
    // Act
    renderComponent({ selected: true });

    // Assert
    expect(ui.toggleCompSelected.get()).toBeInTheDocument();
  });

  it('toggles correctly when variant="multi"', () => {
    // Arrange
    const onClick = jest.fn();

    // Act
    renderComponent({ variant: 'multi', onClick });
    const button = ui.toggleComp.get();
    fireEvent.click(button);

    // Assert
    expect(button).toHaveAttribute('data-testid', 'toggle-button');
    expect(onClick).toHaveBeenCalled();
  });

  it('does not call onClick when disabled is true', () => {
    // Arrange
    const onClick = jest.fn();

    // Act
    renderComponent({ disabled: true, onClick });
    const button = ui.toggleComp.get();
    fireEvent.click(button);

    // Assert
    expect(onClick).not.toHaveBeenCalled();
  });

  it('does not toggle state when disabled is true', () => {
    // Arrange
    const onClick = jest.fn();

    // Act
    renderComponent({ disabled: true, selected: false, onClick });
    const button = ui.toggleComp.get();
    fireEvent.click(button);

    // Assert
    expect(onClick).not.toHaveBeenCalled();
    expect(button).not.toHaveClass('toggle-button-selected'); // Assuming you use a `selected` class
  });
});
