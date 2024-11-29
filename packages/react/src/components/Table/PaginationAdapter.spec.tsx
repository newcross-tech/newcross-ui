import { render } from '@testing-library/react';
import { byRole, byTestId, byText } from 'testing-library-selector';
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

describe('PaginationAdapter', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders successfully', () => {
    renderComponent();

    expect(byTestId('select-component').get()).toBeInTheDocument();
  });

  it('should call onChangePage on pagination change', () => {
    renderComponent();

    userEvent.click(byRole('button', { name: '2' }).get());

    expect(mockOnChangePage).toHaveBeenCalledWith(2, 100);
  });

  it('should display the correct number of pages', () => {
    renderComponent({
      rowCount: 50,
      rowsPerPage: 10,
    });

    expect(byRole('button', { name: '5' }).get()).toBeInTheDocument();
  });

  it.each([
    { rowsPerPage: 10, pageNumber: 1, props: { rowCount: 7 } },
    { rowsPerPage: 5, pageNumber: 2, props: { rowCount: 7, rowsPerPage: 10 } },
    { rowsPerPage: 20, pageNumber: 1, props: { rowCount: 7 } },
    { rowsPerPage: 5, pageNumber: 2, props: { rowCount: 7, rowsPerPage: 30 } },
  ])(
    'should call onChangeRowsPerPage with the correct arguments when changing rows per page',
    async ({ pageNumber, rowsPerPage, props }) => {
      renderComponent(props);

      const selectComponent = byRole('combobox').get();
      userEvent.click(selectComponent);

      const option = await byText(rowsPerPage.toString()).find();
      userEvent.click(option);

      expect(mockOnChangeRowsPerPage).toHaveBeenCalledWith(
        rowsPerPage,
        pageNumber
      );
    }
  );
});
