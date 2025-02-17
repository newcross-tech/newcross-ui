import { ReactNode } from 'react';
import { Meta, Story } from '@storybook/react';
import { faFileArrowDown } from '@fortawesome/pro-light-svg-icons/faFileArrowDown';
import Table, { TableProps } from '../../components/Table';
import Typography from '../../components/Typography';
import Container from '../../components/Container';
import * as StoryTitle from '../StoryTitle';
import Checkbox from '../../components/Fields/Checkbox';
import Icon from '../../components/Icon';
import ToggleButton from '../../components/ToggleButton';

export default {
  title: 'React/Components/Table',
  component: Table,
} as Meta;

export type InvoiceData = {
  issueDate: string;
  invoiceNumber: string;
  age: number;
  cost: number;
  paid: number;
  toPay: number;
  lastOpened: string;
};

const generateColumn = (
  title: string,
  selector: (row: InvoiceData) => string | number,
  sortable = false
) => ({
  name: (
    <Typography variant="h3" color="primary">
      {title}
    </Typography>
  ),
  selector,
  cell: (row: InvoiceData) => (
    <Typography variant="p1" color="primary">
      {selector(row)}
    </Typography>
  ),
  sortable,
  center: true,
});

const COLUMNS = [
  generateColumn('Issue Date', (row) => row.issueDate),
  generateColumn('Invoice Number', (row) => row.invoiceNumber, true),
  generateColumn('Amount Due', (row) => `${row.cost.toFixed(2)}`),
];

const COLUMNS_WITH_ACTION = [
  ...COLUMNS,
  generateColumn('Age (days)', (row) => row.age),
  generateColumn('Paid', (row) => `£${row.paid.toFixed(2)}`),
  generateColumn('To pay', (row) => `£${row.toPay.toFixed(2)}`),
  generateColumn('Last opened', (row) => row.lastOpened),
  {
    name: (
      <Typography variant="h3" color="primary">
        Timesheets
      </Typography>
    ),
    selector: () => '',
    cell: () => (
      <ToggleButton onClick={() => alert('Action Triggered')} styleAs="div">
        <Icon icon={faFileArrowDown} variant="h2" />
      </ToggleButton>
    ),
    center: true,
  },
];

const getRandomNumber = (min: number, max: number) =>
  Math.random() * (max - min) + min;

const generateData = (length: number): InvoiceData[] => {
  return Array.from({ length }, (_, index) => {
    const cost = getRandomNumber(100, 1000);
    const paid = getRandomNumber(0, cost);
    return {
      issueDate: `${index + 1}/04/25`,
      invoiceNumber: `47675${index}`,
      age: Math.floor(getRandomNumber(1, 100)),
      cost,
      paid,
      toPay: cost - paid,
      lastOpened: `${index + 1}/03/25`,
    };
  });
};

const DATA = generateData(30);

export const Variants = () => (
  <Container flexDirection="column">
    <StoryTitle.Regular>With Action Column</StoryTitle.Regular>
    <Table
      columns={COLUMNS_WITH_ACTION}
      data={DATA}
      selectableRows
      selectableRowsComponent={Checkbox as unknown as ReactNode}
      pagination
      $isFirstColumnFixed
    />
  </Container>
);

const Template: Story<TableProps<InvoiceData>> = (args) => (
  <Table {...args} columns={COLUMNS} />
);

export const Interactive = Template.bind({});
Interactive.args = {
  columns: COLUMNS,
  data: DATA,
  pagination: true,
};
