import { fireEvent, render } from '@testing-library/react';
import { byTestId } from 'testing-library-selector';
import { axe } from '../../utils/test/axeConfig';
import Radio from '../Radio/Radio';
import RadioGroup, { RadioGroupProps } from './RadioGroup';

const renderComponent = (customProps: Partial<RadioGroupProps>) => {
  const props = {
    ...customProps,
  };

  render(
    <RadioGroup {...props}>
      <Radio testID="1" value="1" label="radio 1" />
      <Radio testID="2" value="2" label="radio 2" />
    </RadioGroup>
  );
};

describe('Radio Group Component', () => {
  const ui = {
    radioComp: (testID: string) => byTestId(`radio-input-${testID}`),
    radioGroupComp: byTestId(`radio-group`),
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
    expect(ui.radioGroupComp.get()).toBeVisible();
  });

  it('renders children successfully', () => {
    // Act
    renderComponent({ direction: 'column' });

    // Assert
    expect(ui.radioComp('1').get()).toBeVisible();
    expect(ui.radioComp('2').get()).toBeVisible();
  });

  it('calls onChange successfully', () => {
    const onChange = jest.fn();
    // Act
    renderComponent({ onChange, defaultSelected: '1' });

    // Assert
    expect(ui.radioComp('1').get()).toBeVisible();
    expect(ui.radioComp('2').get()).toBeVisible();

    fireEvent.click(ui.radioComp('2').get());

    expect(onChange).toHaveBeenCalledWith('2');
  });
});
