import { fireEvent, render, screen } from '@testing-library/react';
import { byTestId } from 'testing-library-selector';
import React from 'react';
import TextInput, { TextInputProps } from './TextInput';

const renderComponent = (customProps: Partial<TextInputProps>) => {
  const props: TextInputProps = {
    onChange: jest.fn(),
    type: 'textarea',
    ...customProps,
  };

  render(<TextInput {...props} />);
};
const setup = () => {
  renderComponent({});
  const input = screen.getByTestId('TextArea-component');
  return {
    input,
  };
};

const baseTestId = 'TextArea';

describe('TextArea Component', () => {
  const ui = {
    textAreaComp: byTestId(`${baseTestId}-container-component`),
    textAreaLength: byTestId(`${baseTestId}-max-length`),
  };

  it('renders successfully', () => {
    // Act
    renderComponent({});

    //Assert
    expect(ui.textAreaComp.get()).toBeInTheDocument();
  });

  it('if maxLength is given it renders it successfully', () => {
    const { input } = setup();
    // Act
    renderComponent({ maxLength: 10 });
    fireEvent.change(input, { target: { value: 'Good Day' } });
    //Assert
    expect(ui.textAreaLength.get()).toBeInTheDocument();
  });
});
