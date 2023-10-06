import Typography from '../Typography';
import styled, { css } from 'styled-components';
import { getHaloValue } from '../../utils/getHaloValue';
import { ExtendedTheme, Theme } from '../../types/Theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getScrollbarStyles } from '../../utils/css/getScrollbarStyles';
import {
  ContainerProps,
  MessageTextProps,
  PropStylesTypes,
  StyledTextAreaProps,
  TextAreaContainerProps,
} from './TextInput.types';
import { ThemeDesignTokens } from '../../theme/ThemeProvider';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const getCommonStateStyles = ({ theme, hasError, disabled }: PropStylesTypes) =>
  css`
    ${hasError &&
    css`
      border: ${theme.TextInputWebSelectedBorderWidth} solid ${theme.TextInputErrorColor};
    `}
    ${disabled &&
    css`
      background-color: ${theme.TextInputDisabledBackgroundColor};
    `}
  `;

const getFocusedStyles = (theme: ThemeDesignTokens) =>
  css`
    border: ${theme.TextInputWebSelectedBorderWidth} solid ${theme.TextInputSelectedBorderColor};
  `;

export const Container = styled.div<ExtendedTheme<ContainerProps>>`
  ${({ theme, hasError, fullWidth, search, disabled, isFocused }: ExtendedTheme<ContainerProps>) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: ${theme.TextInputBorderWidth} solid ${theme.TextInputBorderColor};
    border-radius: ${theme.TextInputBorderRadius};
    background-color: ${theme.TextInputBackgroundColor};
    ${getCommonStateStyles({ theme, hasError, isFocused, disabled })}
    ${isFocused && getFocusedStyles(theme)};
    ${search &&
    css`
      border-radius: ${theme.TextInputSearchBarBorderRadius};
    `}

    &
      input {
      width: ${fullWidth ? '100%' : '90%'};
      border: none;
      background-color: transparent;
      outline-width: 0;
      font-family: ${theme.TextInputFontFamily};
      font-size: ${theme.TextInputFontSize};
      line-height: ${theme.TextInputLineHeight};
      padding: ${theme.TextInputPaddingVertical} ${theme.TextInputPaddingHorizontal};

      ${search &&
      css`
        padding-right: ${theme.TextInputSearchBarPaddingHorizontal};
        padding-left: ${theme.TextInputSearchBarPaddingHorizontal};
      `}

      + ${RightIconContainer} {
        ${!disabled &&
        css`
          cursor: pointer;
        `}
      }
    }
  `}
`;

export const LeftIconContainer = styled.div`
  justify-content: center;
  ${({ theme }: Theme) => css`
    padding-left: ${theme.TextInputRightIconPaddingHorizontal};
  `}
`;

export const SearchIcon = styled(FontAwesomeIcon)`
  ${({ theme }: Theme) => css`
    color: ${theme.TextInputSearchBarSearchIconColor};
  `}
`;

export const RightIconContainer = styled.div`
  justify-content: center;
  ${({ theme }: Theme) => css`
    padding-right: ${theme.TextInputRightIconPaddingHorizontal};
    padding-left: ${theme.TextInputRightIconPaddingHorizontal};
  `}
`;

export const PasswordIcon = styled(FontAwesomeIcon)`
  ${({ theme }: Theme) => css`
    color: ${theme.TextInputRightIconColor};
  `}
`;

export const ValidIcon = styled(FontAwesomeIcon)`
  ${({ theme }: Theme) => css`
    color: ${theme.TextInputValidationCheckColor};
  `}
`;

export const CloseIcon = styled(FontAwesomeIcon)`
  ${({ theme }: Theme) => css`
    color: ${theme.TextInputSearchBarCloseIconColor};
  `}
`;

export const MessageText = styled(Typography)<MessageTextProps & Theme>`
  ${({ theme, hasError }) => css`
    color: ${theme.TextInputHelperTextColor};
    margin-top: ${theme.TextInputMarginBottom};
    padding-right: ${theme.TextInputHelperTextPaddingHorizontal};
    padding-left: ${theme.TextInputHelperTextPaddingHorizontal};

    ${hasError &&
    css`
      color: ${theme.TextInputErrorColor};
    `}
  `}
`;

export const TextAreaContainer = styled.div<TextAreaContainerProps>`
  display: flex;
  flex-direction: column;
  ${({ fullWidth }) =>
    !fullWidth &&
    css`
      width: fit-content;
    `};
`;

export const TextArea = styled.textarea<StyledTextAreaProps>`
  ${({ theme, hasError, disabled, fullWidth }: ExtendedTheme<StyledTextAreaProps>) => css`
    resize: none;
    border: none;
    outline: none;
    cursor: auto;
    overflow-y: auto;
    border-radius: ${theme.CardBorderRadius};
    margin-top: ${theme.SpacingBase4};
    padding: ${theme.SpacingBase16};
    height: ${+getHaloValue(theme.SpacingBase64) * 2}rem;
    ${!fullWidth &&
    css`
      width: ${+getHaloValue(theme.SpacingBase8) * 32.25}rem;
    `}
    font-family: ${theme.TextInputFontFamily};
    border: ${theme.TextInputWebSelectedBorderWidth} solid ${theme.TextInputBorderColor};

    ${getScrollbarStyles()}
    ${getCommonStateStyles({ theme, hasError, disabled })}

    ${!disabled &&
    css`
      &:focus,
      &:focus-visible {
        ${getFocusedStyles(theme)}
      }
    `}
  `};
`;

export const LengthInfo = styled(Typography)`
  display: flex;
  align-self: flex-end;
  ${({ theme }: Theme) => css`
    color: ${theme.ColorBaseGrey100};
    margin-top: ${theme.SpacingBase4};
    margin-right: ${theme.SpacingBase8};
  `};
`;
