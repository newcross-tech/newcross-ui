import { faDog } from '@fortawesome/pro-solid-svg-icons/faDog';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { byTestId, byText } from 'testing-library-selector';
import { axe } from '../../../testUtils';
import Pill, { PillProps } from './Pill';

describe('Pill Component', () => {
  const baseTestId = 'pill';
  const ui = {
    pillClickable: byTestId(`${baseTestId}-clickable`),
    pillIcon: byTestId(`${baseTestId}-icon`),
    pillComp: byTestId(`${baseTestId}-component`),
    pillCompSelected: byTestId(`${baseTestId}-component-selected`),
    pillByReg: (reg: RegExp) => byText(reg),
  };
  const options = {
    key: 'Space',
    code: 'Space',
    charCode: 32,
  };

  it('should not have any a11y errors', async () => {
    // Prepare
    const props: PillProps = {
      disabled: false,
      removable: false,
      label: 'Label',
    };

    // Act
    render(<Pill {...props} />);

    const results = await axe(document.body);
    expect(results).toHaveNoViolations();
  });

  it('renders successfully', () => {
    // Arrange
    const props: PillProps = {
      disabled: false,
      removable: false,
      label: 'Label',
    };
    // Act
    render(<Pill {...props} />);
    // Assert
    expect(ui.pillComp.get()).toBeInTheDocument();
    expect(ui.pillByReg(/Label/i).get()).toBeInTheDocument();
  });

  it('renders successfully when selected', () => {
    // Arrange
    const props: PillProps = {
      disabled: false,
      removable: false,
      label: 'Label',
    };
    // Act
    render(<Pill {...props} />);
    fireEvent.click(ui.pillComp.get());
    // Assert
    expect(ui.pillCompSelected.get()).toBeInTheDocument();
  });

  it('selects pill when Spacebar', () => {
    // Arrange
    const props: PillProps = {
      label: 'Label',
    };
    // Act
    render(<Pill {...props} />);
    fireEvent.keyPress(ui.pillComp.get(), options);
    // Assert
    expect(ui.pillCompSelected.get()).toBeInTheDocument();
  });

  it('removes pill when pressing remove icon using Spacebar', () => {
    // Arrange
    const props: PillProps = {
      label: 'Label',
      removable: true,
    };
    // Act
    render(<Pill {...props} />);
    fireEvent.keyPress(ui.pillClickable.get(), options);
    // Assert
    expect(ui.pillComp.query()).not.toBeInTheDocument();
  });

  it('renders successfully when icon prop is given', () => {
    // Arrange
    const props: PillProps = {
      label: 'Label',
      icon: <FontAwesomeIcon icon={faDog} />,
    };
    // Act
    render(<Pill {...props} />);
    // Assert
    expect(ui.pillIcon.get()).toBeInTheDocument();
  });

  it('triggers onClick successfully', () => {
    const onIconClick = jest.fn();
    // Arrange
    const props: PillProps = {
      label: 'Label',
      removable: true,
      onClick: onIconClick,
    };
    // Act
    render(<Pill {...props} />);
    fireEvent.click(ui.pillClickable.get());
    // Assert
    expect(onIconClick).toHaveBeenCalled();
  });

  it('does not triggers onClick when disabled prop is provided', () => {
    const onIconClick = jest.fn();

    // Arrange
    const props: PillProps = {
      label: 'Label',
      removable: true,
      disabled: true,
      onClick: onIconClick,
    };

    // Act
    render(<Pill {...props} />);
    fireEvent.click(ui.pillClickable.get());

    // Assert
    expect(onIconClick).not.toHaveBeenCalled();
  });
});
