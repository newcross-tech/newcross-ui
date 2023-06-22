import { createContext, Dispatch, ReactNode, useReducer } from 'react';
import Toast, { ToastProps } from '../../components/Toast';
import { Action as ToastAction } from './actions';
import { reducer as toastReducer } from './reducer';
import * as Styled from '../../components/Toast/Toast.style';

export type EnqueueArgs = Pick<
  ToastProps,
  'variant' | 'message' | 'autoHide' | 'action' | 'duration'
>;

export type ToastType = EnqueueArgs & {
  id?: string;
  show?: boolean;
};

export type ToastProviderProps = {
  children: ReactNode;
};

const initialState: ToastType[] = [];

export const ToastContext = createContext<{
  toasts: ToastType[];
  dispatch: Dispatch<ToastAction>;
}>({
  toasts: initialState,
  dispatch: () => console.warn('no ToastContextProvider is used!'),
});

const reducer = (toasts: ToastType[], action: ToastAction) =>
  toastReducer(toasts, action);

export const ToastProvider = ({ children }: ToastProviderProps) => {
  const [toasts, dispatch] = useReducer(reducer, initialState);

  const renderToast = () => (
    <Styled.Container>
      {toasts.map(({ message, variant, show = true, ...rest }) => {
        const key = `${variant}-${message}`;

        return (
          <Toast
            key={key}
            message={message}
            variant={variant}
            onClose={() =>
              dispatch({ type: 'REMOVE_TOAST', payload: { id: key } })
            }
            show={show}
            {...rest}
          />
        );
      })}
    </Styled.Container>
  );

  return (
    <ToastContext.Provider value={{ toasts, dispatch }}>
      {renderToast()} {children}
    </ToastContext.Provider>
  );
};
