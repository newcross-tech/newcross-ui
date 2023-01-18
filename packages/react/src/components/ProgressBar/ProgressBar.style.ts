import { config } from '@react-spring/web';
import styled, { css, FlattenSimpleInterpolation, keyframes } from 'styled-components';
import { ThemeDesignTokens } from '../../theme/ThemeProvider';
import { ExtendedTheme, Theme } from '../../types/Theme';
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
    bottom: ${isEachLabelSamePosition ? theme.SpacingBase24 : theme.SpacingBase0};
  `,
  topLeft: css`
    left: ${theme.SpacingBase0};
    bottom: ${isEachLabelSamePosition ? theme.SpacingBase24 : theme.SpacingBase0};
  `,
  topRight: css`
    right: ${theme.SpacingBase0};
    bottom: ${isEachLabelSamePosition ? theme.SpacingBase24 : theme.SpacingBase0};
  `,
  bottomCenter: css`
    top: ${theme.SpacingBase24};
  `,
  bottomLeft: css`
    left: ${theme.SpacingBase0};
    top: ${theme.SpacingBase24};
  `,
  bottomRight: css`
    right: ${theme.SpacingBase0};
    top: ${theme.SpacingBase24};
  `,
});

export const Container = styled.label`
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

const CoreText = styled(Typography)`
  ${({ theme }: Theme) => css`
    color: ${theme.RadioColor};
  `};
`;

export const LabelText = styled(CoreText)<ExtendedTheme<AllLabelProps>>`
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

export const ProgressValue = styled(CoreText)`
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

const getTrackColorValue = (theme: ThemeDesignTokens) => theme.ProgressBarFillBackgroundColor;

const getIndeterminateStyles = (theme: ThemeDesignTokens) => css`
  background: linear-gradient(
    to right,
    ${theme.ProgressBarTrackBackgroundColor} 45%,
    ${getTrackColorValue(theme)} 0%,
    ${getTrackColorValue(theme)} 55%,
    ${theme.ProgressBarTrackBackgroundColor} 0%
  );
  animation: ${progressLoading} ${defaultAnimationSpeed}s infinite ease-in;
`;

export const Meter = styled.div`
  ${({ theme, isIndeterminate }: ExtendedTheme<ProgressProps>) => css`
    height: ${theme.ProgressBarFillHeight};
    background-color: ${theme.ProgressBarTrackBackgroundColor};
    border-radius: ${theme.ProgressBarTrackBorderRadius};
    margin-top: ${theme.ProgressBarTrackMarginTop};
    margin-bottom: ${theme.ProgressBarTrackMarginBottom};

    > span {
      display: block;
      height: 100%;
      border-radius: ${theme.ProgressBarTrackBorderRadius};
      background-color: ${theme.ProgressBarFillBackgroundColor};
      overflow: hidden;

      ${isIndeterminate &&
      css`
        ${getIndeterminateStyles(theme)}
      `};
    }
  `};
`;
