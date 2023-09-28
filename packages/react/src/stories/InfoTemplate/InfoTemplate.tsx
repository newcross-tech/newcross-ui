import { Children, FC, ReactNode } from 'react';
import Typography from '../../components/Typography';
import Spacing from '../Spacing';
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
    <Typography variant={'heading2'}>{title}</Typography>
    <Spacing />
    <Typography variant={'paragraph2'}>
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
      <Typography variant={'heading4'}>Usage guidelines</Typography>
      <Spacing hasBorder />
      <Spacing />
      <>
        {doInfo.map((doText, index) => (
          <StyledUsagesText key={index} variant={'paragraph2'}>
            <StyledDo variant={'subtitle1'}>DO:</StyledDo>
            &nbsp;{doText}
          </StyledUsagesText>
        ))}
        <Spacing />
        {dontInfo.map((dontText, index) => (
          <StyledUsagesText key={index} variant={'paragraph2'}>
            <StyledDont variant={'subtitle1'}>DON'T:</StyledDont>
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
      <Typography variant={'heading4'}>Examples</Typography>
      <Spacing hasBorder />
      <Spacing />
      {children &&
        Children.map(children, (index) => (
          <>
            <StyledExampleContainer>
              <StyledChildrenContainer>{index}</StyledChildrenContainer>
            </StyledExampleContainer>
            <Spacing size={'Medium'} />
          </>
        ))}

      <Spacing />
      <Typography variant={'paragraph2'}>
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
        <Spacing size={'Medium'} />
        <Examples title={title}>{children}</Examples>
        <Spacing size={'Medium'} />
        <Usages doInfo={doInfo} dontInfo={dontInfo} />
        <Spacing />
      </StyledContainer>
    </StyledStorybookContainer>
  );
};

export default InfoContainer;
