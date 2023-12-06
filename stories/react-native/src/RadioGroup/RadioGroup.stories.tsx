import { Meta, Story } from '@storybook/react';
import React from 'react';
import {
  Radio,
  RadioGroup,
  Typography,
  TypographyVariant,
} from '@newcross-ui/react-native';
import Container from '../Container';
import { RadioGroupProps } from '@newcross-ui/react';
import Spacing, { SpacingSizes } from '../Spacing';
import { native } from '@newcross-ui/design-tokens';
import InfoTemplate from '../InfoTemplate/InfoTemplate';
import { DESCRIPTION, DO, DONT, TITLE } from './RadioInfo';

const { ColorBaseGrey100 } = native.healthforce;

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
    <RadioGroup {...rest}>
      <Radio
        value="1"
        label="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus facilisis est quis purus congue placerat. Praesent posuere ultricies pretium. Duis eu sodales nunc, vitae consequat turpis
"
      />
      <Radio
        value="2"
        label="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus facilisis est quis purus congue placerat. Praesent posuere ultricies pretium. Duis eu sodales nunc, vitae consequat turpis
"
      />
      <Radio
        value="3"
        label="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus facilisis est quis purus congue placerat. Praesent posuere ultricies pretium. Duis eu sodales nunc, vitae consequat turpis
"
      />
    </RadioGroup>
  );
};

export const Interactive = Template.bind({});
Interactive.args = {
  initialSelected: '1',
  direction: 'row',
};
