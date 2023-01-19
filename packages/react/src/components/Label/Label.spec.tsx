import { render } from '@testing-library/react';
import { byText } from 'testing-library-selector';
import Label, { LabelProps } from './Label';

import { axe } from '../../utils/test/axeConfig';

describe('Label', () => {
  it('should not have any a11y errors', async () => {
    // Prepare
    const props: LabelProps = {
      children: 'My Label',
      variant: 'heading4',
    };

    // Act
    render(<Label {...props} />);

    const results = await axe(document.body);
    expect(results).toHaveNoViolations();
  });

  it('renders successfully', () => {
    // Prepare
    const props: LabelProps = {
      children: 'My Label',
      variant: 'heading4',
    };

    // Act
    render(<Label {...props} />);

    // Assert
    expect(byText(/my label/i).get()).toBeTruthy();
  });
});
