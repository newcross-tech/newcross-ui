import styled, { css } from 'styled-components';
import Container from '../Container';
import Typography from '../Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getRgba } from '../../utils/getRgba';
import { ExtendedTheme, Theme } from '../../types';

export const IndicatorWrapper = styled(Container)`
  ${({ theme, $useModal }: ExtendedTheme<{ $useModal: boolean }>) => css`
    display: none;

    @media (max-width: 640px) {
      display: ${$useModal ? 'none' : 'flex'};
      box-shadow: ${theme.TabsActiveTabShadowOffsetWidth}px ${theme.TabsActiveTabShadowOffsetHeight}px
        ${theme.TabsActiveTabShadowRadius}px
        ${getRgba(theme.TabsActiveTabShadowColor, theme.TabsActiveTabShadowOpacity)};
    }
  `}
`;

export const Indicator = styled(Container)`
  ${({ theme, $useModal }: ExtendedTheme<{ $useModal: boolean }>) =>
    !$useModal &&
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
  text-align: center;

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
  ${({ theme, $useModal }: ExtendedTheme<{ $useModal: boolean }>) => css`
    ${$useModal && `border-bottom: 1px solid ${theme.ColorBaseGrey200};`}
    @media (min-width: 640px) {
      border-bottom: 1px solid ${theme.ColorBaseGrey200};
    }
  `}
`;

export const Icon = styled(FontAwesomeIcon)`
  ${({ $useModal }: ExtendedTheme<{ $useModal: boolean }>) => css`
    cursor: pointer;
    @media (min-width: 640px) {
      display: block !important;
    }

    @media (max-width: 640px) {
      display: ${$useModal ? 'block !important' : 'none'};
    }
  `}
`;

export const Subtitle = styled(Typography)`
  padding-top: ${({ theme }) => theme.SpacingBase16};

  @media (max-width: 640px) {
    padding: 0;

    font-size: ${({ theme }: Theme) => theme.TypographyFontSize14};
    line-height: ${({ theme }: Theme) => theme.TypographyLineHeight20};
  }
`;

export const ContentWapper = styled(Container)`
  ${({
    theme,
    $useModal,
    $hasGreyBackground,
    $hasPadding,
  }: ExtendedTheme<{
    $useModal: boolean;
    $hasGreyBackground: boolean;
    $hasPadding: boolean;
  }>) =>
    !$useModal &&
    css`
      @media (max-width: 640px) {
        padding: ${theme.SpacingBase0} ${theme.SpacingBase16} ${theme.SpacingBase24} ${theme.SpacingBase16};
        ${$hasPadding && `padding-top: ${theme.SpacingBase16}`}
        ${$hasGreyBackground && `background-color: ${theme.ColorBaseGrey500};`}
      }
    `}
`;

export const FooterWrapper = styled(Container)`
  ${({ theme, $useModal }: ExtendedTheme<{ $useModal: boolean }>) =>
    !$useModal &&
    css`
      @media (max-width: 640px) {
        padding: ${theme.SpacingBase16};
        box-shadow: ${theme.TabsActiveTabShadowOffsetWidth}px -${theme.TabsActiveTabShadowOffsetHeight}px ${theme.TabsActiveTabShadowRadius}px
          ${getRgba(theme.TabsActiveTabShadowColor, theme.TabsActiveTabShadowOpacity)};
      }
    `}
`;

export const SheetWrapper = styled(Container)`
  > div {
    z-index: 10000;
  }

  .action-modal-header,
  .action-modal-content,
  .action-modal-footer {
    background-color: transparent;
    position: relative;
    border: none;
    box-shadow: none;
    padding: 0;
    margin: 0;
    overflow: visible;
  }
  .action-modal-header {
    cursor: auto;
    svg {
      display: none;
    }
  }

  .action-modal-content > div {
    overflow: unset;
  }

  .action-modal-backdrop {
    background-color: ${({ theme }: Theme) => getRgba(theme.TabsActiveTabShadowColor, theme.OpacityBaseMd)};
    padding: 0;
    margin: 0;
    border-radius: 0;
    clip-path: none;
    transform: unset;
  }

  div[role='dialog'] {
    height: auto;
    overflow: unset;
    background-color: ${({ theme }: Theme) => theme.ColorBaseWhite100};

    ${({ theme, $useModal }: ExtendedTheme<{ $useModal: boolean }>) =>
      $useModal &&
      css`
        margin: ${theme.SpacingBase24};
      `}
    @media (min-width: 641px) {
      max-width: 640px;
    }
  }
`;
