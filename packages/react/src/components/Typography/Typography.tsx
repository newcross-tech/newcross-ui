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
} & TestProp &
  HTMLAttributes<HTMLDivElement>;

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
