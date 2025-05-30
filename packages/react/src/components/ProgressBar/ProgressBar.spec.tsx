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
    completedStep: (index: number) => byTestId(`completed-step-${index}`),
    uncompletedStep: (index: number) => byTestId(`uncompleted-step-${index}`),
    progressBarWrapper: (disabled: boolean) =>
      byTestId(`${disabled ? 'disabled-' : ''}progress-bar`),
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

  it('renders progress bar in indeterminate mode', () => {
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

  it('renders successfully with label and progress label in different positions', () => {
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

  it('renders successfully in steps mode', () => {
    // Arrange
    const props: ProgressBarProps = {
      variant: 'steps',
      progress: 3,
      maxProgress: 5,
    };

    // Act
    render(<ProgressBar {...props} />);

    // Assert
    for (let i = 0; i < 5; i++) {
      if (i < 3) {
        // Steps that should be completed
        expect(ui.completedStep(i).get()).toBeInTheDocument();
      } else {
        // Steps that should not be completed
        expect(ui.uncompletedStep(i).get()).toBeInTheDocument();
      }
    }
  });

  it('renders in a disabled state', () => {
    // Arrange
    const props: ProgressBarProps = {
      disabled: true,
    };

    // Act
    render(<ProgressBar {...props} />);

    // Assert
    expect(ui.progressBarWrapper(true).get()).toBeInTheDocument();
  });

  it('renders steps mode with disabled state', () => {
    // Arrange
    const props: ProgressBarProps = {
      variant: 'steps',
      progress: 3,
      maxProgress: 5,
      disabled: true,
    };

    // Act
    render(<ProgressBar {...props} />);

    // Assert
    for (let i = 0; i < 5; i++) {
      if (i < 3) {
        expect(ui.completedStep(i).get()).toBeInTheDocument();
      } else {
        expect(ui.uncompletedStep(i).get()).toBeInTheDocument();
      }
    }
    expect(ui.progressBarWrapper(true).get()).toBeInTheDocument();
  });
});
