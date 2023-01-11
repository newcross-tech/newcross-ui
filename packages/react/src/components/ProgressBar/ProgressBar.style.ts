import styled, { css, FlattenSimpleInterpolation, keyframes } from 'styled-components';
import { ThemeDesignTokens } from '../../theme/ThemeProvider';
import { ExtendedTheme, Theme } from '../../types/Theme';
import Typography from '../Typography';
import { bottomLabelPositions, defaultAnimationSpeed } from './ProgressBar.constants';
import {
  AllLabelProps,
  ContainerProps,
  DeterminateArgs,
  DifferentLabelProps,
  LabelPositionProps,
  ProgressBarLabelPositions,
  ProgressProps,
  ProgressValueProps,
} from './ProgressBar.types';

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
 }
 100% {
  background-position: left; 
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
  background-size: 225% 100%;
  animation: ${progressLoading} ${defaultAnimationSpeed}s infinite ease;
`;

const getDeterminateStyles = ({ theme, value }: ExtendedTheme<DeterminateArgs>) => {
  const percent = typeof value === 'number' ? value : -1;
  return css`
    background: linear-gradient(
      to right,
      ${getTrackColorValue(theme)} ${percent}%,
      ${theme.ProgressBarTrackBackgroundColor} 0%
    );
  `;
};

export const Progress = styled.progress<ProgressProps>`
  ${({ theme, value, indeterminate }: ExtendedTheme<ProgressProps>) => css`
    width: 100%;

    /*  custom style  */
    position: relative;
    height: ${theme.ProgressBarFillHeight};
    border-radius: ${theme.ProgressBarTrackBorderRadius};
    margin-top: ${theme.ProgressBarTrackMarginTop};
    margin-bottom: ${theme.ProgressBarTrackMarginBottom};
    overflow: hidden;

    &[${value}] {
      /*  Safari/Chromium  */
      &::-webkit-progress-bar {
        background-color: ${getTrackColorValue(theme)};
      }

      &::-webkit-progress-value {
        background-color: ${getTrackColorValue(theme)};
      }

      /*  Firefox  */
      &::-moz-progress-bar {
        background-color: ${getTrackColorValue(theme)};
      }
    }

    ${!indeterminate
      ? css`
          &::after {
            content: '';
            inset: 0;
            position: absolute;
            background-position: left;
            ${getDeterminateStyles({
              theme,
              value,
            })}
          }

          /*  Safari  */
          &::-webkit-progress-bar {
            background-position: left;
            ${getDeterminateStyles({
              theme,
              value,
            })}
          }

          /*  Firefox  */
          &::-moz-progress-bar {
            background-position: left;
            ${getDeterminateStyles({
              theme,
              value,
            })}
          }
        `
      : css`
          &:indeterminate {
            /*  indeterminate  */
            &::after {
              content: '';
              inset: 0;
              position: absolute;
              background-position: left;
              ${getIndeterminateStyles(theme)}
            }

            /*  indeterminate Safari  */
            &::-webkit-progress-bar {
              background-position: left;
              ${getIndeterminateStyles(theme)}
            }

            /*  indeterminate Firefox  */
            &::-moz-progress-bar {
              background-position: left;
              ${getIndeterminateStyles(theme)}
            }
          }
        `}
  `};
`;
