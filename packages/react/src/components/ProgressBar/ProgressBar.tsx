import { TypographyVariant } from '../Typography';
import {
  defaultMaxProgress,
  defaultMinProgress,
  defaultProgress,
} from './ProgressBar.constants';
import * as Styled from './ProgressBar.style';
import {
  ProgressBarLabelPositions,
  ProgressBarVariant,
} from './ProgressBar.types';
import { applyWidthStyles, normaliseValue } from './utils';

export type ProgressBarProps = {
  /**
   * Use labelPosition to position the label element.
   */
  labelPosition?: ProgressBarLabelPositions;
  /**
   * Text element to describe the progress bar action.
   */
  label?: string;
  /**
   * The variant to use. Use indeterminate when there is no progress value.
   */
  variant?: ProgressBarVariant;
  /**
   * Use progressLabelPosition to position the progress element.
   */
  progressLabelPosition?: ProgressBarLabelPositions;
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
}: ProgressBarProps) => {
  const isIndeterminate = variant === 'indeterminate';

  const isEachLabelSamePosition = labelPosition === progressLabelPosition;
  const isDeterminateAndHasProgressLabel = !isIndeterminate && hasProgressLabel;

  const normalisedProgress = normaliseValue(progress, minProgress, maxProgress);

  const commonTextProps = {
    applyWidthStyles: applyWidthStyles({
      labelPosition,
      progressLabelPosition,
      forceWidthStyles: !hasProgressLabel || isIndeterminate,
    }),
    variant: TypographyVariant.paragraph1,
  };

  const getSamePositionContent = () => (
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

  const getDifferentPositionContent = () => (
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
          variant={TypographyVariant.paragraph1}
          testID="progress-label-container"
        >
          {normalisedProgress}%
        </Styled.ProgressValue>
      )}
    </>
  );

  //opt-in to pass 0-100 scaled value to child
  const progressProps = {
    value: progress ? normalisedProgress : undefined,
  };

  return (
    <Styled.Container
      labelPosition={labelPosition}
      isEachLabelSamePosition={isEachLabelSamePosition}
    >
      <Styled.HeaderContent
        data-testid={`${
          isEachLabelSamePosition ? 'same' : 'different'
        }-label-container`}
        labelPosition={labelPosition}
      >
        {isEachLabelSamePosition
          ? getSamePositionContent()
          : getDifferentPositionContent()}
      </Styled.HeaderContent>
      <Styled.Progress
        indeterminate={isIndeterminate}
        data-testid={isIndeterminate ? 'indeterminate' : 'determinate'}
        role="progressbar"
        aria-describedby="loading-zone"
        aria-label={label || `${variant}-progressbar`}
        {...progressProps}
      >
        unknown
      </Styled.Progress>
    </Styled.Container>
  );
};

export default ProgressBar;
