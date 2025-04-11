import { animated } from '@react-spring/web';
import styled from 'styled-components';
import { getRgba } from '../../utils';
import { ToastProviderProps } from '../../hooks/useToast/store';
import Container from '../Container';
import { ToastPropsStrict } from './Toast.types';

export const getAnimatedStyles = ({ onClose }: Pick<ToastPropsStrict, 'onClose'>) => ({
  from: { y: -100, opacity: 0 },
  enter: { y: 0, opacity: 1 },
  leave: { y: -100, opacity: 0 },
  config: { mass: 1, tension: 200, friction: 16 },
  onDestroyed: () => onClose?.(),
});

export const ToastContainer = styled.div<Pick<ToastProviderProps, 'zIndex'>>(({ zIndex }) => ({
  position: 'fixed',
  top: 0,
  right: 0,
  zIndex: zIndex ?? 1,
}));

export const AnimatedContainer = styled(animated(Container))<Pick<ToastPropsStrict, 'width'>>(({ theme, width }) => ({
  width: width ?? `calc(100vw - ${theme.BaselineSpacesSpace24})`,
  margin: theme.BaselineSpacesSpace12,
  marginLeft: width ? 'auto' : '0',
  // TODO - Add/update tokens for shadow
  boxShadow: `${theme.ShadowBaseOffsetSm}px ${theme.ShadowBaseOffsetLg}px ${theme.ShadowBaseElevationMd}px ${
    theme.ShadowBaseOffsetSm
  }px ${getRgba('rgb(0, 0, 0)', 0.25)}`,
}));
