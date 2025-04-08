import { ToastProps } from '../../components/Toast';

export type ToastItem = Omit<ToastProps, 'show'> & {
  id?: string;
  show?: boolean;
};

export class ToastState {
  static readonly instance = new ToastState();

  private readonly listeners: (() => void)[] = [];

  constructor(private toasts: ToastItem[] = []) {}

  // region subscribe logic
  subscribe = (callback: () => void) => {
    this.listeners.push(callback);
    return () => {
      this.listeners.splice(this.listeners.indexOf(callback), 1);
    };
  };

  getSnapshot = () => this.toasts;

  private emitChange = () => {
    this.listeners.forEach((callback) => callback());
  };
  // endregion

  getToasts = (): readonly ToastItem[] => this.toasts;

  addToast = (toast: ToastItem) => {
    this.toasts = [
      ...this.toasts,
      {
        ...toast,
        id: `${toast.variant}-${toast.message}`,
        show: true,
      },
    ];
    this.emitChange();
  };

  removeToast = (id: string) => {
    this.toasts = this.toasts.filter((item) => item.id !== id);
    this.emitChange();
  };

  removeAllToasts = () => {
    this.toasts = [];
    this.emitChange();
  };

  enqueueToast = (
    payload: Omit<ToastItem, 'id' | 'show'>,
    showLatestOnly = false
  ) => {
    if (showLatestOnly) {
      this.removeAllToasts();
    }

    this.addToast(payload);
  };
}

export const enqueueToast = ToastState.instance.enqueueToast;
