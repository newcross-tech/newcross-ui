import styled, { css } from 'styled-components';
import { RadioGroupProps } from './RadioGroup';
import { ExtendedTheme } from '../../types/Theme';

export const Container = styled.div<RadioGroupProps>`
  ${({ direction }: RadioGroupProps) => css`
    display: flex;
    flex-direction: ${direction === 'column' && 'column'};
  `}
`;

export const RadioItem = styled.div`
  ${({ theme, direction, variant }: ExtendedTheme<Omit<RadioGroupProps, 'children'>>) =>
    variant === 'secondary' &&
    css`
      ${direction === 'column' &&
      css`
        margin-bottom: ${theme.SpacingBase8};
      `}
      ${direction === 'row' &&
      css`
        margin-right: ${theme.SpacingBase8};
      `}
    `}
`;
