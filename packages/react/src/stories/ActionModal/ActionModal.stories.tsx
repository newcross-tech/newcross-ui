import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import Container from '../../components/Container';
import Button from '../../components/Button';
import InfoTemplate from '../InfoTemplate/InfoTemplate';
import { DESCRIPTION, DO, DONT, TITLE } from './ActionModalInfo';
import * as StoryTitle from '../StoryTitle';
import ActionModal, { ActionModalProps } from '../../components/ActionModal';
import Typography from '../../components/Typography';
import Select from '../../components/Select';

/**
 * To use the library styles you need to import import 'react-sheet-slide/style.css';
 * as global styles in your project
 */
export default {
  title: 'React/Components/ActionModal',
  component: ActionModal,
} as Meta;

const options = [
  { label: 'Option 1', value: 'Option 1' },
  { label: 'Option 2', value: 'Option 2' },
  { label: 'Option 3', value: 'Option 3' },
  { label: 'Option 4', value: 'Option 4' },
  { label: 'Option 5', value: 'Option 5' },
  { label: 'Option 6', value: 'Option 6' },
];

const MODAL_TITLE = 'Question to the user?';
const MODAL_SUBTITLE = 'Description on what will happen if confirming';
const MODAL_CONTENT = (
  <>
    <Typography variant="heading3" color="primary" align="center">
      SLOT
    </Typography>
    <Typography variant="paragraph1" color="secondary" align="center">
      (This is where the content goes)
    </Typography>
  </>
);

const MODAL_FOOTER = (
  <Container justifyContent="space-between" fullWidth gap="SpacingBase16">
    <Button variant="secondary" style={{ flexGrow: 1 }}>
      A Way Out
    </Button>
    <Button variant="primary" style={{ flexGrow: 1 }}>
      Decision
    </Button>
  </Container>
);

const VariantComponent = ({
  $isAlwaysModal,
  $hasPadding,
  $hasGreyBackground,
  $overflowY,
  content = MODAL_CONTENT,
}: {
  $isAlwaysModal?: ActionModalProps['$isAlwaysModal'];
  $hasGreyBackground?: ActionModalProps['$hasGreyBackground'];
  $hasPadding?: ActionModalProps['$hasPadding'];
  content?: ActionModalProps['content'];
  $overflowY?: ActionModalProps['$overflowY'];
}) => {
  const [open, setOpen] = useState(false);

  const closeModal = () => setOpen(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Action Modal</Button>
      <ActionModal
        open={open}
        $isAlwaysModal={$isAlwaysModal}
        $hasPadding={$hasPadding}
        $hasGreyBackground={$hasGreyBackground}
        $overflowY={$overflowY}
        onDismiss={closeModal}
        title={MODAL_TITLE}
        subtitle={MODAL_SUBTITLE}
        footer={MODAL_FOOTER}
        content={content}
      />
    </>
  );
};

export const Overview = () => (
  <InfoTemplate
    title={TITLE}
    description={DESCRIPTION}
    doInfo={DO}
    dontInfo={DONT}
  >
    <Container flexDirection="column">
      <StoryTitle.Overview>Action Modal</StoryTitle.Overview>
      <VariantComponent $isAlwaysModal={true} $overflowY="visible" />
    </Container>
  </InfoTemplate>
);

export const Variants = () => {
  return (
    <Container flexDirection="column">
      <StoryTitle.Overview>Always Action Modal</StoryTitle.Overview>
      <VariantComponent $isAlwaysModal={true} />
      <Container my="SpacingBase32" />
      <StoryTitle.Overview>
        Action Modal with Bottom Sheet on mobile
      </StoryTitle.Overview>
      <VariantComponent />
      <Container my="SpacingBase32" />
      <StoryTitle.Overview>Action Modal with Select</StoryTitle.Overview>
      <VariantComponent
        content={<Select options={options} id="select" menuPlacement="top" />}
        $overflowY="visible"
      />
    </Container>
  );
};

const Template: Story<ActionModalProps> = ({ ...rest }) => {
  return (
    <Container>
      <ActionModal {...rest} />
    </Container>
  );
};

export const Interactive = Template.bind({});
Interactive.args = {
  open: true,
  title: MODAL_TITLE,
  subtitle: MODAL_SUBTITLE,
  content: MODAL_CONTENT,
  footer: MODAL_FOOTER,
};
