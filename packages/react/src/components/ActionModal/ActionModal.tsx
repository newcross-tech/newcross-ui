import {
  Sheet,
  Header,
  Content,
  Footer,
  detents,
  Portal,
} from 'react-sheet-slide';
import 'react-sheet-slide/style.css';
import * as Styled from './ActionModal.style';
import { faXmark } from '@fortawesome/pro-light-svg-icons/faXmark';
import { faExclamationCircle } from '@fortawesome/pro-regular-svg-icons/faExclamationCircle';
import { OptionalProps } from '../../types';
import { ActionModalPropsStrict } from './ActionModal.types';
import Typography from '../Typography';
import Container from '../Container';
import { useCurrentBreakpoint } from '../../hooks/useCurrentBreakpoint';
import Icon from '../Icon';

export type ActionModalProps = OptionalProps<
  ActionModalPropsStrict,
  | '$hasPadding'
  | '$isAlwaysModal'
  | '$hasGreyBackground'
  | '$overflowY'
  | '$zIndex'
>;

const normalizeActionModalProps = (
  _props: ActionModalProps
): ActionModalPropsStrict => ({
  ..._props,
  $hasPadding: _props.$hasPadding ?? false,
  $isAlwaysModal: _props.$isAlwaysModal ?? false,
  $hasGreyBackground: _props.$hasGreyBackground ?? false,
  $overflowY: _props.$overflowY ?? 'auto',
  $zIndex: _props.$zIndex ?? 2,
});

const ActionModal = (_props: ActionModalProps) => {
  const {
    title,
    subtitle,
    content,
    footer,
    onDismiss,
    $isAlwaysModal,
    $overflowY,
    $zIndex,
    $hasPadding,
    $hasGreyBackground,
    canCloseOnActionOnly,
    ...rest
  } = normalizeActionModalProps(_props);

  const baseName = 'action-modal-';

  const currentBreakpoint = useCurrentBreakpoint();
  const isMobile = currentBreakpoint === 'sm';

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
            {!$isAlwaysModal && isMobile && <Styled.DragBar my="md" />}
            <Container flexDirection="column" gap="sm">
              <Container
                justifyContent={isMobile ? 'flex-start' : 'space-between'}
                alignItems="center"
                gap="sm"
              >
                {isMobile && (
                  <Icon
                    variant="h2"
                    icon={faExclamationCircle}
                    color="defaultDark"
                    data-testid={`${baseName}exclamation-icon`}
                  />
                )}
                <Typography
                  variant="h2"
                  color="defaultDark"
                  align="left"
                  testID={`${baseName}title`}
                >
                  {title}
                </Typography>
                {!canCloseOnActionOnly && !isMobile && (
                  <Icon
                    variant="h2"
                    icon={faXmark}
                    color="defaultDark"
                    onClick={onDismiss}
                    data-testid={`${baseName}close-icon`}
                  />
                )}
              </Container>
              {subtitle && (
                <Typography
                  variant="p1"
                  color="defaultDark"
                  testID={`${baseName}subtitle`}
                >
                  {subtitle}
                </Typography>
              )}
            </Container>
          </Header>
          {content && (
            <Content className={`${baseName}content`}>
              <Styled.ContentWapper
                $hasGreyBackground={$hasGreyBackground}
                $hasPadding={$hasPadding}
                flexDirection="column"
                data-testid="content-wrapper"
              >
                {content}
              </Styled.ContentWapper>
            </Content>
          )}
          <Footer className={`${baseName}footer`}>
            {footer && (
              <Container flexDirection="column" data-testid="footer-wrapper">
                {footer}
              </Container>
            )}
          </Footer>
        </Sheet>
      </Styled.SheetWrapper>
    </Portal>
  );
};

export default ActionModal;
