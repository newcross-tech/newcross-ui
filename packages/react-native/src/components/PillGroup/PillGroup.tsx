import React, { ReactElement } from 'react';
import { View, ViewStyle } from 'react-native';
import pillGroupStyle from './PillGroup.style';
import { PillProps } from '../Pill';
import { PillGroupOrientation } from './PillGroup.types';

export type PillGroupProps = {
  /**
   * Used to display the group in either a row or a column.
   */
  orientation?: PillGroupOrientation;
  /**
   * The content of the component,
   */
  children?: Array<ReactElement<PillProps>>;
  /**
   * Used to add custom style to the pill group container.
   */
  style?: ViewStyle;
  /**
   * Used to control wrapping pills inside pill group.
   */
  wrapPills?: boolean;
};

const PillGroup = ({
  orientation = PillGroupOrientation.horizontal,
  children,
  wrapPills = true,
  style,
}: PillGroupProps) => {
  const styles = pillGroupStyle(orientation as PillGroupOrientation, wrapPills);

  return (
    <View
      style={[styles.pillGroupContainer, style]}
      testID="pill-group-container"
    >
      {children}
    </View>
  );
};

export default PillGroup;
