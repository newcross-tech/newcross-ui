import { act, renderHook } from '@testing-library/react';
import usePagination from './usePagination';
import { PaginationLength } from '../Pagination.types';

describe('usePagination Hook', () => {
  const mockOnChange = jest.fn();

  const setup = (props = {}) => {
    const initialProps = {
      count: 10,
      selectedValue: 1,
      length: 'short' as PaginationLength,
      onChange: mockOnChange,
      ...props,
    };
    return renderHook(() => usePagination(initialProps));
  };

  beforeEach(() => {
    mockOnChange.mockClear();
  });

  it('should initialize correctly with default props', () => {
    // Arrange
    const { result } = setup();

    // Assert
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
    // Arrange
    const { result } = setup();

    // Act
    act(() => {
      result.current.items[result.current.items.length - 1].onClick(); // Next button
    });

    // Assert
    expect(result.current.selectedPage).toBe(2);
    expect(mockOnChange).toHaveBeenCalledWith(2);
  });

  it('should handle previous button click', () => {
    // Arrange
    const { result } = setup({ selectedValue: 3 });

    // Act
    act(() => {
      result.current.items[0].onClick(); // Previous button
    });

    // Assert
    expect(result.current.selectedPage).toBe(2);
    expect(mockOnChange).toHaveBeenCalledWith(2);
  });

  it('should handle specific page click', () => {
    // Arrange
    const { result } = setup();

    // Act
    act(() => {
      result.current.items[3].onClick(); // Click on page 3
    });

    // Assert
    expect(result.current.selectedPage).toBe(3);
    expect(mockOnChange).toHaveBeenCalledWith(3);
  });

  it('should correctly render a long pagination length', () => {
    // Arrange
    const { result } = setup({ length: 'long' });

    // Assert
    expect(result.current.items).toHaveLength(9); // 7 pages + previous + next
    expect(result.current.items[1].page).toBe(1); // First page
    expect(result.current.items[7].page).toBe(7); // Last page in visible range
  });

  it('should handle start of pagination correctly', () => {
    // Arrange
    const { result } = setup({ selectedValue: 1 });

    // Assert
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
    // Arrange
    const { result } = setup({ count: 10, selectedValue: 10 });

    // Assert
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
