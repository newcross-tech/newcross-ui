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
  AnchorHTMLAttributes<HTMLAnchorElement | HTMLDivElement>;

const baseTestId = 'link';

const Link = ({
  size = 'small',
  children,
  variant = 'section',
  testID = '',
  onClick,
  href,
  ...rest
}: LinkProps) => {
  const leftIcon = variant === 'email' || variant === 'phone';

  const rightIcon = variant === 'external' || variant === 'internal';

  const getContent = () => (
    <Styled.LinkContent>
      {leftIcon && <Styled.LinkIcon icon={Styled.getIcon()[variant]} />}
      <Styled.LinkText leftIcon={leftIcon}>
        <Typography variant={Styled.getTypographySizes()[size]}>
          {children}
        </Typography>
      </Styled.LinkText>
      {rightIcon && <Styled.LinkIcon icon={Styled.getIcon()[variant]} />}
    </Styled.LinkContent>
  );

  return (
    <>
      {href ? (
        <Styled.LinkAnchor
          data-testid={`${baseTestId}-anchor-component${testID}`}
          href={href}
          onClick={onClick}
          {...rest}
        >
          {getContent()}
        </Styled.LinkAnchor>
      ) : (
        <Styled.LinkDiv
          data-testid={`${baseTestId}-div-component${testID}`}
          onKeyPress={(event) => onClick && onSpacePressTrigger(event, onClick)}
          tabIndex={0}
          onClick={onClick}
          {...rest}
        >
          {getContent()}
        </Styled.LinkDiv>
      )}
    </>
  );
};

export default Link;
