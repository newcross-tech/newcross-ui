import styled, { css } from 'styled-components';
import Container from '../Container';
import Typography from '../Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getRgba } from '../../utils/getRgba';
import { ExtendedTheme, Theme } from '../../types';

export const IndicatorWrapper = styled(Container)`
  ${({ theme, $isAlwaysModal }: ExtendedTheme<{ $isAlwaysModal: boolean }>) => css`
    display: none;

    @media (max-width: 640px) {
      display: ${$isAlwaysModal ? 'none' : 'flex'};
      box-shadow: ${theme.TabsActiveTabShadowOffsetWidth}px ${theme.TabsActiveTabShadowOffsetHeight}px
        ${theme.TabsActiveTabShadowRadius}px
        ${getRgba(theme.TabsActiveTabShadowColor, theme.TabsActiveTabShadowOpacity)};
    }
  `}
`;

export const Indicator = styled(Container)`
  ${({ theme, $isAlwaysModal }: ExtendedTheme<{ $isAlwaysModal: boolean }>) =>
    !$isAlwaysModal &&
    css`
      @media (max-width: 640px) {
        height: ${theme.SpacingBase8};
        border-radius: ${theme.BorderBaseRadiusSm};
        background-color: ${theme.ColorBaseGrey200};
      }
    `}
`;

export const Heading = styled(Typography)`
  flex-grow: 1;

  @media (max-width: 640px) {
    text-align: start;
    font-size: ${({ theme }: Theme) => theme.TypographyFontSize20};
    line-height: ${({ theme }: Theme) => theme.TypographyLineHeight32};
  }
`;

export const HeaderContent = styled(Container)`
  ${({ theme }: Theme) => css`
    @media (max-width: 640px) {
      padding: ${theme.SpacingBase24} ${theme.SpacingBase16};
    }
  `}
`;
export const Header = styled(Container)`
  ${({ theme, $isAlwaysModal }: ExtendedTheme<{ $isAlwaysModal: boolean }>) => css`
    ${$isAlwaysModal && `border-bottom: 1px solid ${theme.ColorBaseGrey200};`}
    @media (min-width: 640px) {
      border-bottom: 1px solid ${theme.ColorBaseGrey200};
    }
  `}
`;

export const Icon = styled(FontAwesomeIcon)`
  ${({ $isAlwaysModal, theme }: ExtendedTheme<{ $isAlwaysModal: boolean }>) => css`
    cursor: pointer;
    color: ${theme.ColorPrimaryGravitas};
    @media (min-width: 640px) {
      display: block !important;
    }

    @media (max-width: 640px) {
      display: ${$isAlwaysModal ? 'block !important' : 'none'};
    }
  `}
`;

export const Subtitle = styled(Typography)`
  padding-top: ${({ theme }) => theme.SpacingBase16};
  padding-bottom: ${({ theme }) => theme.SpacingBase12};

  @media (max-width: 640px) {
    padding: 0;

    font-size: ${({ theme }: Theme) => theme.TypographyFontSize14};
    line-height: ${({ theme }: Theme) => theme.TypographyLineHeight20};
  }
`;

export const ContentWapper = styled(Container)`
  ${({
    theme,
    $isAlwaysModal,
    $hasGreyBackground,
    $hasPadding,
  }: ExtendedTheme<{
    $isAlwaysModal: boolean;
    $hasGreyBackground: boolean;
    $hasPadding: boolean;
  }>) =>
    !$isAlwaysModal &&
    css`
      @media (max-width: 640px) {
        padding: ${theme.SpacingBase0} ${theme.SpacingBase16} ${theme.SpacingBase24} ${theme.SpacingBase16};
        ${$hasPadding &&
        css`
          padding-top: ${theme.SpacingBase16};
        `}
        ${$hasGreyBackground &&
        css`
          background-color: ${theme.ColorBaseGrey500};
        `}
      }
    `}
`;

export const FooterWrapper = styled(Container)`
  ${({ theme, $isAlwaysModal }: ExtendedTheme<{ $isAlwaysModal: boolean }>) =>
    !$isAlwaysModal &&
    css`
      @media (max-width: 640px) {
        padding: ${theme.SpacingBase16};
      }
    `}
`;

export const SheetWrapper = styled(Container)`
  ${({
    theme,
    $isAlwaysModal,
    $overflowY,
    $zIndex,
    $hasFooter,
  }: ExtendedTheme<{ $isAlwaysModal: boolean; $overflowY: string; $zIndex: number; $hasFooter: boolean }>) => css`
    > div {
      z-index: ${$zIndex};
    }

    .action-modal-header,
    .action-modal-content,
    .action-modal-footer {
      z-index: ${$zIndex};
      background-color: transparent;
      position: relative;
      border: none;
      box-shadow: none;
      padding: 0;
      margin: 0;
    }

    .action-modal-header {
      cursor: auto;
      svg {
        display: none;
      }
    }

    .action-modal-footer {
      ${!$hasFooter &&
      css`
        display: none;
      `}
      ${!$isAlwaysModal &&
      css`
        @media (max-width: 640px) {
          box-shadow: ${theme.TabsActiveTabShadowOffsetWidth}px -${theme.TabsActiveTabShadowOffsetHeight}px ${theme.TabsActiveTabShadowRadius}px
            ${getRgba(theme.TabsActiveTabShadowColor, theme.TabsActiveTabShadowOpacity)};
        }
      `}
    }

    div[role='dialog'],
    .action-modal-content,
    .action-modal-content > div {
      overflow: unset;
      ${$overflowY && `overflow-y: ${$overflowY};`}
    }

    .action-modal-backdrop {
      background-color: ${getRgba(theme.TabsActiveTabShadowColor, theme.OpacityBaseMd)};
      padding: 0;
      margin: 0;
      border-radius: 0;
      clip-path: none;
      transform: unset;
      opacity: 1 !important;
    }

    div[role='dialog'] {
      height: auto;
      max-height: 90vh;
      background-color: ${theme.ColorBaseWhite100};

      ${$isAlwaysModal
        ? css`
            margin: ${theme.SpacingBase24};
          `
        : css`
            @media (min-width: 641px) {
              margin: ${theme.SpacingBase24};
            }
          `}

      @media (min-width: ${theme.BreakpointsMd}px) {
        max-height: 70vh;
        min-width: 500px;
        max-width: 800px;
        width: 50%;
      }

      @media (max-width: ${theme.BreakpointsMd}px) and (min-width: 641px) {
        min-width: 280px;
        max-width: 100%;
      }
    }
  `}
`;
