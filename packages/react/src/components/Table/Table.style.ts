import { TableStyles } from 'react-data-table-component';
import styled, { css, CSSObject } from 'styled-components';
import { ThemeDesignTokens } from '../../theme/ThemeProvider';
import Container from '../Container';
import { Theme } from '../../types';

const getFixedColumnStyles = (isColumnFixed: boolean): CSSObject => ({
  position: isColumnFixed ? 'sticky' : 'static',
  left: isColumnFixed ? 0 : 'auto',
  zIndex: isColumnFixed ? 1 : 0,
});

export const getCustomStyles = (theme: ThemeDesignTokens, $isFirstColumnFixed: boolean): TableStyles => ({
  table: {
    style: {
      borderBottom: `1px solid ${theme.ColorNeutralGrey300}`,
      backgroundColor: 'transparent',
    },
  },
  headRow: {
    style: {
      backgroundColor: 'transparent',
    },
  },
  headCells: {
    style: {
      backgroundColor: theme.BrandColorTertiary,
      '&:not(:first-child)': {
        borderLeft: `1px solid ${theme.ColorBaseGrey100}`,
      },
      '&:first-child': {
        borderTopLeftRadius: theme.BorderBaseRadiusLg,
        ...getFixedColumnStyles($isFirstColumnFixed),
      },
      '&:last-child': {
        borderTopRightRadius: theme.BorderBaseRadiusLg,
      },
    },
  },
  cells: {
    style: {
      '&:first-child': {
        borderLeft: `1px solid ${theme.ColorNeutralGrey300}`,
        backgroundColor: theme.ColorNeutralWhite,
        ...getFixedColumnStyles($isFirstColumnFixed),
      },
      borderRight: `1px solid ${theme.ColorNeutralGrey300}`,
    },
  },
});

export const PaginationContainer = styled(Container)`
  ${({ theme }: Theme) => css`
    @media (max-width: ${theme.GridMobileBreakpoint}px) {
      gap: ${theme.SpacingBase32};
      flex-direction: column-reverse;
    }
  `}
`;
