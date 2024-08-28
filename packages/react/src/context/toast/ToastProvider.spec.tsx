import { PropsWithChildren } from 'react';
import { fireEvent, renderHook } from '@testing-library/react';
import { byTestId } from 'testing-library-selector';
import { useToast } from '../../hooks/useToast';
import { act } from 'react-dom/test-utils';
import { ToastProvider } from './ToastProvider';

describe('useToast', () => {
  const ui = {
    toastComp: byTestId(`toast-component`),
    alertCloseIconComp: byTestId(`alert-close-icon`),
  };
  jest.useRealTimers();

  it('creates a toast using useToast ', async () => {
    const wrapper = ({ children }: PropsWithChildren) => (
      <ToastProvider>{children}</ToastProvider>
    );
    const { result } = renderHook(() => useToast(), { wrapper });

    // Act
    act(() =>
      result.current.enqueueToast({
        variant: 'success',
        message: `This is a Toast!`,
        autoHide: false,
      })
    );

    expect(ui.toastComp.get()).toBeInTheDocument();

    fireEvent.click(ui.alertCloseIconComp.get());
  });

  it('wont create a toast if there is no provider ', () => {
    const wrapper = ({ children }: PropsWithChildren) => <div>{children}</div>;
    const { result } = renderHook(() => useToast(), { wrapper });

    // Act
    act(() =>
      result.current.enqueueToast({
        variant: 'success',
        message: `This is a Toast!`,
        autoHide: false,
      })
    );

    expect(ui.toastComp.query()).not.toBeInTheDocument();
  });
});
