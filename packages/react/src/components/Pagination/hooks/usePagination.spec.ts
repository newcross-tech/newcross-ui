import { act, renderHook } from '@testing-library/react';
import usePagination from './usePagination';

describe('usePagination Hook', () => {
  const mockOnChange = jest.fn();

  const setup = (props = {}) => {
    const initialProps = {
      count: 10,
      selectedValue: 1,
      size: 'short',
      onChange: mockOnChange,
      ...props,
    };
    return renderHook(() => usePagination(initialProps));
  };

  beforeEach(() => {
    mockOnChange.mockClear();
  });

  it('should initialize correctly with default props', () => {
    const { result } = setup();

    expect(result.current.selectedPage).toBe(1);
    expect(result.current.items).toHaveLength(6); // 4 pages + previous + next
    expect(result.current.items[0]).toMatchObject({
      variant: 'previous',
      page: 1,
      hidden: true,
    });
    expect(result.current.items[1]).toMatchObject({
      variant: 'page',
      page: 1,
      selected: true,
      hidden: false,
    });
  });

  it('should handle next button click', () => {
    const { result } = setup();

    act(() => {
      result.current.items[result.current.items.length - 1].onClick(); // Next button
    });

    expect(result.current.selectedPage).toBe(2);
    expect(mockOnChange).toHaveBeenCalledWith(2);
  });

  it('should handle previous button click', () => {
    const { result } = setup({ selectedValue: 3 });

    act(() => {
      result.current.items[0].onClick(); // Previous button
    });

    expect(result.current.selectedPage).toBe(2);
    expect(mockOnChange).toHaveBeenCalledWith(2);
  });

  it('should handle specific page click', () => {
    const { result } = setup();

    act(() => {
      result.current.items[3].onClick(); // Click on page 3
    });

    expect(result.current.selectedPage).toBe(3);
    expect(mockOnChange).toHaveBeenCalledWith(3);
  });

  it('should correctly render a large pagination size', () => {
    const { result } = setup({ size: 'large' });

    expect(result.current.items).toHaveLength(9); // 7 pages + previous + next
    expect(result.current.items[1].page).toBe(1); // First page
    expect(result.current.items[7].page).toBe(7); // Last page in visible range
  });

  it('should handle start of pagination correctly', () => {
    const { result } = setup({ selectedValue: 1 });

    expect(result.current.items[0]).toMatchObject({
      variant: 'previous',
      page: 1,
      hidden: true,
    });
    expect(result.current.items[1]).toMatchObject({
      variant: 'page',
      page: 1,
      selected: true,
    });
  });

  it('should handle end of pagination correctly', () => {
    const { result } = setup({ count: 10, selectedValue: 10 });

    expect(result.current.items[result.current.items.length - 1]).toMatchObject(
      {
        variant: 'next',
        page: 10,
        hidden: true,
      }
    );
    expect(result.current.items[result.current.items.length - 2]).toMatchObject(
      {
        variant: 'page',
        page: 10,
        selected: true,
      }
    );
  });
});
