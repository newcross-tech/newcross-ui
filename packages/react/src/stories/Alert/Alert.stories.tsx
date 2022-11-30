import Spacing from '../Spacing';
import Container from '../Container';
import Link from '../../components/Link';
import { Meta, Story } from '@storybook/react';
import InfoTemplate from '../InfoTemplate/InfoTemplate';
import { TITLE, DESCRIPTION, DO, DONT } from './AlertInfo';
import Alert, { AlertProps } from '../../components/Alert';
import Typography, { TypographyVariant } from '../../components/Typography';
import { AlertVariant } from '../../types/AlertVariant';

export default {
  title: 'React/Components/Alert',
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
    <Container direction="column">
      <Typography variant={TypographyVariant.heading4}>
        Success Variant
      </Typography>
      <Alert variant={AlertVariant.success} action={<Link>Click Here</Link>}>
        This is a success message. This is a success message. This is a success.
      </Alert>
      <Spacing />
      <Typography variant={TypographyVariant.heading4}>
        Warning Variant
      </Typography>
      <Alert variant={AlertVariant.warning} action={<Link>Click Here</Link>}>
        This is a warning message. This is a warning message. This is a warning.
      </Alert>
      <Spacing />
      <Typography variant={TypographyVariant.heading4}>
        Error Variant
      </Typography>
      <Alert variant={AlertVariant.error} action={<Link>Click Here</Link>}>
        This is an error message. This is an error message. This is an error
        message.
      </Alert>
      <Spacing />
      <Typography variant={TypographyVariant.heading4}>Info Variant</Typography>
      <Alert variant={AlertVariant.info} action={<Link>Click Here</Link>}>
        This is an info message. This is an info message. This is an info
        message.
      </Alert>
      <Spacing />
      <Typography variant={TypographyVariant.heading4}>
        Variant without link
      </Typography>
      <Alert variant={AlertVariant.info}>
        This is an info message. This is an info message. This is an info
        message.
      </Alert>
      <Spacing />
      <Typography variant={TypographyVariant.heading4}>
        Variant without children and link
      </Typography>
      <Alert variant={AlertVariant.success} />
    </Container>
  );
};

const Template: Story<AlertProps> = (props) => <Alert {...props} />;

export const Interactive = Template.bind({});
Interactive.args = {};
