import styled, { css } from 'styled-components';
import { RadioGroupProps } from './RadioGroup';

export const Container = styled.div<RadioGroupProps>`
  ${({ direction }: RadioGroupProps) => css`
    display: flex;
    flex-direction: ${direction === 'column' && 'column'};
  `}
`;
