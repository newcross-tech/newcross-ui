import { Meta, Story } from '@storybook/react';
import { View, Text } from 'react-native';
import {
  TextInput,
  TextInputProps,
  Typography,
  TypographyVariant,
} from '@newcross-ui/react-native';
import Spacing from '../Spacing';
import Container from '../Container';
import { isWebPlatform } from '../utils';
import InfoTemplate from '../InfoTemplate/InfoTemplate';
import { TITLE, DESCRIPTION, DO, DONT } from './SearchBarInfo';
import useState from 'storybook-addon-state';

export default {
  title: 'ReactNative/Components/SearchBar',
  component: TextInput,
} as Meta;

export const Overview = () => {
  const [searchPhrase, setSearchPhrase] = useState('searchPhrase', '');
  return (
    <InfoTemplate
      title={TITLE}
      description={DESCRIPTION}
      doInfo={DO}
      dontInfo={DONT}
    >
      <Container
        containerStyle={{ maxWidth: isWebPlatform ? '350px' : undefined }}
      >
        <TextInput
          value={searchPhrase}
          placeholder="Search"
          onChangeText={setSearchPhrase}
          search
          onClosePress={() => setSearchPhrase('')}
        />
      </Container>
    </InfoTemplate>
  );
};

export const Variants = () => {
  const [searchPhrase, setSearchPhrase] = useState('searchPhrase', '');
  const [searchPhrase1, setSearchPhrase1] = useState(
    'searchPhrase1',
    'This is a long search entry and this is a long search entry'
  );
  const [searchPhrase2, setSearchPhrase2] = useState('searchPhrase2', '');

  const data = [
    { name: 'Bupa Care' },
    { name: 'St Lukes Hospice' },
    { name: 'Oxfam' },
    { name: 'Bernados' },
  ];

  const list = data
    .filter((item) =>
      item.name.toLowerCase().includes(searchPhrase2.toLowerCase())
    )
    .map((row, index) => {
      return (
        <View key={index} style={{ paddingVertical: 5 }}>
          <Text>{row.name}</Text>
        </View>
      );
    });

  return (
    <Container
      containerStyle={{ maxWidth: isWebPlatform ? '350px' : undefined }}
    >
      <Typography variant={TypographyVariant.heading4}>
        With placeholder
      </Typography>
      <Spacing />
      <TextInput
        value={searchPhrase}
        placeholder="Search"
        onChangeText={setSearchPhrase}
        search
        onClosePress={() => setSearchPhrase('')}
      />
      <Spacing />
      <Typography variant={TypographyVariant.heading4}>
        With a long search entry
      </Typography>
      <Spacing />
      <TextInput
        value={searchPhrase1}
        placeholder="Search"
        onChangeText={setSearchPhrase1}
        search
        onClosePress={() => setSearchPhrase1('')}
      />
      <Spacing />
      <Typography variant={TypographyVariant.heading4}>
        With a filterable list
      </Typography>
      <Spacing />
      <TextInput
        value={searchPhrase2}
        placeholder="Search"
        onChangeText={setSearchPhrase2}
        search
        onClosePress={() => setSearchPhrase2('')}
      />
      <Spacing />
      <Container>{list}</Container>
    </Container>
  );
};

const Template: Story<TextInputProps> = ({ placeholder, search }) => {
  const [searchPhrase3, setSearchPhrase3] = useState('searchPhrase3', '');
  return (
    <Container
      containerStyle={{ maxWidth: isWebPlatform ? '350px' : undefined }}
    >
      <TextInput
        value={searchPhrase3}
        placeholder={placeholder}
        onChangeText={setSearchPhrase3}
        search={search}
        onClosePress={() => setSearchPhrase3('')}
      />
    </Container>
  );
};

export const Interactive = Template.bind({});
Interactive.args = {
  placeholder: 'Search',
  search: true,
};
