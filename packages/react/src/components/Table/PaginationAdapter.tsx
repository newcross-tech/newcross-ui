import { useCallback } from 'react';
import { SingleValue } from 'react-select';
import Select from '../Select';
import Pagination from '../Pagination';
import * as Styled from './Table.style';
import { PaginationAdapterProps } from './Table.types';

const PaginationAdapter = ({
  onChangeRowsPerPage,
  currentPage,
  rowCount,
  rowsPerPage,
  onChangePage,
  paginationRowsPerPageOptions,
}: PaginationAdapterProps) => {
  const handleChangeRowsPerPage = useCallback(
    (newValue: SingleValue<{ value: number }>) => {
      const newRowsPerPage = newValue?.value ?? rowCount;
      const newPageCount = Math.min(currentPage * rowsPerPage, rowCount);
      const newPage = Math.ceil(newPageCount / newRowsPerPage);

      // NOTE: this one updates the rows per page, but not the page number
      onChangeRowsPerPage(newRowsPerPage, newPage);
      // NOTE: this one updates the page number
      onChangePage(newPage, rowCount);
    },
    [currentPage, onChangeRowsPerPage, onChangePage, rowsPerPage, rowCount]
  );

  return (
    <Styled.PaginationContainer justifyContent="space-between" gap="sm">
      <Select
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
