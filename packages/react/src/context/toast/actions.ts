import { ToastType } from './ToastProvider';

export type Action =
  | { type: 'ADD_TOAST'; payload: ToastType }
  | { type: 'REMOVE_TOAST'; payload: { id?: string } };
