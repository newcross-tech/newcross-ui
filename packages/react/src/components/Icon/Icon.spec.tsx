import { render, screen } from '@testing-library/react';
import { faChevronRight } from '@fortawesome/pro-light-svg-icons/faChevronRight';
import Icon, { IconProps } from './Icon';

describe('Icon Component', () => {
  const renderComponent = ({
    icon = faChevronRight,
    variant = 'h1',
    ...rest
  }: Partial<IconProps>) => {
    return render(<Icon icon={icon} variant={variant} {...rest} />);
  };

  it('renders the Icon component successfully', () => {
    // Arrange & Act
    renderComponent({ testID: 'icon-mock' });

    // Assert
    const container = screen.getByTestId('icon-mock');
    expect(container).toBeInTheDocument();
  });
});
