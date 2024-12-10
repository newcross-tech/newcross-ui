import { PropsWithChildren, useRef } from 'react';
import { faClose } from '@fortawesome/pro-solid-svg-icons/faClose';
import * as Styled from './Drawer.style';
import { useOutsideDetector } from '../../hooks/useOutsideDetector';

export type DrawerProps = {
  isOpen: boolean;
  side: 'left' | 'right';
  onClose: VoidFunction;
  zIndex?: number;
};

export const Drawer = ({
  isOpen,
  side,
  children,
  onClose,
  ...rest
}: PropsWithChildren<DrawerProps>) => {
  const drawerRef = useRef<HTMLDivElement>(null);

  useOutsideDetector(drawerRef, onClose);

  return (
    <Styled.Container
      ref={drawerRef}
      data-testid="drawer"
      isOpen={isOpen}
      side={side}
      {...rest}
    >
      <Styled.CloseIcon
        variant="h1"
        p="xs"
        color="actionSecondaryLight"
        icon={faClose}
        onClick={onClose}
        testID="drawer-close-icon"
      />
      {children}
    </Styled.Container>
  );
};

export default Drawer;
