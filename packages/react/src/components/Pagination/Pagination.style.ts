import styled, { css } from 'styled-components';
import ToggleButton from '../ToggleButton';
import { Theme } from '../../types';

export const PaginationButton = styled(ToggleButton)`
  ${({ theme }: Theme) => css`
    width: ${theme.BaselineSpacesSpace48};
    height: ${theme.BaselineSpacesSpace48};
  `};
`;
