import { useCallback } from 'react';
import DataTable, { IDataTableProps } from 'react-data-table-component';
import PaginationAdapter from './PaginationAdapter';
import { getCustomStyles } from './Table.style';
import useTheme from '../../hooks/useTheme';
import Container from '../Container';
import {
  TABLE_DEFAULT_ROWS_PER_PAGE_OPTION,
  TABLE_RECORDS_PER_PAGE_OPTIONS,
} from './constants';
import { PaginationComponent } from 'react-data-table-component/dist/DataTable/types';

export type TableProps<T> = IDataTableProps<T> & {
  $isFirstColumnFixed?: boolean;
};

function Table<T>({
  columns,
  data,
  pagination = true,
  $isFirstColumnFixed = false,
  paginationRowsPerPageOptions = TABLE_RECORDS_PER_PAGE_OPTIONS,
  paginationPerPage = TABLE_DEFAULT_ROWS_PER_PAGE_OPTION,
  ...props
}: TableProps<T>) {
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
        customStyles={getCustomStyles(theme, $isFirstColumnFixed)}
        paginationPerPage={
          paginationPerPage ?? TABLE_DEFAULT_ROWS_PER_PAGE_OPTION
        }
        paginationRowsPerPageOptions={paginationRowsPerPageOptions}
        {...props}
      />
    </Container>
  );
}

export default Table;
