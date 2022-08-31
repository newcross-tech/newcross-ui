import { Meta, Story } from '@storybook/react';
import {
  Typography,
  TypographyVariant,
  ToggleButton,
  ToggleButtonGroup,
  ToggleButtonGroupOrientation,
  ToggleButtonGroupProps,
  ToggleButtonColors,
} from '@newcross-ui/react-native';
import { native } from '@newcross-ui/design-tokens';
import useState from 'storybook-addon-state';
import Spacing, { SpacingPositions } from '../Spacing';
import Container from '../Container';
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
      <Typography variant={TypographyVariant.heading4}>
        Single Select Group
      </Typography>
      <Spacing position={SpacingPositions.Bottom} />
      <ToggleButtonGroup
        selectedValue={selectedSingleBtn}
        onSelect={setSelectedSingleBtn}
        orientation={ToggleButtonGroupOrientation.horizontal}
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
      <Spacing position={SpacingPositions.Bottom} />
      <Typography variant={TypographyVariant.heading4}>
        Multiple Select Group
      </Typography>
      <Spacing position={SpacingPositions.Bottom} />
      <ToggleButtonGroup
        selectMultiple
        selectedValue={selectedMultipleBtn}
        onSelect={setSelectedMultipleBtn}
        orientation={ToggleButtonGroupOrientation.horizontal}
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
      <Spacing position={SpacingPositions.Bottom} />
      <Typography variant={TypographyVariant.heading4}>
        Multiple Select Group with vertical orientation
      </Typography>
      <Spacing position={SpacingPositions.Bottom} />
      <Container
        containerStyle={{
          width: isWebPlatform ? '25%' : '100%',
          paddingHorizontal: isWebPlatform ? 0 : SpacingBase32,
          paddingVertical: 0,
        }}
      >
        <ToggleButtonGroup
          selectMultiple
          selectedValue={selectedVerticalMultipleBtn}
          onSelect={setSelectedVerticalMultipleBtn}
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
        Mutliple Select Group with horizontal
      </Typography>
      <Spacing position={SpacingPositions.Bottom} />
      <Container
        containerStyle={{
          width: isWebPlatform ? '60%' : '100%',
          padding: isWebPlatform ? 0 : SpacingBase32,
        }}
      >
        <ToggleButtonGroup
          selectMultiple
          orientation={ToggleButtonGroupOrientation.horizontal}
          selectedValue={selectedHorizontalBtns}
          onSelect={setSelectedHorizonalBtns}
          style={{ marginBottom: SpacingBase12 }}
        >
          <ToggleButton value="1" color={ToggleButtonColors.secondary}>
            Jupiter Green
          </ToggleButton>
          <ToggleButton value="2" color={ToggleButtonColors.secondary}>
            Belleview Care
          </ToggleButton>
        </ToggleButtonGroup>
        <ToggleButtonGroup
          selectMultiple
          orientation={ToggleButtonGroupOrientation.horizontal}
          selectedValue={selectedHorizontalBtns}
          onSelect={setSelectedHorizonalBtns}
          style={{ marginBottom: SpacingBase12 }}
        >
          <ToggleButton value="3" color={ToggleButtonColors.secondary}>
            Jenny Gray care
          </ToggleButton>
          <ToggleButton value="4" color={ToggleButtonColors.secondary}>
            Mount Pleasant
          </ToggleButton>
        </ToggleButtonGroup>
        <ToggleButtonGroup
          selectMultiple
          orientation={ToggleButtonGroupOrientation.horizontal}
          selectedValue={selectedHorizontalBtns}
          onSelect={setSelectedHorizonalBtns}
          style={{ marginBottom: SpacingBase12 }}
        >
          <ToggleButton value="5" color={ToggleButtonColors.secondary}>
            Leaf
          </ToggleButton>
          <ToggleButton value="6" color={ToggleButtonColors.secondary}>
            Silver
          </ToggleButton>
        </ToggleButtonGroup>
      </Container>
    </Container>
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
        onSelect={setSelectedBtns}
      >
        <ToggleButton value="1">Jan</ToggleButton>
        <ToggleButton value="2">Feb</ToggleButton>
        <ToggleButton value="3">Mar</ToggleButton>
      </ToggleButtonGroup>
    </Container>
  );
};

export const Interactive = Template.bind({});
