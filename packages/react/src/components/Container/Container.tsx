import * as Styled from './Container.style';
import { CSSProperties } from 'react';
import { ContainerGapSpacing, ContainerSpacing } from './Container.types';
import { TestProp } from '../../types';
import { isLegacyProps } from './utils';
import LegacyContainer, { LegacyContainerProps } from './LegacyContainer';

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
} & TestProp;

export type CombinedContainerProps = ContainerProps | LegacyContainerProps;

const Container = (props: CombinedContainerProps) => {
  if (isLegacyProps(props)) {
    return <LegacyContainer {...props} />;
  }

  const { children, testID, display = 'flex', ...restProps } = props;
  return (
    <Styled.Container {...restProps} display={display} data-testid={testID}>
      {children}
    </Styled.Container>
  );
};

export default Container;
