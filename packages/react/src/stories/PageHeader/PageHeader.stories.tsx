import { Meta, Story } from '@storybook/react';
import { faPrint } from '@fortawesome/pro-light-svg-icons/faPrint';
import PageHeader, { PageHeaderProps } from '../../components/PageHeader';
import Button from '../../components/Button';
import Container from '../../components/Container';
import InfoTemplate from '../InfoTemplate/InfoTemplate';
import { DESCRIPTION, DO, DONT, TITLE } from './PageHeaderInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default {
  title: 'React/Components/PageHeader',
  component: PageHeader,
} as Meta;

export const Overview = () => {
  return (
    <InfoTemplate
      title={TITLE}
      description={DESCRIPTION}
      doInfo={DO}
      dontInfo={DONT}
    >
      <PageHeader
        title="Page Title"
        subtitle="This is a description of the page."
        onBackClick={() => alert('Back clicked')}
        secondaryAction={
          <Button
            variant="secondary"
            leftIcon={<FontAwesomeIcon icon={faPrint} />}
          >
            Print Page
          </Button>
        }
      />
    </InfoTemplate>
  );
};

export const Variants = () => {
  return (
    <Container flexDirection="column">
      <PageHeader
        title="Full Example"
        subtitle="This page includes both a back icon and a secondary action."
        onBackClick={() => alert('Back clicked')}
        secondaryAction={
          <Button
            variant="secondary"
            leftIcon={<FontAwesomeIcon icon={faPrint} />}
          >
            Print Page
          </Button>
        }
      />
    </Container>
  );
};

const Template: Story<PageHeaderProps> = (props) => <PageHeader {...props} />;

export const Interactive = Template.bind({});
Interactive.args = {
  title: 'Interactive Page Title',
  subtitle: 'This is an interactive story for the PageHeader component.',
};
