import React from 'react';
import { Meta, Story } from '@storybook/react';
import useState from 'storybook-addon-state';
import ToggleButton from '../../components/ToggleButton';
import ToggleButtonGroup, {
  ToggleButtonGroupProps,
} from '../../components/ToggleButtonGroup';
import Container from '../../components/Container';
import InfoTemplate from '../InfoTemplate/InfoTemplate';
import { DESCRIPTION, DO, DONT, TITLE } from './ToggleButtonGroupInfo';
import * as StoryTitle from '../StoryTitle';

export default {
  title: 'React/Components/ToggleButtonGroup',
  component: ToggleButtonGroup,
} as Meta;

export const Variants = () => {
  const [selectedSingleBtn, setSelectedSingleBtn] = useState(
    'selectedSingleBtn',
    '1'
  );
  const [selectedVerticalMultipleBtn, setSelectedVerticalMultipleBtn] =
    useState('selectedVerticalMultipleBtn', ['1', '2']);
  const [selectedMultipleBtn, setSelectedMultipleBtn] = useState(
    'selectedMultipleBtn',
    ['1', '2']
  );
  const [selectedHorizontalBtns, setSelectedHorizonalBtns] = useState(
    'selectedHorizontalBtnsArray',
    ['1', '2']
  );

  return (
    <Container flexDirection="column">
      <StoryTitle.Regular>Single Select Group</StoryTitle.Regular>
      <ToggleButtonGroup
        selectedValue={selectedSingleBtn}
        onToggle={setSelectedSingleBtn}
        variant="single"
      >
        <ToggleButton value="1">Option A</ToggleButton>
        <ToggleButton value="2">Option B</ToggleButton>
        <ToggleButton value="3">Option C</ToggleButton>
      </ToggleButtonGroup>
      <Container mb="SpacingBase4" />
      <StoryTitle.Regular>
        Multiple Select Group with horizontal orientation
      </StoryTitle.Regular>

      <ToggleButtonGroup
        selectedValue={selectedMultipleBtn}
        onToggle={setSelectedMultipleBtn}
        variant="multi"
        direction={'row'}
      >
        <ToggleButton value="1">Option A</ToggleButton>

        <ToggleButton value="2">Option B</ToggleButton>

        <ToggleButton value="3">Option C</ToggleButton>
      </ToggleButtonGroup>
      <Container m="SpacingBase12" />
      <StoryTitle.Regular>
        Multiple Select Group with vertical orientation
      </StoryTitle.Regular>
      <Container>
        <ToggleButtonGroup
          selectedValue={selectedVerticalMultipleBtn}
          onToggle={setSelectedVerticalMultipleBtn}
          variant="multi"
          direction={'column'}
        >
          <ToggleButton value="1">Jun</ToggleButton>

          <ToggleButton value="2">Jul</ToggleButton>

          <ToggleButton value="3">Aug</ToggleButton>
        </ToggleButtonGroup>
      </Container>
      <Container mb="SpacingBase4" />
      <StoryTitle.Regular>
        Multiple Select Group with vertical / horizontal orientation
      </StoryTitle.Regular>

      <Container display={'block'}>
        <ToggleButtonGroup
          selectedValue={selectedHorizontalBtns}
          onToggle={setSelectedHorizonalBtns}
          variant="multi"
        >
          <ToggleButton value="1" fullWidth>
            Jupiter Green
          </ToggleButton>
          <ToggleButton value="2" fullWidth>
            Belleview Care
          </ToggleButton>
        </ToggleButtonGroup>
        <ToggleButtonGroup
          selectedValue={selectedHorizontalBtns}
          onToggle={setSelectedHorizonalBtns}
          variant="multi"
        >
          <ToggleButton value="3" fullWidth>
            Jenny Gray care
          </ToggleButton>
          <ToggleButton value="4" fullWidth>
            Mount Pleasant
          </ToggleButton>
        </ToggleButtonGroup>
        <ToggleButtonGroup
          selectedValue={selectedHorizontalBtns}
          onToggle={setSelectedHorizonalBtns}
          variant="multi"
        >
          <ToggleButton value="5" fullWidth>
            Leaf
          </ToggleButton>
          <ToggleButton value="6" fullWidth>
            Silver
          </ToggleButton>
        </ToggleButtonGroup>
      </Container>
    </Container>
  );
};

export const Overview = () => {
  const [selectedBtns, setSelectedBtns] = useState('selectedBtnsArray', [
    '1',
    '2',
  ]);
  return (
    <InfoTemplate
      title={TITLE}
      description={DESCRIPTION}
      doInfo={DO}
      dontInfo={DONT}
    >
      <Container>
        <ToggleButtonGroup
          selectedValue={selectedBtns}
          onToggle={setSelectedBtns}
          variant="multi"
        >
          <ToggleButton value="1">Option A</ToggleButton>
          <ToggleButton value="2">Option B</ToggleButton>
          <ToggleButton value="3">Option C</ToggleButton>
        </ToggleButtonGroup>
      </Container>
    </InfoTemplate>
  );
};

const Template: Story<ToggleButtonGroupProps> = (props) => {
  const [selectedBtns, setSelectedBtns] = useState('selectedBtnsArray', [
    '1',
    '2',
  ]);
  return (
    <Container display="block">
      <ToggleButtonGroup
        {...props}
        selectedValue={selectedBtns}
        onToggle={setSelectedBtns}
        variant="multi"
      >
        <ToggleButton value="1" fullWidth>
          Jan
        </ToggleButton>
        <ToggleButton value="2" fullWidth>
          Feb
        </ToggleButton>
        <ToggleButton value="3" fullWidth>
          Mar
        </ToggleButton>
      </ToggleButtonGroup>
    </Container>
  );
};

export const Interactive = Template.bind({});
