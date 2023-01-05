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
    toggleComp: byTestId(`toggle-button`),
    toggleIcon: (side: string) => byTestId(`toggle-button-${side}-icon`),
    toggleByReg: (reg: RegExp) => byText(reg),
  };

  it('should not have any a11y errors', async () => {
    // Act
    renderComponent({});

    const results = await axe(document.body);
    expect(results).toHaveNoViolations();
  });

  it('renders sucessfully', () => {
    // Act
    renderComponent({});

    // Assert
    expect(ui.toggleComp.get()).toBeInTheDocument();
    expect(ui.toggleByReg(/sort/i).get()).toBeInTheDocument();
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

  it(`renders successfully when left icon prop is given`, () => {
    // Arrange

    // Act
    renderComponent({ leftIcon: <FontAwesomeIcon icon={faCalendarDays} /> });

    // Assert
    expect(ui.toggleIcon('left').get()).toBeInTheDocument();
  });

  it(`renders successfully when right icon prop is given`, () => {
    // Act
    renderComponent({ rightIcon: <FontAwesomeIcon icon={faCalendarDays} /> });

    // Assert
    expect(ui.toggleIcon('right').get()).toBeInTheDocument();
  });
});
