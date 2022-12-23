import { AnchorHTMLAttributes, ReactNode } from 'react';
import { TestProp } from '../../types/TestProp';
import { onSpacePressTrigger } from '../../utils/onSpacePressTrigger';
import Typography from '../Typography';
import * as Styled from './Link.style';
import { LinkSizes, LinkVariant } from './Link.types';

export type LinkProps = {
  /**
   * Used to define size of the Link.
   */
  size?: LinkSizes;
  /**
   * Used to define size of the Link.
   */
  variant?: LinkVariant;
  /**
   * Supports any kind of content.
   */
  children?: ReactNode;
  /**
   * Called when a single click is detected.
   */
  onClick?: (href?: string) => void;
} & TestProp &
  AnchorHTMLAttributes<HTMLAnchorElement>;

const baseTestId = 'link';

const Link = ({
  size = 'small',
  children,
  variant = 'section',
  testID = '',
  href,
  onClick,
  ...rest
}: LinkProps) => {
  const leftIcon = variant === 'email' || variant === 'phone';

  const rightIcon = variant === 'external' || variant === 'internal';

  return (
    <Styled.Link
      data-testid={`${baseTestId}-component${testID}`}
      tabIndex={0}
      variant={variant}
      onKeyPress={(event) => onClick && onSpacePressTrigger(event, onClick)}
      href={href}
      {...rest}
    >
      <Styled.LinkContent>
        {leftIcon && <Styled.LinkIcon icon={Styled.getIcon()[variant]} />}
        <Styled.LinkText leftIcon={leftIcon}>
          <Typography variant={Styled.getTypographySizes()[size]}>
            {children}
          </Typography>
        </Styled.LinkText>
        {rightIcon && <Styled.LinkIcon icon={Styled.getIcon()[variant]} />}
      </Styled.LinkContent>
    </Styled.Link>
  );
};

export default Link;
