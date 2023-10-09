import { HTMLAttributes, ReactNode } from 'react';
import { TestProp } from '../../types/TestProp';
import * as Styled from './Typography.style';
import {
  TypographyVariant,
  TypographyColors,
  TypographyMode,
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
  mode?: TypographyMode;
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
} & TestProp &
  HTMLAttributes<HTMLDivElement>;

const Typography = ({
  children,
  testID,
  mode = 'light',
  ...rest
}: TypographyProps) => {
  return (
    <Styled.Typography data-testid={testID} mode={mode} {...rest}>
      {children}
    </Styled.Typography>
  );
};

export default Typography;
