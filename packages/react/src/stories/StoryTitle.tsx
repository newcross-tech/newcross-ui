import Container from '../components/Container';
import Typography from '../components/Typography';

type ChildrenProps = {
  children: React.ReactNode;
};

export const Overview = ({ children }: ChildrenProps) => (
  <Container mb="xs">
    <Typography variant="h5">{children}</Typography>
  </Container>
);

export const Regular = ({ children }: ChildrenProps) => (
  <Container mb="sm">
    <Typography variant="p2Strong">{children}</Typography>
  </Container>
);
