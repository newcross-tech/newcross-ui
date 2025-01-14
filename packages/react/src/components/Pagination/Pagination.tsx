import usePagination from './usePagination';
import { PaginationArrowButton, PaginationButton } from './PaginationButton';
import Container from '../Container';
import { OptionalProps } from '../../types';
import { PaginationPropsStrict } from './Pagination.types';

export type PaginationProps = OptionalProps<
  PaginationPropsStrict,
  'fullWidth' | 'size' | 'selectedValue' | 'count' | 'disabled'
>;

const normalizedPaginationProps = (
  _props: PaginationProps
): PaginationPropsStrict => ({
  selectedValue: _props.selectedValue ?? 1,
  count: _props.count ?? 1,
  fullWidth: _props.fullWidth ?? false,
  size: _props.size ?? 'small',
  disabled: _props.disabled ?? false,
  ..._props,
});

const Pagination: React.FC<PaginationProps> = (_props: PaginationProps) => {
  const { count, selectedValue, onChange, fullWidth, size, disabled } =
    normalizedPaginationProps(_props);

  const { items, selectedPage } = usePagination({
    selectedValue,
    count,
    onChange,
    size,
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
