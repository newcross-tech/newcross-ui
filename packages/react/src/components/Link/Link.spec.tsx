import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { byTestId, byText } from 'testing-library-selector';
import Link, { LinkProps } from './Link';

import axe from '../../../testutils';

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
    expect(ui.linkByReg(/My Link/i).get()).toBeTruthy();
  });

  it('triggers onClick successfully', () => {
    // Arrange
    const handleClick = jest.fn();
    const props: LinkProps = {
      onClick: handleClick,
    };

    // Act
    renderComponent({ ...props });

    fireEvent.click(ui.linkComp.get());

    // Assert
    expect(handleClick).toBeCalled();
  });

  it('hides right icons when hasIcon is false', () => {
    // Arrange
    const props: LinkProps = {
      hasIcon: true,
    };

    // Act
    renderComponent({ ...props });

    // Assert
    expect(ui.linkIcon.get()).toBeTruthy();
  });
});
