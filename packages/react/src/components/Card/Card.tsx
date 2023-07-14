import { faChevronRight } from '@fortawesome/pro-light-svg-icons/faChevronRight';
import { ReactNode } from 'react';
import { TestProp } from '../../types/TestProp';
import { onSpacePressTrigger } from '../../utils/onSpacePressTrigger';
import * as Styled from './Card.style';
import { CardVariants } from './Card.types';

export type CardProps = {
  /**
   * Supports any kind of content
   */
  children?: ReactNode;
  /**
   * Called when a single tap gesture is detected.
   */
  onClick?: VoidFunction;
  /**
   * Whether the click behavior is disabled.
   */
  disabled?: boolean;
  /**
   * Whether the card has round border
   */
  hasBorder?: boolean;
  /**
   * Whether the card has round corners
   */
  hasRoundedCorners?: boolean;
  /**
   * Sets the card border color
   */
  variant?: CardVariants;
  /**
   * Whether the card is full width
   */
  fullWidth?: boolean;
  /**
   * Whether the card has padding
   */
  hasPadding?: boolean;
  /**
   * Whether the card has an icon on the right hand side
   */
  hasRightIcon?: boolean;
  /**
   * Whether the cards have a shadow.
   */
  hasShadow?: boolean;
  /**
   * To show custom sectoin on the left side of card
   */
  thumbnailContent?: ReactNode;
} & TestProp;

const Card = ({
  children,
  hasBorder,
  hasRoundedCorners,
  fullWidth,
  disabled,
  hasPadding = true,
  onClick,
  thumbnailContent,
  variant = 'primary',
  hasRightIcon,
  hasShadow = true,
  testID = 'card',
  ...rest
}: CardProps) => {
  const clickHandler = () => {
    if (disabled) return;
    onClick && onClick();
  };

  return (
    <Styled.Card
      disabled={disabled}
      hasShadow={hasShadow}
      fullWidth={fullWidth}
      variant={variant}
      hasBorder={hasBorder}
      isClickable={!!onClick}
      tabIndex={!disabled ? 0 : -1}
      data-testid={`${testID}-component`}
      thumbnailContent={thumbnailContent}
      hasRoundedCorners={hasRoundedCorners}
      onClick={clickHandler}
      onKeyPress={(event) => onSpacePressTrigger(event, clickHandler)}
      {...rest}
    >
      {thumbnailContent && (
        <Styled.LeftContent
          hasRoundedCorners={hasRoundedCorners}
          variant={variant}
          hasBorder={hasBorder}
        >
          {thumbnailContent}
        </Styled.LeftContent>
      )}
      <Styled.MainContent
        variant={variant}
        hasBorder={hasBorder}
        fullWidth={fullWidth}
        hasPadding={hasPadding}
        hasRightIcon={hasRightIcon}
        hasRoundedCorners={hasRoundedCorners}
      >
        {children}
        {hasRightIcon && (
          <Styled.FontIcon
            icon={faChevronRight}
            data-testid={`${testID}-right-icon`}
          />
        )}
      </Styled.MainContent>
    </Styled.Card>
  );
};

export default Card;
