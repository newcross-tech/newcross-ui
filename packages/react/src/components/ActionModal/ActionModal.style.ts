import styled from 'styled-components';
import Container from '../Container';
import { ActionModalPropsStrict, BOTTOM_SHEET_BREAKPOINT } from './ActionModal.types';

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
    {
      [`@media (max-width: ${BOTTOM_SHEET_BREAKPOINT}px)`]: {
        ...($hasPadding && { paddingTop: theme.BaselineSpacesSpace16 }),
        ...($hasGreyBackground && { backgroundColor: theme.ElementsSurfacePage }),
      },
    },
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
    '> div > div[role="dialog"], .action-modal-content, .action-modal-content > div': {
      overflow: 'unset',
      ...($overflowY && {
        overflowY: $overflowY,
      }),
    },
    '.action-modal-backdrop': {
      backgroundColor: theme.ThemesNeutral950,
      opacity: theme.OpacityBaseMd,
      padding: 0,
      margin: 0,
      borderRadius: 0,
      clipPath: 'none',
      transform: 'unset',
    },
    '> div > div[role="dialog"]': {
      height: 'auto',
      backgroundColor: theme.ElementsSurfaceDefault,
      maxHeight: '70vh',
      minWidth: '500px',
      maxWidth: '800px',
      width: '50%',
      [`@media (min-width: ${BOTTOM_SHEET_BREAKPOINT + 1}px) and (max-width: ${theme.BreakpointsMd}px)`]: {
        minWidth: '90%',
      },
      [`@media (max-width: ${BOTTOM_SHEET_BREAKPOINT}px)`]: {
        maxHeight: '90vh',
        minWidth: $isAlwaysModal ? '90%' : '100%',
      },
    },
  },
]);
