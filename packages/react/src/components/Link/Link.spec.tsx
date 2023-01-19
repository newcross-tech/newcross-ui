import { render } from '@testing-library/react';
import { byTestId, byText } from 'testing-library-selector';
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

const baseTestId = 'link';

describe('Link Component', () => {
  const ui = {
    linkComp: byTestId(`${baseTestId}-component`),
  };

  it('should not have any a11y errors', async () => {
    // Act
    renderComponent({});

    const results = await axe(document.body);
    expect(results).toHaveNoViolations();
  });

  it('should render successfully', () => {
    // Act
    renderComponent({ variant: 'email' });

    // Assert
    expect(ui.linkComp.get()).toBeInTheDocument();
  });

  it('triggers onClick using Space successfully', () => {
    const onClick = jest.fn();
    // Act
    renderComponent({ onClick: onClick, variant: 'external' });

    executeKeyPress(ui.linkComp.get());
    // Assert
    expect(onClick).toHaveBeenCalled();
  });
});
