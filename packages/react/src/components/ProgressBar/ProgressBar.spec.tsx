import { render } from '@testing-library/react';
import ProgressBar, { ProgressBarProps } from './ProgressBar';

import { byTestId } from 'testing-library-selector';
import { axe } from '../../utils/test/axeConfig';

describe('Progress Bar Component', () => {
  const ui = {
    determinateProgressBar: byTestId('determinate'),
    indeterminateProgressBar: byTestId('indeterminate'),
    sameLabelContainer: byTestId('same-label-container'),
    differentLabelContainer: byTestId('different-label-container'),
    progressLabelContainer: byTestId('progress-label-container'),
  };

  it('should not have any a11y errors', async () => {
    // Arrange
    const props: ProgressBarProps = {
      label: 'My Progress',
    };

    // Act
    render(<ProgressBar {...props} />);

    const results = await axe(document.body);
    expect(results).toHaveNoViolations();
  });

  it('renders successfully', () => {
    // Arrange
    const props: ProgressBarProps = {};

    // Act
    render(<ProgressBar {...props} />);

    // Assert

    expect(ui.determinateProgressBar.get()).toBeInTheDocument();
  });

  it('renders progress bar intedeterminate mode', () => {
    // Arrange
    const props: ProgressBarProps = {
      variant: 'indeterminate',
    };

    // Act
    render(<ProgressBar {...props} />);

    // Assert

    expect(ui.indeterminateProgressBar.get()).toBeInTheDocument();
  });

  it('renders successfully with label and progress label in the same position', () => {
    // Arrange
    const props: ProgressBarProps = {
      labelPosition: 'topLeft',
      progressLabelPosition: 'topLeft',
    };

    // Act
    render(<ProgressBar {...props} />);

    // Assert

    expect(ui.sameLabelContainer.get()).toBeInTheDocument();
  });
  it('renders successfully with label and progress label in different position', () => {
    // Arrange
    const props: ProgressBarProps = {
      labelPosition: 'topCenter',
      progressLabelPosition: 'bottomCenter',
    };

    // Act
    render(<ProgressBar {...props} />);

    // Assert

    expect(ui.differentLabelContainer.get()).toBeInTheDocument();
    expect(ui.progressLabelContainer.get()).toBeInTheDocument();
  });
});
