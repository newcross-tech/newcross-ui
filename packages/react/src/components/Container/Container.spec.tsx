import { render } from '@testing-library/react';
import Container, { ContainerProps } from './Container';
import { byTestId } from 'testing-library-selector';

const renderComponent = (customProps: ContainerProps) => {
  const props = {
    testID: 'container-component',
    ...customProps,
  };

  render(<Container {...props} />);
};

describe('Container Component', () => {
  const ui = {
    container: byTestId('container-component'),
  };

  it('should render succesfully', () => {
    renderComponent({});

    expect(ui.container.get()).toBeInTheDocument();
  });
});
