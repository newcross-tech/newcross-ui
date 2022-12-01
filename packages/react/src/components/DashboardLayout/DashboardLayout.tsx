import { ReactNode } from 'react';
import * as Styled from './DashboardLayout.style';

export type DashboardLayoutProps = {
  /**
   * header content
   */
  header: ReactNode;
  /**
   * main content
   */
  main: ReactNode;
  /**
   * sidebar content
   */
  sidebar: ReactNode;
};

const DashboardLayout = ({ header, main, sidebar }: DashboardLayoutProps) => (
  <Styled.DashboardLayout>
    <Styled.PageHeader>{header}</Styled.PageHeader>
    <Styled.PageSidebar>{sidebar}</Styled.PageSidebar>
    <Styled.PageMain>{main}</Styled.PageMain>
  </Styled.DashboardLayout>
);

export default DashboardLayout;
