import React, { FC, ReactNode } from 'react';
import Spacing, { SpacingSizes } from '../Spacing';
import Typography, { TypographyVariant } from '../../components/Typography';
import {
  StyledChildrenContainer,
  StyledContainer,
  StyledDo,
  StyledDont,
  StyledExampleContainer,
  StyledStorybookContainer,
  StyledUsagesText,
} from './InfoTemplate.style';

type HeaderProps = {
  title?: string;
  description?: string;
};

type TextRendererProps = {
  data?: string;
};

const TextRenderer = ({ data }: TextRendererProps) => {
  if (!data) return null;

  return <div dangerouslySetInnerHTML={{ __html: data }} />;
};

const Header = ({ title, description }: HeaderProps) => (
  <>
    <Typography variant={TypographyVariant.heading1}>{title}</Typography>
    <Spacing />
    <Typography variant={TypographyVariant.paragraph2}>
      <TextRenderer data={description} />
    </Typography>
  </>
);

type UsagesProps = {
  doInfo?: string[];
  dontInfo?: string[];
};

const Usages = ({ doInfo = [], dontInfo = [] }: UsagesProps) => {
  return (
    <>
      <Typography variant={TypographyVariant.heading2}>
        Usage guidelines
      </Typography>
      <Spacing hasBorder />
      <Spacing />
      <>
        {doInfo.map((doText, index) => (
          <StyledUsagesText key={index} variant={TypographyVariant.paragraph2}>
            <StyledDo variant={TypographyVariant.heading4}>DO:</StyledDo>
            &nbsp;{doText}
          </StyledUsagesText>
        ))}
        <Spacing />
        {dontInfo.map((dontText, index) => (
          <StyledUsagesText key={index} variant={TypographyVariant.paragraph2}>
            <StyledDont variant={TypographyVariant.heading4}>DON'T:</StyledDont>
            &nbsp;{dontText}
          </StyledUsagesText>
        ))}
      </>
    </>
  );
};

type ExamplesProps = { children?: ReactNode; title?: string };

const Examples = ({ children, title }: ExamplesProps) => {
  return (
    <>
      <Typography variant={TypographyVariant.heading2}>Examples</Typography>
      <Spacing hasBorder />
      <Spacing />
      {children &&
        React.Children.map(children, (index) => (
          <>
            <StyledExampleContainer>
              <StyledChildrenContainer>{index}</StyledChildrenContainer>
            </StyledExampleContainer>
            <Spacing size={SpacingSizes.Medium} />
          </>
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
  title: string;
  description: string;
  doInfo: string[];
  dontInfo: string[];
};

const InfoContainer: FC<InfoContainerProps> = ({
  title,
  description,
  dontInfo,
  doInfo,
  children,
}) => {
  return (
    <StyledStorybookContainer>
      <StyledContainer>
        <Header title={title} description={description} />
        <Spacing size={SpacingSizes.Medium} />
        <Examples title={title}>{children}</Examples>
        <Spacing size={SpacingSizes.Medium} />
        <Usages doInfo={doInfo} dontInfo={dontInfo} />
        <Spacing />
      </StyledContainer>
    </StyledStorybookContainer>
  );
};

export default InfoContainer;
