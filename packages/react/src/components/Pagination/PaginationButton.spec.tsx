import { render, fireEvent, screen } from '@testing-library/react';
import { byRole } from 'testing-library-selector';
import { axe } from '../../utils/test/axeConfig';
import { PaginationItemPropsStrict } from './Pagination.types';
import { PaginationArrowButton, PaginationButton } from './PaginationButton';

const onClickMock = jest.fn();

const defaultArrowProps: PaginationItemPropsStrict = {
  variant: 'next',
  page: 2,
  disabled: false,
  hidden: false,
  onClick: onClickMock,
  selected: false,
};

const defaultPageProps: PaginationItemPropsStrict = {
  variant: 'page',
  page: 1,
  disabled: false,
  hidden: false,
  onClick: onClickMock,
  selected: false,
};

const renderArrowComponent = (
  customProps: Partial<PaginationItemPropsStrict>
) => render(<PaginationArrowButton {...defaultArrowProps} {...customProps} />);

const renderPageComponent = (customProps: Partial<PaginationItemPropsStrict>) =>
  render(<PaginationButton {...defaultPageProps} {...customProps} />);

describe('Pagination Component', () => {
  const ui = {
    arrowButtonPrevious: byRole('button', { name: /go to previous page/i }),
    arrowButtonNext: byRole('button', { name: /go to next page/i }),
    pageButton: (page: number) => byRole('button', { name: `${page}` }),
  };

  describe('PaginationArrowButton', () => {
    it('renders the "previous" arrow button correctly', () => {
      // Arrange
      renderArrowComponent({ variant: 'previous', page: 1 });

      // Act
      const button = ui.arrowButtonPrevious.get();

      // Assert
      expect(button).toBeInTheDocument();
    });

    it('renders the "next" arrow button correctly', () => {
      // Arrange
      renderArrowComponent({ variant: 'next', page: 2 });

      // Act
      const button = ui.arrowButtonNext.get();

      // Assert
      expect(button).toBeInTheDocument();
    });

    it('hides the button when "hidden" is true', () => {
      // Arrange
      renderArrowComponent({ hidden: true });

      // Act
      const icon = screen.queryByTestId('icon');

      // Assert
      expect(icon).not.toBeInTheDocument();
    });

    it('disables the button when "disabled" is true', () => {
      // Arrange
      renderArrowComponent({ disabled: true });

      // Act
      const button = ui.arrowButtonNext.get();

      // Assert
      expect(button).toBeDisabled();
    });

    it('should not have any a11y violations', async () => {
      // Arrange
      renderArrowComponent({});

      // Act
      const results = await axe(document.body);

      // Assert
      expect(results).toHaveNoViolations();
    });
  });

  describe('PaginationButton', () => {
    it('renders a pagination button with the correct page number', () => {
      // Arrange
      renderPageComponent({ page: 1 });

      // Act
      const button = ui.pageButton(1).get();

      // Assert
      expect(button).toBeInTheDocument();
      expect(screen.getByText('1')).toBeInTheDocument();
    });

    it('disables the button when "disabled" is true', () => {
      // Arrange
      renderPageComponent({ page: 1, disabled: true });

      // Act
      const button = ui.pageButton(1).get();

      // Assert
      expect(button).toBeDisabled();
    });

    it('calls the onClick handler when clicked', () => {
      // Arrange
      renderPageComponent({ page: 2 });

      // Act
      const button = ui.pageButton(2).get();
      fireEvent.click(button);

      // Assert
      expect(onClickMock).toHaveBeenCalledTimes(1);
    });

    it('should not have any a11y violations', async () => {
      // Arrange
      renderPageComponent({});

      // Act
      const results = await axe(document.body);

      // Assert
      expect(results).toHaveNoViolations();
    });
  });
});
