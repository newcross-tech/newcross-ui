import React, { PropsWithChildren, ReactNode } from 'react';
import { View, ViewStyle, ScrollView } from 'react-native';
import Spacing, { SpacingSizes } from '../Spacing';
import { Typography, TypographyVariant } from '@newcross-tech/ui-react-native';
import infoTemplateStyle from './InfoTemplate.style';

type HeaderProps = {
  title?: string;
  description?: string;
};

const Header = ({ title, description }: HeaderProps) => (
  <>
    <Typography variant={TypographyVariant.heading1}>{title}</Typography>
    <Spacing />
    <Typography variant={TypographyVariant.paragraph2}>
      {description}
    </Typography>
  </>
);

type UsagesProps = {
  doInfo?: string[];
  dontInfo?: string[];
};

const Usages = ({ doInfo = [], dontInfo = [] }: UsagesProps) => {
  const styles = infoTemplateStyle();

  return (
    <>
      <Typography variant={TypographyVariant.heading2}>
        Usage guidelines
      </Typography>
      <Spacing hasBorder />
      <Spacing />
      <View>
        {doInfo.map((doText, index) => (
          <Typography
            key={index}
            variant={TypographyVariant.paragraph2}
            style={styles.usagesText}
          >
            <Typography
              variant={TypographyVariant.heading4}
              style={styles.doStyle}
            >
              DO:
            </Typography>
            &nbsp;{doText}
          </Typography>
        ))}
        <Spacing />
        {dontInfo.map((dontText, index) => (
          <Typography
            key={index}
            variant={TypographyVariant.paragraph2}
            style={styles.usagesText}
          >
            <Typography
              variant={TypographyVariant.heading4}
              style={styles.dontStyle}
            >
              DON'T:
            </Typography>
            &nbsp;{dontText}
          </Typography>
        ))}
      </View>
    </>
  );
};

type ExamplesProps = { children?: ReactNode; title?: string };

const Examples = ({ children, title }: ExamplesProps) => {
  const styles = infoTemplateStyle();
  return (
    <>
      <Typography variant={TypographyVariant.heading2}>Examples</Typography>
      <Spacing hasBorder />
      <Spacing />
      {children &&
        React.Children.map(children, (index) => (
          <View>
            <View style={styles.exampleContainer}>
              <View style={styles.childrenExampleContainer}>{index}</View>
            </View>
            <Spacing size={SpacingSizes.Medium} />
          </View>
        ))}

      <Spacing />
      <Typography variant={TypographyVariant.paragraph2}>
        Visit the Variants page to view all possible states and options for
        the&nbsp;
        {title} component.
      </Typography>
    </>
  );
};

type InfoContainerProps = {
  containerStyle?: ViewStyle;
  title: string;
  description: string;
  doInfo: string[];
  dontInfo: string[];
};

const InfoContainer = ({
  containerStyle,
  title,
  description,
  dontInfo,
  doInfo,
  children,
}: PropsWithChildren<InfoContainerProps>) => {
  const styles = infoTemplateStyle();
  return (
    <View style={styles.storybookContainer}>
      <ScrollView style={[styles.container, containerStyle]}>
        <Header title={title} description={description} />
        <Spacing size={SpacingSizes.Medium} />
        <Examples title={title}>{children}</Examples>
        <Spacing size={SpacingSizes.Medium} />
        <Usages doInfo={doInfo} dontInfo={dontInfo} />
        <Spacing />
      </ScrollView>
    </View>
  );
};

export default InfoContainer;
