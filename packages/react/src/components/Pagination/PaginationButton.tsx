import { faChevronRight } from '@fortawesome/pro-light-svg-icons/faChevronRight';
import { faChevronLeft } from '@fortawesome/pro-light-svg-icons/faChevronLeft';
import * as Styled from './Pagination.style';
import { PaginationItemPropsStrict } from './Pagination.types';
import Icon from '../Icon';
import Typography from '../Typography';

export const PaginationArrowButton = ({
  itemType,
  disabled,
  hidden,
  ...rest
}: Omit<PaginationItemPropsStrict, 'page'>) => {
  const icon = itemType === 'previous' ? faChevronLeft : faChevronRight;
  const color = disabled ? 'disabled' : 'primary';
  const ariaLabel =
    itemType === 'previous' ? 'Go to previous page' : 'Go to next page';

  return (
    <Styled.PaginationButton
      styleAs="div"
      aria-label={ariaLabel}
      disabled={disabled}
      {...rest}
    >
      {!hidden && <Icon icon={icon} variant="h2" color={color} />}
    </Styled.PaginationButton>
  );
};

export const PaginationButton = ({
  page,
  disabled,
  ...rest
}: Omit<PaginationItemPropsStrict, 'itemType'>) => {
  const color = disabled ? 'disabled' : 'primary';
  const ariaLabel = page;

  return (
    <Styled.PaginationButton
      aria-label={ariaLabel}
      disabled={disabled}
      {...rest}
    >
      <Typography variant="p2" color={color}>
        {page}
      </Typography>
    </Styled.PaginationButton>
  );
};
