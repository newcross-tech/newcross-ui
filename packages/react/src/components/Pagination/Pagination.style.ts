import styled, { css } from 'styled-components';
import ToggleButton from '../ToggleButton';
import { StyledPaginationButtonProps, StyledPaginationProps } from './Pagination.types';
import { ExtendedTheme } from '../../types';

export const Pagination = styled.div<StyledPaginationProps>`
  ${({ theme, fullWidth }: ExtendedTheme<StyledPaginationProps>) => css`
    display: flex;
    align-items: center;
    padding: ${theme.SpacingBase0};
    margin: ${theme.SpacingBase0};

    ${
      fullWidth &&
      css`
        justify-content: space-between;
        width: 100%;
      `
    }}
    `};
`;

export const PaginationButtonsContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: ${theme.SpacingBase0} auto;
  `};
`;

export const PaginationButton = styled(ToggleButton)<StyledPaginationButtonProps>`
  ${({ theme, disabled }: ExtendedTheme<StyledPaginationButtonProps>) => css`
    display: flex;
    width: ${theme.SpacingBase40};
    height: ${theme.SpacingBase48};
    padding: ${theme.SpacingBase0};
    align-items: center;
    justify-content: center;
    margin: ${theme.SpacingBase0} ${theme.SpacingBase4};

    ${!disabled &&
    css`
      cursor: pointer;
    `}
  `};
`;
