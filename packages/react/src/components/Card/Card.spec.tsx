import { fireEvent, render } from '@testing-library/react';
import { byTestId, byText } from 'testing-library-selector';
import Typography, { TypographyVariant } from '../../components/Typography';
import { executeKeyPress } from '../../utils';
import { axe } from '../../utils/test/axeConfig';
import Card, { CardProps } from './Card';

jest.mock('@fortawesome/react-fontawesome', () => ({
  FontAwesomeIcon: 'chevron-icon',
}));

jest.mock('@fortawesome/pro-light-svg-icons/faChevronRight', () => ({
  faChevronRight: 'bar',
}));

const renderComponent = (customProps: Partial<CardProps>) => {
  const props = {
    hasRoundedCorners: true,
    hasBorder: true,
    fullWidth: true,
    children: <Typography variant={'paragraph1'}>children</Typography>,
    ...customProps,
  };

  render(<Card {...props} />);
};

const baseTestId = 'card';

describe('Card Component', () => {
  const ui = {
    cardIcon: byTestId(`${baseTestId}-right-icon`),
    cardComp: byTestId(`${baseTestId}-component`),
    cardByReg: (reg: RegExp) => byText(reg),
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
    expect(ui.cardByReg(/children/i).get()).toBeInTheDocument();
  });

  it('renders a card with thumbnail', () => {
    //Act
    renderComponent({ thumbnailContent: <div>{'Text'}</div> });

    //Assert
    expect(ui.cardComp.get()).toBeInTheDocument();
  });

  it('selects card when Spacebar', () => {
    const onClick = jest.fn();
    // Act
    renderComponent({ onClick });
    executeKeyPress(ui.cardComp.get());
    // Assert
    expect(onClick).toBeCalled();
  });

  it(`doesn't renders right icon when hasRightIcon is false`, () => {
    //Act
    renderComponent({ hasRightIcon: false });

    //Assert
    expect(ui.cardIcon.query()).not.toBeInTheDocument();
  });

  it(`renders chevron right icon when hasRightIcon is true`, () => {
    //Act
    renderComponent({ hasRightIcon: true });

    //Assert
    expect(ui.cardIcon.get()).toBeInTheDocument();
  });

  it('triggers onClick successfully', () => {
    const onClick = jest.fn();

    // Act
    renderComponent({ onClick });
    fireEvent.click(ui.cardComp.get());

    // Assert
    expect(onClick).toBeCalled();
  });

  it(`doesn't triggers onClick when card is disabled`, () => {
    // Arrange
    const onClick = jest.fn();
    // Act
    renderComponent({ disabled: true, onClick });
    fireEvent.click(ui.cardComp.get());

    // Assert
    expect(onClick).not.toBeCalled();
  });
});
