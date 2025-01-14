import { useCallback } from 'react';
import {
  PaginationItemType,
  PaginationItemPropsStrict,
  UsePaginationPropsStrict,
} from '../Pagination.types';
import { useUpstreamState } from '../../../hooks/useUpstreamState';
import { OptionalProps } from '../../../types';

type UsePaginationProps = OptionalProps<
  UsePaginationPropsStrict,
  'selectedValue' | 'length' | 'count'
>;

const normalizeUsePaginationProps = (
  _props: UsePaginationProps
): UsePaginationPropsStrict => ({
  selectedValue: _props.selectedValue ?? 1,
  count: _props.count ?? 1,
  length: _props.length ?? 'short',
  ..._props,
});

const PaginationPagesToShow = {
  short: 4,
  long: 7,
};

const usePagination = (_props: UsePaginationProps) => {
  const {
    selectedValue,
    count,
    onChange: handleChange,
    length,
  } = normalizeUsePaginationProps(_props);

  const [page, setPageState] = useUpstreamState<number>(selectedValue);
  const pagesToShow = PaginationPagesToShow[length];

  const handleClick = useCallback(
    (value: number) => {
      if (value) {
        setPageState(value);
      }
      handleChange?.(value);
    },
    [setPageState, handleChange]
  );

  const buttonPage = (type: PaginationItemType) => {
    switch (type) {
      case 'previous':
        return page > 1 ? page - 1 : page;
      case 'next':
        return page < count ? page + 1 : page;
      default:
        return page;
    }
  };

  const items: PaginationItemPropsStrict[] = [];

  items.push({
    onClick: () => handleClick(buttonPage('previous')),
    variant: 'previous',
    page: buttonPage('previous'),
    selected: false,
    hidden: page <= 1,
  });

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
      hidden: false,
    });
  }

  items.push({
    onClick: () => handleClick(buttonPage('next')),
    variant: 'next',
    page: buttonPage('next'),
    selected: false,
    hidden: page >= count,
  });

  return {
    items,
    selectedPage: page,
  };
};

export default usePagination;
