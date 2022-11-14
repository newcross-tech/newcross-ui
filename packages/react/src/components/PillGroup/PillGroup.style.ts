import styled, { css } from 'styled-components';
import { PillGroupProps } from './PillGroup';

export const Container = styled.div<PillGroupProps>`
  ${({ direction }: PillGroupProps) => css`
    display: flex;
    flex-direction: ${direction === 'column' && 'column'};
  `}
`;
