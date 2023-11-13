import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/pro-light-svg-icons/faChevronRight';
import { faChevronLeft } from '@fortawesome/pro-light-svg-icons/faChevronLeft';
import * as Styled from './Pagination.style';
import { PaginationButtonType } from './Pagination.types';
import useTheme from '../../hooks/useTheme';

type PaginationButtonProps = {
  /**
   * Type of the current button.
   */
  variant: PaginationButtonType;
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
};

type PaginationArrowButtonProps = Pick<
  PaginationButtonProps,
  'variant' | 'disabled'
>;

export const PaginationButton: React.FC<PaginationButtonProps> = ({
  page,
  variant,
  ...rest
}) =>
  variant === 'ellipsis' ? (
    <Styled.PaginationButton as="div" disabled>
      ...
    </Styled.PaginationButton>
  ) : (
    <Styled.PaginationButton {...rest}>{page}</Styled.PaginationButton>
  );

export const PaginationArrowButton: React.FC<PaginationArrowButtonProps> = ({
  variant,
  disabled,
  ...rest
}) => {
  const theme = useTheme();
  const icon = variant === 'previous' ? faChevronLeft : faChevronRight;

  return (
    <Styled.PaginationButton disabled={disabled} as="div" {...rest}>
      <FontAwesomeIcon
        icon={icon}
        color={
          disabled ? theme.ColorNeutralGrey200 : theme.ColorPrimaryGravitas
        }
      />
    </Styled.PaginationButton>
  );
};
