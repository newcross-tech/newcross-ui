import { AnchorHTMLAttributes, ReactNode } from 'react';
import { TestProp } from '../../types';
import { onSpacePressTrigger } from '../../utils/onSpacePressTrigger';
import * as Styled from './Link.style';
import { LinkSizes, LinkVariant } from './Link.types';
import { TypographyAlignment } from '../Typography/Typography.types';

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
   * Used to define the alignment of the Link.
   */
  align?: TypographyAlignment;
  /**
   * Used to add text left or right of the Link.
   */
  textLeft?: string;
  textRight?: string;
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
  textLeft,
  textRight,
  align,
  ...rest
}: LinkProps) => {
  const leftIcon = variant === 'email' || variant === 'phone';

  const rightIcon = variant === 'external' || variant === 'internal';

  const getContent = () => (
    <Styled.LinkContent>
      <Styled.LinkTextTypography variant={Styled.getTypographySizes()[size]}>
        {leftIcon && <Styled.LinkIcon icon={Styled.getIcon()[variant]} />}
        <Styled.LinkText leftIcon={leftIcon} />
        {children}
        <Styled.LinkText rightIcon={rightIcon} />
        {rightIcon && <Styled.LinkIcon icon={Styled.getIcon()[variant]} />}
      </Styled.LinkTextTypography>
    </Styled.LinkContent>
  );

  return (
    <Styled.LinkContainer align={align}>
      {textLeft && (
        <Styled.NonLinkText variant={Styled.getTypographySizes()[size]}>
          {textLeft}
        </Styled.NonLinkText>
      )}
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
      {textRight && (
        <Styled.NonLinkText variant={Styled.getTypographySizes()[size]}>
          {textRight}
        </Styled.NonLinkText>
      )}
    </Styled.LinkContainer>
  );
};

export default Link;
