import { View } from 'react-native';
import Container from '../../Container';
import {
  Button,
  Typography,
  TypographyVariant,
} from '@newcross-ui/react-native';
import Spacing, { SpacingPositions } from '../../Spacing';
import { native } from '@newcross-ui/design-tokens';
import { Fragment } from 'react';

const { SpacingBase24 } = native.healthforce;

type DemoContentLongTextProps = {
  onClose?: () => void;
  data?: any;
};
export const DemoContentLongText = ({
  onClose,
  data,
}: DemoContentLongTextProps) => {
  const { texts, buttonText } = data;
  return (
    <View>
      <Container
        containerStyle={{
          padding: SpacingBase24,
        }}
      >
        {texts.map((text: string, index: number) => (
          <Fragment key={index}>
            <Typography variant={TypographyVariant.paragraph2}>
              <Typography variant={TypographyVariant.heading4}>
                {`${index}: `}
              </Typography>
              {text}
            </Typography>
            <Spacing position={SpacingPositions.Bottom} />
          </Fragment>
        ))}
      </Container>
      <Spacing position={SpacingPositions.Bottom} />
      <Button fullWidth onPress={onClose}>
        {buttonText}
      </Button>
    </View>
  );
};
