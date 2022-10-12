import styled, { css } from 'styled-components';
import Typography from '../Typography';
import { Theme } from '../../types/Theme';

export const Label = styled(Typography)`
  ${({ theme }: Theme) => css`
    padding-left: ${theme.RadioPaddingLeft};
    padding-right: ${theme.RadioPaddingRight};
    color: ${theme.RadioColor};
  `}
`;

export const Radio = styled.div`
  display: flex;
  align-items: center;

  ${({ theme }: Theme) => css`
    padding: ${theme.RadioPaddingRight};

    & input[type='radio'] {
      -webkit-appearance: none;
      width: ${theme.RadioWidth};
      height: ${theme.RadioHeight};
      border: ${theme.RadioBorderWidth} solid ${theme.RadioBorderColor};
      border-radius: 50%;
      outline: none;
      cursor: pointer;

      &:before {
        content: '';
        display: block;
        width: 60%;
        height: 60%;
        margin: 20% auto;
        border-radius: 50%;
      }

      &:checked:before {
        background: ${theme.RadioSelectedBackgroundColor};
      }

      &:active {
        opacity: ${theme.OpacityBaseMd};
      }

      &:disabled {
        cursor: default;
        border: ${theme.RadioBorderWidth} solid ${theme.RadioDisabledBorderColor};
        color: ${theme.RadioSelectedDisabledBackgroundColor};

        &:checked:before {
          background: ${theme.RadioSelectedDisabledBackgroundColor};
        }

        &:active {
          opacity: 1;
        }
      }
    }
  `}
`;
