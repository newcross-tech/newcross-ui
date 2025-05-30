import { Meta, Story } from '@storybook/react';
import {
  Accordion,
  AccordionProps,
  AccordionGroup,
  Typography,
  TypographyVariant,
} from '@newcross-tech/ui-react-native';
import { View } from 'react-native';
import Container from '../Container';
import Spacing, { SpacingSizes } from '../Spacing';
import { getParameters, isWebPlatform } from '../utils';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircleInfo } from '@fortawesome/pro-solid-svg-icons/faCircleInfo';
import InfoTemplate from '../InfoTemplate/InfoTemplate';
import { TITLE, DESCRIPTION, DO, DONT } from './AccordionInfo';
import { ScrollView } from 'react-native-gesture-handler';
import { native } from '@newcross-tech/ui-design-tokens';

const { BrandColorPrimary, SpacingBase12 } = native.healthforce;

export default {
  title: 'ReactNative/Components/Accordion',
  component: Accordion,
  parameters: getParameters(),
} as Meta;

export const Overview = () => {
  return (
    <InfoTemplate
      title={TITLE}
      description={DESCRIPTION}
      doInfo={DO}
      dontInfo={DONT}
    >
      <Container
        containerStyle={{
          height: '50%',
          justifyContent: 'flex-start',
        }}
      >
        <Typography variant={TypographyVariant.heading4}>
          Default Accordion
        </Typography>
        <Spacing size={SpacingSizes.Large} />
        <Accordion label={'Label'}>
          <Typography variant={TypographyVariant.paragraph2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            consequat.
          </Typography>
        </Accordion>
        <Spacing size={SpacingSizes.Large} />
        <Typography variant={TypographyVariant.heading4}>
          Default Accordion Group (Exclusive Selection)
        </Typography>
        <Spacing size={SpacingSizes.Large} />
        <AccordionGroup>
          <Accordion label={'Section 1'}>
            <Typography variant={TypographyVariant.paragraph2}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              consequat.
            </Typography>
          </Accordion>
          <Accordion label={'Section 2'}>
            <Typography variant={TypographyVariant.paragraph2}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              consequat.
            </Typography>
          </Accordion>
        </AccordionGroup>
        <Spacing size={SpacingSizes.Large} />
        <Typography variant={TypographyVariant.heading4}>
          Default Accordion Group (Multiple Selection)
        </Typography>
        <Spacing size={SpacingSizes.Large} />
        <AccordionGroup exclusiveSelection={false}>
          <Accordion label={'Section 1'}>
            <Typography variant={TypographyVariant.paragraph2}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              consequat.
            </Typography>
          </Accordion>
          <Accordion label={'Section 2'}>
            <Typography variant={TypographyVariant.paragraph2}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              consequat.
            </Typography>
          </Accordion>
        </AccordionGroup>
      </Container>
    </InfoTemplate>
  );
};

export const Variants = () => {
  return (
    <ScrollView>
      <Container
        containerStyle={{
          width: isWebPlatform ? '35%' : '100%',
          height: '50%',
          marginTop: isWebPlatform ? 0 : 20,
          justifyContent: 'flex-start',
        }}
      >
        <Typography variant={TypographyVariant.heading4}>
          Default Accordion
        </Typography>
        <Spacing size={SpacingSizes.Large} />
        <Accordion label={'Label'}>
          <Typography variant={TypographyVariant.paragraph2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            consequat.
          </Typography>
        </Accordion>
        <Spacing size={SpacingSizes.Large} />
        <Typography variant={TypographyVariant.heading4}>
          Two Line Label Accordion
        </Typography>
        <Spacing size={SpacingSizes.Large} />
        <Accordion
          label={
            'This label flows onto 2 lines This label flows onto 2 lines This label flows onto 2 lines This label flows onto 2 lines'
          }
        >
          <Typography variant={TypographyVariant.paragraph2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            consequat.
          </Typography>
        </Accordion>
        <Spacing size={SpacingSizes.Large} />
        <Typography variant={TypographyVariant.heading4}>
          Expanded Accordion with Icon
        </Typography>
        <Spacing size={SpacingSizes.Large} />
        <Accordion
          label={'Information'}
          icon={
            <FontAwesomeIcon icon={faCircleInfo} color={BrandColorPrimary} />
          }
          expanded={true}
        >
          <Typography variant={TypographyVariant.paragraph2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            consequat.
          </Typography>
        </Accordion>
        <Spacing size={SpacingSizes.Large} />
        <Typography variant={TypographyVariant.heading4}>
          Accordion with custom header content
        </Typography>
        <Spacing size={SpacingSizes.Large} />
        <Accordion
          label={
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Typography
                style={{
                  paddingRight: SpacingBase12,
                  color: BrandColorPrimary,
                }}
                variant={TypographyVariant.paragraph1}
              >
                Custom{' '}
                <Typography variant={TypographyVariant.heading3}>
                  label
                </Typography>{' '}
                text
              </Typography>
            </View>
          }
        >
          <Typography variant={TypographyVariant.paragraph2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            consequat.
          </Typography>
        </Accordion>
      </Container>
    </ScrollView>
  );
};

const Template: Story<AccordionProps> = ({ ...rest }) => {
  return (
    <Container
      containerStyle={{
        width: isWebPlatform ? '35%' : '100%',
        height: '50%',
        marginTop: isWebPlatform ? 0 : 20,
        justifyContent: 'flex-start',
      }}
    >
      <Accordion {...rest}>
        <Typography variant={TypographyVariant.paragraph2}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. consequat.
        </Typography>
      </Accordion>
    </Container>
  );
};

export const Interactive = Template.bind({});
Interactive.args = {
  label: 'This is a label',
  onPress: undefined,
};
