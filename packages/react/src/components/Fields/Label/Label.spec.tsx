import { render, screen } from '@testing-library/react';
import { byTestId } from 'testing-library-selector';
import { Label, LabelProps } from './Label';

describe.each([
  {
    renderComponent: (props?: Partial<LabelProps>) =>
      render(
        <Label
          children="My Label"
          htmlFor="input-id"
          testID="my-element"
          {...props}
        />
      ),
    ui: {
      labelComp: byTestId('my-element'),
      requiredIndicator: byTestId(`my-element-required-indicator`),
    },
  },
  {
    renderComponent: (props?: Partial<LabelProps>) =>
      render(
        <Label
          children="My Label"
          htmlFor="input-id"
          data-testid="my-element"
          {...props}
        />
      ),
    ui: {
      labelComp: byTestId('my-element-label'),
      requiredIndicator: byTestId('my-element-label-required'),
    },
  },
])('Label Component', ({ renderComponent, ui }) => {
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
