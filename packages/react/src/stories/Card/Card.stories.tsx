import Typography, { TypographyVariant } from '../../components/Typography';
import Card, { CardVariants, CardProps } from '../../components/Card';
import ToggleButtonGroup from '../../components/ToggleButtonGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/pro-light-svg-icons/faUser';
import { DESCRIPTION, DO, DONT, TITLE } from './CardInfo';
import CheckboxGroup from '../../components/CheckboxGroup';
import ToggleButton from '../../components/ToggleButton';
import InfoTemplate from '../InfoTemplate/InfoTemplate';
import styled, { css } from 'styled-components';
import { Meta, Story } from '@storybook/react';
import useState from 'storybook-addon-state';
import Badge from '../../components/Badge';
import { Theme } from '../../types/Theme';
import { CardShift } from './CardShift';
import Container from '../Container';
import Spacing from '../Spacing';
import React from 'react';

export default {
  title: 'React/Components/Card',
  component: Card,
} as Meta;

const StyledText = styled(Typography)`
  ${({ theme }: Theme) => css`
    margin: 0 ${theme.SpacingBase12};
  `};
`;
export const Overview = () => {
  return (
    <InfoTemplate
      title={TITLE}
      description={DESCRIPTION}
      doInfo={DO}
      dontInfo={DONT}
    >
      <Container display={'block'} direction={'column'} hasPadding={false}>
        <Typography variant={TypographyVariant.heading3}>
          Card with icon
        </Typography>
        <Spacing />
        <Card hasRoundedCorners fullWidth={false}>
          <FontAwesomeIcon icon={faUser} size={'lg'} />
          <StyledText variant={TypographyVariant.heading3}>
            My Profile
          </StyledText>
        </Card>
      </Container>
    </InfoTemplate>
  );
};

export const Variants: Story<CardProps> = () => {
  const [selectedSingleBtn, setSelectedSingleBtn] = useState(
    'selectedSingleBtn',
    '1'
  );

  return (
    <Container direction="column" display="flex">
      <Typography variant={TypographyVariant.heading3}>
        Card with icon and badge
      </Typography>

      <Card hasRoundedCorners fullWidth={false}>
        <FontAwesomeIcon icon={faUser} size={'lg'} />
        <StyledText variant={TypographyVariant.heading3}>My Profile</StyledText>
        <Badge badgeContent={7} />
      </Card>

      <Spacing />
      <Typography variant={TypographyVariant.heading3}>
        Card with border
      </Typography>
      <Container>
        <Card hasBorder fullWidth={false}>
          <Typography variant={TypographyVariant.heading3}>My card</Typography>
        </Card>
        <Card
          hasRoundedCorners
          hasBorder
          variant={CardVariants.secondary}
          fullWidth={false}
        >
          <Typography variant={TypographyVariant.heading3}>
            My card with rounded corners
          </Typography>
        </Card>
      </Container>

      <Spacing />
      <Typography variant={TypographyVariant.heading3}>
        Card with right icon
      </Typography>

      <Card hasRoundedCorners hasRightIcon fullWidth>
        <Typography variant={TypographyVariant.heading3}>My card</Typography>
      </Card>

      <Spacing />
      <Typography variant={TypographyVariant.heading3}>
        Full Width Card
      </Typography>

      <Card hasRoundedCorners fullWidth>
        <Typography variant={TypographyVariant.heading3}>My card</Typography>
      </Card>

      <Spacing />
      <Typography variant={TypographyVariant.heading3}>
        Card with Long text
      </Typography>

      <Card hasRoundedCorners fullWidth>
        <Container direction="column">
          <StyledText variant={TypographyVariant.heading3}>
            This is a Card Component with a long text!
          </StyledText>
          <StyledText variant={TypographyVariant.paragraph1}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            accusamus et delectus fuga? Ipsam voluptatibus a, mollitia fugit
            perferendis quae, eos quis voluptates tenetur minima doloremque
            vitae at veritatis cumque.
          </StyledText>
        </Container>
      </Card>

      <Spacing />
      <Typography variant={TypographyVariant.heading3}>
        Card with children
      </Typography>

      <Card hasRoundedCorners fullWidth disabled>
        <Container direction="column">
          <Typography variant={TypographyVariant.heading3}>
            My card with children
          </Typography>
          <CheckboxGroup
            defaultChecked={['Apple', 'Pear']}
            options={['Apple', 'Banana', 'Pear']}
          />
          <ToggleButtonGroup
            selectedValue={selectedSingleBtn}
            onSingleSelect={setSelectedSingleBtn}
          >
            <ToggleButton value="1">Option A</ToggleButton>
            <ToggleButton value="2">Option B</ToggleButton>
            <ToggleButton value="3">Option C</ToggleButton>
          </ToggleButtonGroup>
        </Container>
      </Card>
    </Container>
  );
};

export const ShiftVariants: Story<CardProps> = () => {
  return (
    <Container direction="column">
      <Typography variant={TypographyVariant.heading3}>Day shift</Typography>
      <Container>
        <CardShift shiftCardStatus="DAY" hasRoundedCorners />
      </Container>

      <Spacing />
      <Typography variant={TypographyVariant.heading3}>Night shift</Typography>
      <Container>
        <CardShift shiftCardStatus="NIGHT" hasRoundedCorners />
      </Container>

      <Spacing />
      <Typography variant={TypographyVariant.heading3}>
        Sleeper shift
      </Typography>
      <Container>
        <CardShift shiftCardStatus="SLEEPER" hasRoundedCorners />
      </Container>
    </Container>
  );
};

const Template: Story<CardProps> = ({ fullWidth, ...rest }) => (
  <Container display="flex">
    <Card fullWidth={fullWidth} {...rest}>
      <Typography variant={TypographyVariant.heading3}>My Card</Typography>
    </Card>
  </Container>
);

export const Interactive = Template.bind({});
Interactive.args = {
  hasBorder: true,
  hasRoundedCorners: true,
  hasRightIcon: true,
  fullWidth: true,
};
