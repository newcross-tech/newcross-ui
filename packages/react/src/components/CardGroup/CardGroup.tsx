import React, { Children, cloneElement, ReactElement } from 'react';
import { CardProps } from '../Card/Card';
import * as Styled from './CardGroup.style';

export type CardGroupProps = {
  /**
   * Whether the CardGroup is full width
   */
  fullWidth?: boolean;
  /**
   * Whether the cards have a shadow.
   */
  hasShadow?: boolean;
  /**
   * Whether the click behavior is disabled.
   */
  disabled?: boolean;
  /**
   * The content of the component
   */
  children: Array<ReactElement<CardProps>>;
};

const CardGroup = ({
  children,
  fullWidth,
  disabled,
  hasShadow = true,
}: CardGroupProps) => {
  return (
    <Styled.Container
      fullWidth={fullWidth}
      hasShadow={hasShadow}
      disabled={disabled}
      data-testid={'card-group-component'}
    >
      {Children.map(children, (child) => {
        return cloneElement(child, {
          fullWidth,
          disabled,
          hasShadow: false,
        });
      })}
    </Styled.Container>
  );
};

export default CardGroup;
