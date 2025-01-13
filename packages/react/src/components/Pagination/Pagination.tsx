import usePagination from './usePagination';
import { PaginationArrowButton, PaginationButton } from './PaginationButton';
import Container from '../Container';

export type PaginationProps = {
  /**
   * The total number of pages.
   */
  count: number;
  /**
   * The page selected by default when the component is uncontrolled.
   */
  selectedValue?: number;
  /**
   * Callback fired when the state is changed.
   */
  onChange?: (value: number) => void;
  /**
   * Whether the component is full width.
   */
  fullWidth?: boolean;
};

const Pagination: React.FC<PaginationProps> = ({
  count,
  selectedValue,
  onChange,
  fullWidth,
}) => {
  const { items, selectedPage } = usePagination({
    selectedValue,
    count,
    onChange,
    size: fullWidth ? 'large' : 'small',
  });

  return (
    <Container
      fullWidth={fullWidth}
      alignItems="center"
      testID="pagination-container"
      role="navigation"
      gap="sm"
    >
      <PaginationArrowButton {...items[0]} />
      {items.slice(1, -1).map((item, index) => (
        <div data-testid={`pagination-button-${index}`} key={index}>
          <PaginationButton {...item} selected={selectedPage === item.page} />
        </div>
      ))}
      <PaginationArrowButton {...items[items.length - 1]} />
    </Container>
  );
};

export default Pagination;
