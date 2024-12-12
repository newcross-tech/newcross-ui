import { animated, config } from '@react-spring/web';
import styled, { css, FlattenSimpleInterpolation, keyframes } from 'styled-components';
import { ThemeDesignTokens } from '../../theme/ThemeProvider';
import { ExtendedTheme, Theme } from '../../types';
import Typography from '../Typography';
import { bottomLabelPositions, defaultAnimationSpeed } from './ProgressBar.constants';
import {
  AllLabelProps,
  AnimatedStyleArgs,
  ContainerProps,
  DifferentLabelProps,
  LabelPositionProps,
  ProgressBarLabelPositions,
  ProgressProps,
  ProgressValueProps,
} from './ProgressBar.types';
import Container from '../Container';

export const getAnimatedStyles = ({ isIndeterminate, normalisedProgress }: AnimatedStyleArgs) => ({
  width: !isIndeterminate ? `${normalisedProgress}%` : '100%',
  maxWidth: '100%',
  config: config.slow,
});

const getAlignItemsContainerStyles = (): Record<ProgressBarLabelPositions, FlattenSimpleInterpolation> => ({
  topCenter: css`
    align-items: center;
  `,
  topLeft: css`
    align-items: flex-start;
  `,
  topRight: css`
    align-items: flex-end;
  `,
  bottomCenter: css`
    align-items: center;
  `,
  bottomLeft: css`
    align-items: flex-start;
  `,
  bottomRight: css`
    align-items: flex-end;
  `,
});

export const getLabelPositionValues = (
  theme: ThemeDesignTokens,
  isEachLabelSamePosition: boolean
): Record<ProgressBarLabelPositions, FlattenSimpleInterpolation> => ({
  topCenter: css`
    bottom: ${isEachLabelSamePosition ? theme.BaselineSpacesSpace24 : theme.BaselineSpacesSpace0};
  `,
  topLeft: css`
    left: ${theme.BaselineSpacesSpace0};
    bottom: ${isEachLabelSamePosition ? theme.BaselineSpacesSpace24 : theme.BaselineSpacesSpace0};
  `,
  topRight: css`
    right: ${theme.BaselineSpacesSpace0};
    bottom: ${isEachLabelSamePosition ? theme.BaselineSpacesSpace24 : theme.BaselineSpacesSpace0};
  `,
  bottomCenter: css`
    top: ${theme.BaselineSpacesSpace24};
  `,
  bottomLeft: css`
    left: ${theme.BaselineSpacesSpace0};
    top: ${theme.BaselineSpacesSpace24};
  `,
  bottomRight: css`
    right: ${theme.BaselineSpacesSpace0};
    top: ${theme.BaselineSpacesSpace24};
  `,
});

export const Wrapper = styled.label<ContainerProps>`
  position: relative;
  ${({ labelPosition, isEachLabelSamePosition }: ExtendedTheme<ContainerProps>) => css`
    ${isEachLabelSamePosition &&
    isBottomPosition(labelPosition) &&
    css`
      display: flex;
      flex-direction: column-reverse;
    `};
  `};
`;

const isBottomPosition = (labelPosition: ProgressBarLabelPositions) => bottomLabelPositions.includes(labelPosition);

export const HeaderContent = styled.div`
  position: relative;
  ${({ labelPosition }: ExtendedTheme<LabelPositionProps>) => css`
    justify-content: center;
    ${getCoreFlexStyles()}
    ${getAlignItemsContainerStyles()[labelPosition as ProgressBarLabelPositions]};
  `};
`;

export const LabelText = styled(Typography)<ExtendedTheme<AllLabelProps>>`
  ${({ applyWidthStyles }: ExtendedTheme<AllLabelProps>) => css`
    max-width: ${applyWidthStyles ? '80%' : '40%'};
  `};
`;

const getCoreFlexStyles = () => css`
  display: flex;
  flex-direction: column;
`;

export const DifferentLabel = styled(LabelText)<ExtendedTheme<DifferentLabelProps>>`
  position: absolute;
  ${({ theme, labelPosition }: ExtendedTheme<DifferentLabelProps>) => css`
    ${getLabelPositionValues(theme, false)[labelPosition as ProgressBarLabelPositions]};
  `}
`;

export const ProgressValue = styled(Typography)`
  ${({ theme, isEachLabelSamePosition, progressLabelPosition }: ExtendedTheme<ProgressValueProps>) => css`
    position: absolute;
    ${getCoreFlexStyles()};
    ${getLabelPositionValues(theme, isEachLabelSamePosition)[progressLabelPosition as ProgressBarLabelPositions]}
    ${!isEachLabelSamePosition &&
    css`
      ${getAlignItemsContainerStyles()[progressLabelPosition as ProgressBarLabelPositions]};
    `};
  `};
`;

const progressLoading = keyframes`
 0% {
  background-position: right; 
  background-size: 225% 100%;
 }
 100% {
  background-position: left; 
  background-size: 800% 100%;
 }
`;

const getTrackColorValue = (theme: ThemeDesignTokens, disabled: boolean) =>
  disabled ? theme.ElementsSurfaceDisabledHighlight : theme.ElementsSurfaceActionDefault;

const getIndeterminateStyles = (theme: ThemeDesignTokens, disabled: boolean) => css`
  background: linear-gradient(
    to right,
    ${theme.ElementsSurfaceDefault} 45%,
    ${getTrackColorValue(theme, disabled)} 0%,
    ${getTrackColorValue(theme, disabled)} 55%,
    ${theme.ElementsSurfaceDefault} 0%
  );
  animation: ${progressLoading} ${defaultAnimationSpeed}s infinite ease-in;
`;

export const Meter = styled.div`
  ${({ theme, variant = 'determinate', disabled }: ExtendedTheme<ProgressProps>) => css`
    height: ${theme.ProgressBarFillHeight};
    background-color: ${variant !== 'steps' ? theme.ElementsSurfaceDefault : 'transparent'};
    border-radius: ${theme.ProgressBarTrackBorderRadius};
    margin-top: ${theme.ProgressBarTrackMarginTop};
    margin-bottom: ${theme.ProgressBarTrackMarginBottom};
    ${disabled &&
    css`
      background-color: ${variant === 'steps' ? theme.ElementsSurfaceDefault : theme.ElementsSurfaceDisabled};
    `}
  `};
`;

export const Progress = styled(animated.span)<ProgressProps & AnimatedStyleArgs>`
  ${({ theme, isIndeterminate, normalisedProgress, disabled }) => css`
    ${getAnimatedStyles({
      isIndeterminate,
      normalisedProgress,
    })}
    display: block;
    height: 100%;
    border-radius: ${theme.ProgressBarTrackBorderRadius};
    background-color: ${disabled ? theme.ElementsSurfaceDisabledHighlight : theme.ElementsSurfaceActionDefault};
    overflow: hidden;

    ${isIndeterminate &&
    css`
      ${getIndeterminateStyles(theme, disabled)};
    `}
  `}
`;

export const SteppedMeter = styled(Container)`
  ${({ theme }: Theme) => css`
    height: ${theme.BaselineSpacesSpace8};
  `};
`;

export const Step = styled.div<{ isCompleted: boolean; isLast: boolean; disabled: boolean }>`
  ${({
    theme,
    isCompleted,
    disabled,
  }: ExtendedTheme<{ isCompleted: boolean; isLast: boolean; disabled: boolean }>) => css`
    flex-grow: 1;
    background-color: ${isCompleted
      ? disabled
        ? theme.ElementsSurfaceDisabledHighlight
        : theme.ElementsSurfaceActionDefault
      : disabled
      ? theme.ElementsSurfaceDisabled
      : theme.ElementsSurfaceDefault};
    &:first-child {
      border-top-left-radius: ${theme.ProgressBarTrackBorderRadius};
      border-bottom-left-radius: ${theme.ProgressBarTrackBorderRadius};
    }

    &:last-child {
      border-top-right-radius: ${theme.ProgressBarTrackBorderRadius};
      border-bottom-right-radius: ${theme.ProgressBarTrackBorderRadius};
    }
  `};
`;
