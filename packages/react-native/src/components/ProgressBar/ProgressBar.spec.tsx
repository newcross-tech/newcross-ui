import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ProgressBar, { ProgressBarProps } from './ProgressBar';

import {
  ProgressBarVariant,
  ProgressBarLabelPositions,
} from './ProgressBar.types';

describe('Progress Bar Component', () => {
  it('renders successfully', () => {
    // Arrange
    const props: ProgressBarProps = {};

    // Act
    const { getByTestId } = render(<ProgressBar {...props} />);

    // Assert

    expect(getByTestId('progress-bar-container')).toBeTruthy();
  });
  it('renders successfully with customProgressLabel', () => {
    // Arrange
    const props: ProgressBarProps = {
      customProgressLabel: 'Custom Progress Label',
    };

    // Act
    const { getByTestId, getByText } = render(<ProgressBar {...props} />);

    // Assert

    expect(getByTestId('progress-bar-container')).toBeTruthy();
    expect(getByText('Custom Progress Label')).toBeTruthy();
  });
  it('renders successfully with label and progress label in the same position', () => {
    // Arrange
    const props: ProgressBarProps = {
      labelPosition: ProgressBarLabelPositions.topLeft,
      progressLabelPosition: ProgressBarLabelPositions.topLeft,
    };

    // Act
    const { getByTestId } = render(<ProgressBar {...props} />);

    // Assert

    expect(getByTestId('labels-container')).toBeTruthy();
  });
  it('renders successfully with label and progress label in different position', () => {
    // Arrange
    const props: ProgressBarProps = {
      labelPosition: ProgressBarLabelPositions.topCenter,
      progressLabelPosition: ProgressBarLabelPositions.bottomCenter,
    };

    // Act
    const { getByTestId } = render(<ProgressBar {...props} />);

    // Assert

    expect(getByTestId('label-container')).toBeTruthy();
    expect(getByTestId('progress-label-container')).toBeTruthy();
  });
  it('renders the progress bar fill', () => {
    // Arrange
    const props: ProgressBarProps = {
      variant: ProgressBarVariant.indeterminate,
      labelPosition: ProgressBarLabelPositions.topLeft,
    };

    // Act
    const { getByTestId } = render(<ProgressBar {...props} />);

    // Assert

    expect(getByTestId('fill-container')).toBeTruthy();
  });
  it('calculates width of progress bar track', () => {
    // Arrange
    const props: ProgressBarProps = {};

    // Act
    const { getByTestId } = render(<ProgressBar {...props} />);

    // Assert

    fireEvent(getByTestId('track-container'), 'layout', {
      nativeEvent: { layout: { width: 380 } },
    });
  });
  it('calculates height of labels container', () => {
    // Arrange
    const props: ProgressBarProps = {
      labelPosition: ProgressBarLabelPositions.topLeft,
      progressLabelPosition: ProgressBarLabelPositions.topLeft,
    };

    // Act
    const { getByTestId } = render(<ProgressBar {...props} />);

    // Assert

    fireEvent(getByTestId('labels-container'), 'layout', {
      nativeEvent: { layout: { width: 48 } },
    });
  });

  it('calculates height of label text', () => {
    // Arrange
    const props: ProgressBarProps = {
      labelPosition: ProgressBarLabelPositions.topLeft,
      progressLabelPosition: ProgressBarLabelPositions.topRight,
    };

    // Act
    const { getByTestId } = render(<ProgressBar {...props} />);

    // Assert

    fireEvent(getByTestId('label-container'), 'layout', {
      nativeEvent: { layout: { width: 24 } },
    });
  });
});
