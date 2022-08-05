import React, { ReactElement } from 'react';
import { View } from 'react-native';
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
};

const PillGroup = ({
  orientation = PillGroupOrientation.horizontal,
  children,
}: PillGroupProps) => {
  const styles = pillGroupStyle(orientation as PillGroupOrientation);

  return (
    <View style={styles.pillGroupContainer} testID="pill-group-container">
      {children}
    </View>
  );
};

export default PillGroup;
