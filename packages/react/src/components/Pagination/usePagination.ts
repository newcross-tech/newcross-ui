import { useCallback, useState } from 'react';
import { PaginationButtonType } from './Pagination.types';

// code used from MUI Pagination

type UsePaginationProps = {
  /**
   * Number of always visible pages at the beginning and end.
   */
  boundaryCount?: number;
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
  onChange?: (v: number) => void;
  /**
   * The number of pages to show on each side of the current page.
   */
  siblingCount: number;
};

export default function usePagination({
  boundaryCount = 1,
  count = 1,
  selectedValue = 1,
  onChange: handleChange,
  siblingCount = 1,
}: UsePaginationProps) {
  const [page, setPageState] = useState<number>(selectedValue);

  const handleClick = useCallback(
    (value: number) => {
      if (value) {
        setPageState(value);
      }
      handleChange?.(value);
    },
    [handleChange]
  );

  // https://dev.to/namirsab/comment/2050
  const range = (start: number, end: number) => {
    const length = end - start + 1;
    return Array.from({ length }, (_, i) => start + i);
  };

  const startPages = range(1, Math.min(boundaryCount, count));
  const endPages = range(
    Math.max(count - boundaryCount + 1, boundaryCount + 1),
    count
  );

  const siblingsStart = Math.max(
    Math.min(
      // Natural start
      page - siblingCount,
      // Lower boundary when page is high
      count - boundaryCount - siblingCount * 2 - 1
    ),
    // Greater than startPages
    boundaryCount + 2
  );

  const siblingsEnd = Math.min(
    Math.max(
      // Natural end
      page + siblingCount,
      // Upper boundary when page is low
      boundaryCount + siblingCount * 2 + 2
    ),
    // Less than endPages
    endPages.length > 0 ? endPages[0] - 2 : count - 1
  );

  const itemList: Array<PaginationButtonType | number> = [
    'previous',
    ...startPages,

    // Start ellipsis
    ...(siblingsStart > boundaryCount + 2
      ? ['ellipsis' as PaginationButtonType]
      : boundaryCount + 1 < count - boundaryCount
      ? [boundaryCount + 1]
      : []),

    // Sibling pages
    ...range(siblingsStart, siblingsEnd),

    // End ellipsis
    ...(siblingsEnd < count - boundaryCount - 1
      ? ['ellipsis' as PaginationButtonType]
      : count - boundaryCount > boundaryCount
      ? [count - boundaryCount]
      : []),

    ...endPages,
    'next',
  ];

  const buttonPage = (type: PaginationButtonType) => {
    switch (type) {
      case 'previous':
        return page > 1 ? page - 1 : page;
      case 'next':
        return page < count ? page + 1 : page;
      default:
        return page;
    }
  };

  const items = itemList.map((item) => {
    return typeof item === 'number'
      ? {
          onClick: () => {
            handleClick(item);
          },
          variant: 'page' as PaginationButtonType,
          page: item,
          selected: item === page,
          'aria-current': item === page ? 'true' : undefined,
        }
      : {
          onClick: () => {
            handleClick(buttonPage(item));
          },
          variant: item,
          page: buttonPage(item),
          selected: false,
          disabled:
            item.indexOf('ellipsis') === -1 &&
            (item === 'next' ? page >= count : page <= 1),
        };
  });

  return {
    items,
    selectedPage: page,
  };
}
