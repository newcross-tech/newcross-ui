import { Meta, Story } from '@storybook/react';
import { View, ScrollView } from 'react-native';
import {
  ListOption,
  ListOptionProps,
  ListOptionAlignment,
  Typography,
  TypographyVariant,
} from '@newcross-ui/react-native';
import Container from '../Container';
import Spacing from '../Spacing';
import { isWebPlatform } from '../utils';
import InfoTemplate from '../InfoTemplate/InfoTemplate';
import { TITLE, DESCRIPTION, DO, DONT } from './ListOptionInfo';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCheck } from '@fortawesome/pro-light-svg-icons';

export default {
  title: 'ReactNative/Components/ListOption',
  component: ListOption,
} as Meta;

export const Overview = () => {
  return (
    <InfoTemplate
      title={TITLE}
      description={DESCRIPTION}
      doInfo={DO}
      dontInfo={DONT}
    >
      <Container
        containerStyle={{ maxWidth: isWebPlatform ? '320px' : undefined }}
      >
        <ListOption optionText="Option 1" />
      </Container>
    </InfoTemplate>
  );
};

export const Variants = () => {
  const options = [{ label: 'Option 1', value: 1 }];
  return (
    <ScrollView style={{ maxWidth: isWebPlatform ? '320px' : undefined }}>
      <Typography variant={TypographyVariant.heading7}>
        Left Aligned Options
      </Typography>
      <Spacing />
      {options.map((option) => (
        <ListOption optionText={option.label} />
      ))}
      <Spacing />

      <Typography variant={TypographyVariant.heading7}>
        Center Aligned Options
      </Typography>
      <Spacing />
      {options.map((option) => (
        <ListOption
          optionText={option.label}
          alignText={ListOptionAlignment.CENTER}
        />
      ))}
      <Spacing />

      <Typography variant={TypographyVariant.heading7}>
        Right Aligned Options
      </Typography>
      <Spacing />
      {options.map((option) => (
        <ListOption
          optionText={option.label}
          alignText={ListOptionAlignment.RIGHT}
        />
      ))}
      <Spacing />

      <Typography variant={TypographyVariant.heading7}>
        With Left Icon
      </Typography>
      <Spacing />
      {options.map((option) => (
        <ListOption
          optionText={option.label}
          leftIcon={<FontAwesomeIcon icon={faCheck} />}
        />
      ))}
      <Spacing />

      <Typography variant={TypographyVariant.heading7}>
        With Right Icon
      </Typography>
      <Spacing />
      {options.map((option) => (
        <ListOption
          optionText={option.label}
          rightIcon={<FontAwesomeIcon icon={faCheck} />}
        />
      ))}
      <Spacing />

      <Typography variant={TypographyVariant.heading7}>
        With Icons On Both Sides
      </Typography>
      <Spacing />
      {options.map((option) => (
        <ListOption
          optionText={option.label}
          rightIcon={<FontAwesomeIcon icon={faCheck} />}
          leftIcon={<FontAwesomeIcon icon={faCheck} />}
        />
      ))}
      <Spacing />
      {options.map((option) => (
        <ListOption
          optionText={option.label}
          rightIcon={<FontAwesomeIcon icon={faCheck} />}
          leftIcon={<FontAwesomeIcon icon={faCheck} />}
          alignText={ListOptionAlignment.CENTER}
        />
      ))}
      <Spacing />
      {options.map((option) => (
        <ListOption
          optionText={option.label}
          rightIcon={<FontAwesomeIcon icon={faCheck} />}
          leftIcon={<FontAwesomeIcon icon={faCheck} />}
          alignText={ListOptionAlignment.RIGHT}
        />
      ))}
      <Spacing />

      <Typography variant={TypographyVariant.heading7}>
        Selected by default
      </Typography>
      <Spacing />
      {options.map((option) => (
        <ListOption optionText={option.label} selected={option.value === 1} />
      ))}
      <Spacing />
    </ScrollView>
  );
};

const Template: Story<ListOptionProps> = ({
  optionText,
  leftIcon,
  rightIcon,
  selected,
  alignText,
  onSelect,
  testID,
  style,
}) => {
  return (
    <Container
      containerStyle={{ maxWidth: isWebPlatform ? '320px' : undefined }}
    >
      <ListOption
        optionText={optionText}
        onSelect={onSelect}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        selected={selected}
        alignText={alignText}
        testID={testID}
        style={style}
      />
    </Container>
  );
};

export const Interactive = Template.bind({});
Interactive.args = {
  optionText: 'Option 1',
};
