import { AnchorHTMLAttributes } from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import Typography, { TypographyProps } from '../Typography';
import Container from '../Container';
import { TestProp } from '../../types';
import * as Styled from './Link.style';

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
      <Typography variant={variant} {...restProps}>
        {leftIcon && (
          <Container display="inline" mr="sm">
            <Styled.Icon
              data-testid="link-left-icon"
              icon={leftIcon}
              leftIcon={leftIcon}
              variant={variant}
            />
          </Container>
        )}
        {children}
        {rightIcon && (
          <Container display="inline" ml="sm">
            <Styled.Icon
              data-testid="link-right-icon"
              icon={rightIcon}
              rightIcon={rightIcon}
              variant={variant}
            />
          </Container>
        )}
      </Typography>
    </Styled.Link>
  );
};

export default Link;
