import styled, { css } from 'styled-components';
import { ExtendedTheme, Theme } from '../../types/Theme';
import { getTabbedStateStyles } from '../../utils';
import HaloLabel, { LabelProps } from '../Label';
import { SelectedProps } from './Radio.types';

export const Label = styled(HaloLabel)<LabelProps>`
  ${({ theme }: Theme) => css`
    color: ${theme.RadioColor};
    margin-left: ${theme.CheckboxLabelMarginHorizontal};
  `}
`;

export const Radio = styled.div<SelectedProps>`
  display: flex;
  align-items: center;

  ${({ theme }: Theme) => css`
    padding: ${theme.RadioPaddingRight};
    & input[type='radio'] {
      margin-top: 0;
      margin-right: 0;
      margin-left: 0;
      flex-shrink: 0;
      -webkit-appearance: none;
      width: ${theme.RadioWidth};
      height: ${theme.RadioHeight};
      border: ${theme.RadioBorderWidth} solid ${theme.RadioBorderColor};
      border-radius: 50%;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;

      ${getTabbedStateStyles()}

      &:before {
        content: '';
        display: block;
        width: ${theme.RadioSelectedWidth};
        height: ${theme.RadioSelectedHeight};
        border-radius: 50%;
      }

      &:checked:before {
        background: ${theme.RadioSelectedBackgroundColor};
      }

      &:not(:disabled) {
        &:active {
          opacity: 0.5;
        }

        & + ${Label} {
          cursor: pointer;
        }
      }

      &:disabled {
        cursor: default;
        border: ${theme.RadioBorderWidth} solid ${theme.RadioDisabledBorderColor};
        color: ${theme.RadioSelectedDisabledBackgroundColor};

        &:checked:before {
          background: ${theme.RadioSelectedDisabledBackgroundColor};
        }
      }
    }
  `}

  ${({ theme, variant, selected, disabled }: ExtendedTheme<SelectedProps>) =>
    variant === 'secondary' &&
    css`
      border: ${theme.RadioVariantSecondaryBorderWidth} solid ${theme.RadioVariantSecondaryBorderColor};
      border-radius: ${theme.RadioVariantSecondaryBorderRadius};
      padding: ${theme.RadioVariantSecondaryPadding};

      ${selected &&
      css`
        border: ${theme.RadioVariantSecondaryBorderWidth} solid ${theme.RadioVariantSecondaryBackgroundBorderColor};
        background: ${theme.RadioVariantSecondaryBackgroundColor};
      `}

      ${disabled &&
      css`
        border: ${theme.RadioVariantSecondaryBorderWidth} solid ${theme.RadioDisabledBorderColor};
        background: none;
      `}
    `};
`;
