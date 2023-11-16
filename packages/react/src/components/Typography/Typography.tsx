import { HTMLAttributes, ReactNode, CSSProperties } from 'react';
import { TestProp, Mode } from '../../types';
import * as Styled from './Typography.style';
import {
  TypographyVariant,
  TypographyColors,
  TypographyAlignment,
} from './Typography.types';

export type TypographyProps = {
  /**
   * Applies the theme typography styles.
   */
  variant: TypographyVariant;
  /**
   * The color of the component.
   */
  color?: TypographyColors;
  /**
   * The mode of the component.
   */
  mode?: Mode;
  /**
   * The text alignment of the component text.
   */
  align?: TypographyAlignment;
  /**
   * The content of the component.
   */
  children: ReactNode;
  /**
   * If true, the text will have a bottom margin.
   */
  gutterBottom?: boolean;
  /**
   * Used to set maximum number of lines
   */
  numberOfLines?: number;
  /**
   * Used to define type of display
   */
  display?: CSSProperties['display'];

  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
} & TestProp &
  HTMLAttributes<HTMLDivElement>;

/**
 * @description
 * ### Accessibility
 * #### Pattern: -
 * #### Notes:
 * Polymorphic component that renders as a different role based on the `variant` prop if not overridden by `as` prop
 * e.g.:
 *  - `<Typography variant="heading2">Actual heading</Typography>` =outputs=> `<h2 class="heading2">Actual heading</h2>`
 *  - `<Typography variant="heading2" as="p">Some big content mid-screen</Typography>` =outputs=> `<p class="heading2">Some big content mid-screen</p>`
 */
const Typography = ({
  children,
  testID,
  mode = 'light',
  display = 'block',
  ...rest
}: TypographyProps) => {
  return (
    <Styled.Typography
      data-testid={testID}
      mode={mode}
      display={display}
      {...rest}
    >
      {children}
    </Styled.Typography>
  );
};

export default Typography;
