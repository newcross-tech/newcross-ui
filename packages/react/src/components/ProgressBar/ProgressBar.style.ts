import { animated, config } from '@react-spring/web';
import styled, { css, FlattenSimpleInterpolation, keyframes } from 'styled-components';
import { ThemeDesignTokens } from '../../theme/ThemeProvider';
import { ExtendedTheme } from '../../types';
import Typography from '../Typography';
import { bottomLabelPositions, defaultAnimationSpeed } from './ProgressBar.constants';
import {
  AllLabelProps,
  AnimatedStyleArgs,
  WrapperProps,
  DifferentLabelProps,
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

export const Wrapper = styled.label`
  position: relative;
  ${({ labelPosition = 'topLeft', isEachLabelSamePosition }: ExtendedTheme<WrapperProps>) => css`
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
  ${({ labelPosition }: ExtendedTheme<{ labelPosition: ProgressBarLabelPositions }>) => css`
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

const getMeterBackground = (theme: ThemeDesignTokens, variant: string, disabled: boolean): string => {
  if (disabled && variant === 'steps') {
    return theme.ElementsSurfaceDefault;
  }
  if (!disabled && variant === 'steps') {
    return 'transparent';
  }
  if (disabled && variant !== 'steps') {
    return theme.ElementsSurfaceDisabled;
  }
  return theme.ElementsSurfaceDefault;
};

export const Meter = styled(Container)`
  ${({ theme, variant = 'determinate', disabled }: ExtendedTheme<ProgressProps>) => css`
    height: ${theme.BaselineSpacesSpace8};
    background-color: ${getMeterBackground(theme, variant, disabled)};
    border-radius: ${theme.BorderBaseRadiusLg};
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
    border-radius: ${theme.BorderBaseRadiusLg};
    background-color: ${disabled ? theme.ElementsSurfaceDisabledHighlight : theme.ElementsSurfaceActionDefault};
    overflow: hidden;

    ${isIndeterminate &&
    css`
      ${getIndeterminateStyles(theme, disabled)};
    `}
  `}
`;

const getStepBackground = (theme: ThemeDesignTokens, isCompleted: boolean, disabled: boolean): string => {
  if (isCompleted && disabled) {
    return theme.ElementsSurfaceDisabledHighlight;
  }
  if (isCompleted && !disabled) {
    return theme.ElementsSurfaceActionDefault;
  }
  if (!isCompleted && disabled) {
    return theme.ElementsSurfaceDisabled;
  }
  return theme.ElementsSurfaceDefault;
};

export const Step = styled.div`
  ${({
    theme,
    isCompleted,
    disabled,
  }: ExtendedTheme<{ isCompleted: boolean; isLast: boolean; disabled: boolean }>) => css`
    flex-grow: 1;
    background-color: ${getStepBackground(theme, isCompleted, disabled)};
    &:first-child {
      border-top-left-radius: ${theme.BorderBaseRadiusLg};
      border-bottom-left-radius: ${theme.BorderBaseRadiusLg};
    }

    &:last-child {
      border-top-right-radius: ${theme.BorderBaseRadiusLg};
      border-bottom-right-radius: ${theme.BorderBaseRadiusLg};
    }
  `};
`;
