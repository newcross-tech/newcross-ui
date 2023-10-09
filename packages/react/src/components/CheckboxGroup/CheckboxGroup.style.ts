import styled, { css } from 'styled-components';
import { Theme } from '../../types';

export const CheckboxList = styled.div`
  ${({ theme }: Theme) => css`
    margin-left: ${theme.SpacingBase24};
  `};
`;
