import styled, { css } from 'styled-components';
import { ExtendedTheme, Theme } from '../../types/Theme';
import { ContainerProps, MessageTextProps } from './TextInput.types';
import Typography from '../Typography';
import { ThemeDesignTokens } from '../../theme/ThemeProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const getActivePaddingStyles = (theme: ThemeDesignTokens) => css`
  padding-top: calc(${theme.TextInputPaddingVertical} - 1px);
  padding-bottom: calc(${theme.TextInputPaddingVertical} - 1px);
`;

export const Label = styled(Typography)`
  ${({ theme }: Theme) => css`
    margin-bottom: ${theme.TextInputMarginTop};
  `}
`;

export const Container = styled.div<ExtendedTheme<ContainerProps>>`
  ${({ theme, hasError, search, disabled, isFocused }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: ${theme.TextInputBorderWidth} solid ${theme.TextInputBorderColor};
    border-radius: ${theme.TextInputBorderRadius};
    background-color: ${theme.TextInputBackgroundColor};

    ${isFocused &&
    css`
      border: ${theme.TextInputSelectedBorderWidth} solid ${theme.TextInputSelectedBorderColor};
    `}
    ${hasError &&
    css`
      border: ${theme.TextInputSelectedBorderWidth} solid ${theme.TextInputErrorColor};
    `}
    ${search &&
    css`
      border-radius: ${theme.TextInputSearchBarBorderRadius};
    `}
    ${disabled &&
    css`
      background-color: ${theme.TextInputDisabledBackgroundColor};
    `}
    & input {
      width: 90%;
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
      ${(isFocused || hasError) &&
      css`
        ${getActivePaddingStyles(theme)};
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
