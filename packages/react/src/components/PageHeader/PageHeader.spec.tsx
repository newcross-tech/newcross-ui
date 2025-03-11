import { render, fireEvent } from '@testing-library/react';
import { byTestId, byText } from 'testing-library-selector';
import PageHeader from './PageHeader';

const title = 'Test Title';
const subtitle = 'Test Subtitle';
const mockOnBackClick = jest.fn();
const secondaryAction = <button>Secondary Action</button>;

describe('PageHeader Component', () => {
  const ui = {
    title: byText(title),
    subtitle: byText(subtitle),
    backIcon: byTestId('title-back-icon'),
    secondaryAction: byText('Secondary Action'),
  };

  it('renders successfully with all elements', () => {
    // Act
    render(
      <PageHeader
        title={title}
        subtitle={subtitle}
        onBackClick={mockOnBackClick}
        secondaryAction={secondaryAction}
      />
    );

    // Assert
    expect(ui.title.get()).toBeVisible();
    expect(ui.subtitle.get()).toBeVisible();
    expect(ui.backIcon.get()).toBeVisible();
    expect(ui.secondaryAction.get()).toBeVisible();
  });

  it('renders successfully without back icon', () => {
    // Act
    render(
      <PageHeader
        title={title}
        subtitle={subtitle}
        secondaryAction={secondaryAction}
      />
    );

    // Assert
    expect(ui.title.get()).toBeVisible();
    expect(ui.subtitle.get()).toBeVisible();
    expect(ui.backIcon.query()).not.toBeInTheDocument();
    expect(ui.secondaryAction.get()).toBeVisible();
  });

  it('renders successfully without secondary action', () => {
    // Act
    render(
      <PageHeader
        title={title}
        subtitle={subtitle}
        onBackClick={mockOnBackClick}
      />
    );

    // Assert
    expect(ui.title.get()).toBeVisible();
    expect(ui.subtitle.get()).toBeVisible();
    expect(ui.backIcon.get()).toBeVisible();
    expect(ui.secondaryAction.query()).not.toBeInTheDocument();
  });

  it('renders successfully without back icon and secondary action', () => {
    // Act
    render(<PageHeader title={title} subtitle={subtitle} />);

    // Assert
    expect(ui.title.get()).toBeVisible();
    expect(ui.subtitle.get()).toBeVisible();
    expect(ui.backIcon.query()).not.toBeInTheDocument();
    expect(ui.secondaryAction.query()).not.toBeInTheDocument();
  });

  it('calls onBackClick when back icon is clicked', () => {
    // Act
    render(
      <PageHeader
        title={title}
        subtitle={subtitle}
        onBackClick={mockOnBackClick}
      />
    );
    fireEvent.click(ui.backIcon.get());

    // Assert
    expect(mockOnBackClick).toHaveBeenCalledTimes(1);
  });
});
