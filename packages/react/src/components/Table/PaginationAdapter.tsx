import { useCallback } from 'react';
import { PaginationComponentProps } from 'react-data-table-component/dist/DataTable/types';
import Select from '../Select';
import Pagination from '../Pagination';
import {
  TABLE_DEFAULT_ROWS_PER_PAGE_OPTION,
  TABLE_RECORDS_PER_PAGE_OPTIONS,
} from './constants';
import * as Styled from './Table.style';

const PaginationAdapter = ({
  onChangeRowsPerPage,
  currentPage,
  rowCount,
  rowsPerPage,
  onChangePage,
  paginationPerPage = TABLE_DEFAULT_ROWS_PER_PAGE_OPTION,
  paginationRowsPerPageOptions = TABLE_RECORDS_PER_PAGE_OPTIONS,
}: PaginationComponentProps & {
  paginationRowsPerPageOptions?: number[];
  paginationPerPage?: number;
}) => {
  const handleChangeRowsPerPage = useCallback(
    (newValue) => {
      const newRowsPerPage = newValue?.value ?? paginationPerPage;
      const newPage = Math.ceil((currentPage * rowsPerPage) / newRowsPerPage);

      // NOTE: this one updates the rows per page, but not the page number
      onChangeRowsPerPage(newRowsPerPage, newPage);
      // NOTE: this one updates the page number
      onChangePage(newPage, rowCount);
    },
    [
      currentPage,
      onChangeRowsPerPage,
      onChangePage,
      paginationPerPage,
      rowsPerPage,
      rowCount,
    ]
  );

  return (
    <Styled.PaginationContainer justifyContent="space-between">
      <Select
        label="Records per page"
        id={'records-per-page'}
        options={paginationRowsPerPageOptions?.map((option: number) => ({
          label: `${option}`,
          value: option,
        }))}
        value={{
          label: rowsPerPage.toString(),
          value: rowsPerPage,
        }}
        onChange={handleChangeRowsPerPage}
      />
      <Pagination
        count={Math.ceil(rowCount / rowsPerPage)}
        selectedValue={currentPage}
        onChange={(page) => onChangePage(page, rowCount)}
      />
    </Styled.PaginationContainer>
  );
};

export default PaginationAdapter;
