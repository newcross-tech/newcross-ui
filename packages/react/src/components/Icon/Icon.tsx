import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { TypographyVariant, TypographyColors } from '../Typography';
import * as Styled from './Icon.style';
import { Mode } from '../../types';
import Container, { ContainerProps } from '../Container';

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
  scheme?: Mode;
  /**
   * The color of the icon.
   */
  color?: TypographyColors;
} & ContainerProps;

const Icon = ({
  icon,
  variant,
  color = 'defaultDark',
  scheme = 'light',
  ...rest
}: IconProps) => {
  return (
    <Container {...rest}>
      <Styled.Icon
        icon={icon}
        variant={variant}
        color={color}
        scheme={scheme}
      />
    </Container>
  );
};

export default Icon;
