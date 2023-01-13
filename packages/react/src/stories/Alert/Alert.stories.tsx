import { Meta, Story } from '@storybook/react';
import Alert, { AlertProps } from '../../components/Alert';
import Link from '../../components/Link';
import Typography from '../../components/Typography';
import Container from '../Container';
import InfoTemplate from '../InfoTemplate/InfoTemplate';
import Spacing from '../Spacing';
import { DESCRIPTION, DO, DONT, TITLE } from './AlertInfo';

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
      <Alert variant="success" action={<Link>Click Here</Link>}>
        This is success. This is success. This is success.
      </Alert>
    </InfoTemplate>
  );
};

export const Variants = () => {
  return (
    <Container direction="column">
      <Typography variant={'heading4'}>Success Variant</Typography>
      <Alert variant="success" action={<Link>Click Here</Link>}>
        This is a success message. This is a success message. This is a success.
      </Alert>
      <Spacing />
      <Typography variant={'heading4'}>Warning Variant</Typography>
      <Alert variant="warning" action={<Link>Click Here</Link>}>
        This is a warning message. This is a warning message. This is a warning.
      </Alert>
      <Spacing />
      <Typography variant={'heading4'}>Error Variant</Typography>
      <Alert variant="error" action={<Link>Click Here</Link>}>
        This is an error message. This is an error message. This is an error
        message.
      </Alert>
      <Spacing />
      <Typography variant={'heading4'}>Info Variant</Typography>
      <Alert variant="info" action={<Link>Click Here</Link>}>
        This is an info message. This is an info message. This is an info
        message.
      </Alert>
      <Spacing />
      <Typography variant={'heading4'}>Variant without link</Typography>
      <Alert variant="info">
        This is an info message. This is an info message. This is an info
        message.
      </Alert>
      <Spacing />
      <Typography variant={'heading4'}>
        Variant without children and link
      </Typography>
      <Alert variant="success" />
    </Container>
  );
};

const Template: Story<AlertProps> = (props) => <Alert {...props} />;

export const Interactive = Template.bind({});
Interactive.args = {};
