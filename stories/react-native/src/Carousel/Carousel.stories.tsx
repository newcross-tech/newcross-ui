import { Meta } from '@storybook/react';
import {
  Carousel,
  Header,
  Typography,
  TypographyVariant,
  Link,
  LinkSizes,
} from '@newcross-ui/react-native';
import { native } from '@newcross-ui/design-tokens';
import { View, Image, ScrollView } from 'react-native';
import useState from 'storybook-addon-state';
import InfoTemplate from '../InfoTemplate/InfoTemplate';
import { TITLE, DESCRIPTION, DO, DONT } from './CarouselInfo';
import { getParameters, isWebPlatform } from '../utils';
import IMAGES from './images';
import Spacing from '../Spacing';

export default {
  title: 'ReactNative/Components/Carousel',
  component: Carousel,
  parameters: {
    backgrounds: {
      default: 'white',
    },
  },
} as Meta;

const {
  BrandColorPrimary,
  ColorNeutralWhite,
  ColorBaseGrey300,
  SpacingBase24,
  SpacingBase32,
  SpacingBase16,
  SpacingBase8,
  SpacingBase12,
} = native.healthforce;

const data = [
  {
    image: IMAGES.Group,
    text: 'Matching qualified and experienced healthcare worked to clients',
  },
  {
    image: IMAGES.Calendar,
    text: 'Choose when and where you work; know shift details upfront',
  },
  {
    image: IMAGES.Transfer,
    text: 'Get paid when it suits you, with FlexiPay!',
  },
  {
    image: IMAGES.Doctors,
    text: 'Helping Britain get the care service it deserves',
  },
];
const carouselItems = data.map((slide, index) => {
  return {
    id: `carousel-${index}`,
    content: (
      <>
        <Header>
          <View style={{ alignItems: 'center' }}>
            <Typography
              style={{ color: ColorNeutralWhite, marginBottom: SpacingBase16 }}
              variant={TypographyVariant.heading2}
            >
              Newcross Healthcare
            </Typography>
            <Image source={slide.image} resizeMode="cover" />
          </View>
        </Header>
        <Typography
          style={{
            textAlign: 'center',
            marginTop: SpacingBase32,
            marginHorizontal: SpacingBase24,
            color: BrandColorPrimary,
          }}
          variant={TypographyVariant.heading3}
        >
          {slide.text}
        </Typography>
      </>
    ),
  };
});

export const Overview = () => {
  const data = Array.from({ length: 5 }).map((_, index) => {
    return {
      image: `https://picsum.photos/1440/2842?random=${index}`,
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    };
  });
  const carouselItems = data.map((slide, index) => {
    return {
      id: `carousel-${index}`,
      content: (
        <Image
          source={{ uri: slide.image }}
          resizeMode="cover"
          style={{ height: isWebPlatform ? '50vh' : SpacingBase32 * 5 }}
        />
      ),
    };
  });
  return (
    <InfoTemplate
      title={TITLE}
      description={DESCRIPTION}
      doInfo={DO}
      dontInfo={DONT}
    >
      <Carousel items={carouselItems} />
    </InfoTemplate>
  );
};

export const VariantWithFullScreen = () => {
  const [linkText, setLinkText] = useState('linkText', 'Skip');

  const handleSwipe = (index: number) => {
    if (index === carouselItems.length - 1) {
      setLinkText('Continue');
    } else {
      setLinkText('Skip');
    }
  };

  return (
    <>
      <Carousel
        items={carouselItems}
        onSwipe={(index: number) => handleSwipe(index)}
      />
      <View
        style={{
          justifyContent: 'center',
          flexDirection: 'row',
          marginVertical: SpacingBase24,
        }}
      >
        <Link size={LinkSizes.small}>{linkText}</Link>
      </View>
    </>
  );
};

export const Variants = () => {
  const carouselItems = Array.from({ length: 5 }).map((_, index) => ({
    image: `https://picsum.photos/1440/2842?random=${index}`,
    text: 'Lorem Ipsum is simply dummy text industry',
  }));

  const columnCarouselItems = carouselItems.map((slide, index) => {
    return {
      id: `carousel-${index}`,
      content: (
        <View
          style={{ backgroundColor: ColorBaseGrey300, padding: SpacingBase12 }}
        >
          <Image
            source={{ uri: slide.image }}
            resizeMode="cover"
            style={{
              width: '100%',
              height: isWebPlatform ? '60vh' : SpacingBase32 * 4,
            }}
          />
          <View
            style={{
              marginVertical: SpacingBase24,
              marginHorizontal: SpacingBase12,
            }}
          >
            <Typography
              style={{ textAlign: 'center' }}
              variant={TypographyVariant.heading3}
            >
              {slide.text}
            </Typography>
          </View>
        </View>
      ),
    };
  });

  const rowCarouselItems = carouselItems.map((slide, index) => {
    return {
      id: `carousel-${index}`,
      content: (
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: ColorBaseGrey300,
            padding: SpacingBase12,
          }}
        >
          <Image
            source={{ uri: slide.image }}
            resizeMode="cover"
            style={{ width: '50%', height: isWebPlatform ? '50vh' : '100%' }}
          />
          <Typography
            style={{
              textAlign: 'center',
              padding: SpacingBase16,
              flexShrink: 1,
            }}
            variant={TypographyVariant.heading3}
          >
            Lorem Ipsum is simply dummy text industry
          </Typography>
        </View>
      ),
    };
  });

  return (
    <ScrollView>
      <Typography
        style={{ textAlign: 'center' }}
        variant={TypographyVariant.heading3}
      >
        Carousel as a column
      </Typography>
      <Spacing />
      <View
        style={{
          padding: SpacingBase8,
          alignSelf: isWebPlatform ? 'center' : undefined,
          width: isWebPlatform ? '50%' : undefined,
        }}
      >
        <Carousel items={columnCarouselItems} />
      </View>
      <Spacing />

      <Typography
        style={{ textAlign: 'center' }}
        variant={TypographyVariant.heading3}
      >
        Carousel as a row
      </Typography>
      <Spacing />
      <View
        style={{
          padding: SpacingBase8,
          alignSelf: isWebPlatform ? 'center' : undefined,
          width: isWebPlatform ? '50%' : undefined,
        }}
      >
        <Carousel items={rowCarouselItems} />
      </View>
    </ScrollView>
  );
};

VariantWithFullScreen.parameters = { ...getParameters(true, false) };

Variants.parameters = {};
