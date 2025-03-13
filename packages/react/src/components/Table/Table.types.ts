import {
  IDataTableProps,
  PaginationComponentProps,
} from 'react-data-table-component';
import { RequiredProps } from '../../types';

export type TablePropsStrict<T> = RequiredProps<
  IDataTableProps<T>,
  'pagination' | 'paginationPerPage' | 'paginationRowsPerPageOptions'
> & { $isFirstColumnFixed: boolean };

export type PaginationAdapterProps = PaginationComponentProps & {
  paginationRowsPerPageOptions: number[];
};
