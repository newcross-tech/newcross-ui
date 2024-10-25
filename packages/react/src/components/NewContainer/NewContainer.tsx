import { TestProp } from '../../types';
import * as Styled from './NewContainer.style';
import { CSSProperties } from 'react';
import {
  NewContainerGapSpacing,
  NewContainerSpacing,
} from './NewContainer.types';

export type NewContainerProps = {
  children?: React.ReactNode;
  /**
   * CSS: `margin-left` and `margin-right` and `margin-top` and `margin-bottom`
   */
  m?: NewContainerSpacing;
  /**
   * CSS: `margin-left` and `margin-right`
   */
  mx?: NewContainerSpacing;
  /**
   * CSS: `margin-top` and `margin-bottom`
   */
  my?: NewContainerSpacing;
  /**
   * CSS: `margin-left`
   */
  ml?: NewContainerSpacing;
  /**
   * CSS: `margin-right`
   */
  mr?: NewContainerSpacing;
  /**
   * CSS: `margin-top`
   */
  mt?: NewContainerSpacing;
  /**
   * CSS: `margin-bottom`
   */
  mb?: NewContainerSpacing;
  /**
   * CSS: `padding-left` and `padding-right` and `padding-top` and `padding-bottom`
   */
  p?: NewContainerSpacing;
  /**
   * CSS: `padding-left` and `padding-right`
   */
  px?: NewContainerSpacing;
  /**
   * CSS: `padding-top` and `padding-bottom`
   */
  py?: NewContainerSpacing;
  /**
   * CSS: `padding-left`
   */
  pl?: NewContainerSpacing;
  /**
   * CSS: `padding-right`
   */
  pr?: NewContainerSpacing;
  /**
   * CSS: `padding-top`
   */
  pt?: NewContainerSpacing;
  /**
   * CSS: `padding-bottom`
   */
  pb?: NewContainerSpacing;
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
  gap?: NewContainerGapSpacing;
} & TestProp;

const NewContainer = ({
  children,
  testID,
  display = 'flex',
  ...props
}: NewContainerProps) => {
  return (
    <Styled.NewContainer {...props} display={display} data-testid={testID}>
      {children}
    </Styled.NewContainer>
  );
};

export default NewContainer;
