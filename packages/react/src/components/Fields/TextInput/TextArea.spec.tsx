import { render } from '@testing-library/react';
import { byTestId } from 'testing-library-selector';
import { TextInput, TextInputProps } from './TextInput';
import userEvent from '@testing-library/user-event';

describe.each([
  {
    renderComponent: (props?: Partial<TextInputProps>) =>
      render(
        <TextInput onChange={jest.fn()} type="textarea" testID="1" {...props} />
      ),
    ui: {
      textArea: byTestId('textarea-component-1'),
      textAreaComp: byTestId('textarea-container-component-1'),
      textAreaLength: byTestId('textarea-max-length-1'),
    },
  },
  {
    renderComponent: (props?: Partial<TextInputProps>) =>
      render(
        <TextInput
          onChange={jest.fn()}
          type="textarea"
          data-testid="1"
          {...props}
        />
      ),
    ui: {
      textArea: byTestId('1-text-input-textarea-input'),
      textAreaComp: byTestId('1-text-input-textarea-input'),
      textAreaLength: byTestId(
        '1-text-input-textarea-helper-text-helper-text-max-length'
      ),
    },
  },
])('TextArea Component', ({ ui, renderComponent }) => {
  it('renders successfully', () => {
    // region Act
    renderComponent();
    // endregion

    // region Assert
    expect(ui.textAreaComp.get()).toBeInTheDocument();
    // endregion
  });

  it('if maxLength is given it renders it successfully', () => {
    // region Arrange
    renderComponent({ maxLength: 10 });
    // endregion

    // region Act
    userEvent.type(ui.textArea.get(), 'Good Day');
    // endregion

    // region Assert
    expect(ui.textAreaLength.get()).toBeInTheDocument();
    // endregion
  });
});
