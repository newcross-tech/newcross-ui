import styled, { css } from 'styled-components';
import { Theme } from '../../types';

export const DashboardLayout = styled.div`
  min-height: 100vh;

  ${({ theme }: Theme) => css`
    display: grid;
    column-gap: ${theme.GridDesktopGutter};
    grid-template-columns: repeat(${theme.GridDesktopNumberOfColumns}, 1fr);

    @media (max-width: ${theme.GridLaptopBreakpoint}px) {
      column-gap: ${theme.GridLaptopGutter};
    }

    @media (max-width: ${theme.GridTabletBreakpoint}px) {
      grid-template-columns: repeat(${theme.GridTabletNumberOfColumns}, 1fr);
    }

    @media (max-width: ${theme.GridMobileBreakpoint}px) {
      column-gap: ${theme.GridMobileGutter};
      grid-template-columns: repeat(${theme.GridMobileNumberOfColumns}, 1fr);
    }
  `};
`;

export const PageHeader = styled.div`
  ${({ theme }: Theme) => css`
    grid-column: span ${theme.LayoutDashboardDesktopHeaderColumnSpan};

    @media (max-width: ${theme.GridTabletBreakpoint}px) {
      grid-column: span ${theme.LayoutDashboardTabletHeaderColumnSpan};
    }

    @media (max-width: ${theme.GridMobileBreakpoint}px) {
      grid-column: span ${theme.LayoutDashboardMobileHeaderColumnSpan};
    }
  `};
`;

export const PageMain = styled.div`
  ${({ theme }: Theme) => css`
    grid-column: span ${theme.LayoutDashboardDesktopMainColumnSpan};

    @media (max-width: ${theme.GridTabletBreakpoint}px) {
      grid-column: span ${theme.LayoutDashboardTabletMainColumnSpan};
    }

    @media (max-width: ${theme.GridMobileBreakpoint}px) {
      grid-column: span ${theme.LayoutDashboardMobileMainColumnSpan};
    }
  `};
`;

export const PageSidebar = styled.div`
  ${({ theme }: Theme) => css`
    grid-column: span ${theme.LayoutDashboardDesktopSidebarColumnSpan};

    @media (max-width: ${theme.GridTabletBreakpoint}px) {
      display: none;
    }
  `};
`;
