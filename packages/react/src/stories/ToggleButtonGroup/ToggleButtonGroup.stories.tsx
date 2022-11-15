import { Meta, Story } from '@storybook/react';
import React from 'react';
import Typography, { TypographyVariant } from '../../components/Typography';
import ToggleButton from '../../components/ToggleButton';
import ToggleButtonGroup, {
  ToggleButtonGroupProps,
} from '../../components/ToggleButtonGroup';
import useState from 'storybook-addon-state';
import Spacing, { SpacingPositions, SpacingSizes } from '../Spacing';
import Container from '../Container';
import InfoTemplate from '../InfoTemplate/InfoTemplate';
import { TITLE, DESCRIPTION, DO, DONT } from './ToggleButtonGroupInfo';

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
    <Container direction="column">
      <Typography variant={TypographyVariant.heading4}>
        Single Select Group
      </Typography>
      <ToggleButtonGroup
        selectedValue={selectedSingleBtn}
        onSingleSelect={setSelectedSingleBtn}
      >
        <ToggleButton value="1">Option A</ToggleButton>
        <ToggleButton value="2">Option B</ToggleButton>
        <ToggleButton value="3">Option C</ToggleButton>
      </ToggleButtonGroup>
      <Spacing position={SpacingPositions.Bottom} />
      <Typography variant={TypographyVariant.heading4}>
        Multiple Select Group with horizontal orientation
      </Typography>

      <ToggleButtonGroup
        selectedValue={selectedMultipleBtn}
        isMultiSelect={setSelectedMultipleBtn}
        direction={'row'}
      >
        <ToggleButton value="1">Option A</ToggleButton>

        <ToggleButton value="2">Option B</ToggleButton>

        <ToggleButton value="3">Option C</ToggleButton>
      </ToggleButtonGroup>
      <Spacing size={SpacingSizes.Large} />
      <Typography variant={TypographyVariant.heading4}>
        Multiple Select Group with vertical orientation
      </Typography>
      <Container>
        <ToggleButtonGroup
          selectedValue={selectedVerticalMultipleBtn}
          isMultiSelect={setSelectedVerticalMultipleBtn}
          direction={'column'}
        >
          <ToggleButton value="1">Jun</ToggleButton>

          <ToggleButton value="2">Jul</ToggleButton>

          <ToggleButton value="3">Aug</ToggleButton>
        </ToggleButtonGroup>
      </Container>
      <Spacing position={SpacingPositions.Bottom} />
      <Typography variant={TypographyVariant.heading4}>
        Multiple Select Group with vertical / horizontal orientation
      </Typography>

      <Container direction="column" display={'block'}>
        <ToggleButtonGroup
          selectedValue={selectedHorizontalBtns}
          isMultiSelect={setSelectedHorizonalBtns}
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
          isMultiSelect={setSelectedHorizonalBtns}
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
          isMultiSelect={setSelectedHorizonalBtns}
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
      <Container hasPadding={false}>
        <ToggleButtonGroup
          selectedValue={selectedBtns}
          isMultiSelect={setSelectedBtns}
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
        isMultiSelect={setSelectedBtns}
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
