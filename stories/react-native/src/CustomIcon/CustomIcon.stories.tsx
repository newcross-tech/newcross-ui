import { Meta, Story } from '@storybook/react';
import { CustomIcon } from '@newcross-ui/react-native';
import Container from '../Container';

export default {
  title: 'ReactNative/Components/CustomIcon',
  component: CustomIcon,
} as Meta;

export const Icons = () => {
  return (
    <Container>
      <CustomIcon name='Badge-Black' size={24} />
    </Container>
  )
}