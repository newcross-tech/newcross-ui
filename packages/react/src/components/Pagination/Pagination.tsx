import usePagination from './hooks/usePagination';
import { PaginationArrowButton, PaginationButton } from './PaginationButton';
import Container from '../Container';
import { OptionalProps } from '../../types';
import { PaginationPropsStrict } from './Pagination.types';

export type PaginationProps = OptionalProps<
  PaginationPropsStrict,
  'fullWidth' | 'length' | 'selectedValue' | 'count' | 'disabled'
>;

const normalizedPaginationProps = (
  _props: PaginationProps
): PaginationPropsStrict => ({
  selectedValue: _props.selectedValue ?? 1,
  count: _props.count ?? 1,
  fullWidth: _props.fullWidth ?? false,
  length: _props.length ?? 'short',
  disabled: _props.disabled ?? false,
  ..._props,
});

const Pagination: React.FC<PaginationProps> = (_props: PaginationProps) => {
  const { count, selectedValue, onChange, fullWidth, length, disabled } =
    normalizedPaginationProps(_props);

  const { items, selectedPage } = usePagination({
    selectedValue,
    count,
    onChange,
    length,
  });

  return (
    <Container
      fullWidth={fullWidth}
      alignItems="center"
      justifyContent="center"
      testID="pagination-container"
      role="navigation"
      gap="sm"
    >
      <PaginationArrowButton {...items[0]} disabled={disabled} />
      {items.slice(1, -1).map((item, index) => (
        <div data-testid={`pagination-button-${index}`} key={index}>
          <PaginationButton
            {...item}
            selected={selectedPage === item.page}
            disabled={disabled}
          />
        </div>
      ))}
      <PaginationArrowButton {...items[items.length - 1]} disabled={disabled} />
    </Container>
  );
};

export default Pagination;
