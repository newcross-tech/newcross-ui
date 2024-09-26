import { animated } from '@react-spring/web';
import styled, { css } from 'styled-components';
import { ExtendedTheme } from '../../types';
import { getRgba } from '../../utils';
import { ToastProviderProps } from '../../context/toast/ToastProvider';
import { ToastProps } from './Toast';

export const getAnimatedStyles = (onClose?: VoidFunction) => {
  return {
    from: { y: -100, opacity: 0 },
    enter: { y: 0, opacity: 1 },
    leave: { y: -100, opacity: 0 },
    config: { mass: 1, tension: 200, friction: 16 },
    onDestroyed: () => onClose && onClose(),
  };
};

export const Container = styled.div<Pick<ToastProviderProps, 'zIndex'>>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${({ zIndex }) => zIndex ?? 1};
`;

export const AnimatedContainer = styled(animated.div)<ExtendedTheme<Partial<ToastProps>>>`
  display: flex;
  flex: 1;
  flex-direction: column;
  ${({ theme, width }) => css`
    width: ${width ?? '100%'};
    margin: ${theme.SpacingBase12};
    margin-left: ${width ? 'auto' : '0'};
    box-shadow: ${theme.TabsActiveTabShadowOffsetWidth}px ${theme.TabsActiveTabShadowOffsetHeight}px
      ${theme.TabsActiveTabShadowRadius}px ${getRgba(theme.TabsActiveTabShadowColor, theme.TabsActiveTabShadowOpacity)};
  `};
`;
