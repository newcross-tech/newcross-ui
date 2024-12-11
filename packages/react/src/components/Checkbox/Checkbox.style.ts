import styled, { css } from 'styled-components';
import { ThemeDesignTokens } from '../../theme/ThemeProvider';
import { ExtendedTheme } from '../../types';
import { CheckboxProps } from './Checkbox';
import { CheckboxPropsExtended, hasErrorProps, isSelectedProps, UserInteractionType } from './Checkbox.types';
import Container from '../Container';

const getHoverStyles = ({ theme, disabled, hasError }: ExtendedTheme<CheckboxProps>, type: 'background' | 'color') => {
  if (disabled) return;

  if (type === 'background') {
    return !hasError ? theme.ElementsSurfaceActionHover : theme.ElementsSurfaceDanger;
  }

  if (type === 'color') {
    return !hasError ? theme.ElementsIconActionDefault : theme.ElementsIconDangerError;
  }
};

export const Checkbox = styled(Container)<CheckboxProps & UserInteractionType>`
  ${({ theme, disabled, hasError }: ExtendedTheme<CheckboxProps>) => css`
    cursor: ${!disabled && 'pointer'};

    &:hover ${Box} {
      background-color: ${getHoverStyles({ theme, disabled, hasError }, 'background')};
      color: ${getHoverStyles({ theme, disabled, hasError }, 'color')};
    }
  `};
`;

const getHasErrorStyles = ({ theme, selected, type }: ExtendedTheme<hasErrorProps>) => css`
  color: ${theme.ElementsIconActionDanger};
  border-color: ${theme.ElementsBorderDangerError};
  background-color: ${selected && theme.ElementsSurfaceActionDanger};

  ${type === 'indeterminate' &&
  css`
    color: ${theme.ElementsIconActionDanger};
    background-color: ${theme.ElementsSurfaceActionDanger};
  `}
`;

const getDisabledStyles = (theme: ThemeDesignTokens) => css`
  color: ${theme.ElementsIconDisabled};
  background-color: ${theme.ElementsSurfaceDisabled};
  border-color: ${theme.ElementsBorderDisabled};
`;

const getSelectedStyled = ({ theme }: ExtendedTheme<isSelectedProps>) => css`
  background-color: ${theme.ElementsSurfaceActionDefault};
`;

export const Box = styled(Container)<CheckboxPropsExtended>`
  ${({ theme, hasError, disabled, selected, type }: ExtendedTheme<CheckboxPropsExtended>) => css`
    height: ${theme.BaselineSpacesSpace24};
    min-width: ${theme.BaselineSpacesSpace24};
    border: solid ${theme.BorderBaseWidthSm};
    border-radius: ${theme.BorderBaseRadiusSm};
    color: ${theme.ElementsIconDefaultDark};
    background-color: ${theme.ElementsSurfaceDefault};
    transition: 0.2s ease-in-out;

    ${!hasError && selected && getSelectedStyled({ theme, type })};
    ${hasError && getHasErrorStyles({ theme, selected, type })};
    ${disabled && getDisabledStyles(theme)};
  `};
`;
