import styled, { css } from 'styled-components';
import { ThemeDesignTokens } from '../../theme/ThemeProvider';
import { ExtendedTheme } from '../../types/Theme';
import { CheckboxProps } from './Checkbox';
import { CheckboxPropsExtended, CheckboxType, hasErrorProps, isSelectedProps } from './Checkbox.types';

export const Checkbox = styled.div<CheckboxProps>`
  ${({ theme, disabled }: ExtendedTheme<CheckboxProps>) => css`
    display: flex;
    cursor: ${!disabled && 'pointer'};
    margin-top: ${theme.CheckboxMarginVertical};
    margin-bottom: ${theme.CheckboxMarginVertical};
  `};
`;

export const Label = styled.div<CheckboxProps>`
  ${({ theme, disabled }: ExtendedTheme<CheckboxProps>) => css`
    color: ${disabled ? theme.CheckboxLabelDisabledColor : theme.CheckboxLabelColor};
    margin-left: ${theme.CheckboxLabelMarginHorizontal};
    margin-right: ${theme.CheckboxLabelMarginHorizontal};
  `};
`;

const getHasErrorStyles = ({ theme, selected, type }: ExtendedTheme<hasErrorProps>) => css`
  outline-color: ${theme.CheckboxErrorBackgroundColor};
  color: ${theme.CheckboxErrorCheckmarkColor};
  background-color: ${selected && theme.CheckboxErrorBackgroundColor};
  ${type === CheckboxType.INDETERMINATE &&
  css`
    color: ${theme.CheckboxErrorBackgroundColor};
    background-color: ${theme.CheckboxBackgroundColor};
  `}
`;

const getDisabledStyles = (theme: ThemeDesignTokens) => css`
  outline-color: ${theme.CheckboxDisabledBorderColor};
  color: ${theme.CheckboxDisabledCheckmarkColor};
  background-color: ${theme.CheckboxDisabledBackgroundColor};
`;

const getSelectedStyled = ({ theme, type }: ExtendedTheme<isSelectedProps>) => css`
  background-color: ${theme.CheckboxSelectedBackgroundColor};
  background-color: ${type === CheckboxType.INDETERMINATE && theme.CheckboxBackgroundColor};
`;

export const Box = styled.div<CheckboxPropsExtended>`
  ${({ theme, hasError, disabled, selected, type }: ExtendedTheme<CheckboxPropsExtended>) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: ${theme.CheckboxHeight};
    min-width: ${theme.CheckboxWidth};
    outline: solid ${theme.CheckboxBorderWidth};
    border-radius: ${theme.CheckboxBorderRadius};
    color: ${theme.CheckboxSelectedCheckmarkColor};
    background-color: ${theme.CheckboxBackgroundColor};

    ${!hasError && selected && getSelectedStyled({ theme, type })};
    ${hasError && getHasErrorStyles({ theme, selected, type })};
    ${disabled && getDisabledStyles(theme)};
  `};
`;
