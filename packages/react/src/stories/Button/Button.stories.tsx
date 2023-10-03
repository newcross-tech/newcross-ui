import { faChevronLeft } from '@fortawesome/pro-light-svg-icons/faChevronLeft';
import { faChevronRight } from '@fortawesome/pro-light-svg-icons/faChevronRight';
import { faCircleChevronRight } from '@fortawesome/pro-solid-svg-icons/faCircleChevronRight';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Meta, Story } from '@storybook/react';
import Button, { ButtonProps } from '../../components/Button';
import Container from '../Container';
import InfoTemplate from '../InfoTemplate/InfoTemplate';
import Spacing from '../Spacing';
import { DESCRIPTION, DO, DONT, TITLE } from './ButtonInfo';
import * as StoryTitle from '../StoryTitle';

export default {
  title: 'React/Components/Button',
  component: Button,
} as Meta;

export const Overview = () => {
  return (
    <InfoTemplate
      title={TITLE}
      description={DESCRIPTION}
      doInfo={DO}
      dontInfo={DONT}
    >
      <Container display={'block'} direction={'column'} hasPadding={false}>
        <Spacing />
        <Button variant="primary">Primary Button</Button>
        <Spacing />
        <Button variant="secondary">Secondary Button</Button>
        <Spacing />
        <Button variant="danger">Danger Button</Button>
        <Spacing />
      </Container>
    </InfoTemplate>
  );
};

export const VariantsWithSizes = () => {
  return (
    <Container display={'block'} direction="column">
      <StoryTitle.Regular>
        Primary Button with Different Sizes
      </StoryTitle.Regular>
      <Spacing size={'Large'} />
      <Button size="small">Small Button</Button>
      <Spacing />
      <Button size="large">Large Button</Button>
      <Spacing />
      <Button fullWidth size="small">
        Full Width Small Button
      </Button>
      <Spacing />
      <Button fullWidth size="large">
        Full Width Large Button
      </Button>
    </Container>
  );
};

export const Variants = () => {
  return (
    <Container display={'block'} direction="column">
      <StoryTitle.Regular>Primary Button</StoryTitle.Regular>
      <Spacing size={'Large'} />
      <Button variant="primary">Primary Button</Button>
      <Spacing />
      <Button disabled variant="primary">
        Primary Disabled Button
      </Button>
      <Spacing size={'Large'} />
      <Spacing size={'Large'} />
      <StoryTitle.Regular>Secondary Button</StoryTitle.Regular>
      <Spacing size={'Large'} />
      <Button variant="secondary">Secondary Button</Button>
      <Spacing />
      <Button disabled variant="secondary">
        Secondary Disabled Button
      </Button>
      <Spacing size={'Large'} />
      <Spacing size={'Large'} />
      <StoryTitle.Regular>Danger Button</StoryTitle.Regular>
      <Spacing size={'Large'} />
      <Button variant="danger">Danger Button</Button>
      <Spacing />
      <Button disabled variant="danger">
        Danger Disabled Button
      </Button>
      <Spacing size={'Large'} />
    </Container>
  );
};
export const VariantsWithIcons = () => {
  return (
    <Container display={'block'} direction="column">
      <StoryTitle.Regular>Primary Button with Icons</StoryTitle.Regular>
      <Spacing size={'Large'} />
      <Button
        size="small"
        rightIcon={<FontAwesomeIcon icon={faChevronRight} />}
      >
        Right Icon
      </Button>
      <Spacing />
      <Button leftIcon={<FontAwesomeIcon icon={faChevronLeft} />}>
        Left Icon
      </Button>
      <Spacing />
      <Button
        rightIcon={<FontAwesomeIcon icon={faCircleChevronRight} />}
      ></Button>
      <Spacing />
      <Button fullWidth rightIcon={<FontAwesomeIcon icon={faChevronRight} />}>
        Full Width with Right Icon
      </Button>
      <Spacing />
      <Button
        fullWidth
        rightIcon={<FontAwesomeIcon icon={faCircleChevronRight} />}
      ></Button>
    </Container>
  );
};
const Template = ({ children, ...rest }: ButtonProps) => (
  <Button {...rest} rightIcon={<FontAwesomeIcon icon={faChevronRight} />}>
    {children}
  </Button>
);

export const Interactive: Story<ButtonProps> = Template.bind({});

Interactive.args = { children: 'My Button' };
