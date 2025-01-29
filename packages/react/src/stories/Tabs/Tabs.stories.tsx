import { useEffect } from 'react';
import { Meta, Story } from '@storybook/react';
import Tabs, { TabsProps } from '../../components/Tabs';
import Container from '../../components/Container';
import useState from 'storybook-addon-state';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKitMedical } from '@fortawesome/pro-light-svg-icons/faKitMedical';
import { faUser } from '@fortawesome/pro-regular-svg-icons/faUser';
import { faCalendarDays } from '@fortawesome/pro-regular-svg-icons/faCalendarDays';
import InfoTemplate from '../InfoTemplate/InfoTemplate';
import { TITLE, DESCRIPTION, DO, DONT } from './TabsInfo';
import { Badge, Typography } from '../../index';

export default {
  title: 'React/Components/Tabs',
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
      <Container display="block">
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
  const [currentIconsAndBadges, setCurrentIconsAndBadges] = useState(
    'currentIconsAndBadges',
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
  const tabsWithIconsAndBadges = Array.from({ length: 2 }, () => (
    <Container alignItems="center" gap="sm">
      <FontAwesomeIcon icon={faCalendarDays} />
      <Typography variant="p1">Label</Typography>
      <Badge backgroundColor="primary" badgeContent={9} />
    </Container>
  ));

  return (
    <Container display="block">
      <Tabs
        tabs={tabs}
        currentIndex={currentIndex}
        onCurrentIndexChange={setCurrentIndex}
      />
      <Container m="xs" />
      <Tabs
        tabs={tabsWithIconsAndBadges}
        currentIndex={currentIconsAndBadges}
        onCurrentIndexChange={setCurrentIconsAndBadges}
      />
      <Container m="xs" />
      <Tabs
        tabs={tabsMultiple}
        currentIndex={currentIndexMultiple}
        onCurrentIndexChange={setCurrentIndexMultiple}
      />
      <Container m="xs" />
      <Tabs
        tabs={tabsDisabled}
        currentIndex={currentIndexDisabled}
        onCurrentIndexChange={setCurrentIndexDisabled}
        disabled
      />
      <Container m="xs" />
      <Tabs
        tabs={tabsWithElipses}
        currentIndex={currentIndexElipses}
        onCurrentIndexChange={setCurrentIndexElipses}
      />
      <Container m="xs" />
      <Tabs
        tabs={tabsWithIcons}
        currentIndex={currentIndexIcons}
        onCurrentIndexChange={setCurrentIndexIcons}
        disabled
      />
      <Container m="xs" />
    </Container>
  );
};

export const VariantThatIsDisabled = () => {
  const [currentIndex, setCurrentIndex] = useState('currentIndex', 0);
  const tabs = ['Label A', 'Label B'];
  return (
    <Container display="block">
      <Tabs
        tabs={tabs}
        currentIndex={currentIndex}
        onCurrentIndexChange={setCurrentIndex}
        disabled
      />
      <Container m="xs" />
    </Container>
  );
};

export const VariantWithMoreThanTwoLabels = () => {
  const [currentIndex, setCurrentIndex] = useState('currentIndex', 0);
  const tabs = ['Label A', 'Label B', 'Label C', 'Label D'];
  return (
    <Container display="block">
      <Tabs
        tabs={tabs}
        currentIndex={currentIndex}
        onCurrentIndexChange={setCurrentIndex}
      />
      <Container m="xs" />
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
    <Container display="block">
      <Tabs
        tabs={tabs}
        currentIndex={currentIndex}
        onCurrentIndexChange={setCurrentIndex}
      />
      <Container m="xs" />
    </Container>
  );
};

const Template: Story<TabsProps> = ({
  tabs,
  currentIndex: storyIndex,
  disabled,
}) => {
  const [currentIndex, setCurrentIndex] = useState('currentIndex', storyIndex);

  //enforcing storybook interactive index into the Tab component
  useEffect(() => {
    setCurrentIndex(storyIndex);
  }, [storyIndex]);

  return (
    <Container display="block">
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
