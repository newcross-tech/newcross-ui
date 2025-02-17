import styled from 'styled-components';
import Container from '../Container';
import { getRgba } from '../../utils/getRgba';
import { breakpoint } from '../../utils/css';
import { ActionModalPropsStrict } from './ActionModal.types';

export const DragBar = styled(Container)(({ theme }) => [
  {
    justifySelf: 'center',
    height: theme.BaselineSpacesSpace4,
    width: theme.BaselineSpacesSpace52,
    borderRadius: theme.BorderBaseRadiusRounded,
    backgroundColor: theme.ElementsSurfaceDefaultSecondary,
  },
]);

export const ContentWapper = styled(Container)<Pick<ActionModalPropsStrict, '$hasGreyBackground' | '$hasPadding'>>(
  ({ theme, $hasPadding, $hasGreyBackground }) => [
    breakpoint.sm({
      ...($hasPadding && { paddingTop: theme.BaselineSpacesSpace16 }),
      ...($hasGreyBackground && { backgroundColor: theme.ElementsSurfacePage }),
    }),
  ]
);

export const SheetWrapper = styled(Container)<
  Pick<ActionModalPropsStrict, '$isAlwaysModal' | '$overflowY' | '$zIndex'> & { $hasFooter: boolean }
>(({ theme, $isAlwaysModal, $overflowY, $zIndex, $hasFooter }) => [
  {
    '> div': {
      zIndex: $zIndex,
    },
    '.action-modal-header, .action-modal-content, .action-modal-footer': {
      zIndex: $zIndex,
      backgroundColor: 'transparent',
      position: 'relative',
      border: 'none',
      boxShadow: 'none',
      padding: 0,
      margin: 0,
    },
    '.action-modal-header': {
      cursor: 'auto',
      '> svg': {
        display: 'none',
      },
    },
    '.action-modal-footer': {
      ...(!$hasFooter && {
        display: 'none',
      }),
    },
    'div[role="dialog"], .action-modal-content, .action-modal-content > div': {
      overflow: 'unset',
      ...($overflowY && {
        overflowY: $overflowY,
      }),
    },
    '.action-modal-backdrop': {
      backgroundColor: getRgba(theme.TabsActiveTabShadowColor, theme.OpacityBaseMd),
      padding: 0,
      margin: 0,
      borderRadius: 0,
      clipPath: 'none',
      transform: 'unset',
      opacity: 1,
    },
    'div[role="dialog"]': {
      height: 'auto',
      maxHeight: '90vh',
      backgroundColor: theme.ElementsSurfaceDefault,
      ...($isAlwaysModal
        ? {
            margin: theme.BaselineSpacesSpace24,
          }
        : {
            [`@media (min-width: ${theme.BreakpointsSm + 1}px)`]: {
              margin: theme.BaselineSpacesSpace24,
            },
          }),
      [`@media (min-width: ${theme.BreakpointsSm}px)`]: {
        maxHeight: '70vh',
        minWidth: '500px',
        maxWidth: '800px',
        width: '50%',
      },
    },
  },
]);
