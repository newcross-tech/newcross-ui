import { render } from '@testing-library/react';
import { byRole, byText } from 'testing-library-selector';
import userEvent from '@testing-library/user-event';
import PaginationAdapter from './PaginationAdapter';

const mockOnChangeRowsPerPage = jest.fn();
const mockOnChangePage = jest.fn();

const renderComponent = (props = {}) => {
  return render(
    <PaginationAdapter
      onChangeRowsPerPage={mockOnChangeRowsPerPage}
      currentPage={1}
      rowCount={100}
      rowsPerPage={5}
      onChangePage={mockOnChangePage}
      paginationRowsPerPageOptions={[5, 10, 20, 50]}
      {...props}
    />
  );
};

const ui = {
  select: byRole('combobox'),
  paginationButton: (pageNumber: string) =>
    byRole('button', { name: pageNumber }),
  dropdownOption: (option: number) => byText(option.toString()),
};

describe('PaginationAdapter', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders successfully', () => {
    // Arrange & Act
    renderComponent();

    // Assert
    const selectComponent = ui.select.get();
    expect(selectComponent).toBeInTheDocument();
  });

  it('should call onChangePage when changing pages', () => {
    // Arrange
    renderComponent();

    // Act
    const pageButton = ui.paginationButton('2').get();
    userEvent.click(pageButton);

    // Assert
    expect(mockOnChangePage).toHaveBeenCalledWith(2, 100);
  });

  it.each([
    { rowsPerPage: 10, pageNumber: 1, props: { rowCount: 7 } },
    { rowsPerPage: 5, pageNumber: 2, props: { rowCount: 7, rowsPerPage: 10 } },
    { rowsPerPage: 20, pageNumber: 1, props: { rowCount: 7 } },
    { rowsPerPage: 5, pageNumber: 2, props: { rowCount: 7, rowsPerPage: 30 } },
  ])(
    'should call onChangeRowsPerPage with rowsPerPage = $rowsPerPage and pageNumber = $pageNumber',
    async ({ rowsPerPage, pageNumber, props }) => {
      // Arrange
      renderComponent(props);

      // Act
      const selectComponent = ui.select.get();
      userEvent.click(selectComponent);

      const option = await ui.dropdownOption(rowsPerPage).find();
      userEvent.click(option);

      // Assert
      expect(mockOnChangeRowsPerPage).toHaveBeenCalledWith(
        rowsPerPage,
        pageNumber
      );
    }
  );

  it('renders the correct options in the dropdown', async () => {
    // Arrange
    renderComponent();

    // Act
    const selectComponent = ui.select.get();
    userEvent.click(selectComponent);

    // Assert
    for (const option of [5, 10, 20, 50]) {
      const dropdownOption = await ui.dropdownOption(option).find();
      expect(dropdownOption).toBeInTheDocument();
    }
  });
});
