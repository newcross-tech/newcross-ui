import { Svg, Path } from 'react-native-svg';
import headerTailStyle from './HeaderTail.style';
import React from 'react';
import { HeaderColors } from '../Header.types';
import { View, ViewStyle } from 'react-native';

export type HeaderTailProps = {
  /**
   * Used to change the background color of the header tail
   */
  color: HeaderColors;
  /**
   * Used to add custom styles to the header tail container
   */
  headerTailCustomStyle?: ViewStyle;
};

const HeaderTail = ({ color, headerTailCustomStyle }: HeaderTailProps) => {
  const styles = headerTailStyle(color);

  return (
    <View style={[styles.headerTailContainer, headerTailCustomStyle]}>
      <Svg
        style={{ position: 'absolute' }}
        viewBox="18 4 300 24"
        fill="none"
        testID="header-tail"
      >
        <Path
          d="M320.541 0.958984H0.540527V6.34164C123.541 32.5974 237.041 28.596 320.541 20.312V0.958984Z"
          fill={styles.headerTailBottomPath}
        />
        <Path
          d="M320.541 0.948975H0.540527C123.541 25.1868 237.041 23.1868 320.541 14.909V0.948975Z"
          fill={styles.headerTailTopPath}
        />
      </Svg>
    </View>
  );
};

export default HeaderTail;
