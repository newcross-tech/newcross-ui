import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import {
  Button,
  Pill,
  PillGroup,
  PillGroupOrientation,
  PillGroupProps,
  Typography,
  TypographyVariant,
} from '@newcross-ui/react-native';
import Container from '../Container';
import { isWebPlatform, getParameters } from '../utils';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBird } from '@fortawesome/pro-solid-svg-icons/faBird';
import { faDog } from '@fortawesome/pro-solid-svg-icons/faDog';
import { faCat } from '@fortawesome/pro-solid-svg-icons/faCat';
import { faSnake } from '@fortawesome/pro-solid-svg-icons/faSnake';
import { faRabbit } from '@fortawesome/pro-solid-svg-icons/faRabbit';
import { faPig } from '@fortawesome/pro-solid-svg-icons/faPig';
import { faOtter } from '@fortawesome/pro-solid-svg-icons/faOtter';
import { faWhale } from '@fortawesome/pro-solid-svg-icons/faWhale';
import { faSheep } from '@fortawesome/pro-solid-svg-icons/faSheep';
import Spacing, { SpacingSizes } from '../Spacing';
import { ScrollView } from 'react-native-gesture-handler';

export default {
  title: 'ReactNative/Components/PillGroup',
  component: PillGroup,
  parameters: getParameters(),
} as Meta;

export const Variants = () => {
  const items = [
    { label: 'Dog', icon: faDog, id: 'dog' },
    { label: 'Cat', icon: faCat, id: 'cat' },
    { label: 'Bird', icon: faBird, id: 'bird' },
    { label: 'Snake', icon: faSnake, id: 'snake' },
    { label: 'Rabbit', icon: faRabbit, id: 'rabbit' },
    { label: 'Pig', icon: faPig, id: 'pig' },
    { label: 'Otter', icon: faOtter, id: 'otter' },
    { label: 'Whale', icon: faWhale, id: 'whale' },
    { label: 'Sheep', icon: faSheep, id: 'sheep' },
  ];

  const [arrayOfPills, setArrayOfPills] = useState(items);

  const handleOnDelete = (id: string) => {
    setArrayOfPills(() =>
      arrayOfPills.filter(({ id: currentPillId }) => currentPillId !== id)
    );
  };

  const handleOnPress = (id: string) => {
    const animalToAdd = items.find((animal) => animal?.id === id);
    const isAnimalToAddInsideState = arrayOfPills.find((element) => {
      return element.id === id;
    });
    if (!isAnimalToAddInsideState) {
      setArrayOfPills((prevState) => [...prevState, animalToAdd!]);
    }
  };

  return (
    <ScrollView>
      <Container
        containerStyle={{
          width: isWebPlatform ? '60%' : '100%',

          marginTop: isWebPlatform ? 0 : 30,
          justifyContent: 'flex-start',
        }}
      >
        <Typography variant={TypographyVariant.heading4}>
          Removable Pill Group (Interactive Section with Buttons)
        </Typography>
        <Container
          direction={'row'}
          containerStyle={{ flexWrap: 'wrap', justifyContent: 'flex-start' }}
        >
          {items.map(({ label, id }) => {
            return <Button onPress={() => handleOnPress(id)}>{label}</Button>;
          })}
        </Container>

        <PillGroup>
          {arrayOfPills.map(({ label, icon, id }) => {
            return (
              <Pill
                onPress={() => handleOnDelete(id)}
                label={label}
                icon={<FontAwesomeIcon icon={icon} />}
              />
            );
          })}
        </PillGroup>
        <Spacing size={SpacingSizes.Large} />
        <Spacing size={SpacingSizes.Large} />
        <Typography variant={TypographyVariant.heading4}>
          Removable Pill Group with Pill Variants
        </Typography>
        <Spacing size={SpacingSizes.Large} />
        <PillGroup>
          <Pill disabled label="One" />
          <Pill removable={false} label="Two" />
          <Pill removable={false} label="Three" />
          <Pill removable={false} label="Four" />
          <Pill disabled label="Five" />
          <Pill removable={false} disabled label="Seven" />
          <Pill removable={false} label="Eight" />
          <Pill disabled label="Nine" />
          <Pill removable={false} label="Ten" />
        </PillGroup>
        <Spacing size={SpacingSizes.Large} />
        <Spacing size={SpacingSizes.Large} />
        <Typography variant={TypographyVariant.heading4}>
          Pill Group with Vertical Orientation
        </Typography>
        <Spacing size={SpacingSizes.Large} />
        <PillGroup orientation={PillGroupOrientation.vertical}>
          <Pill label="One" />
          <Pill label="Two" />
          <Pill label="Three" />
        </PillGroup>
      </Container>
    </ScrollView>
  );
};

const Template: Story<PillGroupProps> = ({ ...rest }) => {
  return (
    <Container>
      <PillGroup {...rest}>
        <Pill label="One" />
        <Pill label="Two" />
        <Pill label="Three" />
      </PillGroup>
    </Container>
  );
};

export const Interactive = Template.bind({});
Interactive.args = {};
