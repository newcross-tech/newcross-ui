import styled, { css } from 'styled-components';
import { RadioGroupProps } from './RadioGroup';
import { ExtendedTheme } from '../../../types';
import { RadioValue } from '../Radio/Radio.types';

export const Container = styled.div<RadioGroupProps<RadioValue>>`
  ${({ direction }) => css`
    display: flex;
    flex-direction: ${direction === 'column' && 'column'};
  `}
`;

export const RadioItem = styled.div`
  ${({ theme, direction, variant }: ExtendedTheme<Omit<RadioGroupProps<RadioValue>, 'children'>>) =>
    variant === 'secondary' &&
    css`
      ${direction === 'column' &&
      css`
        &:not(:last-child) {
          margin-bottom: ${theme.SpacingBase8};
        }
      `}
      ${direction === 'row' &&
      css`
        &:not(:last-child) {
          margin-right: ${theme.SpacingBase8};
        }
      `}
    `}
`;
