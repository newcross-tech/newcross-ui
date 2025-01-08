import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { faPhone } from '@fortawesome/pro-regular-svg-icons/faPhone';
import { faExternalLink } from '@fortawesome/pro-regular-svg-icons/faExternalLink';
import Link, { LinkProps } from './Link';
import { axe } from '../../utils/test/axeConfig';

function renderComponent(overrides: Partial<LinkProps>) {
  const props: LinkProps = {
    variant: 'paragraph1',
    children: 'My Link',
    ...overrides,
  };

  return render(<Link {...props} />);
}

describe('Link Component', () => {
  it('should not have any a11y errors', async () => {
    // Act
    const { container } = renderComponent({});
    const results = await axe(container);
    // Assert
    expect(results).toHaveNoViolations();
  });

  it('should render successfully with href', () => {
    // Act
    renderComponent({
      href: 'mailto:someone@example.com',
    });
    const link = screen.getByRole('link', { name: 'My Link' });
    // Assert
    expect(link).toHaveAttribute('href', 'mailto:someone@example.com');
    expect(link).toBeVisible();
  });

  it('should render successfully without href', () => {
    // Act
    renderComponent({ role: 'button' });
    const link = screen.getByRole('button', { name: 'My Link' });

    // Assert
    expect(link).toBeVisible();
  });

  it('should correctly render icons when provided', () => {
    // Act
    renderComponent({
      leftIcon: faPhone,
      rightIcon: faExternalLink,
    });

    expect(screen.getByTestId('link-left-icon')).toBeInTheDocument();
    expect(screen.getByTestId('link-right-icon')).toBeInTheDocument();
  });

  it('should not render icons when not provided', () => {
    // Act
    renderComponent({});

    expect(screen.queryByTestId('link-left-icon')).not.toBeInTheDocument();
    expect(screen.queryByTestId('link-right-icon')).not.toBeInTheDocument();
  });

  it('triggers onClick event handler successfully', () => {
    const onClick = jest.fn();
    // Arrange
    renderComponent({
      onClick,
      href: 'mailto:someone@example.com',
    });
    const link = screen.getByRole('link', { name: 'My Link' });

    // Act
    userEvent.click(link);

    // Assert
    expect(onClick).toHaveBeenCalled();
  });

  it('should not be clickable when disabled', () => {
    // Arrange
    renderComponent({
      disabled: true,
      href: 'https://example.com',
    });
    const link = screen.getByRole('link', { name: 'My Link' });

    // Act
    const click = () => userEvent.click(link);

    // Assert
    expect(click).toThrowError();
  });
});
