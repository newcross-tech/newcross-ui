import Container from '../Container';
import Link from '../../components/Link';
import useState from 'storybook-addon-state';
import { Meta, Story } from '@storybook/react';
import Spacing, { SpacingPositions, SpacingSizes } from '../Spacing';
import { AlertVariant } from '../../types/AlertVariant';
import Toast, { ToastProps } from '../../components/Toast';
import Button, { ButtonSizes } from '../../components/Button';
import Typography, { TypographyVariant } from '../../components/Typography';

export default {
  title: 'React/Components/Toast',
  component: Toast,
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

  const [showMinimalSuccessToast, setShowMinimalSuccessToast] = useState(
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
    <Container direction="column">
      <Toast
        show={showSuccessToast}
        variant={AlertVariant.success}
        message="This is a success toast!"
        onClose={() => setShowSuccessToast(false)}
        action={<Link>Click Here</Link>}
      />
      <Toast
        show={showWarningToast}
        variant={AlertVariant.warning}
        message="This is a warning toast!"
        onClose={() => setShowWarningToast(false)}
        action={<Link>Click Here</Link>}
      />
      <Toast
        show={showErrorToast}
        variant={AlertVariant.error}
        message="This is an error toast!"
        onClose={() => setShowErrorToast(false)}
        action={<Link>Click Here</Link>}
      />
      <Toast
        show={showInfoToast}
        variant={AlertVariant.info}
        message="This is an info toast!"
        onClose={() => setShowInfoToast(false)}
        action={<Link>Click Here</Link>}
      />

      <Toast
        show={showMinimalSuccessToast}
        variant={AlertVariant.success}
        message="This is a minimal success toast!"
        hasTitle={false}
        onClose={() => setShowMinimalSuccessToast(false)}
      />
      <Toast
        show={showMinimalWarningToast}
        variant={AlertVariant.warning}
        message="This is a minimal warning toast!"
        hasTitle={false}
        onClose={() => setShowMinimalWarningToast(false)}
      />
      <Toast
        show={showMinimalErrorToast}
        variant={AlertVariant.error}
        message="This is a minimal error toast!"
        hasTitle={false}
        onClose={() => setShowMinimalErrorToast(false)}
      />
      <Toast
        show={showMinimalInfoToast}
        variant={AlertVariant.info}
        message="This is a minimal info toast!"
        hasTitle={false}
        onClose={() => setShowMinimalInfoToast(false)}
      />
      <Toast
        show={showPersistentToast}
        variant={AlertVariant.info}
        message="This is an info toast!"
        onClose={() => setShowPersistentToast(false)}
        action={<Link>Click Here</Link>}
        autoHide={false}
      />

      <Spacing />
      <Container direction="column" display="block">
        <Typography variant={TypographyVariant.heading4}>
          Default Toast
        </Typography>
        <Spacing position={SpacingPositions.Bottom} />
        <Button
          size={ButtonSizes.small}
          onClick={() => setShowSuccessToast(true)}
        >
          Show Success Toast
        </Button>
        <Spacing />
        <Button
          size={ButtonSizes.small}
          onClick={() => setShowErrorToast(true)}
        >
          Show Error Toast
        </Button>
        <Spacing />
        <Button
          size={ButtonSizes.small}
          onClick={() => setShowWarningToast(true)}
        >
          Show Warning Toast
        </Button>
        <Spacing />
        <Button size={ButtonSizes.small} onClick={() => setShowInfoToast(true)}>
          Show Info Toast
        </Button>
        <Spacing size={SpacingSizes.Large} />
        <Typography variant={TypographyVariant.heading4}>
          Minimal Toast
        </Typography>
        <Spacing />
        <Button
          size={ButtonSizes.small}
          onClick={() => setShowMinimalSuccessToast(true)}
        >
          Show Minimal Success Toast
        </Button>
        <Spacing />
        <Button
          size={ButtonSizes.small}
          onClick={() => setShowMinimalErrorToast(true)}
        >
          Show Minimal Error Toast
        </Button>
        <Spacing position={SpacingPositions.Bottom} />
        <Button
          size={ButtonSizes.small}
          onClick={() => setShowMinimalWarningToast(true)}
        >
          Show Minimal Warning Toast
        </Button>
        <Spacing />
        <Button
          size={ButtonSizes.small}
          onClick={() => setShowMinimalInfoToast(true)}
        >
          Show Minimal Info Toast
        </Button>
        <Spacing size={SpacingSizes.Large} />
        <Typography variant={TypographyVariant.heading4}>
          Persistent Toast
        </Typography>
        <Spacing />
        <Button
          size={ButtonSizes.small}
          onClick={() => setShowPersistentToast(true)}
        >
          Show Persistent Toast
        </Button>
        <Spacing />
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
