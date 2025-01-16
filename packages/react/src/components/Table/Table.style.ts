import { TableStyles } from 'react-data-table-component';
import styled, { CSSObject } from 'styled-components';
import Container from '../Container';
import { breakpoint } from '../../utils/css';
import { ThemeDesignTokens } from '../../theme/ThemeProvider';

const getFixedColumnStyles = (isColumnFixed: boolean): CSSObject => ({
  position: isColumnFixed ? 'sticky' : 'static',
  left: isColumnFixed ? 0 : 'auto',
  zIndex: isColumnFixed ? 1 : 0,
});

export const getCustomStyles = ({
  theme,
  $isFirstColumnFixed,
}: {
  theme: ThemeDesignTokens;
  $isFirstColumnFixed: boolean;
}): TableStyles => ({
  table: {
    style: {
      border: `${theme.BorderBaseWidthSm} solid ${theme.ElementsBorderDefault}`,
      backgroundColor: 'transparent',
      borderRadius: theme.BorderBaseRadiusMd,
      overflow: 'hidden',
    },
  },
  headCells: {
    style: {
      backgroundColor: theme.ElementsSurfaceDefaultSecondary,
      '&:not(:first-child)': {
        borderLeft: `${theme.BorderBaseWidthSm} solid ${theme.ElementsBorderDefault}`,
      },
      '&:first-child': {
        ...getFixedColumnStyles($isFirstColumnFixed),
      },
    },
  },
  cells: {
    style: {
      '&:first-child': {
        backgroundColor: theme.ElementsSurfaceDefault,
        ...getFixedColumnStyles($isFirstColumnFixed),
      },
      '&:not(:last-child)': {
        borderRight: `${theme.BorderBaseWidthSm} solid ${theme.ElementsBorderDefault}`,
      },
    },
  },
});

export const PaginationContainer = styled(Container)`
  ${breakpoint.sm`
    flex-direction: column-reverse;
    align-items: center;
  `}
`;
