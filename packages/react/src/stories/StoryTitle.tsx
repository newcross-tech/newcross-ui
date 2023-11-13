import Container from '../components/Container';
import Typography from '../components/Typography';

type ChildrenProps = {
  children: React.ReactNode;
};

export const Overview = ({ children }: ChildrenProps) => (
  <Container mb="SpacingBase4">
    <Typography variant="heading6">{children}</Typography>
  </Container>
);

export const Regular = ({ children }: ChildrenProps) => (
  <Container mb="SpacingBase8">
    <Typography variant="subtitle1">{children}</Typography>
  </Container>
);
