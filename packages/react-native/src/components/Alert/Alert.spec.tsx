import React from 'react';
import Alert, { AlertProps } from './Alert';
import { AlertVariant } from './Alert.types';
import { View } from 'react-native';
import Link from '../Link';
import { render } from '@testing-library/react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircleCheck } from '@fortawesome/pro-regular-svg-icons';

describe('Alert component', () => {
  it('renders successfully with custom title', () => {
    // Arrange
    const props: AlertProps = {
      variant: AlertVariant.info,
      title: 'Custom title',
    };

    // Act
    const { getByTestId, getByText } = render(<Alert {...props} />);

    // Assert
    expect(getByTestId('alert')).toBeTruthy();
    expect(getByText('Custom title')).toBeTruthy();
  });

  it('renders successfully with text props', () => {
    // Arrange
    const props: AlertProps = {
      variant: AlertVariant.success,
      children: 'This is success. This is success. This is success.',
      action: <Link>Click Here</Link>,
    };

    // Act
    const { getByText } = render(<Alert {...props} />);

    // Assert
    expect(
      getByText(/This is success. This is success. This is success./i)
    ).toBeTruthy();
    expect(getByText('Success')).toBeTruthy();
    expect(getByText(/Click here/i)).toBeTruthy();
  });

  it('renders successfully with custom icon', () => {
    // Arrange
    const props: AlertProps = {
      variant: AlertVariant.success,
      icon: (
        <View testID={'alert-icon'}>
          <FontAwesomeIcon
            style={{ alignSelf: 'flex-start' }}
            icon={faCircleCheck}
          />
        </View>
      ),
    };

    // Act
    const { getByTestId } = render(<Alert {...props} />);

    // Assert
    expect(getByTestId('alert-icon')).toBeTruthy();
  });
});

describe.each([
  [
    {
      variant: AlertVariant.info,
    },
    'Info',
  ],
  [
    {
      variant: AlertVariant.success,
    },
    'Success',
  ],
  [
    {
      variant: AlertVariant.warning,
    },
    'Warning',
  ],
  [
    {
      variant: AlertVariant.error,
    },
    'Error',
  ],
])('Variant props', (alertProps, result) => {
  it(`renders successfully with ${result}`, () => {
    const props: AlertProps = alertProps;

    // Act
    const { getByTestId, getByText } = render(<Alert {...props} />);

    // Assert
    expect(getByTestId('alert')).toBeTruthy();
    expect(getByText(result)).toBeTruthy();
  });
});
