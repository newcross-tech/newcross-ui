import styled, { css } from 'styled-components';
import { animated } from '@react-spring/web';
import { Theme } from '../../types/Theme';
import { getRgba } from '../../../utils/getRgba';

export const getAnimatedStyles = () => {
  return {
    from: { y: -100, opacity: 0 },
    enter: { y: 0, opacity: 1 },
    leave: { y: -100, opacity: 0 },
    config: { mass: 1, tension: 200, friction: 16 },
  };
};

export const AnimatedContainer = styled(animated.div)`
  display: flex;
  flex: 1;
  position: absolute;
  flex-direction: column;
  top: 0;
  right: 0;
  left: 0;

  z-index: 1;
  ${({ theme }: Theme) => css`
    margin: ${theme.SpacingBase12};
    box-shadow: ${theme.TabsActiveTabShadowOffsetWidth}px ${theme.TabsActiveTabShadowOffsetHeight}px
      ${theme.TabsActiveTabShadowRadius}px ${getRgba(theme.TabsActiveTabShadowColor, theme.TabsActiveTabShadowOpacity)};
  `};
`;
