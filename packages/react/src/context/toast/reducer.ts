import { ToastType } from './ToastProvider';
import { Action } from './actions';

export const reducer = (state: ToastType[], action: Action) => {
  switch (action.type) {
    case 'ADD_TOAST':
      return [
        ...state,
        {
          ...action.payload,
          id: `${action.payload.variant}-${action.payload.message}`,
          show: true,
        },
      ];

    case 'REMOVE_TOAST':
      return [...state.filter((item) => item.id !== action.payload.id)];

    case 'REMOVE_ALL_TOASTS':
      return [];
    default:
      return state;
  }
};
