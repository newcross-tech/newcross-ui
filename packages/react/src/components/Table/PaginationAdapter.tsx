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
      const newPage = Math.floor((currentPage * rowsPerPage) / newRowsPerPage);
      onChangeRowsPerPage(newRowsPerPage, newPage);
    },
    [currentPage, onChangeRowsPerPage, paginationPerPage, rowsPerPage]
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
        defaultValue={{
          label: paginationRowsPerPageOptions[0].toString(),
          value: paginationRowsPerPageOptions[0],
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
