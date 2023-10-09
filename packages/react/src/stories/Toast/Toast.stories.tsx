import Container from '../Container';
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
  const variants: AlertVariant[] = ['success', 'warning', 'info', 'error'];

  const { enqueueToast } = useToast();
  const triggerFunc = (autoHide = true) => {
    if (i <= 3) {
      enqueueToast({
        variant: variants[i],
        message: `This is ${variants[i]} Toast!`,
        action: <Link>Click Here</Link>,
        autoHide: autoHide,
      });

      i = i + 1;
    } else i = 0;
  };

  return (
    <StyledContainer justifyContent="center" direction="column">
      <Button onClick={() => triggerFunc()}>Show Toast</Button>
      <Button onClick={() => triggerFunc(false)}>Show Persistent Toast</Button>
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
