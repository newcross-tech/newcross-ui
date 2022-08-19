import React from 'react';
import CardGroup, { CardGroupProps } from './CardGroup';
import Card from '../Card/Card';
import Typography, { TypographyVariant } from '../Typography';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser } from '@fortawesome/pro-light-svg-icons/faUser';
import { render } from '@testing-library/react-native';

describe('CardGroup component', () => {
  // Arrange
  const testID = 'card-group';
  const props: CardGroupProps = {
    children: [
      <Card>
        <FontAwesomeIcon icon={faUser} />
        <Typography variant={TypographyVariant.heading6}>My Profile</Typography>
      </Card>,
      <Card>
        <FontAwesomeIcon icon={faUser} />
        <Typography variant={TypographyVariant.heading6}>My Profile</Typography>
      </Card>,
      <Card>
        <FontAwesomeIcon icon={faUser} />
        <Typography variant={TypographyVariant.heading6}>My Profile</Typography>
      </Card>,
    ],
  };

  it('renders successfully with cards', () => {
    // Act
    const { getByTestId } = render(<CardGroup {...props} />);

    // Assert
    expect(getByTestId(`${testID}`)).toBeTruthy();
  });

  it('renders card with dividers', () => {
    // Act
    const { getByTestId } = render(<CardGroup {...props} />);

    // Assert
    expect(getByTestId(`${testID}-divider-0`)).toBeTruthy();
    expect(getByTestId(`${testID}-divider-1`)).toBeTruthy();
  });

  it('renders all card items', () => {
    // Act
    const { getByTestId } = render(<CardGroup {...props} />);

    // Assert
    expect(getByTestId(`${testID}-card-0`)).toBeTruthy();
    expect(getByTestId(`${testID}-card-1`)).toBeTruthy();
    expect(getByTestId(`${testID}-card-2`)).toBeTruthy();
  });
});
