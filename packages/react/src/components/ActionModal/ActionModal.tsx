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
  $isAlwaysModal?: boolean;
  /**
   * Prop that control if the ContentWapper should have grey background for screen smaller than 640px.
   */
  $hasGreyBackground?: boolean;
  /**
   * Prop to control if the ContentWapper should have padding for screen smaller than 640px.
   */
  $hasPadding?: boolean;
  /**
   * The sheet also supports forwarding a ref that will be added onto the sheet root.
   */
  ref?: React.RefObject<HTMLDivElement>;
  /**
   * Prop to control the overflow-y of the content.
   * When the content includes elements with absolute position, like a dropdown, the overflow-y should be set to 'visible'.
   */
  $overflowY?: 'auto' | 'hidden' | 'scroll' | 'visible' | 'initial' | 'inherit';
  /**
   * Set custom z-index for the action modal
   */
  $zIndex?: number;
  /**
   * Prop to enforce action in the sheet and not allow user to close it.
   * If true the sheet cannot be closed by click outside and close button is not displayed.
   * Default is false.
   */
  canCloseOnActionOnly?: boolean;
};

const ActionModal = ({
  title,
  content,
  subtitle,
  footer,
  $hasPadding = false,
  $isAlwaysModal = false,
  $hasGreyBackground = false,
  $overflowY = 'auto',
  $zIndex = 2,
  canCloseOnActionOnly = false,
  onDismiss,
  ...rest
}: ActionModalProps) => {
  const baseName = 'action-modal-';

  return (
    <Portal>
      <Styled.SheetWrapper
        $isAlwaysModal={$isAlwaysModal}
        $overflowY={$overflowY}
        $zIndex={$zIndex}
        $hasFooter={!!footer}
        testID={`${baseName}container`}
      >
        <Sheet
          selectedDetent={detents.large}
          detents={(props) => [detents.large(props), detents.fit(props)]}
          useDarkMode={false}
          scrollingExpands={true}
          useModal={$isAlwaysModal || undefined}
          backdropClassName={`${baseName}backdrop`}
          onDismiss={!canCloseOnActionOnly ? onDismiss : undefined}
          {...rest}
        >
          <Header className={`${baseName}header`}>
            <Styled.IndicatorWrapper
              justifyContent="center"
              p="SpacingBase16"
              $isAlwaysModal={$isAlwaysModal}
            >
              <Styled.Indicator
                $isAlwaysModal={$isAlwaysModal}
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
                pb="SpacingBase8"
                $isAlwaysModal={$isAlwaysModal}
              >
                <Styled.Heading
                  variant="heading2"
                  color="primary"
                  testID={`${baseName}title`}
                >
                  {title}
                </Styled.Heading>
                {!canCloseOnActionOnly && (
                  <Styled.Icon
                    icon={faXmark}
                    size="2x"
                    width="16px"
                    height="16px"
                    $isAlwaysModal={$isAlwaysModal}
                    onClick={onDismiss}
                    data-testid={`${baseName}close-icon`}
                  />
                )}
              </Styled.Header>
              {subtitle && (
                <Styled.Subtitle
                  variant="paragraph1"
                  color="primary"
                  testID={`${baseName}subtitle`}
                >
                  {subtitle}
                </Styled.Subtitle>
              )}
            </Styled.HeaderContent>
          </Header>
          {content && (
            <Content className={`${baseName}content`}>
              <Styled.ContentWapper
                $isAlwaysModal={$isAlwaysModal}
                $hasGreyBackground={$hasGreyBackground}
                $hasPadding={$hasPadding}
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
          <Footer className={`${baseName}footer`}>
            {footer && (
              <Styled.FooterWrapper
                $isAlwaysModal={$isAlwaysModal}
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
