import { TestProp } from '../../types';
import * as Styled from './Container.style';
import { CSSProperties } from 'react';
import { ContainerGapSpacing, ContainerSpacing } from './Container.types';

export type ContainerProps = {
  children?: React.ReactNode;
  /**
   * CSS: `margin-left` and `margin-right` and `margin-top` and `margin-bottom`
   */
  m?: ContainerSpacing;
  /**
   * CSS: `margin-left` and `margin-right`
   */
  mx?: ContainerSpacing;
  /**
   * CSS: `margin-top` and `margin-bottom`
   */
  my?: ContainerSpacing;
  /**
   * CSS: `margin-left`
   */
  ml?: ContainerSpacing;
  /**
   * CSS: `margin-right`
   */
  mr?: ContainerSpacing;
  /**
   * CSS: `margin-top`
   */
  mt?: ContainerSpacing;
  /**
   * CSS: `margin-bottom`
   */
  mb?: ContainerSpacing;
  /**
   * CSS: `padding-left` and `padding-right` and `padding-top` and `padding-bottom`
   */
  p?: ContainerSpacing;
  /**
   * CSS: `padding-left` and `padding-right`
   */
  px?: ContainerSpacing;
  /**
   * CSS: `padding-top` and `padding-bottom`
   */
  py?: ContainerSpacing;
  /**
   * CSS: `padding-left`
   */
  pl?: ContainerSpacing;
  /**
   * CSS: `padding-right`
   */
  pr?: ContainerSpacing;
  /**
   * CSS: `padding-top`
   */
  pt?: ContainerSpacing;
  /**
   * CSS: `padding-bottom`
   */
  pb?: ContainerSpacing;
  /**
   * CSS: `margin-left` and `margin-right` and `margin-top` and `margin-bottom`
   */
  mTablet?: ContainerSpacing;
  /**
   * CSS: `margin-left` and `margin-right`
   */
  mxTablet?: ContainerSpacing;
  /**
   * CSS: `margin-top` and `margin-bottom`
   */
  myTablet?: ContainerSpacing;
  /**
   * CSS: `margin-left`
   */
  mlTablet?: ContainerSpacing;
  /**
   * CSS: `margin-right`
   */
  mrTablet?: ContainerSpacing;
  /**
   * CSS: `margin-top`
   */
  mtTablet?: ContainerSpacing;
  /**
   * CSS: `margin-bottom`
   */
  mbTablet?: ContainerSpacing;
  /**
   * CSS: `padding-left` and `padding-right` and `padding-top` and `padding-bottom`
   */
  pTablet?: ContainerSpacing;
  /**
   * CSS: `padding-left` and `padding-right`
   */
  pxTablet?: ContainerSpacing;
  /**
   * CSS: `padding-top` and `padding-bottom`
   */
  pyTablet?: ContainerSpacing;
  /**
   * CSS: `padding-left`
   */
  plTablet?: ContainerSpacing;
  /**
   * CSS: `padding-right`
   */
  prTablet?: ContainerSpacing;
  /**
   * CSS: `padding-top`
   */
  ptTablet?: ContainerSpacing;
  /**
   * CSS: `padding-bottom`
   */
  pbTablet?: ContainerSpacing;
  /**
   * CSS: `margin-left` and `margin-right` and `margin-top` and `margin-bottom`
   */
  mMobile?: ContainerSpacing;
  /**
   * CSS: `margin-left` and `margin-right`
   */
  mxMobile?: ContainerSpacing;
  /**
   * CSS: `margin-top` and `margin-bottom`
   */
  myMobile?: ContainerSpacing;
  /**
   * CSS: `margin-left`
   */
  mlMobile?: ContainerSpacing;
  /**
   * CSS: `margin-right`
   */
  mrMobile?: ContainerSpacing;
  /**
   * CSS: `margin-top`
   */
  mtMobile?: ContainerSpacing;
  /**
   * CSS: `margin-bottom`
   */
  mbMobile?: ContainerSpacing;
  /**
   * CSS: `padding-left` and `padding-right` and `padding-top` and `padding-bottom`
   */
  pMobile?: ContainerSpacing;
  /**
   * CSS: `padding-left` and `padding-right`
   */
  pxMobile?: ContainerSpacing;
  /**
   * CSS: `padding-top` and `padding-bottom`
   */
  pyMobile?: ContainerSpacing;
  /**
   * CSS: `padding-left`
   */
  plMobile?: ContainerSpacing;
  /**
   * CSS: `padding-right`
   */
  prMobile?: ContainerSpacing;
  /**
   * CSS: `padding-top`
   */
  ptMobile?: ContainerSpacing;
  /**
   * CSS: `padding-bottom`
   */
  pbMobile?: ContainerSpacing;
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
  gap?: ContainerGapSpacing;
  /**
   * Sets the spacing between each child using margin
   */
  gapTablet?: ContainerGapSpacing;
  /**
   * Sets the spacing between each child using margin
   */
  gapMobile?: ContainerGapSpacing;
} & TestProp;

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
