import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { TypographyVariant, TypographyColors } from '../Typography';
import * as Styled from './Icon.style';
import Container, { ContainerProps } from '../Container';
import { Scheme } from '../../types';
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
   * The scheme of the component.
   */
  scheme?: Scheme;
  /**
   * The color of the icon.
   */
  color?: TypographyColors;
} & ContainerProps &
  Pick<FontAwesomeIconProps, 'rotation' | 'spin'>;

const Icon = ({
  icon,
  variant,
  color = 'defaultDark',
  scheme = 'light',
  rotation,
  spin,
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
        spin={spin}
      />
    </Container>
  );
};

export default Icon;
