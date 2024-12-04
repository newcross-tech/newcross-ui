import { Meta, Story } from '@storybook/react';
import Spacing, { SpacingSizes } from '../Spacing';
import {
  Typography,
  TypographyVariant,
  BottomSheet,
  DropDown,
  ListOption,
  DropdownProps,
} from '@newcross-ui/react-native';
import InfoTemplate from '../InfoTemplate/InfoTemplate';
import { TITLE, DESCRIPTION, DO, DONT } from './DropdownInfo';

import { getParameters } from '../utils';
import useState from 'storybook-addon-state';
import Container from '../Container';

export default {
  title: 'ReactNative/Components/DropDown',
  component: DropDown,
} as Meta;

export const Overview = () => {
  return (
    <InfoTemplate
      title={TITLE}
      description={DESCRIPTION}
      doInfo={DO}
      dontInfo={DONT}
    >
      <Container>
        <DropDown label="Label" placeholder="Click to open dropdown" />
      </Container>
    </InfoTemplate>
  );
};

export const Variants = () => {
  const options = [
    { label: 'Option 1', id: 1, isSelected: false },
    { label: 'Option 2', id: 2, isSelected: false },
    { label: 'Option 3', id: 3, isSelected: false },
  ];

  const [expanded, setExpanded] = useState('expanded', false);
  const [selectedList, setSelectedList] = useState('selectedList', options);
  const [labelValue, setLabelValue] = useState('label', '');

  const handleSelect = (id: number, isSelected: boolean) => {
    const updatedList = selectedList.map((option) => {
      if (option.id === id) {
        isSelected ? setLabelValue('') : setLabelValue(option.label);
        return {
          ...option,
          isSelected: isSelected ? false : true,
        };
      } else {
        return { ...option, isSelected: false };
      }
    });
    setSelectedList(updatedList);
    setExpanded(false);
  };

  const handleBottomSheet = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Container>
        <Typography variant={TypographyVariant.heading4}>
          Default Dropdown
        </Typography>
        <Spacing size={SpacingSizes.Large} />

        <DropDown
          focused={expanded}
          label="Label"
          onPress={() => handleBottomSheet()}
          selectedValue={labelValue}
          placeholder="Click to open dropdown"
        />

        <Spacing size={SpacingSizes.Large} />
        <Typography variant={TypographyVariant.heading4}>
          Disabled Dropdown
        </Typography>
        <Spacing size={SpacingSizes.Large} />

        <DropDown placeholder={'Disabled Dropdown'} disabled />
        <Spacing size={SpacingSizes.Large} />
        <Typography variant={TypographyVariant.heading4}>
          Disabled Dropdown
        </Typography>
        <Spacing size={SpacingSizes.Large} />
        <DropDown
          placeholder={'Error Dropdown'}
          errorText={'Please make a selection'}
        />
        <Spacing size={SpacingSizes.Large} />
        <Typography variant={TypographyVariant.heading4}>
          Focused Dropdown
        </Typography>
        <Spacing size={SpacingSizes.Large} />
        <DropDown focused={true} placeholder={'Focused Dropdown'} />
      </Container>
      <BottomSheet hasBackdrop={false} isOpen={expanded}>
        {selectedList.map(({ label, id, isSelected }) => (
          <ListOption
            key={id}
            value={label}
            onSelect={() => handleSelect(id, isSelected)}
            selected={isSelected}
            isMultipleSelect
          />
        ))}
      </BottomSheet>
    </>
  );
};

const Template: Story<DropdownProps> = ({ ...rest }) => {
  const options = [
    { label: 'Option 1', id: 1, isSelected: false },
    { label: 'Option 2', id: 2, isSelected: false },
    { label: 'Option 3', id: 3, isSelected: false },
  ];

  const [expanded, setExpanded] = useState('expanded', false);
  const [selectedList, setSelectedList] = useState('selectedList', options);
  const [labelValue, setLabelValue] = useState('label', '');

  const handleSelect = (id: number, isSelected: boolean) => {
    const updatedList = selectedList.map((option) => {
      if (option.id === id) {
        isSelected ? setLabelValue('') : setLabelValue(option.label);
        return {
          ...option,
          isSelected: isSelected ? false : true,
        };
      } else {
        return { ...option, isSelected: false };
      }
    });
    setSelectedList(updatedList);
    setExpanded(false);
  };

  const handleBottomSheet = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Container>
        <Typography variant={TypographyVariant.heading4}>
          Interactive Dropdown
        </Typography>
        <Spacing size={SpacingSizes.Large} />

        <DropDown
          {...rest}
          focused={expanded}
          label="Label"
          onPress={() => handleBottomSheet()}
          selectedValue={labelValue}
          placeholder="Click to open dropdown"
        />
      </Container>
      <BottomSheet hasBackdrop={false} isOpen={expanded}>
        {selectedList.map(({ label, id, isSelected }) => (
          <ListOption
            key={id}
            value={label}
            onSelect={() => handleSelect(id, isSelected)}
            selected={isSelected}
            isMultipleSelect
          />
        ))}
      </BottomSheet>
    </>
  );
};
export const Interactive = Template.bind({});
Interactive.args = {};

Variants.parameters = {
  ...getParameters(true, true),
  ...{ options: { panelPosition: 'right' } },
};
