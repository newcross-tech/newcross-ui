import styled, { css } from 'styled-components';
import { getRgba } from '../../utils';
import { ExtendedTheme, Theme } from '../..';
import Icon from '../Icon';
import { DrawerProps } from './Drawer';

export const Container = styled.div<ExtendedTheme<Omit<DrawerProps, 'onClose'>>>`
  position: fixed;
  top: 0;
  bottom: 0;

  ${({ side }) => side}: 0;
  ${({ theme, isOpen, side, zIndex }) => css`
    width: ${theme.AppLayoutWidthSidebarDrawer};
    opacity: ${isOpen ? 1 : 0};
    visibility: ${isOpen ? 'visible' : 'hidden'};
    transform: translateX(${isOpen ? '0' : side === 'left' ? '-100%' : '100%'});
    transition: transform 0.5s ease, opacity 0.5s ease, visibility 0.5s ease;
    z-index: ${zIndex ?? 10};
    background-color: ${theme.ColorPrimaryGravitas};
    box-shadow: 0 0 ${theme.SpacingBase8} ${getRgba(theme.ColorNeutralWhite, 0.4)};
  `};
`;

export const CloseIcon = styled(Icon)<Theme>`
  position: absolute;
  cursor: pointer;

  ${({ theme }) => css`
    top: ${theme.SpacingBase16};
    right: ${theme.SpacingBase16};
  `}
`;
