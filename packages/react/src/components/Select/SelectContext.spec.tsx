import { render } from '@testing-library/react';
import { byText } from 'testing-library-selector';
import { SelectContext, useSelectContext } from './SelectContext';
const ComponentUsingSelectContext = () => {
  const { id } = useSelectContext();

  return <div>Context ID: {id}</div>;
};
describe('useSelectContext', () => {
  const ui = {
    contextText: byText('Context ID: example-id'),
  };
  it('throws an error when used outside SelectContext', () => {
    expect(() => {
      render(<ComponentUsingSelectContext />);
    }).toThrow('useSelectContext must be used within a SelectContext');
  });

  it('returns the SelectContext value when used within SelectContext', () => {
    const selectContextValue = { id: 'example-id' };

    render(
      <SelectContext.Provider value={selectContextValue}>
        <ComponentUsingSelectContext />
      </SelectContext.Provider>,
    );

    expect(ui.contextText.get()).toBeInTheDocument();
  });
});
