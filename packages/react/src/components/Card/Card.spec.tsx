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

describe('Card Component', () => {
  const baseTestId = 'card';

  const ui = {
    cardIcon: byTestId(`${baseTestId}-right-icon`),
    cardComp: byTestId(`${baseTestId}-component`),
    cardByReg: (reg: RegExp) => byText(reg),
  };

  it('should not have any a11y errors', async () => {
    // Prepare
    const props: CardProps = {
      hasRoundedCorners: true,
      hasBorder: true,
      fullWidth: true,
      children: (
        <Typography variant={TypographyVariant.paragraph1}>children</Typography>
      ),
    };

    // Act
    render(<Card {...props} />);

    const results = await axe(document.body);
    expect(results).toHaveNoViolations();
  });

  it('renders successfully', () => {
    //Arrange
    const props: CardProps = {
      hasRoundedCorners: true,
      hasBorder: true,
      fullWidth: true,
      children: (
        <Typography variant={TypographyVariant.paragraph1}>children</Typography>
      ),
    };
    // Act
    render(<Card {...props} />);

    //Assert
    expect(ui.cardByReg(/children/i).get()).toBeTruthy();
  });

  it('selects pill when Spacebar', () => {
    // Arrange
    const onClick = jest.fn();
    const props: CardProps = {
      onClick: onClick,
      children: (
        <Typography variant={TypographyVariant.paragraph1}>children</Typography>
      ),
    };
    // Act
    render(<Card {...props} />);
    executeKeyPress(ui.cardComp.get());
    // Assert
    expect(onClick).toBeCalled();
  });

  it(`doesn't renders right icon when hasRightIcon is false`, () => {
    // Arrange
    const props: CardProps = {
      hasRightIcon: false,
    };

    //Act
    render(<Card {...props} />);

    //Assert
    expect(ui.cardIcon.query()).not.toBeInTheDocument();
  });

  it(`renders chevron right icon when hasRightIcon is true`, () => {
    // Arrange
    const props: CardProps = {
      hasRightIcon: true,
    };

    //Act
    render(<Card {...props} />);

    //Assert
    expect(ui.cardIcon.get()).toBeInTheDocument();
  });

  it('triggers onClick successfully', () => {
    // Arrange
    const onClick = jest.fn();
    const props: CardProps = { onClick: onClick };

    // Act
    render(<Card {...props} />);
    fireEvent.click(ui.cardComp.get());

    // Assert
    expect(onClick).toBeCalled();
  });

  it(`doesn't triggers onClick when card is disabled`, () => {
    // Arrange
    const onClick = jest.fn();
    const props: CardProps = { disabled: true, onClick: onClick };

    // Act
    render(<Card {...props} />);
    fireEvent.click(ui.cardComp.get());

    // Assert
    expect(onClick).not.toBeCalled();
  });
});
