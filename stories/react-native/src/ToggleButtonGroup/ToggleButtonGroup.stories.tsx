import { Meta, Story } from '@storybook/react';
import {
  Typography,
  TypographyVariant,
  ToggleButton,
  ToggleButtonGroup,
  ToggleButtonGroupOrientation,
  ToggleButtonGroupProps,
} from '@newcross-ui/react-native';
import { native } from '@newcross-ui/design-tokens';
import useState from 'storybook-addon-state';
import Spacing, { SpacingPositions, SpacingSizes } from '../Spacing';
import Container from '../Container';
import InfoTemplate from '../InfoTemplate/InfoTemplate';
import { TITLE, DESCRIPTION, DO, DONT } from './ToggleButtonGroupInfo';
import { isWebPlatform } from '../utils';

export default {
  title: 'ReactNative/Components/ToggleButtonGroup',
  component: ToggleButtonGroup,
} as Meta;

const { SpacingBase32, SpacingBase12 } = native.healthforce;

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
    <Container>
      <Spacing size={SpacingSizes.Large} />
      <Spacing size={SpacingSizes.Small} />
      <Typography variant={TypographyVariant.heading4}>
        Single Select Group
      </Typography>
      <Spacing position={SpacingPositions.Bottom} />
      <ToggleButtonGroup
        selectedValue={selectedSingleBtn}
        onSingleSelect={setSelectedSingleBtn}
        orientation={ToggleButtonGroupOrientation.horizontal}
      >
        <ToggleButton value="1">Option A</ToggleButton>
        <ToggleButton value="2">Option B</ToggleButton>
        <ToggleButton value="3">Option C</ToggleButton>
      </ToggleButtonGroup>
      <Spacing position={SpacingPositions.Bottom} />
      <Typography variant={TypographyVariant.heading4}>
        Multiple Select Group
      </Typography>
      <Spacing position={SpacingPositions.Bottom} />
      <ToggleButtonGroup
        selectedValue={selectedMultipleBtn}
        onMultiSelect={setSelectedMultipleBtn}
        orientation={ToggleButtonGroupOrientation.horizontal}
      >
        <ToggleButton value="1">Option A</ToggleButton>

        <ToggleButton value="2">Option B</ToggleButton>

        <ToggleButton value="3">Option C</ToggleButton>
      </ToggleButtonGroup>
      <Spacing size={SpacingSizes.Large} />
      <Typography variant={TypographyVariant.heading4}>
        Multiple Select Group with vertical orientation
      </Typography>
      <Spacing size={SpacingSizes.Large} />
      <Container
        containerStyle={{
          width: isWebPlatform ? '25%' : '100%',
          paddingHorizontal: isWebPlatform ? 0 : SpacingBase32,
          paddingVertical: 0,
        }}
      >
        <ToggleButtonGroup
          selectedValue={selectedVerticalMultipleBtn}
          onMultiSelect={setSelectedVerticalMultipleBtn}
          orientation={ToggleButtonGroupOrientation.vertical}
        >
          <ToggleButton fullWidth value="1">
            Jun
          </ToggleButton>

          <ToggleButton fullWidth value="2">
            Jul
          </ToggleButton>

          <ToggleButton fullWidth value="3">
            Aug
          </ToggleButton>
        </ToggleButtonGroup>
      </Container>
      <Spacing position={SpacingPositions.Bottom} />
      <Typography variant={TypographyVariant.heading4}>
        Multiple Select Group with horizontal
      </Typography>
      <Spacing position={SpacingPositions.Bottom} />
      <Container
        containerStyle={{
          width: isWebPlatform ? '60%' : '100%',
        }}
      >
        <ToggleButtonGroup
          orientation={ToggleButtonGroupOrientation.horizontal}
          selectedValue={selectedHorizontalBtns}
          onMultiSelect={setSelectedHorizonalBtns}
          style={{ marginBottom: SpacingBase12 }}
        >
          <ToggleButton value="1">Jupiter Green</ToggleButton>
          <ToggleButton value="2">Belleview Care</ToggleButton>
        </ToggleButtonGroup>
        <ToggleButtonGroup
          orientation={ToggleButtonGroupOrientation.horizontal}
          selectedValue={selectedHorizontalBtns}
          onMultiSelect={setSelectedHorizonalBtns}
          style={{ marginBottom: SpacingBase12 }}
        >
          <ToggleButton value="3">Jenny Gray care</ToggleButton>
          <ToggleButton value="4">Mount Pleasant</ToggleButton>
        </ToggleButtonGroup>
        <ToggleButtonGroup
          orientation={ToggleButtonGroupOrientation.horizontal}
          selectedValue={selectedHorizontalBtns}
          onMultiSelect={setSelectedHorizonalBtns}
          style={{ marginBottom: SpacingBase12 }}
        >
          <ToggleButton value="5">Leaf</ToggleButton>
          <ToggleButton value="6">Silver</ToggleButton>
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
      <Container
        hasPadding={false}
        containerStyle={{ maxWidth: isWebPlatform ? '350px' : undefined }}
      >
        <ToggleButtonGroup
          selectedValue={selectedBtns}
          onMultiSelect={setSelectedBtns}
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
    <Container>
      <ToggleButtonGroup
        {...props}
        selectedValue={selectedBtns}
        onMultiSelect={setSelectedBtns}
      >
        <ToggleButton value="1">Jan</ToggleButton>
        <ToggleButton value="2">Feb</ToggleButton>
        <ToggleButton value="3">Mar</ToggleButton>
      </ToggleButtonGroup>
    </Container>
  );
};

export const Interactive = Template.bind({});
