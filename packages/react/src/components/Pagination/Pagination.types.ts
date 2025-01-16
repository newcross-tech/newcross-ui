export type PaginationItemType = 'previous' | 'page' | 'next';

export type PaginationLength = 'short' | 'long';

export type PaginationItemPropsStrict = {
  /**
   * Type of the current button.
   */
  itemType: PaginationItemType;
  /**
   * Current page number.
   */
  page: number;
  /**
   * Whether the button is selected or not.
   */
  selected: boolean;
  /**
   * Callback fired when the button is clicked.
   */
  onClick: () => void;
  /**
   * Whether the button is disabled or not.
   */
  disabled?: boolean;
  /**
   * Whether the button is hidden or not.
   */
  hidden?: boolean;
};

export type PaginationPropsStrict = {
  /**
   * Whether the component is full width.
   */
  fullWidth: boolean;
  /**
   * Disable the component.
   */
  disabled: boolean;
} & UsePaginationPropsStrict;

export type UsePaginationPropsStrict = {
  /**
   * The total number of pages.
   */
  count: number;
  /**
   * The page selected by default when the component is uncontrolled.
   */
  selectedValue: number;
  /**
   * Callback fired when the state is changed.
   */
  onChange?: (v: number) => void;
  /**
   * The length of the component.
   */
  length: PaginationLength;
};
