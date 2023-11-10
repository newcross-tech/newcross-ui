import Container from '../../components/Container';
import * as Styled from './CardContent.styles';

export const CardContent = () => (
  <Styled.Container>
    <Styled.Title variant={'paragraph2'}>Juniper Green Retirem...</Styled.Title>
    <Styled.SubTitle variant={'paragraph3'}>
      60 Ross Green, Southside
    </Styled.SubTitle>
    <Container>
      <Styled.Time variant={'heading5'}>12:00 - 18:00</Styled.Time>
      <Styled.Divider />
      <Styled.Time variant={'heading5'}>HCA</Styled.Time>
    </Container>
    <Styled.InfoContainer>
      <Container>
        <Styled.Info variant={'paragraph3'}>6 hrs</Styled.Info>
        <Styled.Info variant={'paragraph3'}>2.0 mi</Styled.Info>
      </Container>
      <Styled.Price variant={'heading5'}>£72.00</Styled.Price>
    </Styled.InfoContainer>
  </Styled.Container>
);
