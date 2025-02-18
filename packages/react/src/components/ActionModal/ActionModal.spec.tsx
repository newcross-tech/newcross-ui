import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { byTestId, byText } from 'testing-library-selector';
import ActionModal, { ActionModalProps } from './ActionModal';
import Container from '../Container';
import Button from '../Button';
import Typography from '../Typography';
import * as useIsBottomSheetBreakpointHook from './hooks/useIsBottomSheetBreakpoint';
import { mockMatchMedia } from '../../utils/test/mockMatchMedia';

beforeAll(() => {
  global.ResizeObserver = class {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    observe() {}
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    unobserve() {}
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    disconnect() {}
  };
});

afterAll(() => {
  global.ResizeObserver = ResizeObserver;
});

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

const ui = {
  modalContainer: byTestId('action-modal-container'),
  backdrop: () =>
    ui.modalContainer.get().getElementsByClassName('action-modal-backdrop')[0],
  closeIcon: byTestId('action-modal-close-icon'),
  exclamationIcon: byTestId('action-modal-exclamation-icon'),
  footerWrapper: byTestId('footer-wrapper'),
  dragBar: byTestId('action-modal-drag-bar'),
};

const renderActionModal = (props: ActionModalProps) => {
  return render(<ActionModal {...props} />);
};

const clickOnBackdrop = () => {
  userEvent.click(ui.backdrop());
};

describe('ActionModal', () => {
  beforeEach(() => {
    jest
      .spyOn(useIsBottomSheetBreakpointHook, 'useIsBottomSheetBreakpoint')
      .mockReturnValue(false);
    mockMatchMedia(false);
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
  });

  it('should render successfully', () => {
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
    expect(ui.footerWrapper.query()).not.toBeInTheDocument();
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
    expect(ui.closeIcon.query()).not.toBeInTheDocument();
  });

  it('should call onDismiss when clicking on the close icon in modal mode', () => {
    // Arrange
    const onDismiss = jest.fn();
    renderActionModal({ ...defaultProps, onDismiss, $isAlwaysModal: true });

    // Act
    userEvent.click(ui.closeIcon.get());

    // Assert
    expect(onDismiss).toHaveBeenCalled();
  });

  it('should call onDismiss when clicking on the backdrop if `canCloseOnActionOnly` is false', () => {
    // Arrange
    const onDismiss = jest.fn();
    renderActionModal({ ...defaultProps, onDismiss });

    // Act
    clickOnBackdrop();

    // Assert
    expect(onDismiss).toHaveBeenCalled();
  });

  it('should render as a bottom sheet when `useIsBottomSheetBreakpoint` returns true', () => {
    // Arrange
    jest
      .spyOn(useIsBottomSheetBreakpointHook, 'useIsBottomSheetBreakpoint')
      .mockReturnValue(true);
    renderActionModal({ ...defaultProps, $isAlwaysModal: false });

    // Assert
    expect(ui.exclamationIcon.get()).toBeVisible();
  });

  it('should not render the close icon when in bottom sheet mode', () => {
    // Arrange
    jest
      .spyOn(useIsBottomSheetBreakpointHook, 'useIsBottomSheetBreakpoint')
      .mockReturnValue(true);
    renderActionModal({ ...defaultProps, $isAlwaysModal: false });

    // Assert
    expect(ui.closeIcon.query()).not.toBeInTheDocument();
  });

  it('should render the drag bar in bottom sheet mode', () => {
    // Arrange
    jest
      .spyOn(useIsBottomSheetBreakpointHook, 'useIsBottomSheetBreakpoint')
      .mockReturnValue(true);
    renderActionModal({ ...defaultProps, $isAlwaysModal: false });

    // Assert
    expect(ui.dragBar.get()).toBeVisible();
  });
});
