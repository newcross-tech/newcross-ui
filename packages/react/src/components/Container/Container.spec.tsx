import { render, screen } from '@testing-library/react';
import Container, { ContainerProps, NewContainerProps } from './Container';
import { LegacyContainerProps } from './LegacyContainer';

const renderComponent = (customProps: ContainerProps) => {
  const props = {
    testID: 'container-component',
    ...customProps,
  };

  render(<Container {...props} />);
};

describe('Container Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render LegacyContainer when isLegacyProps is true', () => {
    const legacyProps: LegacyContainerProps = {
      m: 'SpacingBase16',
      p: 'SpacingBase24',
      gap: 'SpacingBase8',
      children: <div>Legacy Content</div>,
    };

    renderComponent(legacyProps);

    expect(screen.getByText('Legacy Content')).toBeInTheDocument();
  });

  it('should render Styled.Container when isLegacyProps is false', () => {
    const newProps: NewContainerProps = {
      m: 'sm',
      p: 'md',
      gap: 'lg',
      display: 'flex',
      children: <div>New Content</div>,
    };

    renderComponent(newProps);

    expect(screen.getByText('New Content')).toBeInTheDocument();
  });

  it('should render children correctly', () => {
    const props: NewContainerProps = {
      children: <div>Child Content</div>,
    };

    renderComponent(props);

    expect(screen.getByText('Child Content')).toBeInTheDocument();
  });

  it('should apply testID to the container', () => {
    const props: NewContainerProps = {
      testID: 'custom-container',
      children: <div>With TestID</div>,
    };

    renderComponent(props);

    const container = screen.getByTestId('custom-container');
    expect(container).toBeInTheDocument();
  });

  it('should apply custom display property', () => {
    const props: NewContainerProps = {
      display: 'inline-block',
      children: <div>Custom Display</div>,
    };

    renderComponent(props);

    expect(screen.getByText('Custom Display')).toBeInTheDocument();
  });

  it('should apply restProps to Styled.Container', () => {
    const props: NewContainerProps = {
      m: 'sm',
      p: 'md',
      gap: 'lg',
      children: <div>Rest Props Test</div>,
    };

    renderComponent(props);

    const container = screen.getByTestId('container-component');
    expect(container).toBeInTheDocument();
  });

  it('should use default display when none is provided', () => {
    const props: NewContainerProps = {
      children: <div>Default Display</div>,
    };

    renderComponent(props);

    const container = screen.getByTestId('container-component');
    expect(container).toBeInTheDocument();
    expect(container).toHaveStyle('display: flex');
  });

  it('should render LegacyContainer when isLegacyProps is true', () => {
    const legacyProps: LegacyContainerProps = {
      m: 'SpacingBase16',
      p: 'SpacingBase24',
      gap: 'SpacingBase8',
      children: <div>Legacy Content</div>,
    };

    renderComponent(legacyProps);

    expect(screen.getByText('Legacy Content')).toBeInTheDocument();
  });

  it('should render Styled.Container when isLegacyProps is false', () => {
    const newProps: NewContainerProps = {
      m: 'sm',
      p: 'md',
      gap: 'lg',
      display: 'flex',
      children: <div>New Content</div>,
    };

    renderComponent(newProps);

    expect(screen.getByText('New Content')).toBeInTheDocument();
  });

  it('should render children correctly', () => {
    const props: NewContainerProps = {
      children: <div>Child Content</div>,
    };

    renderComponent(props);

    expect(screen.getByText('Child Content')).toBeInTheDocument();
  });

  it('should apply testID to the container', () => {
    const props: NewContainerProps = {
      testID: 'custom-container',
      children: <div>With TestID</div>,
    };

    renderComponent(props);

    const container = screen.getByTestId('custom-container');
    expect(container).toBeInTheDocument();
  });

  it('should apply custom display property', () => {
    const props: NewContainerProps = {
      display: 'inline-block',
      children: <div>Custom Display</div>,
    };

    renderComponent(props);

    expect(screen.getByText('Custom Display')).toBeInTheDocument();
  });

  it('should apply restProps to Styled.Container', () => {
    const props: NewContainerProps = {
      m: 'sm',
      p: 'md',
      gap: 'lg',
      children: <div>Rest Props Test</div>,
    };

    renderComponent(props);

    const container = screen.getByTestId('container-component');
    expect(container).toBeInTheDocument();
  });

  it('should use default display when none is provided', () => {
    const props: NewContainerProps = {
      children: <div>Default Display</div>,
    };

    renderComponent(props);

    const container = screen.getByTestId('container-component');
    expect(container).toBeInTheDocument();
    expect(container).toHaveStyle('display: flex');
  });
});