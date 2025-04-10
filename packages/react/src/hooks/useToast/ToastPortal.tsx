import * as Styled from '../../components/Toast/Toast.style';
import Toast from '../../components/Toast';
import { useToastStore } from './store';

type ToastPortalProps = {
  zIndex?: number;
};

export function ToastPortal({ zIndex }: ToastPortalProps) {
  const store = useToastStore();

  return (
    <Styled.ToastContainer zIndex={zIndex}>
      {store.getToasts().map(({ message, variant, show = true, ...rest }) => {
        const key = `${variant}-${message}`;

        return (
          <Toast
            key={key}
            message={message}
            variant={variant}
            onClose={() => store.removeToast(key)}
            show={show}
            {...rest}
          />
        );
      })}
    </Styled.ToastContainer>
  );
}
