import { faCalendarDays } from '@fortawesome/pro-solid-svg-icons/faCalendarDays';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fireEvent, render } from '@testing-library/react';
import { byTestId, byText } from 'testing-library-selector';
import { axe } from '../../utils/test/axeConfig';
import ToggleButton, { ToggleButtonProps } from './ToggleButton';

describe('Toggle Button Component', () => {
  const baseTestId = 'toggle-button';
  const ui = {
    toggleComp: byTestId(`${baseTestId}`),
    toggleIcon: (side: string) => byTestId(`${baseTestId}-${side}-icon`),
    toggleByReg: (reg: RegExp) => byText(reg),
  };

  const defaultProps: ToggleButtonProps = {
    onClick: jest.fn(),
    children: 'Sort',
    selected: false,
  };

  it('should not have any a11y errors', async () => {
    // Act
    render(<ToggleButton {...defaultProps} />);

    const results = await axe(document.body);
    expect(results).toHaveNoViolations();
  });

  it('renders sucessfully', () => {
    // Act
    render(<ToggleButton {...defaultProps} />);

    // Assert
    expect(ui.toggleComp.get()).toBeInTheDocument();
    expect(ui.toggleByReg(/sort/i).get()).toBeInTheDocument();
  });

  it('triggers onClick successfully when selected is false', () => {
    // Arrange
    const onClick = jest.fn();

    // Act
    render(<ToggleButton {...defaultProps} onClick={onClick} />);
    fireEvent.click(ui.toggleComp.get());

    // Assert
    expect(onClick).toHaveBeenCalled();
  });

  it(`renders successfully when left icon prop is given`, () => {
    // Arrange
    const props: ToggleButtonProps = defaultProps && {
      leftIcon: <FontAwesomeIcon icon={faCalendarDays} />,
    };

    // Act
    render(<ToggleButton {...props} />);

    // Assert
    expect(ui.toggleIcon('left').get()).toBeInTheDocument();
  });

  it(`renders successfully when right icon prop is given`, () => {
    // Arrange
    const props: ToggleButtonProps = defaultProps && {
      rightIcon: <FontAwesomeIcon icon={faCalendarDays} />,
    };

    // Act
    render(<ToggleButton {...props} />);

    // Assert
    expect(ui.toggleIcon('right').get()).toBeInTheDocument();
  });
});
