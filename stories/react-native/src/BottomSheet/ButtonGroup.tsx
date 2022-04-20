import { StyleSheet, View } from 'react-native';
import { healthforce } from '@newcross-ui/design-tokens';
import { Button, ButtonSizes } from '@newcross-ui/react-native';
import Spacing, { SpacingPositions } from '../Spacing';

const { SpacingBase8, ColorBaseGreen300 } = healthforce;

type ButtonGroupProps = {
  expand: VoidFunction;
  collapse: VoidFunction;
};

const ButtonGroup = ({ collapse, expand }: ButtonGroupProps) => {
  return (
    <View style={styles.container}>
      <Button size={ButtonSizes.small} onPress={expand}>
        Expand
      </Button>
      <Spacing position={SpacingPositions.Horizontal} />
      <Button size={ButtonSizes.small} onPress={collapse}>
        Collapse
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: SpacingBase8,
    justifyContent: 'space-evenly',
    backgroundColor: ColorBaseGreen300,
  },
});

export default ButtonGroup;
