import { animated } from '@react-spring/web';
import styled, { css } from 'styled-components';
import { Theme } from '../../types/Theme';
import { getRgba } from '../../utils';

export const getAnimatedStyles = (onClose?: VoidFunction) => {
  return {
    from: { y: -100, opacity: 0 },
    enter: { y: 0, opacity: 1 },
    leave: { y: -100, opacity: 0 },
    config: { mass: 1, tension: 200, friction: 16 },
    onDestroyed: () => onClose && onClose(),
  };
};

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

export const AnimatedContainer = styled(animated.div)`
  display: flex;
  flex: 1;
  flex-direction: column;

  ${({ theme }: Theme) => css`
    margin: ${theme.SpacingBase12};
    box-shadow: ${theme.TabsActiveTabShadowOffsetWidth}px ${theme.TabsActiveTabShadowOffsetHeight}px
      ${theme.TabsActiveTabShadowRadius}px ${getRgba(theme.TabsActiveTabShadowColor, theme.TabsActiveTabShadowOpacity)};
  `};
`;
