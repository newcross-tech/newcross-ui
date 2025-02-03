import { render, screen } from '@testing-library/react';
import { byTestId } from 'testing-library-selector';
import Label, { LabelProps } from './Label';

const testID = '1';

const renderComponent = (customProps?: Partial<LabelProps>) => {
  const props: LabelProps = {
    children: 'My Label',
    htmlFor: 'input-id',
    testID,
    ...customProps,
  };

  render(<Label {...props} />);
};

const baseTestId = 'label';

describe('Label Component', () => {
  const ui = {
    labelComp: byTestId(`${baseTestId}-test-${testID}`),
    requiredIndicator: byTestId(`${baseTestId}-required-indicator-${testID}`),
  };

  it('renders successfully', () => {
    // Act
    renderComponent();

    // Assert
    expect(ui.labelComp.get()).toBeInTheDocument();
  });

  it('renders the correct text', () => {
    // Act
    renderComponent();

    // Assert
    expect(screen.getByText('My Label')).toBeInTheDocument();
  });

  it('renders the required indicator when required is true', () => {
    // Act
    renderComponent({ required: true });

    // Assert
    expect(ui.requiredIndicator.get()).toBeInTheDocument();
  });

  it('does not render the required indicator when disabled', () => {
    // Act
    renderComponent({ required: true, disabled: true });

    // Assert
    expect(ui.requiredIndicator.query()).toBeNull();
  });
});
