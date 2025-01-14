import { render } from '@testing-library/react';
import { byTestId } from 'testing-library-selector';
import { axe } from '../../utils/test/axeConfig';
import Pagination, { PaginationProps } from './Pagination';

const renderComponent = (customProps: Partial<PaginationProps>) => {
  const props = {
    count: 2,
    ...customProps,
  };

  render(<Pagination {...props} />);
};

describe('Pagination Component', () => {
  const ui = {
    buttonComponent: (testID: string) =>
      byTestId(`pagination-button-${testID}`),
    paginationComponent: byTestId(`pagination-container`),
  };

  it('should not have any a11y errors', async () => {
    // Act
    renderComponent({});

    const results = await axe(document.body);
    expect(results).toHaveNoViolations();
  });

  it('renders successfully', () => {
    // Act
    renderComponent({});

    // Assert
    expect(ui.paginationComponent.get()).toBeInTheDocument();
  });

  it('renders children successfully', () => {
    // Act
    renderComponent({});

    // Assert
    expect(ui.buttonComponent('0').get()).toBeInTheDocument();
    expect(ui.buttonComponent('1').get()).toBeInTheDocument();
  });
});
