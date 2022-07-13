import { Meta, Story } from '@storybook/react';
import {
  Alert,
  AlertProps,
  AlertVariant,
  Link,
  Typography,
  TypographyVariant,
} from '@newcross-ui/react-native';
import { ScrollView } from 'react-native';
import Container from '../Container';
import Spacing from '../Spacing';
import InfoTemplate from '../InfoTemplate/InfoTemplate';
import { TITLE, DESCRIPTION, DO, DONT } from './AlertInfo';

export default {
  title: 'ReactNative/Components/Alert',
  component: Alert,
} as Meta;

export const Overview = () => {
  return (
    <InfoTemplate
      title={TITLE}
      description={DESCRIPTION}
      doInfo={DO}
      dontInfo={DONT}
    >
      <Alert variant={AlertVariant.success} action={<Link>Click Here</Link>}>
        This is success. This is success. This is success.
      </Alert>
    </InfoTemplate>
  );
};

export const Variants = () => {
  return (
    <ScrollView>
      <Container containerStyle={{ marginTop: 15 }}>
        <Typography variant={TypographyVariant.heading7}>
          Success Variant
        </Typography>
        <Alert variant={AlertVariant.success} action={<Link>Click Here</Link>}>
          This is success. This is success. This is success.
        </Alert>
        <Spacing />
        <Typography variant={TypographyVariant.heading7}>
          Warning Variant
        </Typography>
        <Alert variant={AlertVariant.warning} action={<Link>Click Here</Link>}>
          This is warning. This is warning. This is warning.
        </Alert>
        <Spacing />
        <Typography variant={TypographyVariant.heading7}>
          Error Variant
        </Typography>
        <Alert variant={AlertVariant.error} action={<Link>Click Here</Link>}>
          This is error. This is error. This is error.
        </Alert>
        <Spacing />
        <Typography variant={TypographyVariant.heading7}>
          Info Variant
        </Typography>
        <Alert variant={AlertVariant.info} action={<Link>Click Here</Link>}>
          This is info. This is info. This is info.
        </Alert>
        <Spacing />
        <Typography variant={TypographyVariant.heading7}>
          Variant without link
        </Typography>
        <Alert variant={AlertVariant.info}>
          This is success. This is success. This is success.
        </Alert>
        <Spacing />
        <Typography variant={TypographyVariant.heading7}>
          Variant without children and link
        </Typography>
        <Alert variant={AlertVariant.info} />
      </Container>
    </ScrollView>
  );
};

const Template: Story<AlertProps> = (props) => (
  <Container>
    <Alert {...props} />
  </Container>
);

export const Interactive = Template.bind({});
Interactive.args = {
  variant: AlertVariant.info,
};
