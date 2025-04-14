import { Meta, Story } from '@storybook/react';
import {
  Toast,
  ToastProps,
  Link,
  Button,
  ButtonSizes,
  Typography,
  TypographyVariant,
} from '@newcross-tech/ui-react-native';
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
  const [showPersistentToast, setShowPersistentToast] = useState(
    'showPersistentToast',
    false
  );
  const [showSuccessToast, setShowSuccessToast] = useState(
    'showSuccessToast',
    false
  );
  const [showWarningToast, setShowWarningToast] = useState(
    'showWarningToast',
    false
  );
  const [showErrorToast, setShowErrorToast] = useState('showErrorToast', false);
  const [showInfoToast, setShowInfoToast] = useState('showInfoToast', false);

  const [showMinmalSuccessToast, setShowMinimalSuccessToast] = useState(
    'showMinimalSuccessToast',
    false
  );
  const [showMinimalWarningToast, setShowMinimalWarningToast] = useState(
    'showMinimalWarningToast',
    false
  );
  const [showMinimalErrorToast, setShowMinimalErrorToast] = useState(
    'showMinimalErrorToast',
    false
  );
  const [showMinimalInfoToast, setShowMinimalInfoToast] = useState(
    'showMinimalInfoToast',
    false
  );

  return (
    <Container>
      <Toast
        show={showSuccessToast}
        variant="success"
        message="This is a success toast!"
        onClose={() => setShowSuccessToast(false)}
        action={<Link>Click Here</Link>}
        style={{
          paddingTop: Platform.OS === 'android' ? 50 : undefined,
        }}
      />
      <Toast
        show={showWarningToast}
        variant="warning"
        message="This is a warning toast!"
        onClose={() => setShowWarningToast(false)}
        action={<Link>Click Here</Link>}
        style={{
          paddingTop: Platform.OS === 'android' ? 50 : undefined,
        }}
      />
      <Toast
        show={showErrorToast}
        variant="error"
        message="This is an error toast!"
        onClose={() => setShowErrorToast(false)}
        action={<Link>Click Here</Link>}
        style={{
          paddingTop: Platform.OS === 'android' ? 50 : undefined,
        }}
      />
      <Toast
        show={showInfoToast}
        variant="info"
        message="This is an info toast!"
        onClose={() => setShowInfoToast(false)}
        action={<Link>Click Here</Link>}
        style={{
          paddingTop: Platform.OS === 'android' ? 50 : undefined,
        }}
      />

      <Toast
        show={showMinmalSuccessToast}
        variant="success"
        message="This is a minimal success toast!"
        hasTitle={false}
        onClose={() => setShowMinimalSuccessToast(false)}
        style={{
          paddingTop: Platform.OS === 'android' ? 50 : undefined,
        }}
      />
      <Toast
        show={showMinimalWarningToast}
        variant="warning"
        message="This is a minimal warning toast!"
        hasTitle={false}
        onClose={() => setShowMinimalWarningToast(false)}
        style={{
          paddingTop: Platform.OS === 'android' ? 50 : undefined,
        }}
      />
      <Toast
        show={showMinimalErrorToast}
        variant="error"
        message="This is a minimal error toast!"
        hasTitle={false}
        onClose={() => setShowMinimalErrorToast(false)}
        style={{
          paddingTop: Platform.OS === 'android' ? 50 : undefined,
        }}
      />
      <Toast
        show={showMinimalInfoToast}
        variant="info"
        message="This is a minimal info toast!"
        hasTitle={false}
        onClose={() => setShowMinimalInfoToast(false)}
        style={{
          paddingTop: Platform.OS === 'android' ? 50 : undefined,
        }}
      />
      <Toast
        show={showPersistentToast}
        variant="info"
        message="This is an info toast!"
        onClose={() => setShowPersistentToast(false)}
        action={<Link>Click Here</Link>}
        autoHide={false}
        style={{
          paddingTop: Platform.OS === 'android' ? 50 : undefined,
        }}
      />

      <Spacing position={SpacingPositions.Bottom} />
      <Container>
        <Typography variant={TypographyVariant.heading4}>
          Default Toast
        </Typography>
        <Spacing position={SpacingPositions.Bottom} />
        <Button
          size={ButtonSizes.small}
          onPress={() => setShowSuccessToast(true)}
        >
          Show Success Toast
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
          onPress={() => setShowWarningToast(true)}
        >
          Show Warning Toast
        </Button>
        <Spacing position={SpacingPositions.Bottom} />
        <Button size={ButtonSizes.small} onPress={() => setShowInfoToast(true)}>
          Show Info Toast
        </Button>
        <Spacing position={SpacingPositions.Bottom} />
        <Typography variant={TypographyVariant.heading4}>
          Minmal Toast
        </Typography>
        <Spacing position={SpacingPositions.Bottom} />
        <Button
          size={ButtonSizes.small}
          onPress={() => setShowMinimalSuccessToast(true)}
        >
          Show Minimal Success Toast
        </Button>
        <Spacing position={SpacingPositions.Bottom} />
        <Button
          size={ButtonSizes.small}
          onPress={() => setShowMinimalErrorToast(true)}
        >
          Show Minimal Error Toast
        </Button>
        <Spacing position={SpacingPositions.Bottom} />
        <Button
          size={ButtonSizes.small}
          onPress={() => setShowMinimalWarningToast(true)}
        >
          Show Minimal Warning Toast
        </Button>
        <Spacing position={SpacingPositions.Bottom} />
        <Button
          size={ButtonSizes.small}
          onPress={() => setShowMinimalInfoToast(true)}
        >
          Show Minimal Info Toast
        </Button>
        <Spacing position={SpacingPositions.Bottom} />
        <Typography variant={TypographyVariant.heading4}>
          Persistent Toast
        </Typography>
        <Spacing position={SpacingPositions.Bottom} />
        <Button
          size={ButtonSizes.small}
          onPress={() => setShowPersistentToast(true)}
        >
          Show Persistent Toast
        </Button>
        <Spacing position={SpacingPositions.Bottom} />
      </Container>
    </Container>
  );
};

const Template: Story<ToastProps> = ({ ...rest }) => <Toast {...rest} />;

export const Interactive = Template.bind({});
Interactive.args = {
  show: true,
  variant: 'info',
  message: 'this is a toast message',
  duration: 5000,
  autoHide: false,
};
