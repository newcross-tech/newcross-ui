import { faChevronRight } from '@fortawesome/pro-light-svg-icons/faChevronRight';
import { faChevronLeft } from '@fortawesome/pro-light-svg-icons/faChevronLeft';
import * as Styled from './Pagination.style';
import { PaginationButtonType } from './Pagination.types';
import Icon from '../Icon';
import Typography from '../Typography';

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
}) => (
  <Styled.PaginationButton {...rest}>
    <Typography variant="p2">{page}</Typography>
  </Styled.PaginationButton>
);

export const PaginationArrowButton: React.FC<PaginationArrowButtonProps> = ({
  variant,
  disabled,
  ...rest
}) => {
  const icon = variant === 'previous' ? faChevronLeft : faChevronRight;

  return (
    <Styled.PaginationButton styleAs="div" {...rest}>
      {!disabled && (
        <Icon
          icon={icon}
          variant="h2"
          color={disabled ? 'disabled' : 'primary'}
        />
      )}
    </Styled.PaginationButton>
  );
};
