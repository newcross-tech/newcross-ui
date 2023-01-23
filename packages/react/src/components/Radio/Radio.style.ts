import styled, { css } from 'styled-components';
import { Theme } from '../../types/Theme';
import { getTabbedStateStyles } from '../../utils';
import HaloLabel, { LabelProps } from '../Label';

export const Label = styled(HaloLabel)<LabelProps>`
  ${({ theme }: Theme) => css`
    color: ${theme.RadioColor};
    margin-left: ${theme.CheckboxLabelMarginHorizontal};
  `}
`;

export const Radio = styled.div`
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
`;
