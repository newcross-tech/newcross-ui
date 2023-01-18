import { fireEvent, render } from '@testing-library/react';
import { byTestId, byText } from 'testing-library-selector';
import { axe } from '../../utils/test/axeConfig';
import Typography from '../Typography';
import Badge, { BadgeProps } from './Badge';

const baseTestId = 'badge';

describe('Badge Component', () => {
  const renderComponent = (customProps: Partial<BadgeProps>) => {
    const props = {
      badgeContent: 7,
      children: <Typography variant="paragraph1">{'Text'}</Typography>,
      ...customProps,
    };

    render(<Badge {...props} />);
  };

  const ui = {
    text: (regex: RegExp) => byText(regex),
    container: (testID: string) =>
      byTestId(`${baseTestId}-container-${testID}`),
  };

  it('should not have any a11y errors', async () => {
    renderComponent({});

    const results = await axe(document.body);
    expect(results).toHaveNoViolations();
  });

  it('should render successfully', () => {
    renderComponent({});

    expect(ui.text(/text/i).get()).toBeInTheDocument();
    expect(ui.text(/7/i).get()).toBeInTheDocument();
  });

  it('should return the correct badgeContent with smaller maxNumber', () => {
    renderComponent({ badgeContent: 1000, maxNumber: 999 });

    expect(ui.text(/999+/i).get()).toBeInTheDocument();
  });

  it('should return the correct badgeContent with larger maxNumber', () => {
    renderComponent({ badgeContent: 9, maxNumber: 999 });

    expect(ui.text(/9/i).get()).toBeInTheDocument();
  });

  it('should return text', () => {
    renderComponent({ badgeContent: '!' });

    expect(ui.text(/!/i).get()).toBeInTheDocument();
  });

  it('triggers an onClick event when pressed', () => {
    const onClick = jest.fn();
    const testID = '1';

    renderComponent({ testID, onClick });
    fireEvent.click(ui.container(testID).get());

    expect(onClick).toBeCalled();
  });
});
