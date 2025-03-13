import styled from 'styled-components';
import ToggleButton from '../ToggleButton';

export const PaginationButton = styled(ToggleButton)(({ theme }) => ({
  width: theme.BaselineSpacesSpace48,
  height: theme.BaselineSpacesSpace48,
}));
