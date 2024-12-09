import { AnchorHTMLAttributes } from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { TypographyProps } from '../Typography';
import Container from '../Container';
import { TestProp } from '../../types';
import * as Styled from './Link.style';
import Icon from '../Icon';

type LinkTypographyVariant = Exclude<
  TypographyProps['variant'],
  'h1' | 'h2' | 'h3' | 'h4' | 'h5'
>;

export type LinkProps = {
  /**
   * Provide icon name for left icon
   */
  leftIcon?: IconDefinition;
  /**
   * Provide icon name for right icon
   */
  rightIcon?: IconDefinition;
  /**
   * Disables the link, preventing any interaction such as clicks.
   */
  disabled?: boolean;
  /**
   * Applies the theme typography styles.
   */
  variant: LinkTypographyVariant;
} & Omit<TypographyProps, 'variant'> &
  TestProp &
  AnchorHTMLAttributes<HTMLAnchorElement>;

const Link = ({
  children,
  variant = 'paragraph1',
  leftIcon,
  rightIcon,
  testID,
  role,
  onClick,
  disabled = false,
  ...restProps
}: LinkProps) => {
  return (
    <Styled.Link
      data-testid={testID}
      role={role}
      onClick={onClick}
      disabled={disabled}
      {...restProps}
    >
      <Container display="inline-flex" alignItems="center" gap="sm">
        {leftIcon && (
          <Icon testID="link-left-icon" variant={variant} icon={leftIcon} />
        )}
        <Styled.Text variant={variant} {...restProps}>
          {children}
        </Styled.Text>
        {rightIcon && (
          <Icon testID="link-right-icon" variant={variant} icon={rightIcon} />
        )}
      </Container>
    </Styled.Link>
  );
};

export default Link;
