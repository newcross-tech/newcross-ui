import { Meta, Story } from '@storybook/react';
import { View } from 'react-native';
import { useEffect } from 'react';
import {
  Checkbox,
  CheckboxProps,
  CheckboxType,
  Typography,
  TypographyVariant,
} from '@newcross-ui/react-native';
import Container from '../Container';
import Spacing from '../Spacing';
import InfoTemplate from '../InfoTemplate/InfoTemplate';
import { TITLE, DESCRIPTION, DO, DONT } from './CheckboxInfo';
import useState from 'storybook-addon-state';

export default {
  title: 'ReactNative/Components/Checkbox',
  component: Checkbox,
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
        <Checkbox label="Label" />
      </Container>
    </InfoTemplate>
  );
};

export const Variants = () => {
  return (
    <Container>
      <Typography variant={TypographyVariant.heading4}>Enabled</Typography>
      <Spacing />
      <Checkbox label="Label" />
      <Checkbox label="Label" defaultChecked />
      <Checkbox
        type={CheckboxType.INDETERMINATE}
        label="Label"
        defaultChecked
      />

      <Typography variant={TypographyVariant.heading4}>Disabled</Typography>
      <Spacing />
      <Checkbox label="Label" disabled />
      <Checkbox label="Label" defaultChecked disabled />
      <Checkbox
        type={CheckboxType.INDETERMINATE}
        label="Label"
        defaultChecked
        disabled
      />

      <Typography variant={TypographyVariant.heading4}>Error</Typography>
      <Spacing />
      <Checkbox label="Label" hasError />
      <Checkbox label="Label" defaultChecked hasError />
      <Checkbox
        type={CheckboxType.INDETERMINATE}
        label="Label"
        defaultChecked
        hasError
      />

      <Typography variant={TypographyVariant.heading4}>
        With long text
      </Typography>
      <Spacing />
      <Checkbox label="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." />
    </Container>
  );
};

export const ListOfCheckboxes = () => {
  const listItems = [
    {
      id: 1,
      name: 'Apple',
      isSelected: false,
    },
    {
      id: 2,
      name: 'Pear',
      isSelected: false,
    },
    {
      id: 3,
      name: 'Banana',
      isSelected: false,
    },
  ];
  const [selectAllStatus, setSelectAllStatus] = useState(
    'selectAllStatus',
    CheckboxType.UNCHECKED
  );
  const [selectedList, setSelectedList] = useState('selectedList', listItems);

  const handleCheckAll = () => {
    setSelectedList(
      selectedList.map((item) => ({
        ...item,
        isSelected: selectAllStatus === CheckboxType.UNCHECKED ? true : false,
      }))
    );
    setSelectAllStatus(
      selectAllStatus === CheckboxType.UNCHECKED
        ? CheckboxType.CHECK
        : CheckboxType.UNCHECKED
    );
  };

  const handleChecked = (id: number) => {
    const updatedList = selectedList.map((item) => {
      if (item.id === id) {
        return { ...item, isSelected: !item.isSelected };
      }
      return item;
    });
    setSelectedList(updatedList);
    setSelectAllStatus(CheckboxType.INDETERMINATE);
  };

  useEffect(() => {
    const selectedListCount = selectedList.length;
    const selectedItemsCount = selectedList.filter(
      (item) => item.isSelected
    ).length;

    if (selectedItemsCount === selectedListCount)
      setSelectAllStatus(CheckboxType.CHECK);
    if (selectedItemsCount > 0 && selectedItemsCount < selectedItemsCount)
      setSelectAllStatus(CheckboxType.INDETERMINATE);
    if (selectedItemsCount === 0) setSelectAllStatus(CheckboxType.UNCHECKED);
  }, [selectedList]);

  const renderCheckboxList = () =>
    selectedList.map((item, index) => {
      return (
        <Checkbox
          label={item.name}
          onChange={() => {
            handleChecked(item.id);
          }}
          checked={item.isSelected}
          key={index}
        />
      );
    });

  return (
    <Container>
      <Checkbox
        type={selectAllStatus}
        label="Select All"
        onChange={handleCheckAll}
        checked={
          selectedList.filter((item) => item.isSelected === true).length
            ? true
            : false
        }
      />
      <View style={{ marginLeft: 20 }}>{renderCheckboxList()}</View>
    </Container>
  );
};

const Template: Story<CheckboxProps> = ({
  defaultChecked,
  type,
  label,
  disabled,
  hasError,
  ...rest
}) => (
  <Container>
    <Checkbox
      defaultChecked={defaultChecked}
      type={type}
      label={label}
      disabled={disabled}
      hasError={hasError}
      {...rest}
    />
  </Container>
);

export const Interactive = Template.bind({});
Interactive.args = {
  defaultChecked: false,
  type: CheckboxType.CHECK,
  label: 'Label',
  disabled: false,
  hasError: false,
  testID: '',
};
