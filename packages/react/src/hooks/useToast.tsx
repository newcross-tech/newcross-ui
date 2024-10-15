import { useContext } from 'react';
import { EnqueueArgs, ToastContext } from '../context/toast/ToastProvider';

/**
 * hook to trigger Toast components in an imperative way
 *
 * ToastProvider must be used
 *
 * @returns trigger toast function
 */
export const useToast = () => {
  const { dispatch } = useContext(ToastContext);

  const enqueueToast = (payload: EnqueueArgs, showLatestOnly = false) => {
    if (showLatestOnly) {
      dispatch({
        type: 'REMOVE_ALL_TOASTS',
      });
    }

    dispatch({
      type: 'ADD_TOAST',
      payload,
    });
  };

  return { enqueueToast };
};
