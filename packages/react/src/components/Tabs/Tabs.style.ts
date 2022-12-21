import { animated } from '@react-spring/web';
import styled, { css } from 'styled-components';
import { ExtendedTheme, Theme } from '../../types/Theme';
import { getRgba, getTabbedStateStyles } from '../../utils';
import Typography from '../Typography';
import { defaultSpringConfig } from './Tabs.constants';
import { AnimatedTabArgs, DisabledType, TabsPropsDivider } from './Tabs.types';

export const getAnimatedStyles = ({ translateValue, index }: AnimatedTabArgs) => {
  return {
    from: {
      width: translateValue,
      transform: `translateX(0px)`,
    },
    to: {
      width: translateValue,
      transform: `translateX(${translateValue * index}px)`,
    },

    config: { ...defaultSpringConfig },
  };
};
export const Container = styled.div`
  min-width: fit-content;
  ${({ theme }: Theme) => css`
    background-color: ${theme.TabsBackgroundColor};
    border-radius: ${theme.TabsBorderRadius};
    padding: ${theme.TabsPaddingVertical} ${theme.TabsPaddingHorizontal};
  `};
`;

export const InnerContainer = styled.div<DisabledType>`
  display: flex;
  align-items: center;
  ${({ theme, disabled }: ExtendedTheme<DisabledType>) => css`
    cursor: ${!disabled && 'pointer'};
    height: ${theme.TabsHeight};
  `};
`;

export const Text = styled(Typography)`
  ${getTabbedStateStyles()}
`;

export const Content = styled.div<DisabledType>`
  ${({ theme, disabled }: ExtendedTheme<DisabledType>) => css`
    color: ${disabled ? theme.TabsLabelDisabledColor : theme.TabsLabelColor};
    padding-left: ${theme.TabsPaddingHorizontal};
    padding-right: ${theme.TabsPaddingHorizontal};
    ${getTabbedStateStyles()}
  `};
`;

export const Tab = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const ActiveTab = styled(animated.div)<DisabledType>`
  align-content: center;
  position: absolute;

  ${({ theme, disabled }: ExtendedTheme<DisabledType>) => css`
    background-color: ${theme.TabsActiveTabBackgroundColor};
    border-radius: ${theme.TabsActiveTabBorderRadius};

    height: ${theme.TabsActiveTabHeight};
    background-color: ${disabled && theme.TabsActiveTabDisabledBackgroundColor};
    box-shadow: ${theme.TabsActiveTabShadowOffsetWidth}px ${theme.TabsActiveTabShadowOffsetHeight}px
      ${theme.TabsActiveTabShadowRadius}px ${getRgba(theme.TabsActiveTabShadowColor, theme.TabsActiveTabShadowOpacity)};
  `};
`;

export const Divider = styled.div<TabsPropsDivider>`
  ${({ theme, showDivider }: ExtendedTheme<TabsPropsDivider>) => css`
    width: calc(${theme.TabsDividerWidth} / 4);
    height: calc(${theme.TabsDividerHeight} / 2);
    background-color: ${showDivider && theme.TabsDividerBackgroundColor};
  `};
`;
