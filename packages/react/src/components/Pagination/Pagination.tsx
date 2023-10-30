import usePagination from './usePagination';
import * as Styled from './Pagination.style';
import { PaginationArrowButton, PaginationButton } from './PaginationButton';
import { useState, useRef } from 'react';
import { useResize } from '../../hooks/useResize';

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

const CONTAINER_ELEMENTS_WIDTH = 372;
const PAGINATION_BUTTON_WIDTH = 40;
const LEFT_AND_RIGHT_SIBLING_COUNT = 2;

const Pagination: React.FC<PaginationProps> = ({
  count,
  selectedValue,
  onChange,
  fullWidth,
}) => {
  const [widthOfContainer, setWidthOfContainer] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useResize({
    ref,
    containerSize: ref?.current?.offsetWidth || 0,
    onResize: () => setWidthOfContainer(ref?.current?.offsetWidth || 0),
  });

  const maybeSiblingCount = Math.floor(
    (widthOfContainer - CONTAINER_ELEMENTS_WIDTH) /
      PAGINATION_BUTTON_WIDTH /
      LEFT_AND_RIGHT_SIBLING_COUNT
  );
  const siblingCount = maybeSiblingCount < 0 ? 0 : maybeSiblingCount;
  const { items, selectedPage } = usePagination({
    selectedValue,
    count,
    onChange,
    siblingCount,
  });

  return (
    <Styled.Pagination
      fullWidth={fullWidth}
      ref={ref}
      data-testid="pagination-container"
      role="navigation"
    >
      <PaginationArrowButton {...items[0]} />
      <Styled.PaginationButtonsContainer>
        {items.slice(1, -1).map((item, index) => (
          <PaginationButton
            data-testid={`pagination-button-${index}`}
            key={index}
            {...item}
            selected={selectedPage === item.page}
          />
        ))}
      </Styled.PaginationButtonsContainer>
      <PaginationArrowButton {...items[items.length - 1]} />
    </Styled.Pagination>
  );
};

export default Pagination;
