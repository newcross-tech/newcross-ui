import { render } from '@testing-library/react';
import { byTestId } from 'testing-library-selector';
import LegacyContainer, { LegacyContainerProps } from './LegacyContainer';

const renderComponent = (customProps: LegacyContainerProps) => {
  const props = {
    testID: 'container-component',
    ...customProps,
  };

  render(<LegacyContainer {...props} />);
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
