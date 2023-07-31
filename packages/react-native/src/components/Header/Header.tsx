import React, { ReactNode } from 'react';
import headerStyle from './Header.style';
import { View, ViewProps, ViewStyle } from 'react-native';
import { HeaderColors } from './Header.types';
import HeaderTail from './HeaderTail/HeaderTail';

export type HeaderProps = {
  /**
   * Used to change the background color of the header
   */
  color?: HeaderColors;
  /**
   * Used to add a curved header tail
   */
  hasHeaderTail?: boolean;
  /**
   * Used to add content as a header tail when the hasHeaderTail prop is false or undefined
   */
  headerTailContent?: ReactNode;
  /**
   * Used to add custom styles to the header tail container
   */
  headerTailStyle?: ViewStyle;
  /**
   * Used to add custom styles
   */
  style?: ViewStyle;
  /**
   * Support any kind of content
   */
  children?: ReactNode;
  /**
   * testID for end to end testing.
   */
  testID?: string;
} & ViewProps;

const Header = ({
  color = HeaderColors.primary,
  hasHeaderTail = true,
  headerTailContent,
  headerTailStyle,
  style,
  children,
  testID,
  ...rest
}: HeaderProps) => {
  const styles = headerStyle(color);

  return (
    <View {...rest} testID={testID}>
      <View style={[styles.headerContainer, style]}>{children}</View>
      {hasHeaderTail && (
        <View testID="header-tail-content">
          {headerTailContent ?? (
            <HeaderTail headerTailCustomStyle={headerTailStyle} color={color} />
          )}
        </View>
      )}
    </View>
  );
};

export default Header;
