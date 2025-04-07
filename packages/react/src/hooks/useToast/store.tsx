import {
  createContext,
  ReactNode,
  useContext,
  useMemo,
  useSyncExternalStore,
} from 'react';
import { ToastState } from './state';
import { ToastPortal } from './ToastPortal';

export const ToastContext = createContext(ToastState.instance);

export type ToastProviderProps = {
  children: ReactNode;
  zIndex?: number;
};

export const ToastProvider = ({ children, zIndex }: ToastProviderProps) => {
  const state = useMemo(() => new ToastState(), []);

  return (
    <ToastContext.Provider value={state}>
      <ToastPortal zIndex={zIndex} />
      {children}
    </ToastContext.Provider>
  );
};

export const useToastStore = () => {
  const context = useContext(ToastContext);

  useSyncExternalStore(context.subscribe, context.getSnapshot);

  return context;
};

export const useToast = () => {
  const store = useToastStore();

  return {
    enqueueToast: store.enqueueToast,
  };
};
