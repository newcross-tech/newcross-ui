/** @jest-environment jsdom */
import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
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
  render(<ActionModal {...props} />);
};

describe('ActionModal', () => {
  beforeAll(() => {
    mockMatchMedia(false);
  });
  afterAll(() => {
    jest.clearAllMocks();
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

  it('should call onDismiss when clicking on the close icon', () => {
    // Arrange
    renderActionModal(defaultProps);

    // Act
    const closeIcon = byTestId('action-modal-close-icon').get();
    userEvent.click(closeIcon);

    // Assert
    expect(defaultProps.onDismiss).toHaveBeenCalled();
  });
});
