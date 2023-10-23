import { byTestId, byText } from 'testing-library-selector';
import userEvent from '@testing-library/user-event';
import { render, waitFor } from '@/common/test-utils';
import Select from './Select';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const renderComponent = (props: any) => {
  const customProps = {
    id: 'select',
    options: [
      { value: '1', label: '1' },
      { value: '2', label: '2' },
    ],
    ...props,
  };

  return render(<Select {...customProps} />);
};

const ui = {
  selectComponent: byTestId('select-component'),
  selectLabel: byTestId('select-label'),
  selectMessageText: byTestId('select-message-text'),
  selectErrorText: byTestId('select-error-text'),
  selectCrossicon: byTestId('crossicon'),
};
describe('Select', () => {
  it('renders successfully', () => {
    renderComponent({
      label: 'Select Label',
    });
    expect(ui.selectLabel.get()).toBeVisible();
  });

  it('should render helper text', () => {
    renderComponent({
      helperText: 'Helper Text',
    });

    expect(ui.selectMessageText.get()).toBeVisible();
  });

  it('should render error', () => {
    renderComponent({
      helperText: 'Error Text',
      hasError: true,
    });
    expect(ui.selectErrorText.get()).toBeVisible();
  });

  it('should call onChange on option click', async () => {
    const onChange = jest.fn();

    const { getByText } = renderComponent({
      onChange,
      ClearIndicator: true,
      isMulti: true,
    });
    await userEvent.click(getByText('Select...'));

    await waitFor(() => expect(getByText('2')).toBeVisible());

    await userEvent.click(getByText('2'));
    await waitFor(() => {
      expect(byText('1').query()).not.toBeInTheDocument();
    });

    await userEvent.click(ui.selectCrossicon.get());
    await waitFor(() => {
      expect(byText('2').query()).not.toBeInTheDocument();
      expect(onChange).toHaveBeenCalled();
    });
  });
});
