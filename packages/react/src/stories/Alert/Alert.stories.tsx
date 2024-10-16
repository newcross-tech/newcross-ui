import React from 'react';
import { Meta, Story } from '@storybook/react';
import Alert, { AlertProps } from '../../components/Alert';
import Link from '../../components/Link';
import Container from '../../components/Container';
import InfoTemplate from '../InfoTemplate/InfoTemplate';
import { DESCRIPTION, DO, DONT, TITLE } from './AlertInfo';
import * as StoryTitle from '../StoryTitle';

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
      <Alert
        variant="success"
        action={<Link variant="paragraph1">Click Here</Link>}
      >
        This is success. This is success. This is success.
      </Alert>
    </InfoTemplate>
  );
};

export const Variants = () => {
  return (
    <Container flexDirection="column">
      <StoryTitle.Regular>Success Variant</StoryTitle.Regular>
      <Alert
        variant="success"
        action={<Link variant="paragraph1">Click Here</Link>}
      >
        This is a success message. This is a success message. This is a success.
      </Alert>
      <Container my="SpacingBase4" />
      <StoryTitle.Regular>Warning Variant</StoryTitle.Regular>
      <Alert
        variant="warning"
        action={<Link variant="paragraph1">Click Here</Link>}
      >
        This is a warning message. This is a warning message. This is a warning.
      </Alert>
      <Container my="SpacingBase4" />
      <StoryTitle.Regular>Error Variant</StoryTitle.Regular>
      <Alert
        variant="error"
        action={<Link variant="paragraph1">Click Here</Link>}
      >
        This is an error message. This is an error message. This is an error
        message.
      </Alert>
      <Container my="SpacingBase4" />
      <StoryTitle.Regular>Info Variant</StoryTitle.Regular>
      <Alert
        variant="info"
        action={<Link variant="paragraph1">Click Here</Link>}
      >
        This is an info message. This is an info message. This is an info
        message.
      </Alert>
      <Container my="SpacingBase4" />
      <StoryTitle.Regular>Notification Variant</StoryTitle.Regular>
      <Alert
        variant="notification"
        action={<Link variant="paragraph1">Click Here</Link>}
      >
        This is a notification message. This is a noti notification. This is a
        notification.
      </Alert>
      <Container my="SpacingBase4" />
      <StoryTitle.Regular>Variant without link</StoryTitle.Regular>
      <Alert variant="info">
        This is an info message. This is an info message. This is an info
        message.
      </Alert>
      <Container my="SpacingBase4" />
      <StoryTitle.Regular>Variant without children and link</StoryTitle.Regular>
      <Alert variant="success" />
    </Container>
  );
};

const Template: Story<AlertProps> = (props) => <Alert {...props} />;

export const Interactive = Template.bind({});
Interactive.args = {};
