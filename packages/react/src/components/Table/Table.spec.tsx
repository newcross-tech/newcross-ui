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

const renderComponent = () => {
  render(<Table columns={COLUMNS} data={data} />);
};

describe('Table', () => {
  it('renders successfully', () => {
    renderComponent();

    expect(byRole('table').get()).toBeInTheDocument();
  });

  it('renders columns', () => {
    renderComponent();

    expect(byText('Name').get()).toBeInTheDocument();
    expect(byText('Age').get()).toBeInTheDocument();
  });

  it('renders data', () => {
    renderComponent();

    expect(byText('John 3').get()).toBeInTheDocument();
  });

  it('renders pagination', () => {
    renderComponent();

    expect(byTestId('pagination-container').get()).toBeInTheDocument();
  });

  it('handles pagination interaction', async () => {
    renderComponent();

    expect(byText('John 3').get()).toBeInTheDocument();
    expect(byText('John 8').query()).not.toBeInTheDocument();

    const secondPageButton = byRole('button', {
      name: '2',
    }).get();

    expect(secondPageButton).toBeInTheDocument();
    userEvent.click(secondPageButton);

    expect(await byText('John 8').find()).toBeInTheDocument();
  });
});
