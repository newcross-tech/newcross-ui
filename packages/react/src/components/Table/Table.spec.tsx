import { render } from '@testing-library/react';
import { byRole, byTestId, byText } from 'testing-library-selector';
import userEvent from '@testing-library/user-event';
import Table from './Table';

type Data = {
  id: number;
  name: string;
  age: number;
};

const COLUMNS = [
  {
    name: 'ID',
    selector: (row: Data) => row.id,
    sortable: true,
  },
  {
    name: 'Name',
    selector: (row: Data) => row.name,
    sortable: true,
  },
  {
    name: 'Age',
    selector: (row: Data) => row.age,
    sortable: true,
  },
];

const data = Array.from({ length: 30 }, (_, index) => ({
  id: index,
  name: `John ${index}`,
  age: Math.floor(Math.random() * 80),
}));

const defaultProps = {
  columns: COLUMNS,
  data,
};

const renderTable = (props = {}) =>
  render(<Table {...defaultProps} {...props} />);

const ui = {
  table: byRole('table'),
  paginationContainer: byTestId('pagination-container'),
  columnName: byText('Name'),
  columnAge: byText('Age'),
  dataRow: (name: string) => byText(name),
  pageButton: (pageNumber: string) => byRole('button', { name: pageNumber }),
};

describe('Table', () => {
  it('renders successfully', () => {
    // Arrange & Act
    renderTable();
    const table = ui.table.get();

    // Assert
    expect(table).toBeInTheDocument();
  });

  it('renders columns', () => {
    // Arrange & Act
    renderTable();
    const columnName = ui.columnName.get();
    const columnAge = ui.columnAge.get();

    // Assert
    expect(columnName).toBeInTheDocument();
    expect(columnAge).toBeInTheDocument();
  });

  it('renders data', () => {
    // Arrange & Act
    renderTable();
    const row = ui.dataRow('John 3').get();

    // Assert
    expect(row).toBeInTheDocument();
  });

  it('renders pagination', () => {
    // Arrange & Act
    renderTable();
    const pagination = ui.paginationContainer.get();

    // Assert
    expect(pagination).toBeInTheDocument();
  });

  it('handles pagination interaction', async () => {
    // Arrange & Act
    renderTable();
    const pageButton = ui.pageButton('2').get();
    const firstRow = ui.dataRow('John 3').get();

    // Act
    userEvent.click(pageButton);
    const secondRow = await ui.dataRow('John 8').find();

    // Assert
    expect(firstRow).not.toBeInTheDocument();
    expect(secondRow).toBeInTheDocument();
  });

  it('respects the provided paginationPerPage value', () => {
    // Arrange & Act
    renderTable({ paginationPerPage: 5 });
    const firstRow = ui.dataRow('John 0').get();
    const lastRow = ui.dataRow('John 4').get();
    const outOfPageRow = ui.dataRow('John 5').query();

    // Assert
    expect(firstRow).toBeInTheDocument();
    expect(lastRow).toBeInTheDocument();
    expect(outOfPageRow).not.toBeInTheDocument();
  });
});
