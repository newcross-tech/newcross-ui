import { SheetProps } from 'react-sheet-slide';

export const BOTTOM_SHEET_BREAKPOINT = 640;

export type ActionModalPropsStrict = {
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
  $isAlwaysModal: boolean;
  /**
   * Prop that control if the ContentWapper should have grey background for screen smaller than 640px.
   */
  $hasGreyBackground: boolean;
  /**
   * Prop to control if the ContentWapper should have padding for screen smaller than 640px.
   */
  $hasPadding: boolean;
  /**
   * The sheet also supports forwarding a ref that will be added onto the sheet root.
   */
  ref?: React.RefObject<HTMLDivElement>;
  /**
   * Prop to control the overflow-y of the content.
   * When the content includes elements with absolute position, like a dropdown, the overflow-y should be set to 'visible'.
   */
  $overflowY: 'auto' | 'hidden' | 'scroll' | 'visible' | 'initial' | 'inherit';
  /**
   * Set custom z-index for the action modal
   */
  $zIndex: number;
  /**
   * Prop to enforce action in the sheet and not allow user to close it.
   * If true the sheet cannot be closed by click outside and close button is not displayed.
   * Default is false.
   */
  canCloseOnActionOnly?: boolean;
};
