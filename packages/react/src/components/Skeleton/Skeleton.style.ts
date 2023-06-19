import styled, { css, keyframes } from 'styled-components';
import { ExtendedTheme } from '../../types/Theme';
import { defaultAnimationSpeed } from './Skeleton.constants';
import { SkeletonProps } from './Skeleton';

export const shimmer = keyframes`
  100% {
    transform: translateX(100%);
  }
`;

export const AnimatedContent = styled.span`
  display: inline-block;
  position: relative;
  overflow: hidden;

  ${({ theme, width, height, hasRoundedCorners }: ExtendedTheme<SkeletonProps>) => css`
    width: ${width || '100%'};
    height: ${height || '100%'};
    border-radius: ${hasRoundedCorners && theme.CardBorderRadius};
    background: ${theme.ColorBaseGrey300};
    &::after {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      transform: translateX(-100%);
      background-image: linear-gradient(
        90deg,
        ${theme.ColorBaseGrey300},
        ${theme.ColorBaseGrey500},
        ${theme.ColorBaseGrey300}
      );
      background-repeat: no-repeat;

      animation: ${shimmer} ${defaultAnimationSpeed}s ease-in-out infinite;
      content: '';
    }
  `};
`;
