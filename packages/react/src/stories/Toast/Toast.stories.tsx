import Container from '../../components/Container';
import styled from 'styled-components';
import Link from '../../components/Link';
import Button from '../../components/Button';
import { Meta, Story } from '@storybook/react';
import { useToast } from '../../hooks/useToast';
import { AlertVariant } from '../../types';
import Toast, { ToastProps } from '../../components/Toast';

export default {
  title: 'React/Components/Toast',
  component: Toast,
} as Meta;

const StyledContainer = styled(Container)`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  left: 1rem;
`;
let i = 0;
export const Variants = () => {
  const variants: AlertVariant[] = [
    'success',
    'warning',
    'info',
    'error',
    'notification',
  ];

  const { enqueueToast } = useToast();
  const triggerFunc = (autoHide = true, closeAllOthers = false) => {
    if (i <= variants.length - 1) {
      enqueueToast(
        {
          variant: variants[i],
          message: `This is ${variants[i]} Toast!`,
          action: <Link variant="paragraph1">Click Here</Link>,
          autoHide,
          fullWidth: true,
        },
        closeAllOthers
      );

      i = i + 1;
    } else i = 0;
  };

  return (
    <StyledContainer justifyContent="center" flexDirection="column">
      <Button onClick={() => triggerFunc()}>Show Toast</Button>
      <Container mb="SpacingBase8" />
      <Button onClick={() => triggerFunc(false)}>Show Persistent Toast</Button>
      <Container mb="SpacingBase8" />
      <Button onClick={() => triggerFunc(false, true)}>
        Show Only latest Toast
      </Button>
    </StyledContainer>
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
