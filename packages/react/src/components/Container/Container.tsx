import { TestProp, ThemeSpacing } from '../../types';
import * as Styled from './Container.style';
import { CSSProperties } from 'react';

export type ContainerProps = {
  children?: React.ReactNode;
  /**
   * CSS: `margin-left` and `margin-right` and `margin-top` and `margin-bottom`
   */
  m?: ThemeSpacing;
  /**
   * CSS: `margin-left` and `margin-right`
   */
  mx?: ThemeSpacing;
  /**
   * CSS: `margin-top` and `margin-bottom`
   */
  my?: ThemeSpacing;
  /**
   * CSS: `margin-left`
   */
  ml?: ThemeSpacing;
  /**
   * CSS: `margin-right`
   */
  mr?: ThemeSpacing;
  /**
   * CSS: `margin-top`
   */
  mt?: ThemeSpacing;
  /**
   * CSS: `margin-bottom`
   */
  mb?: ThemeSpacing;
  /**
   * CSS: `padding-left` and `padding-right` and `padding-top` and `padding-bottom`
   */
  p?: ThemeSpacing;
  /**
   * CSS: `padding-left` and `padding-right`
   */
  px?: ThemeSpacing;
  /**
   * CSS: `padding-top` and `padding-bottom`
   */
  py?: ThemeSpacing;
  /**
   * CSS: `padding-left`
   */
  pl?: ThemeSpacing;
  /**
   * CSS: `padding-right`
   */
  pr?: ThemeSpacing;
  /**
   * CSS: `padding-top`
   */
  pt?: ThemeSpacing;
  /**
   * CSS: `padding-bottom`
   */
  pb?: ThemeSpacing;
  /**
   * CSS: `display`
   */
  display?: CSSProperties['display'];
  /**
   * Used to make the container take the full width of its parent
   * `width: 100%`
   */
  fullWidth?: boolean;
  /**
   * CSS: `flex-direction`
   */
  flexDirection?: CSSProperties['flexDirection'];
  /**
   * CSS: `flex-wrap`
   */
  flexWrap?: CSSProperties['flexWrap'];
  /**
   * CSS: `justify-content`
   */
  justifyContent?: CSSProperties['justifyContent'];
  /**
   * CSS: `align-items`
   */
  alignItems?: CSSProperties['alignItems'];
  /**
   * Sets the spacing between each child using margin
   */
  gap?: ThemeSpacing;

  /**
   * Landmark role of the container.
   */
  role?: 'main' | 'navigation' | 'banner' | 'contentinfo' | 'form' | 'region';
} & TestProp;

/**
 * @description
 * ### Accessibility
 * #### Pattern: Landmark
 * #### Notes:
 * Use `role` prop to define the landmark role of the container.
 */
const Container = ({
  children,
  testID,
  display = 'flex',
  ...props
}: ContainerProps) => {
  return (
    <Styled.Container {...props} display={display} data-testid={testID}>
      {children}
    </Styled.Container>
  );
};

export default Container;
