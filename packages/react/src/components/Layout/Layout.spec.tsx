import React, { lazy } from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Layout from './Layout';

describe('Layout Component', () => {
  const headerContent = <div data-testid="header">Header Content</div>;
  const sidebarContent = <div data-testid="sidebar">Sidebar Content</div>;
  const fallbackContent = <div data-testid="fallback">Loading...</div>;
  const childrenContent = <div data-testid="children">Main Content</div>;

  it('renders the header content', () => {
    // Arrange & Act
    render(
      <Layout header={headerContent} sidebar={sidebarContent}>
        {childrenContent}
      </Layout>
    );

    // Assert
    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('header')).toHaveTextContent('Header Content');
  });

  it('renders the sidebar content', () => {
    // Arrange & Act
    render(
      <Layout header={headerContent} sidebar={sidebarContent}>
        {childrenContent}
      </Layout>
    );

    // Assert
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    expect(screen.getByTestId('sidebar')).toHaveTextContent('Sidebar Content');
  });

  it('renders the fallback content when provided', async () => {
    const LazyComponent = lazy(
      () =>
        new Promise<{ default: React.FC }>((resolve) =>
          setTimeout(() => {
            resolve({
              default: () => <div data-testid="lazy">Lazy Loaded Content</div>,
            });
          }, 100)
        )
    );

    // Render the Layout with lazy-loaded content
    render(
      <Layout
        header={headerContent}
        sidebar={sidebarContent}
        fallback={fallbackContent}
      >
        <LazyComponent />
      </Layout>
    );

    // Assert that the fallback content is rendered initially
    expect(screen.getByTestId('fallback')).toBeInTheDocument();
    expect(screen.getByTestId('fallback')).toHaveTextContent('Loading...');

    // Wait for the lazy component to finish loading
    await waitFor(() => {
      expect(screen.getByTestId('lazy')).toBeInTheDocument();
    });

    // Assert that the fallback content is removed after loading
    expect(screen.queryByTestId('fallback')).not.toBeInTheDocument();
  });

  it('renders the children content inside the Suspense boundary', () => {
    // Arrange & Act
    render(
      <Layout header={headerContent} sidebar={sidebarContent}>
        {childrenContent}
      </Layout>
    );

    // Assert
    expect(screen.getByTestId('children')).toBeInTheDocument();
    expect(screen.getByTestId('children')).toHaveTextContent('Main Content');
  });

  it('renders correctly without a fallback', () => {
    // Arrange & Act
    render(
      <Layout header={headerContent} sidebar={sidebarContent}>
        {childrenContent}
      </Layout>
    );

    // Assert
    expect(screen.queryByTestId('fallback')).not.toBeInTheDocument();
  });
});
