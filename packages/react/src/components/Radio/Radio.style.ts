import styled, { css } from 'styled-components';
import { ExtendedTheme } from '../../types';
import { getTabbedStateStyles } from '../../utils';
import HaloLabel, { LabelProps } from '../Label';
import { RadioValue } from './Radio.types';
import { RadioProps } from './Radio';
import { ThemeDesignTokens } from '../../theme/ThemeProvider';
import Container from '../Container';

const getLabelColor = (theme: ThemeDesignTokens, hasError?: boolean, disabled?: boolean) => {
  if (disabled) return theme.ElementsTextDisabled;
  return hasError ? theme.ElementsTextDangerError : theme.ElementsTextDefaultDark;
};

export const Label = styled(HaloLabel)<LabelProps & Pick<RadioProps<RadioValue>, 'hasError' | 'disabled'>>`
  ${({ theme, hasError, disabled }: ExtendedTheme<Pick<RadioProps<RadioValue>, 'hasError' | 'disabled'>>) => css`
    color: ${getLabelColor(theme, hasError, disabled)};
  `}
`;

export const Radio = styled(Container)<
  ExtendedTheme<Pick<RadioProps<RadioValue>, 'disabled' | 'selected' | 'variant' | 'hasError' | 'onChange'>>
>`
  ${({ theme, hasError }) => css`
    & input[type='radio'] {
      margin-top: 0;
      margin-right: 0;
      margin-left: 0;
      flex-shrink: 0;
      -webkit-appearance: none;
      width: ${theme.BaselineSpacesSpace24};
      height: ${theme.BaselineSpacesSpace24};
      border: ${theme.BorderBaseWidthSm} solid
        ${hasError ? theme.ElementsBorderDangerError : theme.ElementsBorderHighlightStrong};
      border-radius: ${theme.BorderBaseRadiusRounded};
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 0.2s ease-in-out;
      background: ${theme.ElementsSurfaceDefault};

      ${getTabbedStateStyles()}

      &:before {
        content: '';
        display: block;
        width: ${theme.BaselineSpacesSpace16};
        height: ${theme.BaselineSpacesSpace16};
        border-radius: 50%;
      }

      &:checked:before {
        background: ${hasError ? theme.ElementsSurfaceActionDanger : theme.ElementsSurfaceActionDefault};
      }

      &:not(:disabled) {
        &:active {
          opacity: 0.5;
        }

        & + ${Label} {
          cursor: pointer;
        }

        &:hover {
          &:checked {
            background: ${hasError ? theme.ElementsSurfaceDanger : theme.ElementsSurfaceActionHoverSecondary};
          }

          &:before {
            content: '';
            display: block;
            width: ${theme.BaselineSpacesSpace16};
            height: ${theme.BaselineSpacesSpace16};
            border-radius: ${theme.BorderBaseRadiusRounded};
            background: ${hasError ? theme.ElementsSurfaceDanger : theme.ElementsSurfaceActionHover};
            transition: 0.2s ease-in-out;
          }

          &:checked:before {
            transition: 0.2s ease-in-out;
            background: ${hasError ? theme.ElementsSurfaceActionDanger : theme.ElementsSurfaceActionDefault};
          }
        }
      }

      &:disabled {
        cursor: default;
        border: ${theme.BorderBaseWidthSm} solid ${theme.ElementsBorderDisabled};

        &:checked:before {
          background: ${theme.ElementsSurfaceDisabled};
        }
      }
    }
  `}

  ${({ theme, variant, selected, disabled, hasError }) =>
    variant === 'secondary' &&
    css`
      border: ${theme.BorderBaseWidthSm} solid
        ${hasError ? theme.ElementsBorderDangerError : theme.ElementsBorderActionDefault};
      border-radius: ${theme.BorderBaseRadiusMd};
      background: ${theme.ElementsSurfaceDefault};
      transition: 0.2s ease-in-out;

      ${!disabled &&
      css`
        cursor: pointer;
        &:hover {
          background: ${hasError ? theme.ElementsSurfaceDanger : theme.ElementsSurfaceActionHoverSecondary};
        }
      `}

      ${selected &&
      css`
        border: ${theme.BorderBaseWidthSm} solid
          ${hasError ? theme.ElementsBorderDangerError : theme.ElementsBorderActionDefault};
      `}

      ${disabled &&
      css`
        border: ${theme.BorderBaseWidthSm} solid ${theme.ElementsBorderDisabled};
        background: ${theme.ElementsSurfaceDefault};
      `}
    `};
`;
