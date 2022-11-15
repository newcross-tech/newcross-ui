import { render } from '@testing-library/react';
import React from 'react';
import { byText } from 'testing-library-selector';
import { TypographyVariant } from '../Typography';
import Label, { LabelProps } from './Label';

import { axe } from '../../../testUtils';

describe('Label', () => {
  const ui = {
    text: (regex: RegExp) => byText(regex),
  };

  it('should not have any a11y errors', async () => {
    // Prepare
    const props: LabelProps = {
      children: 'My Label',
      variant: TypographyVariant.heading4,
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
      variant: TypographyVariant.heading4,
    };

    // Act
    render(<Label {...props} />);

    // Assert
    expect(ui.text(/my label/i).get()).toBeTruthy();
  });
});
