import { PropsWithChildren, ReactNode } from 'react';
import * as Styled from './Layout.style';
import Header from './Header';

export type LayoutProps = {
  header: ReactNode;
  sidebar: ReactNode;
};

const Layout = ({
  header,
  sidebar,
  children,
}: PropsWithChildren<LayoutProps>) => {
  return (
    <div>
      <Styled.LayoutContainer>
        <Styled.PageHeader>
          <Header>{header}</Header>
        </Styled.PageHeader>
        <Styled.PageSidebar
          display="flex"
          flexDirection="column"
          semanticTag="aside"
        >
          {sidebar}
        </Styled.PageSidebar>
        <Styled.PageMain display="block" p="md" semanticTag="main">
          {children}
        </Styled.PageMain>
      </Styled.LayoutContainer>
    </div>
  );
};

export default Layout;
