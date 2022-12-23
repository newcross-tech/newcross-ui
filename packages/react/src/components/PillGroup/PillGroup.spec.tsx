import { render } from '@testing-library/react';
import { byTestId } from 'testing-library-selector';
import { axe } from '../../utils/test/axeConfig';
import Pill from '../Pill/Pill';
import PillGroup, { PillGroupProps } from './PillGroup';

const renderComponent = (customProps: Partial<PillGroupProps>) => {
  const props = {
    ...customProps,
  };

  render(
    <PillGroup {...props}>
      <Pill testID="1" label="Section 1" />
      <Pill testID="2" label="Section 2" />
    </PillGroup>
  );
};

const baseTestId = 'pill-group';

describe('Pill Group Component', () => {
  const ui = {
    pillComp: (testID: string) => byTestId(`pill-component${testID}`),
    pillGroupComp: byTestId(`${baseTestId}-container`),
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
    expect(ui.pillGroupComp.get()).toBeInTheDocument();
  });

  it('renders children successfully', () => {
    // Act
    renderComponent({ direction: 'column' });

    // Assert
    expect(ui.pillComp('1').get()).toBeInTheDocument();
    expect(ui.pillComp('2').get()).toBeInTheDocument();
  });
});
