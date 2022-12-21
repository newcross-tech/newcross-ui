import React from 'react';
import Card from '../Card';
import { render } from '@testing-library/react';
import { axe } from '../../utils/test/axeConfig';
import { byTestId } from 'testing-library-selector';
import CardGroup, { CardGroupProps } from './CardGroup';

const renderComponent = (customProps: Partial<CardGroupProps>) => {
  const props = {
    children: [
      <Card key={'card1'} testID="card1">
        children1
      </Card>,
      <Card key={'card2'} testID="card2">
        children2
      </Card>,
    ],
    ...customProps,
  };

  render(<CardGroup {...props} />);
};

describe('Card Component', () => {
  const ui = {
    cardGroupComp: byTestId(`card-group-component`),
    cardComp: (id: string) => byTestId(`card${id}-component`),
  };

  it('should not have any a11y errors', async () => {
    // Act
    renderComponent({});
    //Assert
    const results = await axe(document.body);
    expect(results).toHaveNoViolations();
  });

  it('renders successfully', () => {
    // Act
    renderComponent({});

    //Assert
    expect(ui.cardGroupComp.get()).toBeInTheDocument();
    expect(ui.cardComp('1').get()).toBeInTheDocument();
    expect(ui.cardComp('2').get()).toBeInTheDocument();
  });
});
