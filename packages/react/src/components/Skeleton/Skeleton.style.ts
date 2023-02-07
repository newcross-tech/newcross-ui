import styled, { css, keyframes } from 'styled-components';
import { ExtendedTheme } from '../../types/Theme';
import { defaultAnimationSpeed } from './Skeleton.constants';
import { AnimatedContentProps } from './Skeleton.types';

const getSkeletonKeyframe = (widthValue: string) => keyframes`
  0% {
    background-position: -${widthValue} 0;
  }
  100% {
    background-position: calc(${widthValue} + 100%) 0;
  }
`;

const getWidthRelatedStyles = (hasWidthOverride: boolean, width: string) => {
  const widthAdjustment = hasWidthOverride ? width : `${width}px`;
  return css`
    width: ${hasWidthOverride ? width : '100%'};
    background-size: ${widthAdjustment} 100%;
    animation: ${getSkeletonKeyframe(widthAdjustment)} ${defaultAnimationSpeed}s ease-in-out infinite;
  `;
};

export const AnimatedContent = styled.div`
  display: inline-block;
  ${({ theme, width, height, hasWidthOverride, hasRoundedCorners = false }: ExtendedTheme<AnimatedContentProps>) => css`
    height: ${height || '100%'};
    ${getWidthRelatedStyles(hasWidthOverride, width)};
    background: ${theme.ColorBaseGrey300};
    background-image: linear-gradient(
      90deg,
      ${theme.ColorBaseGrey300},
      ${theme.ColorBaseGrey500},
      ${theme.ColorBaseGrey300}
    );
    background-repeat: no-repeat;
    border-radius: ${hasRoundedCorners && theme.CardBorderRadius};
  `};
`;
