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

const Link = ({
  children,
  variant = 'paragraph1',
  leftIcon,
  rightIcon,
  ...restProps
}: LinkProps) => {
  return (
    <Styled.Link {...restProps}>
      <Typography variant={variant} {...restProps}>
        {leftIcon && (
          <Styled.Icon icon={leftIcon} leftIcon={leftIcon} variant={variant} />
        )}
        {children}
        {rightIcon && (
          <Styled.Icon
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
