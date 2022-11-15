import { render } from '@testing-library/react';
import React from 'react';
import { byTestId } from 'testing-library-selector';
import { axe } from '../../../testUtils';
import Pill from '../Pill/Pill';
import PillGroup, { PillGroupProps } from './PillGroup';

describe('Pill Group Component', () => {
  const baseTestId = 'pill-group';
  const ui = {
    pillGroupClickable: byTestId(`${baseTestId}-clickable`),
    pillComp: (testID: string) => byTestId(`pill-component${testID}`),
    pillGroupComp: byTestId(`${baseTestId}-container`),
  };
  it('should not have any a11y errors', async () => {
    // Prepare
    const onClick = jest.fn();
    const props: PillGroupProps = {};

    // Act
    render(
      <PillGroup {...props}>
        <Pill testID="1" label="Section 1" onClick={onClick} />
        <Pill testID="2" label="Section 2" onClick={onClick} />
      </PillGroup>
    );
    const results = await axe(document.body);
    expect(results).toHaveNoViolations();
  });
  it('renders successfully', () => {
    // Arrange
    const onClick = jest.fn();
    const props: PillGroupProps = {};

    // Act
    render(
      <PillGroup {...props}>
        <Pill testID="1" label="Section 1" onClick={onClick} />
        <Pill testID="2" label="Section 2" onClick={onClick} />
      </PillGroup>
    );

    // Assert
    expect(ui.pillGroupComp.get()).toBeInTheDocument();
  });
  it('renders children successfully', () => {
    // Arrange
    const onClick = jest.fn();
    const props: PillGroupProps = {
      direction: 'column',
    };

    // Act
    render(
      <PillGroup {...props}>
        <Pill testID="1" label="Section 1" onClick={onClick} />
        <Pill testID="2" label="Section 2" onClick={onClick} />
      </PillGroup>
    );

    // Assert
    expect(ui.pillComp('1').get()).toBeInTheDocument();
    expect(ui.pillComp('2').get()).toBeInTheDocument();
  });
});
