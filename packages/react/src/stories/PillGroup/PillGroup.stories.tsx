import { Meta, Story } from '@storybook/react';
import { useState } from 'react';
import Button from '../../components/Button';
import Pill from '../../components/Pill';
import PillGroup, { PillGroupProps } from '../../components/PillGroup';
import Container from '../Container';
import { faBird } from '@fortawesome/pro-solid-svg-icons/faBird';
import { faCat } from '@fortawesome/pro-solid-svg-icons/faCat';
import { faDog } from '@fortawesome/pro-solid-svg-icons/faDog';
import { faOtter } from '@fortawesome/pro-solid-svg-icons/faOtter';
import { faPig } from '@fortawesome/pro-solid-svg-icons/faPig';
import { faRabbit } from '@fortawesome/pro-solid-svg-icons/faRabbit';
import { faSheep } from '@fortawesome/pro-solid-svg-icons/faSheep';
import { faSnake } from '@fortawesome/pro-solid-svg-icons/faSnake';
import { faWhale } from '@fortawesome/pro-solid-svg-icons/faWhale';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Spacing from '../Spacing';
import * as StoryTitle from '../StoryTitle';

export default {
  title: 'React/Components/PillGroup',
  component: PillGroup,
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

  const handleOnClick = (id: string) => {
    const animalToAdd = items.find((animal) => animal?.id === id);
    const isAnimalToAddInsideState = arrayOfPills.find(
      (element) => element.id === id
    );
    if (!isAnimalToAddInsideState) {
      animalToAdd &&
        setArrayOfPills((prevState) => [...prevState, animalToAdd]);
    }
  };

  return (
    <Container direction="column">
      <StoryTitle.Regular>
        Removable Pill Group (Interactive Section with Buttons)
      </StoryTitle.Regular>
      <Container>
        {items.map(({ label, id }) => {
          return (
            <Button key={label} onClick={() => handleOnClick(id)}>
              {label}
            </Button>
          );
        })}
      </Container>

      <PillGroup>
        {arrayOfPills.map(({ label, icon, id }) => {
          return (
            <Pill
              removable
              key={label}
              onClick={() => handleOnDelete(id)}
              label={label}
              icon={<FontAwesomeIcon icon={icon} />}
            />
          );
        })}
      </PillGroup>

      <Spacing size={'Large'} />
      <StoryTitle.Regular>Pill Group with Pill Variants</StoryTitle.Regular>

      <PillGroup>
        <Pill disabled label="One" />
        <Pill label="Two" />
        <Pill selected label="Three" />
        <Pill selected label="Four" />
        <Pill disabled label="Five" />
        <Pill disabled label="Six" />
      </PillGroup>
      <Spacing size={'Large'} />

      <StoryTitle.Regular>
        Pill Group with Vertical Orientation
      </StoryTitle.Regular>

      <PillGroup direction={'column'}>
        <Pill label="One" />
        <Pill label="Two" />
        <Pill label="Three" />
      </PillGroup>
    </Container>
  );
};

const Template: Story<PillGroupProps> = ({ ...rest }) => {
  return (
    <Container>
      <PillGroup {...rest}>
        <Pill removable label="One" />
        <Pill removable label="Two" />
        <Pill removable label="Three" />
      </PillGroup>
    </Container>
  );
};

export const Interactive = Template.bind({});
Interactive.args = {};
