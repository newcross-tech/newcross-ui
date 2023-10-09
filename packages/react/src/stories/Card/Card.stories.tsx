import { faUser } from '@fortawesome/pro-light-svg-icons/faUser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Meta, Story } from '@storybook/react';
import useState from 'storybook-addon-state';
import styled, { css } from 'styled-components';
import Badge from '../../components/Badge';
import Card, { CardProps } from '../../components/Card';
import CheckboxGroup from '../../components/CheckboxGroup';
import ToggleButton from '../../components/ToggleButton';
import ToggleButtonGroup from '../../components/ToggleButtonGroup';
import Typography from '../../components/Typography';
import { Theme } from '../../types';
import Container from '../Container';
import InfoTemplate from '../InfoTemplate/InfoTemplate';
import Spacing from '../Spacing';
import { DESCRIPTION, DO, DONT, TITLE } from './CardInfo';
import { CardShift } from './CardShift';
import * as StoryTitle from '../StoryTitle';

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
        <StoryTitle.Overview>Card with icon</StoryTitle.Overview>
        <Spacing />
        <Card hasRoundedCorners fullWidth={false}>
          <FontAwesomeIcon icon={faUser} size={'lg'} />
          <StyledText variant={'heading6'}>My Profile</StyledText>
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
      <StoryTitle.Regular>Card with icon and badge</StoryTitle.Regular>

      <Card hasRoundedCorners fullWidth={false}>
        <FontAwesomeIcon icon={faUser} size={'lg'} />
        <StyledText variant={'heading6'}>My Profile</StyledText>
        <Badge badgeContent={7} />
      </Card>

      <Spacing />
      <StoryTitle.Regular>Card with border</StoryTitle.Regular>
      <Container>
        <Card hasBorder fullWidth={false}>
          <Typography variant={'heading6'}>My card</Typography>
        </Card>
        <Card hasRoundedCorners hasBorder variant="secondary" fullWidth={false}>
          <Typography variant={'heading6'}>
            My card with rounded corners
          </Typography>
        </Card>
      </Container>

      <Spacing />
      <StoryTitle.Regular>Card with right icon</StoryTitle.Regular>

      <Card hasRoundedCorners hasRightIcon fullWidth>
        <Typography variant={'heading6'}>My card</Typography>
      </Card>

      <Spacing />
      <StoryTitle.Regular>Full Width Card</StoryTitle.Regular>

      <Card hasRoundedCorners fullWidth>
        <Typography variant={'heading6'}>My card</Typography>
      </Card>

      <Spacing />
      <StoryTitle.Regular>Card with Long text</StoryTitle.Regular>

      <Card hasRoundedCorners fullWidth>
        <Container direction="column">
          <StyledText variant={'heading6'}>
            This is a Card Component with a long text!
          </StyledText>
          <StyledText variant={'paragraph1'}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            accusamus et delectus fuga? Ipsam voluptatibus a, mollitia fugit
            perferendis quae, eos quis voluptates tenetur minima doloremque
            vitae at veritatis cumque.
          </StyledText>
        </Container>
      </Card>

      <Spacing />
      <StoryTitle.Regular>Card with children</StoryTitle.Regular>

      <Card hasRoundedCorners fullWidth disabled>
        <Container direction="column">
          <Typography variant={'heading6'}>My card with children</Typography>
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
      <StoryTitle.Regular>Day shift</StoryTitle.Regular>
      <Container>
        <CardShift shiftCardStatus="DAY" hasRoundedCorners />
      </Container>

      <Spacing />
      <StoryTitle.Regular>Night shift</StoryTitle.Regular>
      <Container>
        <CardShift shiftCardStatus="NIGHT" hasRoundedCorners />
      </Container>

      <Spacing />
      <StoryTitle.Regular>Sleeper shift</StoryTitle.Regular>
      <Container>
        <CardShift shiftCardStatus="SLEEPER" hasRoundedCorners />
      </Container>
    </Container>
  );
};

const Template: Story<CardProps> = ({ fullWidth, ...rest }) => (
  <Container display="flex">
    <Card fullWidth={fullWidth} {...rest}>
      <Typography variant={'heading6'}>My Card</Typography>
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
