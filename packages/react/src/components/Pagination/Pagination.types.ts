import { PaginationProps } from './Pagination';

export type PaginationButtonType = 'previous' | 'page' | 'ellipsis' | 'next';

export type StyledPaginationProps = Pick<PaginationProps, 'fullWidth'>;

export type StyledPaginationButtonProps = { disabled?: boolean };
