import {
  defaultMaxProgress,
  defaultMinProgress,
  defaultProgress,
} from './ProgressBar.constants';
import * as Styled from './ProgressBar.style';
import {
  CommonTextProps,
  ProgressBarLabelPositions,
  ProgressBarVariant,
} from './ProgressBar.types';
import { applyWidthStyles, normaliseValue } from './utils';

export type ProgressBarProps = {
  /**
   * Deprecated: default position is 'topLeft'
   * Use labelPosition to position the label element.
   */
  labelPosition?: ProgressBarLabelPositions;
  /**
   * Deprecated: default position is 'topRight'
   * Use progressLabelPosition to position the progress element.
   */
  progressLabelPosition?: ProgressBarLabelPositions;
  /**
   * Text element to describe the progress bar action.
   */
  label?: string;
  /**
   * The variant to use. Use indeterminate when there is no progress value.
   */
  variant?: ProgressBarVariant;
  /**
   * Hide the progress text element.
   */
  hasProgressLabel?: boolean;
  /**
   * The minimum expected value of the progress indicator for the determinate variant.
   */
  minProgress?: number;
  /**
   * The maximum expected value of the progress indicator for the determinate variant.
   */
  maxProgress?: number;
  /**
   * The value of the progress indicator for the determinate variant. Value between 0 and 100.
   */
  progress?: number;
  /**
   * Sets the ProgressBar to disabled.
   */
  disabled?: boolean;
};

const ProgressBar = ({
  label,
  progress = defaultProgress,
  labelPosition = 'topLeft',
  progressLabelPosition = 'topRight',
  hasProgressLabel = true,
  minProgress = defaultMinProgress,
  maxProgress = defaultMaxProgress,
  variant = 'determinate',
  disabled = false,
}: ProgressBarProps) => {
  const isIndeterminate = variant === 'indeterminate';
  const isEachLabelSamePosition = labelPosition === progressLabelPosition;
  const normalisedProgress = normaliseValue(progress, minProgress, maxProgress);
  const isDeterminateAndHasProgressLabel = !isIndeterminate && hasProgressLabel;

  //opt-in to pass 0-100 scaled value to child
  const progressProps = {
    value: progress ? normalisedProgress : undefined,
  };

  const commonTextProps: CommonTextProps = {
    applyWidthStyles: applyWidthStyles({
      labelPosition,
      progressLabelPosition,
      forceWidthStyles: !hasProgressLabel || isIndeterminate,
    }),
    variant: 'h3',
    color: disabled ? 'disabled' : 'defaultDark',
  };

  const renderSamePositionContent = () => (
    <>
      <Styled.LabelText {...commonTextProps} numberOfLines={2}>
        {label}
      </Styled.LabelText>
      {isDeterminateAndHasProgressLabel && (
        <Styled.LabelText {...commonTextProps}>
          {normalisedProgress}%
        </Styled.LabelText>
      )}
    </>
  );

  const renderDifferentPositionContent = () => (
    <>
      <Styled.DifferentLabel
        {...commonTextProps}
        labelPosition={labelPosition}
        isEachLabelSamePosition={isEachLabelSamePosition}
        numberOfLines={2}
      >
        {label}
      </Styled.DifferentLabel>
      {isDeterminateAndHasProgressLabel && (
        <Styled.ProgressValue
          isEachLabelSamePosition={isEachLabelSamePosition}
          progressLabelPosition={progressLabelPosition}
          variant="p2"
          testID="progress-label-container"
          color={disabled ? 'disabled' : 'defaultDark'}
        >
          {variant !== 'steps'
            ? `${normalisedProgress}%`
            : `${progress}/${maxProgress}`}
        </Styled.ProgressValue>
      )}
    </>
  );

  const renderSteps = () =>
    Array.from({ length: maxProgress }).map((_, index) => {
      const isCompleted = index < progress;
      return (
        <Styled.Step
          data-testid={`${
            isCompleted ? 'completed' : 'uncompleted'
          }-step-${index}`}
          key={index}
          isCompleted={isCompleted}
          isLast={index === maxProgress - 1}
          disabled={disabled}
        />
      );
    });

  return (
    <Styled.Wrapper
      labelPosition={labelPosition}
      isEachLabelSamePosition={isEachLabelSamePosition}
      data-testid={`${disabled ? 'disabled-' : ''}progress-bar`}
    >
      <Styled.HeaderContent
        data-testid={`${
          isEachLabelSamePosition ? 'same' : 'different'
        }-label-container`}
        labelPosition={labelPosition}
      >
        {isEachLabelSamePosition
          ? renderSamePositionContent()
          : renderDifferentPositionContent()}
      </Styled.HeaderContent>
      <Styled.Meter
        isIndeterminate={isIndeterminate}
        testID={isIndeterminate ? 'indeterminate' : 'determinate'}
        role="progressbar"
        aria-describedby="loading-zone"
        aria-label={label || `${variant}-progressbar`}
        variant={variant}
        disabled={disabled}
        mt="sm"
        gap={variant === 'steps' ? 'xs' : undefined}
        {...progressProps}
      >
        {variant !== 'steps' ? (
          <Styled.Progress
            isIndeterminate={isIndeterminate}
            normalisedProgress={normalisedProgress}
            variant={variant}
            disabled={disabled}
          />
        ) : (
          renderSteps()
        )}
      </Styled.Meter>
    </Styled.Wrapper>
  );
};

export default ProgressBar;
