import usePagination from './usePagination';
import * as Styled from './Pagination.style';
import { PaginationArrowButton, PaginationButton } from './PaginationButton';
import { useState, useRef } from 'react';
import { useResize } from '../../hooks/useResize';
import useTheme from '../../hooks/useTheme';
import { getHaloValue } from '../../utils';

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

  /**
   * The kind of flow - are you presenting pages of entities (e.g.: page of users) or steps in a flow (e.g.: registration initial step, registration secondary step, etc...).
   */
  itemKind?: 'page' | 'step';

  /**
   * The label of the pagination.
   */
  'aria-label'?: string;
  'aria-labeledby'?: string;
};

/**
 * @description
 * ### Accessibility
 * #### Pattern: -
 * #### Notes:
 * Presented as a `navigation` `list` with `listitem` `button` elements.
 * You can provide the kind of the items with the `itemKind` prop.
 * Describe the list with `aria-label` or `aria-labelledby` props.
 */
const Pagination: React.FC<PaginationProps> = ({
  count,
  selectedValue,
  onChange,
  fullWidth,
}) => {
  const [widthOfContainer, setWidthOfContainer] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const theme = useTheme();

  // CONTAINER_ELEMENTS_WIDTH = 372, which is the width of all pagination elements, which are always visible
  // i.e. laft and right arrow, left and right ellipsis, selected element and paddings
  const CONTAINER_ELEMENTS_WIDTH =
    getPixelsFromHaloSpacing(theme.SpacingBase40) * 9 +
    getPixelsFromHaloSpacing(theme.SpacingBase12);
  const PAGINATION_BUTTON_WIDTH = getPixelsFromHaloSpacing(theme.SpacingBase40);
  const LEFT_AND_RIGHT_SIBLING_COUNT = 2;

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

// +getHaloValue removes 'rem' from spacing and returns a number
// * 16 converts to pixels
const getPixelsFromHaloSpacing = (spacing: string) =>
  +getHaloValue(spacing) * 16;
