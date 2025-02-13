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
import { OptionalProps } from '../../types';
import { ActionModalPropsStrict } from './ActionModal.types';

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
