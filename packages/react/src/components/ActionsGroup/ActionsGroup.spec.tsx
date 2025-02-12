import { render } from '@testing-library/react';
import { byTestId } from 'testing-library-selector';
import { ActionsGroup, ActionsGroupProps } from './ActionsGroup';
import Button from '../Button';
import Typography from '../Typography';

const testID = 'actions-group-test';

const renderComponent = (customProps?: Partial<ActionsGroupProps>) => {
  const props: ActionsGroupProps = {
    primary: <Button testID="primary-button">Primary</Button>,
    secondary: <Button testID="secondary-button">Secondary</Button>,
    tertiary: (
      <Typography testID="tertiary-text" variant="h1">
        Tertiary
      </Typography>
    ),
    testID,
    ...customProps,
  };

  render(<ActionsGroup {...props} />);
};

describe('ActionsGroup Component', () => {
  const ui = {
    container: byTestId(testID),
    primaryButton: byTestId('primary-button'),
    secondaryButton: byTestId('secondary-button'),
    tertiaryText: byTestId('tertiary-text'),
  };

  it('renders successfully', () => {
    // Act
    renderComponent();

    // Assert
    expect(ui.container.get()).toBeInTheDocument();
  });

  it('renders primary and secondary buttons when provided', () => {
    // Act
    renderComponent();

    // Assert
    expect(ui.primaryButton.get()).toBeInTheDocument();
    expect(ui.secondaryButton.get()).toBeInTheDocument();
  });

  it('renders tertiary element when provided', () => {
    // Act
    renderComponent();

    // Assert
    expect(ui.tertiaryText.get()).toBeInTheDocument();
  });

  it('does not render tertiary when not provided', () => {
    // Act
    renderComponent({ tertiary: null });

    // Assert
    expect(ui.tertiaryText.query()).not.toBeInTheDocument();
  });

  it('does not render button section when both primary and secondary are missing', () => {
    // Act
    renderComponent({ primary: null, secondary: null });

    // Assert
    expect(ui.primaryButton.query()).not.toBeInTheDocument();
    expect(ui.secondaryButton.query()).not.toBeInTheDocument();
  });

  it('renders successfully with only primary button', () => {
    // Act
    renderComponent({ secondary: null, tertiary: null });

    // Assert
    expect(ui.primaryButton.get()).toBeInTheDocument();
    expect(ui.secondaryButton.query()).not.toBeInTheDocument();
    expect(ui.tertiaryText.query()).not.toBeInTheDocument();
  });

  it('renders successfully with only secondary button', () => {
    // Act
    renderComponent({ primary: null, tertiary: null });

    // Assert
    expect(ui.secondaryButton.get()).toBeInTheDocument();
    expect(ui.primaryButton.query()).not.toBeInTheDocument();
    expect(ui.tertiaryText.query()).not.toBeInTheDocument();
  });

  it('renders successfully with only tertiary element', () => {
    // Act
    renderComponent({ primary: null, secondary: null });

    // Assert
    expect(ui.tertiaryText.get()).toBeInTheDocument();
    expect(ui.primaryButton.query()).not.toBeInTheDocument();
    expect(ui.secondaryButton.query()).not.toBeInTheDocument();
  });
});
