import React from 'react';
import { TextStyle } from 'react-native';
import { IconType } from './Icon.types';
import getIconType from './Icon.utils';

export type IconProps = {
  /** Name of icon. */
  name?: string;

  /** Color of icon. */
  color?: string;

  /** Size of icon. */
  size?: number;

  /** Type of icon */
  type?: IconType;

  /** Apply style to the icon using iconStyle. */
  iconStyle?: TextStyle;

  /** Uses the solid font. */
  solid?: boolean;

  /** Uses the light font. */
  light?: boolean;

  /** Uses the brands font (FontAwesome5 only). */
  brand?: boolean;
};

const Icon = ({
  type = IconType['font-awesome-5-pro'],
  ...rest
}: IconProps) => {
  const IconComponent = getIconType(type);

  return <IconComponent {...rest} />;
};

export default Icon;
