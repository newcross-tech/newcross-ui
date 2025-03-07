import { faChevronRight } from '@fortawesome/pro-light-svg-icons/faChevronRight';
import * as Styled from './Card.style';
import { CardPropsStrict } from './Card.types';
import { OptionalProps } from '../../types';

export type CardProps = OptionalProps<
  CardPropsStrict,
  | 'hasPadding'
  | 'variant'
  | 'hasShadow'
  | 'testID'
  | 'hasBorder'
  | 'hasRoundedCorners'
  | 'fullWidth'
  | 'hasRightIcon'
  | 'onClick'
  | 'backgroundColor'
  | 'disabled'
>;

const normalizeCardProps = (_props: CardProps): CardPropsStrict => ({
  ..._props,
  disabled: _props.disabled ?? false,
  hasPadding: _props.hasPadding ?? true,
  hasBorder: _props.hasBorder ?? false,
  hasRoundedCorners: _props.hasRoundedCorners ?? false,
  fullWidth: _props.fullWidth ?? false,
  hasRightIcon: _props.hasRightIcon ?? false,
  variant: _props.variant ?? 'primary',
  hasShadow: _props.hasShadow ?? true,
  testID: _props.testID ?? 'card',
  backgroundColor: _props.backgroundColor ?? 'default',
});

const Card = (_props: CardProps) => {
  const {
    children,
    onClick,
    disabled,
    hasBorder,
    hasRoundedCorners,
    fullWidth,
    hasPadding,
    hasRightIcon,
    hasShadow,
    thumbnailContent,
    variant,
    testID,
    backgroundColor,
    ...rest
  } = normalizeCardProps(_props);

  const handleOnClick = () => {
    if (disabled) return undefined;
    if (onClick) {
      onClick();
    }
  };

  return (
    <Styled.Card
      disabled={disabled}
      hasShadow={hasShadow}
      fullWidth={fullWidth}
      variant={variant}
      testID={`${testID}-component`}
      hasRoundedCorners={hasRoundedCorners}
      onClick={handleOnClick}
      {...rest}
    >
      {thumbnailContent && (
        <Styled.LeftContent
          variant={variant}
          hasBorder={hasBorder}
          hasRoundedCorners={hasRoundedCorners}
        >
          {thumbnailContent}
        </Styled.LeftContent>
      )}
      <Styled.MainContent
        p={hasPadding ? 'md' : undefined}
        alignItems="center"
        justifyContent={hasRightIcon ? 'space-between' : 'flex-start'}
        variant={variant}
        hasBorder={hasBorder}
        hasRoundedCorners={hasRoundedCorners}
        thumbnailContent={thumbnailContent}
        backgroundColor={backgroundColor}
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
