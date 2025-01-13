import { useCallback } from 'react';
import { PaginationButtonType } from './Pagination.types';
import { useUpstreamState } from '../../hooks/useUpstreamState';

type UsePaginationProps = {
  count: number;
  selectedValue?: number;
  onChange?: (v: number) => void;
  size: 'small' | 'large';
};

export default function usePagination({
  count = 1,
  selectedValue = 1,
  onChange: handleChange,
  size = 'small',
}: UsePaginationProps) {
  const [page, setPageState] = useUpstreamState<number>(selectedValue);
  const pagesToShow = size === 'small' ? 4 : 7;

  const handleClick = useCallback(
    (value: number) => {
      if (value) {
        setPageState(value);
      }
      handleChange?.(value);
    },
    [handleChange]
  );

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

  const items: Array<{
    onClick: () => void;
    variant: PaginationButtonType | 'page';
    page: number;
    selected: boolean;
    disabled: boolean;
  }> = [];

  // Add "previous" button
  items.push({
    onClick: () => handleClick(buttonPage('previous')),
    variant: 'previous',
    page: buttonPage('previous'),
    selected: false,
    disabled: page <= 1,
  });

  // Determine visible pages
  const startPage = Math.max(
    1,
    Math.min(page - Math.floor((pagesToShow - 1) / 2), count - pagesToShow + 1)
  );
  const endPage = Math.min(count, startPage + pagesToShow - 1);

  for (let i = startPage; i <= endPage; i++) {
    items.push({
      onClick: () => handleClick(i),
      variant: 'page',
      page: i,
      selected: i === page,
      disabled: false,
    });
  }

  // Add "next" button
  items.push({
    onClick: () => handleClick(buttonPage('next')),
    variant: 'next',
    page: buttonPage('next'),
    selected: false,
    disabled: page >= count,
  });

  return {
    items,
    selectedPage: page,
  };
}
