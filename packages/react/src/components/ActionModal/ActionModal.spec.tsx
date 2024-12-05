/** @jest-environment jsdom */
import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { byTestId, byText } from 'testing-library-selector';
import ActionModal, { ActionModalProps } from './ActionModal';
import Container from '../Container';
import Button from '../Button';
import Typography from '../Typography';
import { mockMatchMedia } from '../../utils/test/mockMatchMedia';

window.ResizeObserver =
  window.ResizeObserver ||
  jest.fn().mockImplementation(() => ({
    disconnect: jest.fn(),
    observe: jest.fn(),
    unobserve: jest.fn(),
  }));

const defaultProps: ActionModalProps = {
  open: true,
  onDismiss: jest.fn(),
  title: 'Question to the user?',
  subtitle: 'Description on what will happen if confirming',
  footer: (
    <Container justifyContent="space-between" fullWidth gap="SpacingBase16">
      <Button variant="secondary" style={{ flexGrow: 1 }}>
        A Way Out
      </Button>
      <Button variant="primary" style={{ flexGrow: 1 }}>
        Decision
      </Button>
    </Container>
  ),
  content: (
    <>
      <Typography variant="heading3" color="primary" align="center">
        SLOT
      </Typography>
      <Typography variant="paragraph1" color="secondary" align="center">
        (This is where the content goes)
      </Typography>
    </>
  ),
};

const renderActionModal = (props: ActionModalProps) => {
  return render(<ActionModal {...props} />);
};

const clickOnBackdrop = () => {
  const backdrop = byTestId('action-modal-container')
    .get()
    .getElementsByClassName('action-modal-backdrop')[0];
  fireEvent.click(backdrop);
};

describe('ActionModal', () => {
  beforeAll(() => {
    mockMatchMedia(false);
  });
  afterAll(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
  });
  it('should render successfuly', () => {
    // Arrange
    renderActionModal(defaultProps);

    // Assert
    expect(byText('Question to the user?').get()).toBeVisible();
    expect(
      byText('Description on what will happen if confirming').get()
    ).toBeVisible();
    expect(byText('SLOT').get()).toBeVisible();
    expect(byText('(This is where the content goes)').get()).toBeVisible();
    expect(byText('A Way Out').get()).toBeVisible();
    expect(byText('Decision').get()).toBeVisible();
  });
  it('should have no footer when there is no footer prop', () => {
    // Arrange & Act
    renderActionModal({ ...defaultProps, footer: null });

    // Assert
    expect(byTestId('footer-wrapper').query()).not.toBeInTheDocument();
  });
  it('should not call onDismiss when clicking on the backdrop if canCloseOnActionOnly is true', () => {
    // Arrange
    const onDismiss = jest.fn();
    renderActionModal({
      ...defaultProps,
      canCloseOnActionOnly: true,
      onDismiss,
    });

    // Act
    clickOnBackdrop();

    // Assert
    expect(onDismiss).not.toHaveBeenCalled();
  });

  it('should not display the close icon when canCloseOnActionOnly is true', () => {
    // Arrange
    renderActionModal({ ...defaultProps, canCloseOnActionOnly: true });

    // Assert
    expect(byTestId('action-modal-close-icon').query()).not.toBeInTheDocument();
  });
  it('should call onDismiss when clicking on the close icon', () => {
    // Arrange
    const onDismiss = jest.fn();
    renderActionModal({ ...defaultProps, onDismiss });

    // Act
    const closeIcon = byTestId('action-modal-close-icon').get();
    userEvent.click(closeIcon);

    // Assert
    expect(onDismiss).toHaveBeenCalled();
  });

  it('should  call onDismiss when clicking on the backdrop', () => {
    // Arrange
    const onDismiss = jest.fn();
    renderActionModal({ ...defaultProps, onDismiss });

    // Act
    clickOnBackdrop();

    // Assert
    expect(onDismiss).toHaveBeenCalled();
  });
});
