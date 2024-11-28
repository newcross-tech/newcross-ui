import React, { PropsWithChildren } from 'react';
import { render } from '@testing-library/react';
import { byTestId } from 'testing-library-selector';
import Layout, { LayoutProps } from './Layout';

const renderComponent = (
  customProps: PropsWithChildren<Partial<LayoutProps>>
) => {
  const defaultProps = {
    header: <div data-testid="header">Header Content</div>,
    sidebar: <div data-testid="sidebar">Sidebar Content</div>,
    children: <div data-testid="children">Main Content</div>,
    ...customProps,
  };

  render(<Layout {...defaultProps} />);
};

describe('Layout Component', () => {
  const ui = {
    header: byTestId('header'),
    sidebar: byTestId('sidebar'),
    children: byTestId('children'),
  };

  it('renders the header, sidebar, and main content correctly', () => {
    // Arrange & Act
    renderComponent({});

    // Assert
    expect(ui.header.get()).toBeInTheDocument();
    expect(ui.header.get()).toHaveTextContent('Header Content');
    expect(ui.sidebar.get()).toBeInTheDocument();
    expect(ui.sidebar.get()).toHaveTextContent('Sidebar Content');
    expect(ui.children.get()).toBeInTheDocument();
    expect(ui.children.get()).toHaveTextContent('Main Content');
  });

  it('renders only header and children when no sidebar is provided', () => {
    // Arrange & Act
    renderComponent({ sidebar: undefined });

    // Assert
    expect(ui.header.get()).toBeInTheDocument();
    expect(ui.header.get()).toHaveTextContent('Header Content');
    expect(() => ui.sidebar.get()).toThrow();
    expect(ui.children.get()).toBeInTheDocument();
    expect(ui.children.get()).toHaveTextContent('Main Content');
  });

  it('renders only sidebar and children when no header is provided', () => {
    // Arrange & Act
    renderComponent({ header: undefined });

    // Assert
    expect(() => ui.header.get()).toThrow();
    expect(ui.sidebar.get()).toBeInTheDocument();
    expect(ui.sidebar.get()).toHaveTextContent('Sidebar Content');
    expect(ui.children.get()).toBeInTheDocument();
    expect(ui.children.get()).toHaveTextContent('Main Content');
  });

  it('renders correctly without children', () => {
    // Arrange & Act
    renderComponent({ children: undefined });

    // Assert
    expect(ui.header.get()).toBeInTheDocument();
    expect(ui.sidebar.get()).toBeInTheDocument();
    expect(() => ui.children.get()).toThrow();
  });
});
