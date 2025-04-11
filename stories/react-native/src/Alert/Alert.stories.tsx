import { Meta, Story } from '@storybook/react';
import {
  Alert,
  AlertProps,
  Badge,
  BadgeSizes,
  Link,
  Typography,
  TypographyVariant,
} from '@newcross-tech/ui-react-native';
import { ScrollView, View } from 'react-native';
import Container from '../Container';
import Spacing from '../Spacing';
import InfoTemplate from '../InfoTemplate/InfoTemplate';
import { TITLE, DESCRIPTION, DO, DONT } from './AlertInfo';
import { native } from '@newcross-tech/ui-design-tokens';

const { SpacingBase8 } = native.healthforce;

export default {
  title: 'ReactNative/Components/Alert',
  component: Alert,
} as Meta;

export const Overview = () => {
  return (
    <InfoTemplate
      title={TITLE}
      description={DESCRIPTION}
      doInfo={DO}
      dontInfo={DONT}
    >
      <Alert variant="success" action={<Link>Click Here</Link>}>
        This is success. This is success. This is success.
      </Alert>
    </InfoTemplate>
  );
};

export const Variants = () => {
  return (
    <ScrollView>
      <Container containerStyle={{ marginTop: 15 }}>
        <Typography variant={TypographyVariant.heading4}>
          Success Variant
        </Typography>
        <Alert variant="success" action={<Link>Click Here</Link>}>
          This is success. This is success. This is success.
        </Alert>
        <Spacing />
        <Typography variant={TypographyVariant.heading4}>
          Warning Variant
        </Typography>
        <Alert variant="warning" action={<Link>Click Here</Link>}>
          This is warning. This is warning. This is warning.
        </Alert>
        <Spacing />
        <Typography variant={TypographyVariant.heading4}>
          Error Variant
        </Typography>
        <Alert variant="error" action={<Link>Click Here</Link>}>
          This is error. This is error. This is error.
        </Alert>
        <Spacing />
        <Typography variant={TypographyVariant.heading4}>
          Info Variant
        </Typography>
        <Alert variant="info" action={<Link>Click Here</Link>}>
          This is info. This is info. This is info.
        </Alert>
        <Spacing />
        <Typography variant={TypographyVariant.heading4}>
          Variant without link
        </Typography>
        <Alert variant="info">
          This is success. This is success. This is success.
        </Alert>
        <Spacing />
        <Typography variant={TypographyVariant.heading4}>
          Variant without children and link
        </Typography>
        <Alert variant="info" />
        <Spacing />
        <Typography variant={TypographyVariant.heading4}>
          Variant with complex content
        </Typography>
        <Alert variant="info">
          <Typography variant={TypographyVariant.paragraph3}>
            This is info. This is info. This is info.
          </Typography>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Typography variant={TypographyVariant.paragraph3}>
              This is info. This is info. This is info.
            </Typography>
            <Badge
              badgeContent="1"
              size={BadgeSizes.medium}
              style={{ marginLeft: SpacingBase8 }}
            />
          </View>
        </Alert>
      </Container>
    </ScrollView>
  );
};

const Template: Story<AlertProps> = (props) => (
  <Container>
    <Alert {...props} />
  </Container>
);

export const Interactive = Template.bind({});
Interactive.args = {
  variant: 'info',
};
