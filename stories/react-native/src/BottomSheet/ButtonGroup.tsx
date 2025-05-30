import { StyleSheet, View } from 'react-native';
import { native } from '@newcross-tech/ui-design-tokens';
import { Button, ButtonSizes } from '@newcross-tech/ui-react-native';
import Spacing, { SpacingPositions } from '../Spacing';

const { SpacingBase8, BrandColorSecondary300 } = native.healthforce;

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
    backgroundColor: BrandColorSecondary300,
  },
});

export default ButtonGroup;
