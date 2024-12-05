import { TypographyVariant } from '../Typography';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { TypographyColors } from '../Typography/Typography.types';
import * as Styled from './Icon.style';
import Container, { ContainerProps } from '../Container';
import { Mode } from '../../types';

export type IconProps = {
  /**
   * The name of the icon to render.
   */
  icon: IconDefinition;
  /**
   * The variant refers to the size of the icon based on Typography sizing.
   */
  variant: TypographyVariant;
  /**
   * The mode of the component.
   */
  mode?: Mode;
  /**
   * The color of the icon.
   */
  color?: TypographyColors;
} & ContainerProps;

const Icon = ({
  icon,
  variant,
  color = 'defaultDark',
  mode = 'light',
  ...rest
}: IconProps) => {
  return (
    <Container {...rest}>
      <Styled.Icon icon={icon} variant={variant} color={color} mode={mode} />
    </Container>
  );
};

export default Icon;
