import React, { ReactNode } from 'react';
import headerStyle from './Header.style';
import { View, ViewStyle } from 'react-native';
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
   * Used to add custom styles
   */
  style?: ViewStyle;
  /**
   * Support any kind of content
   */
  children?: ReactNode;
};

const Header = ({
  color = HeaderColors.primary,
  hasHeaderTail = true,
  headerTailContent,
  style,
  children,
}: HeaderProps) => {
  const styles = headerStyle(color);

  return (
    <View>
      <View style={[styles.headerContainer, style]}>{children}</View>
      {hasHeaderTail && (
        <View testID="header-tail-content">
          {headerTailContent ?? <HeaderTail color={color} />}
        </View>
      )}
    </View>
  );
};

export default Header;
