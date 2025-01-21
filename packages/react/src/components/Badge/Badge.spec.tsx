import { render, screen } from '@testing-library/react';
import Badge, { BadgeProps } from './Badge';
import Typography from '../Typography';
import { axe } from '../../utils/test/axeConfig';
import { byTestId } from 'testing-library-selector';
import { userEvent } from '@storybook/testing-library';

const renderComponent = (customProps: Partial<BadgeProps>) => {
  const props = {
    badgeContent: 7,
    children: <Typography variant="p1">Text</Typography>,
    ...customProps,
  };

  render(<Badge {...props} />);
};

describe('Badge Component', () => {
  const ui = {
    badgeContainer: (testID: string) => byTestId(`badge-container-${testID}`),
    favoriteBadgeContainer: (testID: string) =>
      byTestId(`badge-container-favorite-${testID}`),
    notificationCycle: () => byTestId('notification-cycle'),
  };

  it('should not have any a11y violations', async () => {
    // Arrange
    renderComponent({});

    // Act
    const results = await axe(document.body);

    // Assert
    expect(results).toHaveNoViolations();
  });

  it('renders successfully with default props', () => {
    // Act
    renderComponent({ testID: 'default' });

    // Assert
    expect(ui.badgeContainer('default').get()).toBeInTheDocument();
  });

  it('renders the correct badgeContent when the value exceeds maxNumber', () => {
    // Act
    renderComponent({ badgeContent: 1000 });

    // Assert
    expect(screen.getByText('999+')).toBeInTheDocument();
  });

  it('renders the correct badgeContent when the value exceeds custom maxNumber', () => {
    // Act
    renderComponent({ badgeContent: 1000, maxNumber: 5 });

    // Assert
    expect(screen.getByText('5+')).toBeInTheDocument();
  });

  it('renders the FavoriteBadge when type is icon', () => {
    // Act
    renderComponent({ type: 'icon', testID: 'favorite' });

    // Assert
    expect(ui.favoriteBadgeContainer('favorite')).toBeInTheDocument();
  });

  it('renders the NotificationCycle when size is small', () => {
    // Act
    renderComponent({ size: 'small', type: 'notification' });

    // Assert
    expect(ui.notificationCycle()).toBeInTheDocument();
  });

  it('does not render badgeContent when size is small', () => {
    // Act
    renderComponent({ size: 'small', badgeContent: 7 });

    // Assert
    expect(screen.queryByText('7')).not.toBeInTheDocument();
  });

  it('renders a cutout when children are passed', () => {
    // Act
    renderComponent({
      children: <Typography variant="p1">Cutout Child</Typography>,
    });

    // Assert
    expect(screen.getByText('Cutout Child')).toBeInTheDocument();
  });

  it('calls onClick when the badge is clicked', () => {
    // Arrange
    const onClick = jest.fn();
    renderComponent({ onClick, testID: 'click-test' });

    // Act
    userEvent.click(ui.badgeContainer('click-test').get());

    // Assert
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('does not call onClick when the badge is disabled', () => {
    // Arrange
    const onClick = jest.fn();
    renderComponent({ onClick, disabled: true, testID: 'disabled' });

    // Act
    userEvent.click(ui.badgeContainer('disabled').get());

    // Assert
    expect(onClick).not.toHaveBeenCalled();
  });

  it('renders successfully with a favorite badge type and cutout', () => {
    // Act
    renderComponent({
      type: 'icon',
      children: <Typography variant="p1">Favorite</Typography>,
      testID: 'favorite-cutout',
    });

    // Assert
    expect(ui.favoriteBadgeContainer('favorite-cutout')).toBeInTheDocument();
  });

  it('should not render NotificationCycle when size is not small', () => {
    // Act
    renderComponent({ size: 'large', type: 'notification', testID: 'large' });

    // Assert
    expect(ui.notificationCycle()).not.toBeInTheDocument();
  });
});
