import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { byTestId, byText } from 'testing-library-selector';
import Typography, { TypographyVariant } from '../Typography';
import Badge, { BadgeProps } from './Badge';

const baseTestId = 'badge';

describe('Badge Component', () => {
  const ui = {
    text: (regex: RegExp) => byText(regex),
    container: (testID: string) =>
      byTestId(`${baseTestId}-container-${testID}`),
  };
  it('should render successfully', () => {
    const props: BadgeProps = {
      badgeContent: 7,
      children: (
        <Typography variant={TypographyVariant.paragraph1}>{'Text'}</Typography>
      ),
    };

    render(<Badge {...props} />);

    expect(ui.text(/text/i).get()).toBeInTheDocument();
    expect(ui.text(/7/i).get()).toBeInTheDocument();
  });

  it('should return the correct badgeContent with smaller maxNumber', () => {
    const props: BadgeProps = { badgeContent: 1000, maxNumber: 999 };

    render(<Badge {...props} />);

    expect(ui.text(/999+/i).get()).toBeInTheDocument();
  });

  it('should return the correct badgeContent with larger maxNumber', () => {
    const props: BadgeProps = { badgeContent: 9, maxNumber: 999 };

    render(<Badge {...props} />);

    expect(ui.text(/9/i).get()).toBeInTheDocument();
  });

  it('should return text', () => {
    const props: BadgeProps = { badgeContent: '!' };

    render(<Badge {...props} />);

    expect(ui.text(/!/i).get()).toBeInTheDocument();
  });

  it('triggers an onClick event when pressed', () => {
    const onClick = jest.fn();
    const testID = '1';
    const props: BadgeProps = {
      testID,
      badgeContent: 7,
      children: (
        <Typography variant={TypographyVariant.paragraph1}>{'Text'}</Typography>
      ),
      onClick,
    };

    render(<Badge {...props} />);
    fireEvent.click(ui.container(testID).get());

    expect(onClick).toBeCalled();
  });
});
