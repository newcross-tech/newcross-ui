import React from 'react';
import { Text } from 'react-native';
import { render, fireEvent } from '@testing-library/react-native';
import Card, { CardProps } from './Card';

jest.mock('@fortawesome/react-native-fontawesome', () => ({
  FontAwesomeIcon: 'chevron-icon',
}));
jest.mock('@fortawesome/pro-light-svg-icons/faChevronRight', () => ({
  faChevronRight: 'bar',
}));

describe('Card Component', () => {
  it('renders successfully', () => {
    //Arrange
    const props: CardProps = {
      hasRoundedCorners: true,
      hasBorder: true,
      fullWidth: true,
      isOpacityDisabled: true,
      children: <Text>children</Text>,
    };
    // Act
    const { getByText } = render(<Card {...props} />);

    //Assert
    expect(getByText(/children/i)).toBeTruthy();
  });

  it('renders a card with thumbnail', () => {
    // Arrange
    const props: CardProps = {
      thumbnailContent: <Text>{'Text'}</Text>,
    };

    //Act
    const { getByTestId } = render(<Card {...props} />);

    //Assert
    expect(getByTestId('card-thumbnail')).toBeTruthy();
  });

  it(`doesn't renders right icon when hasRightIcon is false`, () => {
    // Arrange
    const props: CardProps = {
      hasRightIcon: false,
    };

    //Act
    const { queryByTestId } = render(<Card {...props} />);

    //Assert
    expect(queryByTestId('card-right-icon')).toBeFalsy();
  });

  it(`renders chevron right icon when hasRightIcon is true`, () => {
    // Arrange
    const props: CardProps = {
      hasRightIcon: true,
    };

    //Act
    const { queryByTestId } = render(<Card {...props} />);

    //Assert
    expect(queryByTestId('card-right-icon')).toBeTruthy();
  });

  it(`overwrites right icon when rightIconContent is provided`, () => {
    // Arrange
    const props: CardProps = {
      hasRightIcon: true,
      rightIconContent: <Text>icon</Text>,
    };

    //Act
    const { queryByTestId, getByText } = render(<Card {...props} />);

    //Assert
    expect(queryByTestId('card-right-icon')).toBeTruthy();
    expect(getByText(/icon/i)).toBeTruthy();
  });

  it('triggers onPress successfully', () => {
    // Arrange
    const onPress = jest.fn();
    const props: CardProps = { onPress };

    // Act
    const { getByTestId } = render(<Card {...props} />);
    fireEvent.press(getByTestId('card'));

    // Assert
    expect(onPress).toBeCalled();
  });

  it(`doesn't triggers onPress when button is disabled`, () => {
    // Arrange
    const onPress = jest.fn();
    const props: CardProps = { disabled: true, onPress };

    // Act
    const { getByTestId } = render(<Card {...props} />);
    fireEvent.press(getByTestId('card'));

    // Assert
    expect(onPress).not.toBeCalled();
  });

  it('renders extra footer content', async () => {
    // Arrange
    const props: CardProps = {
      extraFooterContent: (
        <Text testID={'extra-card-content'}>extra footer content</Text>
      ),
    };
    //Act
    const { findByTestId } = render(<Card {...props} />);
    //Assert
    expect(await findByTestId('extra-card-content')).toBeTruthy();
  });
});
