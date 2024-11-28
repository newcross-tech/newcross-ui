import { PropsWithChildren, ReactNode } from 'react';
import * as Styled from './Layout.style';

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
        <Styled.PageHeader>{header}</Styled.PageHeader>
        <Styled.PageSidebar
          display="flex"
          flexDirection="column"
          semanticTag="aside"
        >
          {sidebar}
        </Styled.PageSidebar>
        <Styled.PageMain display="block" p="md">
          {children}
        </Styled.PageMain>
      </Styled.LayoutContainer>
    </div>
  );
};

export default Layout;
