import styled, { css } from 'styled-components';
import ToggleButton from '../ToggleButton';
import { StyledPaginationButtonProps } from './Pagination.types';
import { Theme } from '../../types';

export const PaginationButton = styled(ToggleButton)<StyledPaginationButtonProps>`
  ${({ theme }: Theme) => css`
    width: ${theme.BaselineSpacesSpace48};
    height: ${theme.BaselineSpacesSpace48};
  `};
`;
