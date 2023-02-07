import { render } from '@testing-library/react';
import { byTestId } from 'testing-library-selector';
import { axe } from '../../utils/test/axeConfig';
import Skeleton, { SkeletonProps } from './Skeleton';

const renderComponent = (customProps: Partial<SkeletonProps>) => {
  const props = { ...customProps };

  render(<Skeleton {...props} />);
};

describe('Skeleton', () => {
  const ui = {
    skeletonWrapper: byTestId('skeleton'),
  };

  it('should not have any a11y errors', async () => {
    // Act
    renderComponent({});

    const results = await axe(document.body);
    expect(results).toHaveNoViolations();
  });

  it('renders successfully', () => {
    // Act
    renderComponent({});

    // Assert
    expect(ui.skeletonWrapper.get()).toBeVisible();
  });
});
