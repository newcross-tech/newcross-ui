import { Theme } from '@newcross-ui/react';
import styled, { css } from 'styled-components';
import Container from '../Container';
import { breakpoint } from '../../utils/css';

export const LayoutContainer = styled.div<Theme>`
  ${({ theme }) => css`
    display: grid;
    min-height: 100vh;
    grid-template-areas: 'sidebar main';
    grid-template-columns: ${theme.AppLayoutWidthAside} 1fr;
    grid-template-rows: auto;

    ${breakpoint.md`
      grid-template-areas: 'header' 'main';
      grid-template-columns: 1fr;
      grid-template-rows: ${theme.AppLayoutHeightHeader} 1fr;
    `}
  `}
`;

export const PageHeader = styled.header<Theme>`
  grid-area: header;
  display: none;

  ${breakpoint.md`
    display: block;
    background-color: ${({ theme }) => theme.ThemesPrimary500};
  `}
`;

export const PageMain = styled(Container)<Theme>`
  grid-area: main;
  overflow-x: auto;
  max-width: ${({ theme }) => theme.AppLayoutWidthMain};
`;

export const PageSidebar = styled(Container)<Theme>`
  grid-area: sidebar;
  background-color: ${({ theme }) => theme.ThemesPrimary500};

  ${breakpoint.md`
    display: none;
  `}
`;
