import { render } from '@testing-library/react';
import { byTestId } from 'testing-library-selector';
import Link, { LinkProps } from './Link';
import { axe } from '../../utils/test/axeConfig';
import { executeKeyPress } from '../../utils/test/executeKeyPress';

const renderComponent = (props: LinkProps) => {
  const customProps: LinkProps = {
    children: 'My Link',
    ...props,
  };

  render(<Link {...customProps} />);
};

describe('Link Component', () => {
  const ui = {
    linkAnchorComp: byTestId(`link-anchor-component`),
    linkDivComp: byTestId(`link-div-component`),
  };

  it('should not have any a11y errors', async () => {
    // Act
    renderComponent({});

    const results = await axe(document.body);
    expect(results).toHaveNoViolations();
  });

  it('should render successfully', () => {
    // Act
    renderComponent({
      variant: 'email',
      href: 'mailto:someone@newcrosshealthcare.com',
    });
    expect(ui.linkAnchorComp.get().nodeName.toLowerCase()).toBe('a');
    // Assert
    expect(ui.linkAnchorComp.get()).toBeVisible();
  });

  it('triggers onClick using Space successfully', () => {
    const onClick = jest.fn();
    // Act
    renderComponent({ onClick, variant: 'external' });
    expect(ui.linkDivComp.get().nodeName.toLowerCase()).toBe('div');

    executeKeyPress(ui.linkDivComp.get());
    // Assert
    expect(onClick).toHaveBeenCalled();
  });
});
