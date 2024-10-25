import React from 'react';
import { render } from '@testing-library/react';
import NewContainer, { NewContainerProps } from './NewContainer';
import { byTestId } from 'testing-library-selector';

const renderComponent = (customProps: NewContainerProps) => {
  const props = {
    testID: 'container-component',
    ...customProps,
  };

  render(<NewContainer {...props} />);
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
