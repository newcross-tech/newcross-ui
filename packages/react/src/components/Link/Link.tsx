import { AnchorHTMLAttributes, MouseEventHandler, ReactNode } from 'react';
import * as Styled from './Link.style';
import { faCircleChevronRight } from '@fortawesome/pro-solid-svg-icons/faCircleChevronRight';
import { getTypographySizes, LinkSizes } from './Link.types';
import Typography from '../Typography';

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
  onClick?: (event: MouseEventHandler) => void;
  /**
   * Show or hide icon
   */
  hasIcon?: boolean;
  /**
   * Used to locate this view in end-to-end tests.
   */
  testId?: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

const Link = ({
  size = LinkSizes.small,
  children,
  onClick,
  hasIcon = true,
  testId,
  ...rest
}: LinkProps) => {
  return (
    <Styled.Link
      data-testid={testId || 'link-component'}
      onClick={onClick}
      size={size}
      {...rest}
    >
      <Styled.LinkContent>
        <Styled.LinkText>
          <Typography variant={getTypographySizes()[size]}>
            {children}
          </Typography>
        </Styled.LinkText>
        {hasIcon && (
          <Styled.Font
            data-testid={'link-icon'}
            $size={size}
            icon={faCircleChevronRight}
          />
        )}
      </Styled.LinkContent>
    </Styled.Link>
  );
};

export default Link;
