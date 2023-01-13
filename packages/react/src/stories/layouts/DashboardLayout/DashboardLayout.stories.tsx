import { Meta, Story } from '@storybook/react';
import styled, { css } from 'styled-components';
import DashboardLayout, {
  DashboardLayoutProps,
} from '../../../components/DashboardLayout';
import Typography from '../../../components/Typography';
export default {
  title: 'React/Components/Layouts/DashboardLayout',
  component: DashboardLayout,
} as Meta;

const HeaderWrapper = styled.div`
  ${({ theme }) => css`
    height: 100%;
    background-color: ${theme.ColorBaseBlue100};
  `};
`;

const MainWrapper = styled.div`
  ${({ theme }) => css`
    height: 100%;
    background-color: ${theme.ColorBaseRed100};
  `};
`;

const SidebarWrapper = styled.div`
  ${({ theme }) => css`
    height: 100%;
    background-color: ${theme.ColorBaseGreen100};
  `};
`;

const Template = ({ ...rest }: DashboardLayoutProps) => (
  <DashboardLayout {...rest} />
);

export const Interactive: Story<DashboardLayoutProps> = Template.bind({});

Interactive.args = {
  header: (
    <HeaderWrapper>
      <Typography variant={'heading1'}>Header</Typography>
    </HeaderWrapper>
  ),
  main: (
    <MainWrapper>
      <Typography variant={'heading1'}>Main</Typography>
    </MainWrapper>
  ),
  sidebar: (
    <SidebarWrapper>
      <Typography variant={'heading1'}>Sidebar</Typography>
    </SidebarWrapper>
  ),
};
