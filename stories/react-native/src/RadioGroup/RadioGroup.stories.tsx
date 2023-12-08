import { Meta, Story } from '@storybook/react';
import React from 'react';
import {
  Link,
  LinkSizes,
  Radio,
  RadioGroup,
  RadioGroupProps,
  Typography,
  TypographyVariant,
} from '@newcross-ui/react-native';
import Container from '../Container';
import Spacing, { SpacingSizes } from '../Spacing';
import InfoTemplate from '../InfoTemplate/InfoTemplate';
import { DESCRIPTION, DO, DONT, TITLE } from './RadioInfo';
import { View } from 'react-native';

export default {
  title: 'ReactNative/Components/RadioGroup',
  component: RadioGroup,
} as Meta;

export const Variants = () => {
  return (
    <Container>
      <Spacing size={SpacingSizes.Large} />
      <Typography variant={TypographyVariant.heading4}>
        Radio Group with Horizontal Orientation
      </Typography>
      <Spacing size={SpacingSizes.Large} />
      <RadioGroup initialSelected="1">
        <Radio value="1" label="A" />
        <Radio value="2" label="B" />
        <Radio value="3" label="C" />
      </RadioGroup>

      <Spacing size={SpacingSizes.Large} />
      <Typography variant={TypographyVariant.heading4}>
        Radio Group with Vertical Orientation and divider
      </Typography>
      <Spacing size={SpacingSizes.Large} />
      <RadioGroup direction="column" initialSelected="5">
        <Radio value="4" label="A" />
        <Radio value="5" label="B" />
        <Radio value="6" label="C" />
      </RadioGroup>

      <Spacing size={SpacingSizes.Large} />
      <Typography variant={TypographyVariant.heading4}>
        Disabled and Selected Items in Radio Group
      </Typography>
      <Spacing size={SpacingSizes.Large} />
      <RadioGroup initialSelected="7" disabled={['7']}>
        <Radio value="7" label="A" />
        <Radio value="8" label="B" />
        <Radio value="9" label="C" />
      </RadioGroup>

      <Spacing size={SpacingSizes.Large} />
      <Typography variant={TypographyVariant.heading4}>
        No default selection in Radio Group
      </Typography>
      <Spacing size={SpacingSizes.Large} />
      <RadioGroup>
        <Radio value="7" label="A" />
        <Radio value="8" label="B" />
        <Radio value="9" label="C" />
      </RadioGroup>

      <Spacing size={SpacingSizes.Large} />
      <Typography variant={TypographyVariant.heading4}>
        Styled Radio Group Container
      </Typography>
      <Spacing size={SpacingSizes.Large} />
      <RadioGroup containerStyle={{ borderRadius: 0 }}>
        <Radio value="7" label="A" />
        <Radio value="8" label="B" />
        <Radio value="9" label="C" />
      </RadioGroup>
    </Container>
  );
};

export const Overview = () => {
  return (
    <InfoTemplate
      title={TITLE}
      description={DESCRIPTION}
      doInfo={DO}
      dontInfo={DONT}
    >
      <RadioGroup>
        <Radio value="1" label="A" />
        <Radio value="2" label="B" />
        <Radio value="3" label="C" />
      </RadioGroup>
    </InfoTemplate>
  );
};

const Template: Story<RadioGroupProps> = ({ ...rest }) => {
  return (
    <View>
      <RadioGroup {...rest}>
        <Radio
          value="A"
          label={'Description below'}
          content={
            <Link size={LinkSizes.small} hasIcon={false}>
              More Info
            </Link>
          }
        ></Radio>
        <Radio value="B" label={'B'} />
        <Radio value="C" label={'C'} />
      </RadioGroup>
    </View>
  );
};

export const Interactive = Template.bind({});
Interactive.args = {
  initialSelected: 'A',
  direction: 'row',
};
