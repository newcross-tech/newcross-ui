import { Meta, Story } from '@storybook/react';
import { useEffect, createRef } from 'react';
import { ScrollView, View, Pressable } from 'react-native';
import {
  ListOption,
  ListOptionProps,
  ListOptionAlignment,
  Typography,
  TypographyVariant,
  BottomSheet,
  BottomSheetRefProps,
  Button,
} from '@newcross-ui/react-native';
import Container from '../Container';
import Spacing from '../Spacing';
import { getParameters, isWebPlatform } from '../utils';
import InfoTemplate from '../InfoTemplate/InfoTemplate';
import { TITLE, DESCRIPTION, DO, DONT } from './ListOptionInfo';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircle } from '@fortawesome/pro-solid-svg-icons/faCircle';
import { faUser } from '@fortawesome/pro-solid-svg-icons/faUser';
import { faClose } from '@fortawesome/pro-solid-svg-icons/faClose';
import useState from 'storybook-addon-state';
import { native } from '@newcross-ui/design-tokens';

export default {
  title: 'ReactNative/Components/ListOption',
  component: ListOption,
} as Meta;

const { ColorBaseRed200 } = native.healthforce;

export const Overview = () => {
  const [selected, setIsSelected] = useState('selected', false);
  const options = [
    {
      name: {
        en: 'United Kingdom',
      },
      dial_code: '+44',
      code: 'GB',
      flag: '🇬🇧',
    },
  ];
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
        {options.map((option) => (
          <ListOption
            leftIcon={
              <Typography variant={TypographyVariant.paragraph2}>
                {option.flag}
              </Typography>
            }
            value={option.name.en}
            onSelect={() => setIsSelected(!selected)}
            selected={selected}
          />
        ))}
      </Container>
    </InfoTemplate>
  );
};

export const Variants = () => {
  const options = [{ label: 'Option 1', value: 1 }];
  const [selected1, setIsSelected1] = useState('selected1', false);
  const [selected2, setIsSelected2] = useState('selected2', false);
  const [selected3, setIsSelected3] = useState('selected3', false);
  const [selected4, setIsSelected4] = useState('selected4', false);
  const [selected5, setIsSelected5] = useState('selected5', false);
  const [selected6, setIsSelected6] = useState('selected6', false);
  const [selected7, setIsSelected7] = useState('selected7', false);
  const [selected8, setIsSelected8] = useState('selected8', false);
  const [selected9, setIsSelected9] = useState('selected9', true);

  return (
    <ScrollView style={{ maxWidth: isWebPlatform ? '320px' : undefined }}>
      <Typography variant={TypographyVariant.heading4}>
        Left Aligned Options
      </Typography>
      <Spacing />
      {options.map((option) => (
        <ListOption
          value={option.label}
          onSelect={() => setIsSelected1(!selected1)}
          selected={selected1}
          innerTextStyle={{ color: ColorBaseRed200 }}
        />
      ))}
      <Spacing />

      <Typography variant={TypographyVariant.heading4}>
        Center Aligned Options
      </Typography>
      <Spacing />
      {options.map((option) => (
        <ListOption
          value={option.label}
          alignText={ListOptionAlignment.CENTER}
          onSelect={() => setIsSelected2(!selected2)}
          selected={selected2}
        />
      ))}
      <Spacing />

      <Typography variant={TypographyVariant.heading4}>
        Right Aligned Options
      </Typography>
      <Spacing />
      {options.map((option) => (
        <ListOption
          value={option.label}
          alignText={ListOptionAlignment.RIGHT}
          onSelect={() => setIsSelected3(!selected3)}
          selected={selected3}
        />
      ))}
      <Spacing />

      <Typography variant={TypographyVariant.heading4}>
        With Left Icon
      </Typography>
      <Spacing />
      {options.map((option) => (
        <ListOption
          value={option.label}
          leftIcon={<FontAwesomeIcon icon={faCircle} color="red" />}
          onSelect={() => setIsSelected4(!selected4)}
          selected={selected4}
        />
      ))}
      <Spacing />

      <Typography variant={TypographyVariant.heading4}>
        With Right Icon
      </Typography>
      <Spacing />
      {options.map((option) => (
        <ListOption
          value={option.label}
          rightIcon={<FontAwesomeIcon icon={faUser} color="green" />}
          onSelect={() => setIsSelected5(!selected5)}
          selected={selected5}
        />
      ))}
      <Spacing />

      <Typography variant={TypographyVariant.heading4}>
        With Icons On Both Sides
      </Typography>
      <Spacing />
      {options.map((option) => (
        <ListOption
          value={option.label}
          rightIcon={<FontAwesomeIcon icon={faUser} color="blue" />}
          leftIcon={<FontAwesomeIcon icon={faCircle} color="red" />}
          onSelect={() => setIsSelected6(!selected6)}
          selected={selected6}
        />
      ))}
      <Spacing />
      {options.map((option) => (
        <ListOption
          value={option.label}
          rightIcon={<FontAwesomeIcon icon={faUser} color="orange" />}
          leftIcon={<FontAwesomeIcon icon={faCircle} color="red" />}
          alignText={ListOptionAlignment.CENTER}
          onSelect={() => setIsSelected7(!selected7)}
          selected={selected7}
        />
      ))}
      <Spacing />
      {options.map((option) => (
        <ListOption
          value={option.label}
          rightIcon={<FontAwesomeIcon icon={faUser} color="purple" />}
          leftIcon={<FontAwesomeIcon icon={faCircle} color="red" />}
          alignText={ListOptionAlignment.RIGHT}
          onSelect={() => setIsSelected8(!selected8)}
          selected={selected8}
        />
      ))}
      <Spacing />

      <Typography variant={TypographyVariant.heading4}>
        Selected by default
      </Typography>
      <Spacing />
      {options.map((option) => (
        <ListOption
          value={option.label}
          onSelect={() => setIsSelected9(!selected9)}
          selected={selected9}
        />
      ))}
      <Spacing />
    </ScrollView>
  );
};

export const GroupVariants = () => {
  const options = [
    { label: 'Option 1', id: 1, isSelected: false },
    { label: 'Option 2', id: 2, isSelected: false },
    { label: 'Option 3', id: 3, isSelected: false },
  ];

  const [selectedList, setSelectedList] = useState('selectedList', options);
  const [selectedList2, setSelectedList2] = useState('selectedList2', options);
  const [maxCountReached, setMaxCountReached] = useState('maxCount', false);

  const maxSelection = 2;
  const handleSelectWithMaxCount = (id: number) => {
    const updatedList = selectedList.map((option) => {
      if (option.id === id) {
        return {
          ...option,
          isSelected: !maxCountReached && !option.isSelected,
        };
      }
      return option;
    });
    setSelectedList(updatedList);
  };

  const handleSelect = (id: number) => {
    const updatedList = selectedList2.map((option) => {
      if (option.id === id) {
        return { ...option, isSelected: !option.isSelected };
      }
      return option;
    });

    setSelectedList2(updatedList);
  };

  useEffect(() => {
    const selectedOptionCount = selectedList.filter(
      (option) => option.isSelected === true
    ).length;
    if (selectedOptionCount === maxSelection) {
      setMaxCountReached(true);
    } else if (selectedOptionCount < maxSelection) {
      setMaxCountReached(false);
    }
  }, [selectedList]);

  return (
    <Container
      containerStyle={{
        width: isWebPlatform ? '320px' : undefined,
      }}
    >
      <Typography variant={TypographyVariant.heading4}>
        Limited Select
      </Typography>
      <Spacing />
      <Typography variant={TypographyVariant.paragraph3}>
        Select up to 2 options
      </Typography>
      <Spacing />
      {selectedList.map(({ label, id, isSelected }) => (
        <ListOption
          value={label}
          onSelect={() => handleSelectWithMaxCount(id)}
          selected={isSelected}
          isMultipleSelect
          alignText={ListOptionAlignment.CENTER}
        />
      ))}
      <Spacing />

      <Typography variant={TypographyVariant.heading4}>
        Multiple Select
      </Typography>
      <Spacing />
      <Spacing />
      {selectedList2.map(({ label, id, isSelected }) => (
        <ListOption
          value={label}
          onSelect={() => handleSelect(id)}
          selected={isSelected}
          isMultipleSelect
        />
      ))}
      <Spacing />
      <Typography variant={TypographyVariant.paragraph2}>Selected:</Typography>
      <Spacing />
      {selectedList2.map((option) => {
        if (option.isSelected) {
          return (
            <Typography variant={TypographyVariant.paragraph3}>
              {option.label}
            </Typography>
          );
        }
      })}
    </Container>
  );
};

export const VariantWithBottomSheet = () => {
  const options = [
    { label: 'Option 1', id: 1, isSelected: false },
    { label: 'Option 2', id: 2, isSelected: false },
    { label: 'Option 3', id: 3, isSelected: false },
  ];

  const [selectedList, setSelectedList] = useState('selectedList', options);

  const handleSelect = (id: number) => {
    const updatedList = selectedList.map((option) => {
      if (option.id === id) {
        return { ...option, isSelected: !option.isSelected };
      }
      return option;
    });

    setSelectedList(updatedList);
  };

  const refTemplate = createRef<BottomSheetRefProps>();

  return (
    <>
      <Container containerStyle={{ alignItems: 'center' }}>
        <View style={{ justifyContent: 'center' }}>
          <Button onPress={() => refTemplate.current?.expand()}>
            Open To Select Options
          </Button>
          <Spacing />
          <Typography variant={TypographyVariant.paragraph2}>
            Selected:
          </Typography>
          <Spacing />
          {selectedList.map((option) => {
            if (option.isSelected) {
              return (
                <Typography variant={TypographyVariant.paragraph3}>
                  {option.label}
                </Typography>
              );
            }
          })}
        </View>
      </Container>
      <BottomSheet ref={refTemplate} hasBackdrop={false}>
        <View style={{ alignItems: 'flex-end' }}>
          <Pressable onPress={() => refTemplate.current?.collapse()}>
            <FontAwesomeIcon
              icon={faClose}
              size={16}
              color="black"
              style={{ margin: 20 }}
            />
          </Pressable>
        </View>
        {selectedList.map(({ label, id, isSelected }) => (
          <ListOption
            value={label}
            onSelect={() => handleSelect(id)}
            selected={isSelected}
            isMultipleSelect
          />
        ))}
      </BottomSheet>
    </>
  );
};

const Template: Story<ListOptionProps> = ({
  value,
  leftIcon,
  rightIcon,
  alignText,
  testID,
  style,
}) => {
  const [selected, setIsSelected] = useState('selected', false);
  return (
    <Container
      containerStyle={{ maxWidth: isWebPlatform ? '320px' : undefined }}
    >
      <ListOption
        value={value}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        selected={selected}
        alignText={alignText}
        onSelect={() => setIsSelected(!selected)}
        testID={testID}
        style={style}
      />
    </Container>
  );
};

export const Interactive = Template.bind({});
Interactive.args = {
  value: 'Option 1',
};

VariantWithBottomSheet.parameters = {
  ...getParameters(true, true),
  ...{ options: { panelPosition: 'right' } },
};
