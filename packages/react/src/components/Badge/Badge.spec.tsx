import { render, screen } from '@testing-library/react';
import Badge, { BadgeProps } from './Badge';
import Typography from '../Typography';
import { faHeart } from '@fortawesome/pro-solid-svg-icons/faHeart';
import { axe } from '../../utils/test/axeConfig';
import { byTestId } from 'testing-library-selector';
import userEvent from '@testing-library/user-event';

const renderComponent = (customProps: Partial<BadgeProps>) => {
  render(<Badge {...customProps} />);
};

describe('Badge Component', () => {
  const ui = {
    badgeContainer: (testID: string) => byTestId(`badge-container-${testID}`),
    notificationCycle: () => byTestId('notification-cycle'),
    iconBadge: () => byTestId('icon-badge'),
    badgeCutout: (testID: string) => byTestId(`badge-cutout-${testID}`),
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

  it('renders successfully when size is medium', () => {
    // Act
    renderComponent({
      testID: 'medium',
      size: 'medium',
      badgeContent: 'medium',
    });

    // Assert
    expect(screen.getByText('medium')).toBeInTheDocument();
  });

  it('renders the correct badgeContent when the value does not exceeds maxNumber', () => {
    // Act
    renderComponent({ badgeContent: 5 });

    // Assert
    expect(screen.getByText('5')).toBeInTheDocument();
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

  it('renders the Icon when badgeContent is an IconDefinition', () => {
    // Act
    renderComponent({
      badgeContent: faHeart,
    });

    // Assert
    expect(ui.iconBadge().get()).toBeInTheDocument();
  });

  it('renders the NotificationCycle when size is small', () => {
    // Act
    renderComponent({ size: 'small', type: 'notification' });

    // Assert
    expect(ui.notificationCycle().get()).toBeInTheDocument();
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
      testID: 'cutout',
    });

    // Assert
    expect(ui.badgeCutout('cutout').get()).toBeInTheDocument();
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

  it('should not render NotificationCycle when size is not small', () => {
    // Act
    renderComponent({ size: 'large', type: 'notification', testID: 'large' });

    // Assert
    expect(ui.notificationCycle().query()).not.toBeInTheDocument();
  });

  it('should render the LegacyBadge when the legacy prop is passed', () => {
    // Act
    renderComponent({ badgeContent: 'Legacy Badge', position: 'topRight' });

    // Assert
    expect(screen.getByText('Legacy Badge')).toBeInTheDocument();
  });
});
