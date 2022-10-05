import { Meta, Story } from '@storybook/react';
import {
  Button,
  ButtonProps,
  ButtonSizes,
  ButtonVariant,
  ButtonCorners,
  Typography,
  TypographyVariant,
  Mode,
} from '@newcross-ui/react-native';
import Container from '../Container';
import Spacing, { SpacingSizes } from '../Spacing';
import { faChevronRight } from '@fortawesome/pro-light-svg-icons/faChevronRight';
import { faChevronLeft } from '@fortawesome/pro-light-svg-icons/faChevronLeft';
import { faCircleChevronRight } from '@fortawesome/pro-solid-svg-icons/faCircleChevronRight';
import InfoTemplate from '../InfoTemplate/InfoTemplate';
import { TITLE, DESCRIPTION, DO, DONT } from './ButtonInfo';
import { isWebPlatform } from '../utils';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

export default {
  title: 'ReactNative/Components/Button',
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
      <Container
        hasPadding={false}
        containerStyle={{ maxWidth: isWebPlatform ? '350px' : undefined }}
      >
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
    <Container>
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
    <Container>
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
    <Container>
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
      <Spacing size={SpacingSizes.Large} />
      <Typography variant={TypographyVariant.heading4}>
        Secondary Dark Mode Button
      </Typography>
      <Spacing size={SpacingSizes.Large} />
      <Button
        mode={Mode.dark}
        corners={ButtonCorners.pill}
        variant={ButtonVariant.secondary}
      >
        Secondary Button
      </Button>
      <Spacing />
      <Button
        mode={Mode.dark}
        corners={ButtonCorners.pill}
        disabled
        variant={ButtonVariant.secondary}
      >
        Secondary Disabled Button
      </Button>
    </Container>
  );
};

export const VariantsWithIcons = () => {
  return (
    <Container>
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

const Template: Story<ButtonProps> = ({ children, ...rest }) => (
  <Container>
    <Button {...rest} rightIcon={<FontAwesomeIcon icon={faChevronRight} />}>
      {children}
    </Button>
  </Container>
);

export const Interactive = Template.bind({});
Interactive.args = { children: 'My Button' };
