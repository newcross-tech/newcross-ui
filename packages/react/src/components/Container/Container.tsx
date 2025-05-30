import * as Styled from './Container.style';
import { CSSProperties, HTMLAttributes, Ref, ReactNode } from 'react';
import {
  NewContainerGapSpacing,
  NewContainerSpacing,
  SemanticContainerTags,
} from './Container.types';
import { TestProp } from '../../types';
import { isLegacyProps } from './utils';
import LegacyContainer, { LegacyContainerProps } from './LegacyContainer';

export type NewContainerProps = {
  children?: ReactNode;
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
   * CSS: `flex`
   */
  flex?: CSSProperties['flex'];
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
  /**
   * Used to define the semantic tag of the container
   * @default 'div'
   */
  semanticTag?: SemanticContainerTags;
} & Pick<HTMLAttributes<HTMLElement>, 'onClick' | 'onMouseDown' | 'onKeyDown'> &
  TestProp;

export type ContainerProps =
  | (NewContainerProps | LegacyContainerProps) &
      Pick<HTMLAttributes<HTMLElement>, 'id' | 'role'> & {
        ref?: Ref<HTMLElement>;
      };

export const Container = (props: ContainerProps) => {
  if (isLegacyProps(props)) {
    return <LegacyContainer {...props} />;
  }

  const {
    children,
    testID: legacyTestId,
    'data-testid': testId,
    display = 'flex',
    semanticTag = 'div',
    onClick,
    ...restProps
  } = props;
  return (
    <Styled.Container
      {...restProps}
      onClick={onClick}
      display={display}
      data-testid={testId ?? legacyTestId}
      as={semanticTag}
      semanticTag={semanticTag}
    >
      {children}
    </Styled.Container>
  );
};

export default Container;
