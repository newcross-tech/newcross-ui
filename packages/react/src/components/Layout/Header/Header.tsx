import { PropsWithChildren, ReactElement } from 'react';
import { faBars } from '@fortawesome/pro-light-svg-icons/faBars';
import * as Styled from './Header.style';

type HeaderProps = {
  setOpenDrawer?: VoidFunction;
};

const Header = ({
  setOpenDrawer,
  children,
}: PropsWithChildren<HeaderProps>): ReactElement => {
  return (
    <Styled.Container
      justifyContent="space-between"
      alignItems="center"
      p="SpacingBase16"
      data-testid="header-component"
    >
      <Styled.Icon onClick={setOpenDrawer} icon={faBars} />
      {children}
    </Styled.Container>
  );
};

export default Header;
