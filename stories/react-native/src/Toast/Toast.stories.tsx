import { Meta, Story } from '@storybook/react';
import {
  Toast,
  ToastProps,
  ToastStatus,
  Button,
  ButtonSizes,
  Typography,
  TypographyVariant,
} from '@newcross-ui/react-native';
import Container from '../Container';
import Spacing, { SpacingPositions } from '../Spacing';
import useState from 'storybook-addon-state';
import { Platform } from 'react-native';

export default {
  title: 'ReactNative/Components/Toast',
  component: Toast,
  parameters: { layout: 'fullscreen' },
} as Meta;

export const Variants = () => {
  const [showInfoToast, setShowInfoToast] = useState('showInfoToast', false);

  const [showInfoToastWithClose, setShowInfoToastWithClose] = useState(
    'showInfoToastWithoutClos',
    false
  );
  const [showSuccessToast, setShowSucessToast] = useState(
    'showSuccessToast',
    false
  );
  const [showWarningToast, setShowWarningToast] = useState(
    'showWarningToast',
    false
  );
  const [showErrorToast, setShowErrorToast] = useState('showErrorToast', false);

  const [showInfoMultiLine, setShowInfoMultiLine] = useState(
    'showInfoMultiLine',
    false
  );
  const [showErrorToastMultiLine, setShowErrorToastMultiLine] = useState(
    'showErrorToastMultiLine',
    false
  );

  return (
    <Container>
      <Toast
        show={showInfoToastWithClose}
        status={ToastStatus.info}
        message="This is an info toast with a close icon!"
        onClose={() => setShowInfoToastWithClose(false)}
        autoHide={false}
        style={{
          paddingTop: Platform.OS === 'android' ? 50 : undefined,
        }}
      />
      <Toast
        show={showInfoMultiLine}
        status={ToastStatus.info}
        message="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        onClose={() => setShowInfoMultiLine(false)}
        autoHide={false}
        style={{
          paddingTop: Platform.OS === 'android' ? 50 : undefined,
        }}
      />
      <Toast
        show={showInfoToast}
        status={ToastStatus.info}
        message="This is an info toast!"
        onClose={() => setShowInfoToast(false)}
        style={{
          paddingTop: Platform.OS === 'android' ? 50 : undefined,
        }}
      />
      <Toast
        show={showSuccessToast}
        status={ToastStatus.success}
        message="This is a success toast!"
        onClose={() => setShowSucessToast(false)}
        style={{
          paddingTop: Platform.OS === 'android' ? 50 : undefined,
        }}
      />
      <Toast
        show={showWarningToast}
        status={ToastStatus.warning}
        message="This is a warning toast!"
        onClose={() => setShowWarningToast(false)}
        style={{
          paddingTop: Platform.OS === 'android' ? 50 : undefined,
        }}
      />
      <Toast
        show={showErrorToast}
        status={ToastStatus.error}
        message="This is an error toast!"
        onClose={() => setShowErrorToast(false)}
        style={{
          paddingTop: Platform.OS === 'android' ? 50 : undefined,
        }}
      />
      <Toast
        show={showErrorToastMultiLine}
        status={ToastStatus.error}
        message="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        onClose={() => setShowErrorToastMultiLine(false)}
        style={{
          paddingTop: Platform.OS === 'android' ? 50 : undefined,
        }}
      />
      <Spacing position={SpacingPositions.Bottom} />
      <Container>
        <Typography variant={TypographyVariant.heading7}>
          Action to dismiss toast
        </Typography>
        <Spacing position={SpacingPositions.Bottom} />
        <Button
          size={ButtonSizes.small}
          onPress={() => setShowInfoToastWithClose(!showInfoToastWithClose)}
        >
          Show Info Toast With Close Icon
        </Button>
        <Spacing position={SpacingPositions.Bottom} />
        <Button
          size={ButtonSizes.small}
          onPress={() => setShowInfoMultiLine(true)}
        >
          Show Multi line Toast
        </Button>
        <Spacing position={SpacingPositions.Bottom} />
        <Typography variant={TypographyVariant.heading7}>
          Auto dismiss toast on set duration
        </Typography>
        <Spacing position={SpacingPositions.Bottom} />
        <Button size={ButtonSizes.small} onPress={() => setShowInfoToast(true)}>
          Show Info Toast
        </Button>
        <Spacing position={SpacingPositions.Bottom} />
        <Button
          size={ButtonSizes.small}
          onPress={() => setShowSucessToast(true)}
        >
          Show Success Toast
        </Button>
        <Spacing position={SpacingPositions.Bottom} />
        <Button
          size={ButtonSizes.small}
          onPress={() => setShowWarningToast(true)}
        >
          Show Warning Toast
        </Button>
        <Spacing position={SpacingPositions.Bottom} />
        <Button
          size={ButtonSizes.small}
          onPress={() => setShowErrorToast(true)}
        >
          Show Error Toast
        </Button>
        <Spacing position={SpacingPositions.Bottom} />
        <Button
          size={ButtonSizes.small}
          onPress={() => setShowErrorToastMultiLine(true)}
        >
          Show Error Toast Multi line
        </Button>
      </Container>
    </Container>
  );
};

const Template: Story<ToastProps> = ({ ...rest }) => <Toast {...rest} />;

export const Interactive = Template.bind({});
Interactive.args = {
  show: true,
  status: ToastStatus.info,
  message: 'this is a toast message',
  duration: 5000,
  autoHide: false,
};
