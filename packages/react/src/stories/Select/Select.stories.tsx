import { Meta } from '@storybook/react';
import { Select } from '../../components/Select';
import Container from '../Container';
import Spacing from '../Spacing';
import * as StoryTitle from '../StoryTitle';

export default {
  title: 'React/Components/Select',
  component: Select,
} as Meta;

// export const Overview = () => {
//   return (
//     <InfoTemplate
//       title={TITLE}
//       description={DESCRIPTION}
//       doInfo={DO}
//       dontInfo={DONT}
//     >
//       <Container direction="column" hasPadding={false}>
//         <StoryTitle.Overview>Single Select</StoryTitle.Overview>
//         <Spacing />
//         <Select
//           options={[
//             'Dropdown Option 1',
//             'Dropdown Option 2',
//             'Dropdown Option overflowing Dropdown Option overflowing Dropdown Option overflowing',
//           ]}
//           label="Label"
//           placeholder="Select a 'label'"
//         />
//         <Spacing size={'Large'} />
//         <StoryTitle.Overview>Multi Select</StoryTitle.Overview>
//         <Spacing />
//         <Select
//           variant="multi"
//           options={[
//             'Dropdown Option 1',
//             'Dropdown Option 2',
//             'Dropdown Option overflowing Dropdown Option overflowing Dropdown Option overflowing',
//           ]}
//           label="Label"
//           placeholder="Select multiple 'labels'"
//         />
//       </Container>
//     </InfoTemplate>
//   );
// };

export const MultiSelectVariants = () => {
  const options = [
    'Option 1',
    'Option 2',
    'Option 3',
    'Option 4',
    'Option 5',
    'Option 6',
  ];

  return (
    <Container direction="column" hasPadding={false}>
      <StoryTitle.Regular>Default Multi Select</StoryTitle.Regular>
      <Spacing />
      <Select
        isMulti
        label="Label"
        id={'default-multi-select'}
        placeholder="Select some 'labels'"
        // options={options}
        options={[
          { label: 'Option 1', value: 'Option 1' },
          { label: 'Option 2', value: 'Option 2' },
          { label: 'Option 3', value: 'Option 3' },
        ]}
      />

      <Spacing size={'Large'} />
      {/* <StoryTitle.Regular>Disabled Dropdown</StoryTitle.Regular>
      <Spacing />
      <Select
        variant="multi"
        placeholder={'Disabled Dropdown'}
        disabled
        options={options}
        testID={'Drop2'}
      />
      <Spacing size={'Large'} />
      <StoryTitle.Regular>Error Dropdown</StoryTitle.Regular>
      <Spacing />
      <Select
        variant="multi"
        placeholder={'Error Dropdown'}
        errorText={'Please make a selection'}
        options={options}
        testID={'Drop3'}
      /> */}
    </Container>
  );
};

export const SingleSelectVariants = () => {
  // const options = [
  //   'Option 1',
  //   'Option 2',
  //   'Option 3',
  //   'Option 4',
  //   'Option 5',
  //   'Option 6',
  // ];

  return (
    <Container direction="column" hasPadding={false}>
      <StoryTitle.Regular>Default Select</StoryTitle.Regular>
      <Spacing />
      <Select
        id="default-select"
        placeholder="Select an option..."
        options={[
          { label: 'Option 1', value: 'Option 1' },
          { label: 'Option 2', value: 'Option 2' },
          { label: 'Option 3', value: 'Option 3' },
        ]}
        // onChange={(value) => value && setSelected(value)}
        // value={selected}
        // disabled={!isButtonEnabled}
      />
    </Container>
  );
};

// const Template: Story<DropdownProps> = ({ ...rest }) => (
//   <Container>
//     <Select {...rest} />
//   </Container>
// );

// export const Interactive = Template.bind({});
// Interactive.args = {
//   variant: 'single',
//   options: [
//     'Option 1',
//     'Option 2',
//     'Option 3',
//     'Option 4',
//     'Option 5',
//     'Option 6',
//   ],
//   placeholder: "Select a 'label'",
// };
