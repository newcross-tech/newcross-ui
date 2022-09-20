import { StyleSheet } from 'react-native';
import useTheme from '../../hooks/useTheme';
import { AvatarProps } from './Avatar';
import {
  getActiveEllipseSize,
  getActiveEllipseBorderWidth,
  getInnerEllipseSize,
  AvatarSizes,
} from './Avatar.types';

const avatarStyles = ({ inactive, source, size }: AvatarProps) => {
  const theme = useTheme();
  const activeEllipseSize = getActiveEllipseSize(theme)[size as AvatarSizes];
  const activeEllipseBorderWidth =
    getActiveEllipseBorderWidth(theme)[size as AvatarSizes];
  const innerEllipseSize = getInnerEllipseSize(theme)[size as AvatarSizes];

  const {
    AvatarInactiveBackgroundColor,
    AvatarInactiveColor,
    AvatarActiveEllipseBorderColor,
    AvatarBorderRadius,
    AvatarInnerEllipseColor,
    AvatarInnerEllipseBackgroundColor,
    AvatarInnerEllipseOpacity,
  } = theme;

  const textColor = inactive ? AvatarInactiveColor : AvatarInnerEllipseColor;
  const borderColor = inactive
    ? AvatarInactiveBackgroundColor
    : AvatarActiveEllipseBorderColor;
  const backgroundColor =
    !source && inactive
      ? AvatarInactiveBackgroundColor
      : AvatarInnerEllipseBackgroundColor;

  const opacity = source && inactive ? AvatarInnerEllipseOpacity : undefined;

  return StyleSheet.create({
    avatarContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: AvatarBorderRadius,
      borderColor: borderColor,
      ...activeEllipseSize,
      ...activeEllipseBorderWidth,
    },
    innerContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      alignContent: 'center',
      borderRadius: AvatarBorderRadius,
      overflow: 'hidden',
      backgroundColor: backgroundColor,
      opacity: opacity,
      ...innerEllipseSize,
    },
    avatarImage: {
      height: '100%',
      width: '100%',
    },
    text: {
      textAlign: 'center',
      textAlignVertical: 'center',
      color: textColor,
    },
    iconContainer: {
      alignItems: 'center',
    },
    icon: {
      color: textColor,
    },
  });
};
export default avatarStyles;
