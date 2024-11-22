import { TestProp } from '../../../types';
import { CSSProperties } from 'react';
import {
  LegacyContainerGapSpacing,
  LegacyContainerSpacing,
} from './LegacyContainer.types';
import * as Styled from './LegacyContainer.style';

export type LegacyContainerProps = {
  children?: React.ReactNode;
  /**
   * CSS: `margin-left` and `margin-right` and `margin-top` and `margin-bottom`
   */
  m?: LegacyContainerSpacing;
  /**
   * CSS: `margin-left` and `margin-right`
   */
  mx?: LegacyContainerSpacing;
  /**
   * CSS: `margin-top` and `margin-bottom`
   */
  my?: LegacyContainerSpacing;
  /**
   * CSS: `margin-left`
   */
  ml?: LegacyContainerSpacing;
  /**
   * CSS: `margin-right`
   */
  mr?: LegacyContainerSpacing;
  /**
   * CSS: `margin-top`
   */
  mt?: LegacyContainerSpacing;
  /**
   * CSS: `margin-bottom`
   */
  mb?: LegacyContainerSpacing;
  /**
   * CSS: `padding-left` and `padding-right` and `padding-top` and `padding-bottom`
   */
  p?: LegacyContainerSpacing;
  /**
   * CSS: `padding-left` and `padding-right`
   */
  px?: LegacyContainerSpacing;
  /**
   * CSS: `padding-top` and `padding-bottom`
   */
  py?: LegacyContainerSpacing;
  /**
   * CSS: `padding-left`
   */
  pl?: LegacyContainerSpacing;
  /**
   * CSS: `padding-right`
   */
  pr?: LegacyContainerSpacing;
  /**
   * CSS: `padding-top`
   */
  pt?: LegacyContainerSpacing;
  /**
   * CSS: `padding-bottom`
   */
  pb?: LegacyContainerSpacing;
  /**
   * CSS: `margin-left` and `margin-right` and `margin-top` and `margin-bottom`
   */
  mTablet?: LegacyContainerSpacing;
  /**
   * CSS: `margin-left` and `margin-right`
   */
  mxTablet?: LegacyContainerSpacing;
  /**
   * CSS: `margin-top` and `margin-bottom`
   */
  myTablet?: LegacyContainerSpacing;
  /**
   * CSS: `margin-left`
   */
  mlTablet?: LegacyContainerSpacing;
  /**
   * CSS: `margin-right`
   */
  mrTablet?: LegacyContainerSpacing;
  /**
   * CSS: `margin-top`
   */
  mtTablet?: LegacyContainerSpacing;
  /**
   * CSS: `margin-bottom`
   */
  mbTablet?: LegacyContainerSpacing;
  /**
   * CSS: `padding-left` and `padding-right` and `padding-top` and `padding-bottom`
   */
  pTablet?: LegacyContainerSpacing;
  /**
   * CSS: `padding-left` and `padding-right`
   */
  pxTablet?: LegacyContainerSpacing;
  /**
   * CSS: `padding-top` and `padding-bottom`
   */
  pyTablet?: LegacyContainerSpacing;
  /**
   * CSS: `padding-left`
   */
  plTablet?: LegacyContainerSpacing;
  /**
   * CSS: `padding-right`
   */
  prTablet?: LegacyContainerSpacing;
  /**
   * CSS: `padding-top`
   */
  ptTablet?: LegacyContainerSpacing;
  /**
   * CSS: `padding-bottom`
   */
  pbTablet?: LegacyContainerSpacing;
  /**
   * CSS: `margin-left` and `margin-right` and `margin-top` and `margin-bottom`
   */
  mMobile?: LegacyContainerSpacing;
  /**
   * CSS: `margin-left` and `margin-right`
   */
  mxMobile?: LegacyContainerSpacing;
  /**
   * CSS: `margin-top` and `margin-bottom`
   */
  myMobile?: LegacyContainerSpacing;
  /**
   * CSS: `margin-left`
   */
  mlMobile?: LegacyContainerSpacing;
  /**
   * CSS: `margin-right`
   */
  mrMobile?: LegacyContainerSpacing;
  /**
   * CSS: `margin-top`
   */
  mtMobile?: LegacyContainerSpacing;
  /**
   * CSS: `margin-bottom`
   */
  mbMobile?: LegacyContainerSpacing;
  /**
   * CSS: `padding-left` and `padding-right` and `padding-top` and `padding-bottom`
   */
  pMobile?: LegacyContainerSpacing;
  /**
   * CSS: `padding-left` and `padding-right`
   */
  pxMobile?: LegacyContainerSpacing;
  /**
   * CSS: `padding-top` and `padding-bottom`
   */
  pyMobile?: LegacyContainerSpacing;
  /**
   * CSS: `padding-left`
   */
  plMobile?: LegacyContainerSpacing;
  /**
   * CSS: `padding-right`
   */
  prMobile?: LegacyContainerSpacing;
  /**
   * CSS: `padding-top`
   */
  ptMobile?: LegacyContainerSpacing;
  /**
   * CSS: `padding-bottom`
   */
  pbMobile?: LegacyContainerSpacing;
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
  gap?: LegacyContainerGapSpacing;
  /**
   * Sets the spacing between each child using margin
   */
  gapTablet?: LegacyContainerGapSpacing;
  /**
   * Sets the spacing between each child using margin
   */
  gapMobile?: LegacyContainerGapSpacing;
  semanticTag?: keyof Pick<JSX.IntrinsicElements, 'div' | 'button'>;
} & TestProp;

const LegacyContainer = ({
  children,
  testID,
  display = 'flex',
  semanticTag = 'div',
  ...props
}: LegacyContainerProps) => {
  return (
    <Styled.LegacyContainer
      {...props}
      display={display}
      data-testid={testID}
      as={semanticTag}
    >
      {children}
    </Styled.LegacyContainer>
  );
};

export default LegacyContainer;
