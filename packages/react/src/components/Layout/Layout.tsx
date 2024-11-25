import { PropsWithChildren, ReactNode, Suspense } from 'react';
import * as Styled from './Layout.style';

type LayoutProps = {
  header: ReactNode;
  sidebar: ReactNode;
  fallback?: ReactNode;
};

const Layout = ({
  header,
  sidebar,
  fallback,
  children,
}: PropsWithChildren<LayoutProps>) => {
  const Fallback = fallback ?? null;

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
          <Suspense fallback={Fallback}>{children}</Suspense>
        </Styled.PageMain>
      </Styled.LayoutContainer>
    </div>
  );
};

export default Layout;
