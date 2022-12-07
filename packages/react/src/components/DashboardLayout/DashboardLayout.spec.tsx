import { render } from '@testing-library/react';
import { byText } from 'testing-library-selector';
import DashboardLayout, { DashboardLayoutProps } from './DashboardLayout';

import { axe } from '../../utils/test/axeConfig';

const renderComponent = () => {
  // Prepare
  const props: DashboardLayoutProps = {
    header: <>My Header</>,
    main: <>My Main</>,
    sidebar: <>My Sidebar</>,
  };

  // Act
  render(<DashboardLayout {...props} />);
};

describe('DashboardLayout', () => {
  const ui = {
    text: (regex: RegExp) => byText(regex),
  };

  it('should not have any a11y errors', async () => {
    renderComponent();
    const results = await axe(document.body);
    expect(results).toHaveNoViolations();
  });

  it('renders successfully', () => {
    renderComponent();

    // Assert
    expect(ui.text(/My Header/i).get()).toBeInTheDocument();
    expect(ui.text(/My Main/i).get()).toBeInTheDocument();
    expect(ui.text(/My Sidebar/i).get()).toBeInTheDocument();
  });
});
