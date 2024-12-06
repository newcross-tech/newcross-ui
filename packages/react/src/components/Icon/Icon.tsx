import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { TypographyVariant, TypographyColors } from '../Typography';
import * as Styled from './Icon.style';
import { Mode } from '../../types';
import Container, { ContainerProps } from '../Container';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

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
  /**
   * The rotation of the icon.
   */
  rotation?: FontAwesomeIconProps['rotation'];
} & ContainerProps;

const Icon = ({
  icon,
  variant,
  color = 'defaultDark',
  scheme = 'light',
  rotation,
  ...rest
}: IconProps) => {
  return (
    <Container {...rest}>
      <Styled.Icon
        icon={icon}
        variant={variant}
        color={color}
        scheme={scheme}
        rotation={rotation}
      />
    </Container>
  );
};

export default Icon;
