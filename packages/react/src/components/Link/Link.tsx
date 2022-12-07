import { faCircleChevronRight } from '@fortawesome/pro-solid-svg-icons/faCircleChevronRight';
import { AnchorHTMLAttributes, ReactNode } from 'react';
import { TestProp } from '../../types/TestProp';
import { onSpacePressTrigger } from '../../utils/onSpacePressTrigger';
import Typography from '../Typography';
import * as Styled from './Link.style';
import { getTypographySizes, LinkSizes } from './Link.types';

export type LinkProps = {
  /**
   * Used to define size of the Link.
   */
  size?: LinkSizes;
  /**
   * Supports any kind of content.
   */
  children?: ReactNode;
  /**
   * Called when a single click is detected.
   */
  onClick?: VoidFunction;
  /**
   * Show or hide icon
   */
  hasIcon?: boolean;
} & TestProp &
  AnchorHTMLAttributes<HTMLAnchorElement>;

const baseTestId = 'link';

const Link = ({
  size = LinkSizes.small,
  children,
  onClick,
  hasIcon = true,
  testID = '',
  ...rest
}: LinkProps) => (
  <Styled.Link
    data-testid={`${baseTestId}-component${testID}`}
    onClick={onClick}
    tabIndex={0}
    onKeyPress={(event) => onClick && onSpacePressTrigger(event, onClick)}
    {...rest}
  >
    <Styled.LinkContent>
      <Styled.LinkText>
        <Typography variant={getTypographySizes()[size]}>{children}</Typography>
      </Styled.LinkText>
      {hasIcon && (
        <Styled.LinkIcon
          data-testid={`${baseTestId}-icon${testID}`}
          icon={faCircleChevronRight}
        />
      )}
    </Styled.LinkContent>
  </Styled.Link>
);

export default Link;
