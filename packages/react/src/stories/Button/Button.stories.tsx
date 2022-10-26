import { faChevronLeft } from '@fortawesome/pro-light-svg-icons/faChevronLeft';
import { faChevronRight } from '@fortawesome/pro-light-svg-icons/faChevronRight';
import { faCircleChevronRight } from '@fortawesome/pro-solid-svg-icons/faCircleChevronRight';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Meta, Story } from '@storybook/react';
import React from 'react';
import Button, {
  ButtonCorners,
  ButtonProps,
  ButtonSizes,
  ButtonVariant,
} from '../../components/Button';
import Typography, { TypographyVariant } from '../../components/Typography';
import Container from '../Container';
import InfoTemplate from '../InfoTemplate/InfoTemplate';
import Spacing, { SpacingSizes } from '../Spacing';
import { DESCRIPTION, DO, DONT, TITLE } from './ButtonInfo';
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
        <Button corners={ButtonCorners.pill} variant={ButtonVariant.primary}>
          Primary Button
        </Button>
        <Spacing />
        <Button corners={ButtonCorners.pill} variant={ButtonVariant.secondary}>
          Secondary Button
        </Button>
        <Spacing />
      </Container>
    </InfoTemplate>
  );
};

export const VariantsWithSizes = () => {
  return (
    <Container display={'block'} direction="column">
      <Typography variant={TypographyVariant.heading4}>
        Primary Button with Different Sizes
      </Typography>
      <Spacing size={SpacingSizes.Large} />
      <Button size={ButtonSizes.small}>Small Button</Button>
      <Spacing />
      <Button size={ButtonSizes.large}>Large Button</Button>
      <Spacing />
      <Button fullWidth size={ButtonSizes.small}>
        Full Width Small Button
      </Button>
      <Spacing />
      <Button fullWidth size={ButtonSizes.large}>
        Full Width Large Button
      </Button>
    </Container>
  );
};

export const VariantsWithCorners = () => {
  return (
    <Container display={'block'} direction="column">
      <Typography variant={TypographyVariant.heading4}>
        Primary Button with Different Corners
      </Typography>
      <Spacing size={SpacingSizes.Large} />
      <Button>Default Button</Button>
      <Spacing />
      <Button corners={ButtonCorners.rounded}>Rounded Button</Button>
      <Spacing />
      <Button corners={ButtonCorners.pill}>Pill Button</Button>
    </Container>
  );
};

export const Variants = () => {
  return (
    <Container display={'block'} direction="column">
      <Typography variant={TypographyVariant.heading4}>
        Primary Button
      </Typography>
      <Spacing size={SpacingSizes.Large} />
      <Button corners={ButtonCorners.pill} variant={ButtonVariant.primary}>
        Primary Button
      </Button>
      <Spacing />
      <Button
        corners={ButtonCorners.pill}
        disabled
        variant={ButtonVariant.primary}
      >
        Primary Disabled Button
      </Button>
      <Spacing size={SpacingSizes.Large} />
      <Spacing size={SpacingSizes.Large} />
      <Typography variant={TypographyVariant.heading4}>
        Secondary Button
      </Typography>
      <Spacing size={SpacingSizes.Large} />
      <Button corners={ButtonCorners.pill} variant={ButtonVariant.secondary}>
        Secondary Button
      </Button>
      <Spacing />
      <Button
        corners={ButtonCorners.pill}
        disabled
        variant={ButtonVariant.secondary}
      >
        Secondary Disabled Button
      </Button>
      <Spacing size={SpacingSizes.Large} />
    </Container>
  );
};
export const VariantsWithIcons = () => {
  return (
    <Container display={'block'} direction="column">
      <Typography variant={TypographyVariant.heading4}>
        Primary Button with Icons
      </Typography>
      <Spacing size={SpacingSizes.Large} />
      <Button
        size={ButtonSizes.small}
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
