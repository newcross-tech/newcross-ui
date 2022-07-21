import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Text } from 'react-native';
import Badge, { BadgeProps } from './Badge';

describe('Badge Component', () => {
  it('should render successfully', () => {
    const props: BadgeProps = {
      badgeContent: 7,
      children: <Text>{'Text'}</Text>,
    };

    const { getByText } = render(<Badge {...props} />);

    expect(getByText(/text/i)).toBeTruthy();
    expect(getByText(/7/i)).toBeTruthy();
  });

  it('should return the correct badgeContent with smaller maxNumber', () => {
    const props: BadgeProps = { badgeContent: 1000, maxNumber: 999 };

    const { getByText } = render(<Badge {...props} />);

    expect(getByText(/999+/i)).toBeTruthy();
  });

  it('should return the correct badgeContent with larger maxNumber', () => {
    const props: BadgeProps = { badgeContent: 9, maxNumber: 999 };

    const { getByText } = render(<Badge {...props} />);

    expect(getByText(/9/i)).toBeTruthy();
  });

  it('should return text', () => {
    const props: BadgeProps = { badgeContent: '!' };

    const { getByText } = render(<Badge {...props} />);

    expect(getByText(/!/i)).toBeTruthy();
  });

  it('triggers an onPress event when pressed', () => {
    const onPress = jest.fn();
    const props: BadgeProps = {
      badgeContent: 7,
      children: <Text>{'Text'}</Text>,
      onPress,
    };

    const { getByText } = render(<Badge {...props} />);
    fireEvent.press(getByText(/text/i));

    expect(onPress).toBeCalled();
  });
});
