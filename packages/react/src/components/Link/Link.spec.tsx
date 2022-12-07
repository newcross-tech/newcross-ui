import { fireEvent, render } from '@testing-library/react';
import { byTestId, byText } from 'testing-library-selector';
import Link, { LinkProps } from './Link';

import { axe } from '../../utils/test/axeConfig';
import { executeKeyPress } from '../../utils/test/executeKeyPress';

jest.mock('@fortawesome/react-fontawesome', () => ({
  FontAwesomeIcon: 'circle-chevron-right',
}));

jest.mock('@fortawesome/pro-light-svg-icons/faCircleChevronRight', () => ({
  faCircleChevronRight: 'bar',
}));

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
    linkIcon: byTestId(`${baseTestId}-icon`),
    linkByReg: (reg: RegExp) => byText(reg),
  };

  it('should not have any a11y errors', async () => {
    // Act
    renderComponent({});

    const results = await axe(document.body);
    expect(results).toHaveNoViolations();
  });

  it('should render successfully', () => {
    // Act
    renderComponent({});

    // Assert
    expect(ui.linkComp.get()).toBeInTheDocument();
  });

  it('triggers onClick successfully', () => {
    // Arrange
    const onClick = jest.fn();

    // Act
    renderComponent({ onClick: onClick });

    fireEvent.click(ui.linkComp.get());

    // Assert
    expect(onClick).toHaveBeenCalled();
  });

  it('triggers onClick using Space successfully', () => {
    const onClick = jest.fn();
    // Act
    renderComponent({ onClick: onClick });

    executeKeyPress(ui.linkComp.get());
    // Assert
    expect(onClick).toHaveBeenCalled();
  });

  it('render successfully with icon', () => {
    // Act
    renderComponent({ hasIcon: true });

    // Assert
    expect(ui.linkIcon.get()).toBeInTheDocument();
  });
});
