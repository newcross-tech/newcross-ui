import { PropsWithChildren } from 'react';
import { renderHook, act } from '@testing-library/react';
import { byTestId } from 'testing-library-selector';
import userEvent from '@testing-library/user-event';
import { useToast, ToastProvider, ToastPortal } from './index';

describe('toasts', () => {
  const ui = {
    toastElement: byTestId(`toast-component`),
    alertCloseIcon: byTestId(`alert-close-icon`),
  };

  it.each([
    {
      wrapper: ({ children }: PropsWithChildren) => (
        <>
          <ToastPortal />
          {children}
        </>
      ),
    },
    {
      wrapper: ({ children }: PropsWithChildren) => (
        <ToastProvider>{children}</ToastProvider>
      ),
    },
  ])('creates a toast', async ({ wrapper }) => {
    const { result } = renderHook(useToast, { wrapper });

    // region Act
    act(() =>
      result.current.enqueueToast({
        variant: 'success',
        message: `This is a Toast!`,
        autoHide: false,
      })
    );
    // endregion

    // region Assert
    expect(await ui.toastElement.find()).toBeInTheDocument();
    // endregion

    // region Act/Assert
    userEvent.click(ui.alertCloseIcon.get());
    // endregion
  });
});
