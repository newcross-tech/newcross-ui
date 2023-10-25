import styled, { css } from 'styled-components';
import ToggleButton from '../ToggleButton';
import { StyledPaginationButtonProps, StyledPaginationProps } from './Pagination.types';

export const Pagination = styled.div<StyledPaginationProps>`
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
  ${({ fullWidth }) =>
    fullWidth &&
    css`
      justify-content: space-between;
      width: 100%;
    `}
`;

export const PaginationButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

export const PaginationButton = styled(ToggleButton)<StyledPaginationButtonProps>`
  display: flex;
  width: 40px;
  height: 48px;
  padding: 0;
  align-items: center;
  justify-content: center;
  margin: 0 4px;

  ${({ disabled }) =>
    !disabled &&
    css`
      cursor: pointer;
    `}
`;
