import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import Container from '../../components/Container';
import Button from '../../components/Button';
import InfoTemplate from '../InfoTemplate/InfoTemplate';
import { DESCRIPTION, DO, DONT, TITLE } from './ActionModalInfo';
import * as StoryTitle from '../StoryTitle';
import ActionModal, { ActionModalProps } from '../../components/ActionModal';
import Typography from '../../components/Typography';
/**
 * To use the library styles you need to import import 'react-sheet-slide/style.css';
 * as global styles in your project
 */
export default {
  title: 'React/Components/ActionModal',
  component: ActionModal,
} as Meta;
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
  isAlwaysModal,
  hasPadding,
  hasGreyBackground,
}: {
  isAlwaysModal?: ActionModalProps['isAlwaysModal'];
  hasGreyBackground?: ActionModalProps['hasGreyBackground'];
  hasPadding?: ActionModalProps['hasPadding'];
}) => {
  const [open, setOpen] = useState(false);

  const closeModal = () => setOpen(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Action Modal</Button>
      <ActionModal
        open={open}
        isAlwaysModal={isAlwaysModal}
        hasPadding={hasPadding}
        hasGreyBackground={hasGreyBackground}
        onDismiss={closeModal}
        title={MODAL_TITLE}
        subtitle={MODAL_SUBTITLE}
        footer={MODAL_FOOTER}
        content={MODAL_CONTENT}
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
      <VariantComponent isAlwaysModal={true} />
    </Container>
  </InfoTemplate>
);

export const Variants = () => {
  return (
    <Container flexDirection="column">
      <StoryTitle.Overview>Always Action Modal</StoryTitle.Overview>
      <VariantComponent isAlwaysModal={true} />
      <Container my="SpacingBase32" />
      <StoryTitle.Overview>
        Action Modal with Bottom Sheet on mobile
      </StoryTitle.Overview>
      <VariantComponent />
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
  footer: MODAL_FOOTER,
  content: MODAL_CONTENT,
};
