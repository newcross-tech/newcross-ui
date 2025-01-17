import { useCallback } from 'react';
import DataTable from 'react-data-table-component';
import PaginationAdapter from './PaginationAdapter';
import { getCustomStyles } from './Table.style';
import useTheme from '../../hooks/useTheme';
import Container from '../Container';
import {
  TABLE_DEFAULT_ROWS_PER_PAGE_OPTION,
  TABLE_RECORDS_PER_PAGE_OPTIONS,
} from './constants';
import { PaginationComponent } from 'react-data-table-component/dist/DataTable/types';
import { OptionalProps } from '../../types';
import { TablePropsStrict } from './Table.types';

export type TableProps<T> = OptionalProps<
  TablePropsStrict<T>,
  | 'pagination'
  | 'paginationPerPage'
  | 'paginationRowsPerPageOptions'
  | '$isFirstColumnFixed'
>;

const normalizeTableProps = <T,>(
  _props: TableProps<T>
): TablePropsStrict<T> => ({
  pagination: _props.pagination ?? true,
  $isFirstColumnFixed: _props.$isFirstColumnFixed ?? false,
  paginationRowsPerPageOptions:
    _props.paginationRowsPerPageOptions ?? TABLE_RECORDS_PER_PAGE_OPTIONS,
  paginationPerPage:
    _props.paginationPerPage ?? TABLE_DEFAULT_ROWS_PER_PAGE_OPTION,
  ..._props,
});

function Table<T>(_props: TableProps<T>) {
  const {
    columns,
    data,
    pagination,
    $isFirstColumnFixed,
    paginationRowsPerPageOptions,
    paginationPerPage,
    ...props
  } = normalizeTableProps(_props);

  const theme = useTheme();

  const PaginationComponent: PaginationComponent = useCallback(
    (props) => (
      <PaginationAdapter
        {...props}
        paginationRowsPerPageOptions={paginationRowsPerPageOptions}
      />
    ),
    [paginationRowsPerPageOptions]
  );

  return (
    <Container
      flexDirection="column"
      gap="SpacingBase16"
      gapMobile="SpacingBase32"
    >
      <DataTable
        columns={columns}
        data={data}
        pagination={pagination}
        paginationComponent={PaginationComponent}
        customStyles={getCustomStyles({ theme, $isFirstColumnFixed })}
        paginationPerPage={paginationPerPage}
        paginationRowsPerPageOptions={paginationRowsPerPageOptions}
        {...props}
      />
    </Container>
  );
}

export default Table;
