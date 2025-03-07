import { faUser } from '@fortawesome/pro-light-svg-icons/faUser';
import { Meta, Story } from '@storybook/react';
import useState from 'storybook-addon-state';
import Badge from '../../components/Badge';
import Card, { CardProps } from '../../components/Card';
import ToggleButton from '../../components/ToggleButton';
import ToggleButtonGroup from '../../components/ToggleButtonGroup';
import Typography from '../../components/Typography';
import Container from '../../components/Container';
import InfoTemplate from '../InfoTemplate/InfoTemplate';
import { DESCRIPTION, DO, DONT, TITLE } from './CardInfo';
import { CardShift } from './CardShift';
import * as StoryTitle from '../StoryTitle';
import TextInput from '../../components/Fields/TextInput';
import CheckboxGroup from '../../components/Fields/CheckboxGroup';
import Icon from '../../components/Icon';

export default {
  title: 'React/Components/Card',
  component: Card,
} as Meta;

export const Overview = () => {
  return (
    <InfoTemplate
      title={TITLE}
      description={DESCRIPTION}
      doInfo={DO}
      dontInfo={DONT}
    >
      <Container display="block">
        <StoryTitle.Overview>Card with icon</StoryTitle.Overview>
        <Card hasRoundedCorners fullWidth={false}>
          <Container gap="md" alignItems="center">
            <Icon icon={faUser} variant={'h4'} />
            <Typography variant={'h4'}>My Profile</Typography>
          </Container>
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
    <Container flexDirection="column" gap="md">
      {/* Card with Icon and Badge */}
      <Container flexDirection="column">
        <StoryTitle.Regular>Card with Icon and Badge</StoryTitle.Regular>
        <Card hasRoundedCorners fullWidth={false}>
          <Container gap="md" alignItems="center">
            <Icon icon={faUser} variant={'h4'} />
            <Typography variant={'h4'}>My Profile</Typography>
            <Badge badgeContent={7} />
          </Container>
        </Card>
      </Container>

      {/* Card with Border */}
      <Container flexDirection="column">
        <StoryTitle.Regular>Card with Border</StoryTitle.Regular>
        <Container gap="sm">
          <Card hasBorder fullWidth={false}>
            <Typography variant="h4">My Card</Typography>
          </Card>
          <Card
            hasRoundedCorners
            hasBorder
            variant="secondary"
            fullWidth={false}
          >
            <Typography variant="h4">My Card with Rounded Corners</Typography>
          </Card>
        </Container>
      </Container>

      {/* Card with Right Icon */}
      <Container flexDirection="column">
        <StoryTitle.Regular>Card with Right Icon</StoryTitle.Regular>
        <Card hasRoundedCorners hasRightIcon fullWidth>
          <Typography variant="h4">My Card</Typography>
        </Card>
      </Container>

      {/* Full Width Card */}
      <Container flexDirection="column">
        <StoryTitle.Regular>Full Width Card</StoryTitle.Regular>
        <Card hasRoundedCorners fullWidth>
          <Typography variant="h4">My Card</Typography>
        </Card>
      </Container>

      {/* Card with Long Text */}
      <Container flexDirection="column">
        <StoryTitle.Regular>Card with Long Text</StoryTitle.Regular>
        <Card hasRoundedCorners fullWidth>
          <Container flexDirection="column">
            <Typography variant="h4">
              This is a Card Component with a long text!
            </Typography>
            <Typography variant="p2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              accusamus et delectus fuga? Ipsam voluptatibus a, mollitia fugit
              perferendis quae, eos quis voluptates tenetur minima doloremque
              vitae at veritatis cumque.
            </Typography>
          </Container>
        </Card>
      </Container>

      {/* Card with Children */}
      <Container flexDirection="column">
        <StoryTitle.Regular>Card with Children</StoryTitle.Regular>
        <Card hasRoundedCorners fullWidth disabled>
          <Container flexDirection="column">
            <Typography variant="h4">My Card with Children</Typography>
            <CheckboxGroup
              defaultChecked={['Apple', 'Pear']}
              options={['Apple', 'Banana', 'Pear']}
            />
            <ToggleButtonGroup
              variant="single"
              selectedValue={selectedSingleBtn}
              onToggle={setSelectedSingleBtn}
            >
              <ToggleButton value="1">Option A</ToggleButton>
              <ToggleButton value="2">Option B</ToggleButton>
              <ToggleButton value="3">Option C</ToggleButton>
            </ToggleButtonGroup>
          </Container>
        </Card>
      </Container>

      {/* Card with Input Field */}
      <Container flexDirection="column">
        <StoryTitle.Regular>Card with Input Field</StoryTitle.Regular>
        <Card hasRoundedCorners fullWidth>
          <TextInput label="First Name" fullWidth />
        </Card>
      </Container>
    </Container>
  );
};

export const ShiftVariants: Story<CardProps> = () => {
  return (
    <Container flexDirection="column" gap="md">
      <StoryTitle.Regular>Day shift</StoryTitle.Regular>
      <Container>
        <CardShift shiftCardStatus="DAY" hasRoundedCorners />
      </Container>

      <StoryTitle.Regular>Night shift</StoryTitle.Regular>
      <Container>
        <CardShift shiftCardStatus="NIGHT" hasRoundedCorners />
      </Container>

      <StoryTitle.Regular>Sleeper shift</StoryTitle.Regular>
      <Container>
        <CardShift shiftCardStatus="SLEEPER" hasRoundedCorners />
      </Container>
    </Container>
  );
};

const Template: Story<CardProps> = ({ fullWidth, ...rest }) => (
  <Container>
    <Card fullWidth={fullWidth} {...rest}>
      <Typography variant={'h4'}>My Card</Typography>
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
