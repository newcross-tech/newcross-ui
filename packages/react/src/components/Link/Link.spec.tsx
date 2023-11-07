import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { faPhone } from '@fortawesome/pro-regular-svg-icons/faPhone';
import { faExternalLink } from '@fortawesome/pro-regular-svg-icons/faExternalLink';
import Link, { LinkProps } from './Link';
import { axe } from '../../utils/test/axeConfig';

const renderComponent = (props: LinkProps) => {
  const customProps: LinkProps = {
    ...props,
    variant: 'paragraph1',
    children: 'My Link',
  };

  return render(<Link {...customProps} />);
};

describe('Link Component', () => {
  it('should not have any a11y errors', async () => {
    // Act
    const { container } = renderComponent({} as LinkProps);
    const results = await axe(container);
    // Assert
    expect(results).toHaveNoViolations();
  });

  it('should render successfully with href', () => {
    // Act
    renderComponent({
      href: 'mailto:someone@example.com',
    } as LinkProps);
    const link = screen.getByRole('link', { name: 'My Link' });
    // Assert
    expect(link).toHaveAttribute('href', 'mailto:someone@example.com');
    expect(link).toBeVisible();
  });

  it('should correctly render icons when provided', () => {
    // Act
    renderComponent({
      leftIcon: faPhone,
      rightIcon: faExternalLink,
    } as LinkProps);

    expect(screen.queryByTestId('link-left-icon')).toBeInTheDocument();
    expect(screen.queryByTestId('link-right-icon')).toBeInTheDocument();
  });

  it('should not render icons when not provided', () => {
    // Act
    renderComponent({} as LinkProps);

    expect(screen.queryByTestId('link-left-icon')).not.toBeInTheDocument();
    expect(screen.queryByTestId('link-right-icon')).not.toBeInTheDocument();
  });

  it('triggers onClick event handler successfully', () => {
    const onClick = jest.fn();
    // Arrange
    renderComponent({
      onClick,
      href: 'mailto:someone@example.com',
    } as unknown as LinkProps);
    const link = screen.getByRole('link', { name: 'My Link' });

    // Act
    userEvent.click(link);

    // Assert
    expect(onClick).toHaveBeenCalled();
  });
});
