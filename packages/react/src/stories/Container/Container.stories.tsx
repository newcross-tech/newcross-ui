import { Meta, Story } from '@storybook/react';
import Container, { ContainerProps } from '../../components/Container';
import { DESCRIPTION, DO, DONT, TITLE } from './ContainerInfo';
import InfoTemplate from '../InfoTemplate/InfoTemplate';
import Typography from '../../components/Typography';

export default {
  title: 'React/Components/Container',
  component: Container,
} as Meta;

export const Overview = () => {
  return (
    <InfoTemplate
      title={TITLE}
      description={DESCRIPTION}
      doInfo={DO}
      dontInfo={DONT}
    />
  );
};

const Template = ({ children, ...rest }: ContainerProps) => (
  <div style={{ backgroundColor: 'white' }}>
    <Container {...rest}>{children}</Container>
  </div>
);

export const Interactive: Story<ContainerProps> = Template.bind({});

Interactive.args = {
  children: (
    <>
      {[...new Array(4)].map((_, i) => (
        <Typography variant="paragraph1">Paragraph {i + 1}</Typography>
      ))}
    </>
  ),
};
