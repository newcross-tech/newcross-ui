import { Meta, Story } from '@storybook/react';
import {
  CardGroup,
  Card,
  CardGroupProps,
  Typography,
  TypographyVariant,
} from '@newcross-ui/react-native';
import { native } from '@newcross-ui/design-tokens';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser } from '@fortawesome/pro-light-svg-icons/faUser';
import Spacing from '../Spacing';
import Container from '../Container';
import { getParameters } from '../utils';
import InfoTemplate from '../InfoTemplate/InfoTemplate';
import { TITLE, DESCRIPTION, DO, DONT } from './CardGroupInfo';

const items = ['Item 1', 'Item 2', 'Item 3'];
const { SpacingBase24, SpacingBase12 } = native.healthforce;

export default {
  title: 'ReactNative/Components/CardGroup',
  component: CardGroup,
  parameters: getParameters(),
} as Meta;

const renderCardItems = (numberOfItems = items.length) =>
  items.slice(0, numberOfItems).map((item) => (
    <Card hasRightIcon>
      <Container direction="row" hasPadding={false} justifyContent="flex-start">
        <FontAwesomeIcon icon={faUser} size={SpacingBase24} />
        <Typography
          variant={TypographyVariant.heading6}
          style={{ marginLeft: SpacingBase12 }}
        >
          {item}
        </Typography>
      </Container>
    </Card>
  ));

export const Overview = () => {
  return (
    <InfoTemplate
      title={TITLE}
      description={DESCRIPTION}
      doInfo={DO}
      dontInfo={DONT}
    >
      <CardGroup>{renderCardItems()}</CardGroup>
    </InfoTemplate>
  );
};

export const Variants: Story<CardGroupProps> = () => {
  return (
    <Container>
      <Typography variant={TypographyVariant.heading5}>Two Cards</Typography>
      <Spacing />
      <CardGroup>{renderCardItems(2)}</CardGroup>
      <Spacing />
      <Typography variant={TypographyVariant.heading5}>
        Multiple Cards
      </Typography>
      <Spacing />
      <CardGroup>{renderCardItems()}</CardGroup>
    </Container>
  );
};

const Template: Story<CardGroupProps> = () => {
  return (
    <Container>
      <CardGroup>{renderCardItems()}</CardGroup>
    </Container>
  );
};

export const Interactive = Template.bind({});
Interactive.args = {};
