import { screen, fireEvent, render } from '@testing-library/react';
import { byTestId } from 'testing-library-selector';
import { TextInput, TextInputProps } from './TextInput';

const testID = '1';
const renderComponent = (customProps?: Partial<TextInputProps>) => {
  const props: TextInputProps = {
    onChange: jest.fn(),
    type: 'textarea',
    testID,
    ...customProps,
  };

  render(<TextInput {...props} />);
};

const baseTestId = 'textarea';

describe('TextArea Component', () => {
  const ui = {
    textAreaComp: byTestId(`${baseTestId}-container-component-${testID}`),
    textAreaLength: byTestId(`${baseTestId}-max-length-${testID}`),
  };

  it('renders successfully', () => {
    // Act
    renderComponent();

    //Assert
    expect(ui.textAreaComp.get()).toBeInTheDocument();
  });

  it('if maxLength is given it renders it successfully', () => {
    // Act
    renderComponent({ maxLength: 10 });
    fireEvent.change(screen.getByTestId('textarea-component-1'), {
      target: { value: 'Good Day' },
    });
    //Assert
    expect(ui.textAreaLength.get()).toBeInTheDocument();
  });
});
