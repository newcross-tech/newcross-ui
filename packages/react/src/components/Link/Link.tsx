import { AnchorHTMLAttributes } from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import Typography, { TypographyProps } from '../Typography';
import * as Styled from './Link.style';
import { TestProp } from '../../types';

export type LinkProps = {
  /**
   * Provide icon name for left icon
   */
  leftIcon?: IconDefinition;
  /**
   * Provide icon name for right icon
   */
  rightIcon?: IconDefinition;
} & TypographyProps &
  TestProp &
  AnchorHTMLAttributes<HTMLAnchorElement>;

/**
 * @description
 * ### Accessibility
 * #### Pattern: Link
 * #### Notes: -
 */
const Link = ({
  children,
  variant = 'paragraph1',
  leftIcon,
  rightIcon,
  testID,
  role,
  ...restProps
}: LinkProps) => {
  return (
    <Styled.Link testID={testID} role={role} {...restProps}>
      <Typography variant={variant} {...restProps}>
        {leftIcon && (
          <Styled.Icon
            data-testid="link-left-icon"
            icon={leftIcon}
            leftIcon={leftIcon}
            variant={variant}
          />
        )}
        {children}
        {rightIcon && (
          <Styled.Icon
            data-testid="link-right-icon"
            icon={rightIcon}
            rightIcon={rightIcon}
            variant={variant}
          />
        )}
      </Typography>
    </Styled.Link>
  );
};

export default Link;
