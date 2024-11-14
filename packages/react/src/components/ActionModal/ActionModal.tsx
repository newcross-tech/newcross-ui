import React from 'react';
import {
  Sheet,
  Header,
  Content,
  Footer,
  detents,
  Portal,
  SheetProps,
} from 'react-sheet-slide';
import 'react-sheet-slide/style.css';
import * as Styled from './ActionModal.style';
import { faXmark } from '@fortawesome/pro-light-svg-icons/faXmark';
import { ColorPrimaryGravitas } from '@newcross-ui/design-tokens/build/js/web/healthforce';

export type ActionModalProps = {
  /**
   * Action modal's title
   */
  title: string;
  /**
   * Action modal's subtitle
   */
  subtitle?: string;
  /**
   * Action modal's content component
   */
  content?: React.ReactNode;
  /**
   * Action modal's foote component, usually CTAs
   */
  footer?: React.ReactNode;
  /**
   * Set if the sheet is open. When this prop is changed the sheet will animate and the unmount/remount.
   * When the component fully unmounts, onClose will be called.
   */
  open: SheetProps['open'];
  /**
   * Called when the sheet is dragged down or the user clicks on the backdrop.
   * Also called when the user presses Esc. This method should include setOpen(false) to ensure open is false.
   * Otherwise the sheet may not close properly.
   */
  onDismiss: SheetProps['onDismiss'];
  /**
   * Called when the sheet finishes the close animation and is fully unmounted.
   */
  onClose?: SheetProps['onClose'];
  /**
   * Prop to control when a modal should be used instead of a sheet.
   * If you want to always use a modal, set this to true.
   * Otherwise it will default to true on any device larger than (max-width: 640px) to use a modal on desktop.
   */
  isAlwaysModal?: boolean;
  /**
   * Prop that control if the ContentWapper should have grey background for screen smaller than 640px.
   */
  hasGreyBackground?: boolean;
  /**
   * Prop to control if the ContentWapper should have padding for screen smaller than 640px.
   */
  hasPadding?: boolean;
  /**
   * The sheet also supports forwarding a ref that will be added onto the sheet root.
   */
  ref?: React.RefObject<HTMLDivElement>;
};

const ActionModal = ({
  title,
  content,
  subtitle,
  footer,
  hasPadding,
  isAlwaysModal,
  hasGreyBackground,
  ...rest
}: ActionModalProps) => {
  return (
    <Portal>
      <Styled.SheetWrapper $useModal={!!isAlwaysModal}>
        <Sheet
          selectedDetent={detents.large}
          detents={(props) => [detents.large(props), detents.fit(props)]}
          useDarkMode={false}
          scrollingExpands={true}
          useModal={isAlwaysModal || undefined}
          backdropClassName="action-modal-backdrop"
          {...rest}
        >
          <Header className="action-modal-header">
            <Styled.IndicatorWrapper
              justifyContent="center"
              p="SpacingBase16"
              $useModal={!!isAlwaysModal}
            >
              <Styled.Indicator
                $useModal={!!isAlwaysModal}
                px="SpacingBase48"
              />
            </Styled.IndicatorWrapper>
            <Styled.HeaderContent
              pt="SpacingBase32"
              pb="SpacingBase0"
              px="SpacingBase24"
              flexDirection="column"
            >
              <Styled.Header
                justifyContent="space-between"
                alignItems="center"
                pb="SpacingBase8"
                $useModal={!!isAlwaysModal}
              >
                <Styled.Heading variant="heading2" color="primary">
                  {title}
                </Styled.Heading>
                <Styled.Icon
                  icon={faXmark}
                  width={16}
                  height={16}
                  size="2x"
                  color={ColorPrimaryGravitas}
                  $useModal={!!isAlwaysModal}
                  onClick={rest.onDismiss}
                  data-testid="action-modal-close-icon"
                />
              </Styled.Header>
              {subtitle && (
                <Styled.Subtitle variant="paragraph1" color="primary">
                  {subtitle}
                </Styled.Subtitle>
              )}
            </Styled.HeaderContent>
          </Header>
          {content && (
            <Content className="action-modal-content">
              <Styled.ContentWapper
                $useModal={!!isAlwaysModal}
                $hasGreyBackground={!!hasGreyBackground}
                $hasPadding={!!hasPadding}
                pt="SpacingBase24"
                px="SpacingBase24"
                pb={footer ? 'SpacingBase0' : 'SpacingBase40'}
                flexDirection="column"
                data-testid="content-wrapper"
              >
                {content}
              </Styled.ContentWapper>
            </Content>
          )}
          <Footer className="action-modal-footer">
            {footer && (
              <Styled.FooterWrapper
                $useModal={!!isAlwaysModal}
                px="SpacingBase24"
                py="SpacingBase32"
                flexDirection="column"
                data-testid="footer-wrapper"
              >
                {footer}
              </Styled.FooterWrapper>
            )}
          </Footer>
        </Sheet>
      </Styled.SheetWrapper>
    </Portal>
  );
};

export default ActionModal;
