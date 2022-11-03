import React from 'react';
import Alert, { AlertProps } from './Alert';
import { SemanticVariant } from '../../types';
import { View } from 'react-native';
import Link from '../Link';
import { render } from '@testing-library/react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircleCheck } from '@fortawesome/pro-regular-svg-icons/faCircleCheck';

describe('Alert component', () => {
  it('renders successfully with custom title', () => {
    // Arrange
    const props: AlertProps = {
      variant: SemanticVariant.info,
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
      variant: SemanticVariant.success,
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

  it('renders successfully with close icon', () => {
    // Arrange
    const props: AlertProps = {
      variant: SemanticVariant.success,
      children: 'This is success. This is success. This is success.',
      action: <Link>Click Here</Link>,
      hasCloseButton: true,
      onCloseButtonPress: jest.fn(),
    };

    // Act
    const { getByTestId } = render(<Alert {...props} />);

    // Assert
    expect(getByTestId('alert-close-icon')).toBeTruthy();
  });

  it('renders successfully with no title', () => {
    // Arrange
    const props: AlertProps = {
      variant: SemanticVariant.info,
      children: 'This is success. This is success. This is success.',
      hasTitle: false,
    };

    // Act
    const { getByTestId, getByText, queryByText } = render(
      <Alert {...props} />
    );

    // Assert
    expect(getByTestId('alert')).toBeTruthy();
    expect(
      getByText('This is success. This is success. This is success.')
    ).toBeTruthy();

    expect(queryByText('Info')).toBeNull();
  });

  it('renders successfully with custom icon', () => {
    // Arrange
    const props: AlertProps = {
      variant: SemanticVariant.success,
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
      variant: SemanticVariant.info,
    },
    'Info',
  ],
  [
    {
      variant: SemanticVariant.success,
    },
    'Success',
  ],
  [
    {
      variant: SemanticVariant.warning,
    },
    'Warning',
  ],
  [
    {
      variant: SemanticVariant.error,
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
