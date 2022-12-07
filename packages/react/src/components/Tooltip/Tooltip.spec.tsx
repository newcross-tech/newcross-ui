import { render } from '@testing-library/react';
import { byText } from 'testing-library-selector';
import { axe } from '../../utils/test/axeConfig';
import Tooltip, { TooltipProps } from './Tooltip';

const renderComponent = (customProps: Partial<TooltipProps>) => {
  const props = {
    children: 'My Content',
    ...customProps,
  };
  render(<Tooltip {...props} />);
};

describe('Tooltip Component', () => {
  const ui = {
    text: (reg: RegExp) => byText(reg),
  };

  it('should not have any a11y errors', async () => {
    // Act
    renderComponent({});

    const results = await axe(document.body);
    expect(results).toHaveNoViolations();
  });

  it('renders sucessfully', () => {
    // Act
    renderComponent({});

    // Assert
    expect(ui.text(/my content/i).get()).toBeInTheDocument();
  });
});
