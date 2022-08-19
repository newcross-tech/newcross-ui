import { Meta, Story } from '@storybook/react';
import { Tabs, TabsProps } from '@newcross-ui/react-native';
import Container from '../Container';
import Spacing from '../Spacing';
import useState from 'storybook-addon-state';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faKitMedical } from '@fortawesome/pro-light-svg-icons/faKitMedical';
import { faUser } from '@fortawesome/pro-light-svg-icons/faUser';
import InfoTemplate from '../InfoTemplate/InfoTemplate';
import { TITLE, DESCRIPTION, DO, DONT } from './TabsInfo';

export default {
  title: 'ReactNative/Components/Tabs',
  component: Tabs,
} as Meta;

export const Overview = () => {
  const [currentIndex, setCurrentIndex] = useState('currentIndex', 0);
  const tabs = ['Label A', 'Label B'];
  return (
    <InfoTemplate
      title={TITLE}
      description={DESCRIPTION}
      doInfo={DO}
      dontInfo={DONT}
    >
      <Container>
        <Tabs
          tabs={tabs}
          currentIndex={currentIndex}
          onCurrentIndexChange={setCurrentIndex}
        />
      </Container>
    </InfoTemplate>
  );
};

export const Variants = () => {
  const [currentIndex, setCurrentIndex] = useState('currentIndex', 0);
  const [currentIndexDisabled, setCurrentIndexDisabled] = useState(
    'currentIndexDisabled',
    0
  );
  const [currentIndexMultiple, setCurrentIndexMultiple] = useState(
    'currentIndexMultiple',
    0
  );
  const [currentIndexElipses, setCurrentIndexElipses] = useState(
    'currentIndexElipses',
    0
  );
  const [currentIndexIcons, setCurrentIndexIcons] = useState(
    'currentIndexIcons',
    0
  );
  const tabs = ['Label A', 'Label B'];
  const tabsMultiple = ['Label A', 'Label B', 'Label C', 'Label D'];
  const tabsDisabled = ['Label A', 'Label B'];
  const tabsWithElipses = [
    'Label A',
    'Label B',
    'Label C is very long so it turns into an elipses',
    'Label D',
  ];
  const tabsWithIcons = [
    <FontAwesomeIcon icon={faUser} />,
    <FontAwesomeIcon icon={faKitMedical} />,
  ];
  return (
    <Container>
      <Tabs
        tabs={tabs}
        currentIndex={currentIndex}
        onCurrentIndexChange={setCurrentIndex}
      />
      <Spacing />
      <Tabs
        tabs={tabsMultiple}
        currentIndex={currentIndexMultiple}
        onCurrentIndexChange={setCurrentIndexMultiple}
      />
      <Spacing />
      <Tabs
        tabs={tabsDisabled}
        currentIndex={currentIndexDisabled}
        onCurrentIndexChange={setCurrentIndexDisabled}
        disabled
      />
      <Spacing />
      <Tabs
        tabs={tabsWithElipses}
        currentIndex={currentIndexElipses}
        onCurrentIndexChange={setCurrentIndexElipses}
      />
      <Spacing />
      <Tabs
        tabs={tabsWithIcons}
        currentIndex={currentIndexIcons}
        onCurrentIndexChange={setCurrentIndexIcons}
      />
      <Spacing />
    </Container>
  );
};

export const VariantThatIsDisabled = () => {
  const [currentIndex, setCurrentIndex] = useState('currentIndex', 0);
  const tabs = ['Label A', 'Label B'];
  return (
    <Container>
      <Tabs
        tabs={tabs}
        currentIndex={currentIndex}
        onCurrentIndexChange={setCurrentIndex}
        disabled
      />
      <Spacing />
    </Container>
  );
};

export const VariantWithMoreThanTwoLabels = () => {
  const [currentIndex, setCurrentIndex] = useState('currentIndex', 0);
  const tabs = ['Label A', 'Label B', 'Label C', 'Label D'];
  return (
    <Container>
      <Tabs
        tabs={tabs}
        currentIndex={currentIndex}
        onCurrentIndexChange={setCurrentIndex}
      />
      <Spacing />
    </Container>
  );
};

export const VariantWithIcons = () => {
  const [currentIndex, setCurrentIndex] = useState('currentIndex', 0);
  const tabs = [
    <FontAwesomeIcon icon={faUser} />,
    <FontAwesomeIcon icon={faKitMedical} />,
  ];
  return (
    <Container>
      <Tabs
        tabs={tabs}
        currentIndex={currentIndex}
        onCurrentIndexChange={setCurrentIndex}
      />
      <Spacing />
    </Container>
  );
};

const Template: Story<TabsProps> = ({ tabs, disabled }) => {
  const [currentIndex, setCurrentIndex] = useState('currentIndex', 0);
  return (
    <Container>
      <Tabs
        tabs={tabs}
        currentIndex={currentIndex}
        onCurrentIndexChange={setCurrentIndex}
        disabled={disabled}
      />
    </Container>
  );
};

export const Interactive = Template.bind({});
Interactive.args = {
  tabs: ['Label A', 'Label B'],
  currentIndex: 0,
  disabled: false,
};
